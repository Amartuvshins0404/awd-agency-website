# AWD Agency — Deployment Guide

## GitHub Repository Secrets

Configure these in **GitHub → Repository → Settings → Secrets and variables → Actions**:

| Secret Name     | Description                                          | Example Value              |
|-----------------|------------------------------------------------------|----------------------------|
| `VPS_HOST`      | Public IP address of the Hostinger VPS               | `185.x.x.x`               |
| `VPS_USER`      | SSH user on the VPS                                  | `root` or `deploy`        |
| `VPS_SSH_KEY`   | Private SSH key (ed25519 or RSA) — full PEM content  | `-----BEGIN OPENSSH...`   |
| `VPS_APP_PATH`  | Absolute path to the app directory on the VPS        | `/var/www/awd-starter`    |

### Generating a Deploy SSH Key Pair

Run locally (do **not** use a passphrase so CI can use it unattended):

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/awd_deploy_key -N ""
```

- Add the **public key** (`~/.ssh/awd_deploy_key.pub`) to `~/.ssh/authorized_keys` on the VPS
- Add the **private key** (`~/.ssh/awd_deploy_key`) as the `VPS_SSH_KEY` GitHub secret

---

## Initial VPS App Setup (one-time)

SSH into the VPS and run:

```bash
# Create app directory
sudo mkdir -p /var/www/awd-starter
sudo chown $USER:$USER /var/www/awd-starter

# Clone the repository (use HTTPS or deploy key)
cd /var/www
git clone https://github.com/<ORG>/awd-starter.git

cd awd-starter
npm ci
npm run build

# Copy PM2 ecosystem config (already in repo)
# Start with PM2
pm2 start ecosystem.config.js --env production
pm2 save

# Generate PM2 startup command and run it as root
pm2 startup
# → Copy/paste the printed command and run it
```

---

## PM2 Startup (survive reboots)

After running `pm2 startup`, you should see:

```
[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/root/.nvm/versions/node/v20.x.x/bin /root/.nvm/versions/node/v20.x.x/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /root
```

Run that command as root. Then:

```bash
pm2 save   # saves current process list to restore on reboot
```

Verify PM2 restarts after reboot:
```bash
sudo reboot
# after reconnect:
pm2 list   # should show awd-starter as 'online'
```

---

## Adding a New Client App (Nginx)

1. Copy the Nginx template:
   ```bash
   sudo cp /path/to/infra/nginx/client-app.conf.template \
       /etc/nginx/sites-available/<CLIENT_DOMAIN>
   ```

2. Edit the file — replace these placeholders:

   | Placeholder      | Replace with                                    |
   |------------------|-------------------------------------------------|
   | `CLIENT_DOMAIN`  | Client's domain, e.g. `clientname.com`          |
   | `APP_PORT`       | PM2 process port for that app, e.g. `3001`      |
   | `APP_NAME`       | Short name for log files, e.g. `clientname`     |

3. Enable the site and reload Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/<CLIENT_DOMAIN> /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. Issue SSL certificate via Certbot:
   ```bash
   sudo certbot --nginx -d <CLIENT_DOMAIN> -d www.<CLIENT_DOMAIN>
   ```

5. Add a PM2 entry for the new app in `ecosystem.config.js` with a unique `PORT`.

---

## DNS Configuration Template

Point the client domain to the VPS by creating these DNS records in their registrar / DNS provider:

| Type  | Name               | Value (Target)        | TTL  |
|-------|--------------------|-----------------------|------|
| A     | `@`                | `<VPS_IP>`            | 300  |
| A     | `www`              | `<VPS_IP>`            | 300  |
| CNAME | `mail` (optional)  | existing mail server  | 3600 |

Replace `<VPS_IP>` with the Hostinger VPS public IP (from [AMA-49](/AMA/issues/AMA-49)).

**TTL note:** Use 300 (5 min) during initial setup to allow fast changes. Increase to 3600 after stable.

**Propagation check:**
```bash
dig +short A <CLIENT_DOMAIN>          # should return VPS IP
curl -I http://<CLIENT_DOMAIN>        # should return 301 redirect to HTTPS
curl -I https://<CLIENT_DOMAIN>       # should return 200
```

---

## Deployment Flow (after setup)

1. Developer pushes to `main` branch on GitHub
2. GitHub Actions builds the app (`npm ci && npm run build`)
3. If build passes, SSH deploys to VPS:
   - `git pull` → `npm ci` → `npm run build` → `pm2 reload`
4. Total pipeline time: under 3 minutes

## Port Allocation

| App           | Port |
|---------------|------|
| awd-starter   | 3000 |
| client-app-1  | 3001 |
| client-app-2  | 3002 |
| *(next app)*  | 3003 |
