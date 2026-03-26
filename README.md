# awd-starter

AWD Agency's Next.js boilerplate template for client web app projects.

## Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS v3** — utility-first styling
- **shadcn/ui** — accessible component library (Button, Card, Input, Label, Textarea)
- **Resend** — transactional email via server actions
- **Google Analytics 4** — env-var controlled, off by default
- **PM2** — production process management
- **GitHub Actions** — CI/CD deploy to Hostinger VPS

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/awd-agency/awd-starter.git my-project
cd my-project
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local` with your values (see [Environment Variables](#environment-variables) below).

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Public URL of the site (e.g. `https://yourdomain.com`) |
| `NEXT_PUBLIC_SITE_NAME` | Yes | Site name shown in metadata / browser tab |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | Yes | Default meta description |
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com) |
| `CONTACT_EMAIL` | Yes | Inbox that receives contact form submissions |
| `RESEND_FROM_EMAIL` | Yes | Verified sender email in Resend |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | GA4 Measurement ID (`G-XXXXXXXXXX`). Leave empty to disable. |

---

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format all files with Prettier
npm run format:check # Check formatting (CI)
```

---

## Project Structure

```
src/
├── app/
│   ├── contact/
│   │   ├── actions.ts       # Server action — sends email via Resend
│   │   ├── contact-form.tsx # Client form component
│   │   └── page.tsx         # /contact route
│   ├── globals.css          # Tailwind base + shadcn/ui CSS variables
│   ├── layout.tsx           # Root layout — metadata, header, footer, GA4
│   └── page.tsx             # Homepage
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Sticky responsive header
│   │   └── footer.tsx       # Site footer
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   └── google-analytics.tsx # GA4 Script component
└── lib/
    └── utils.ts             # cn() helper
```

---

## Deployment

### Prerequisites on VPS

1. Node.js 20+, npm, PM2 installed globally
2. App cloned to `VPS_APP_PATH` (e.g. `/var/www/my-project`)
3. Environment variables set in a `.env.local` file on the VPS

### First deploy (manual)

```bash
# On VPS
cd /var/www/my-project
npm ci --omit=dev
npm run build
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup   # run the outputted command as root to persist across reboots
```

### Automated deploys via GitHub Actions

Set the following **Repository Secrets** in GitHub:

| Secret | Description |
|---|---|
| `VPS_HOST` | VPS IP address or hostname |
| `VPS_USER` | SSH username |
| `VPS_SSH_KEY` | Private SSH key (contents of `~/.ssh/id_rsa`) |
| `VPS_APP_PATH` | Absolute path to the app on VPS (e.g. `/var/www/my-project`) |
| `NEXT_PUBLIC_SITE_URL` | Site URL for the build |
| `NEXT_PUBLIC_SITE_NAME` | Site name for the build |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | Site description for the build |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 ID (optional) |

Every push to `main` will trigger a build and zero-downtime `pm2 reload`.

---

## Customization Checklist

When starting a new client project from this template:

- [ ] Update `NEXT_PUBLIC_SITE_NAME` and branding
- [ ] Replace `/public/og-image.png` (1200×630) with client's OG image
- [ ] Update nav links in `src/components/layout/header.tsx`
- [ ] Update footer links and contact email in `src/components/layout/footer.tsx`
- [ ] Configure Resend sender domain and update `RESEND_FROM_EMAIL`
- [ ] Set GA4 Measurement ID if analytics required
- [ ] Update `ecosystem.config.js` app `name` and `cwd`

---

## License

MIT
