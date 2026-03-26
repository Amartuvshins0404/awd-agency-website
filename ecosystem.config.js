// PM2 Ecosystem Config for awd-starter (Next.js)
// Place this file at the root of the app directory on the VPS
// Usage:
//   pm2 start ecosystem.config.js --env production
//   pm2 reload ecosystem.config.js --env production
//   pm2 save   (persist across reboots)
//   pm2 startup (generate systemd startup command — run output as root)

module.exports = {
  apps: [
    {
      name: 'awd-starter',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/awd-starter',   // Update to actual VPS_APP_PATH
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/awd-starter-error.log',
      out_file: '/var/log/pm2/awd-starter-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
