# Jeff Mbita — Portfolio

Personal portfolio for Jeff Mbita, Cloud Solutions Architect and Data Analyst. Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Styled after the [Folio Tailwind](https://themewagon.github.io/folio-tailwind/) template.

## Prerequisites

- Node.js 18+
- npm 9+

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Produces a fully static export in `out/`. No server required at runtime.

## Preview the static export locally

```bash
npx serve out
```

## Content

All site content lives in `src/data/`. Edit these files without touching any component:

| File | What it controls |
|---|---|
| `src/data/projects.ts` | All projects and their detail page content |
| `src/data/experience.ts` | Work history and skill tags |
| `src/data/certifications.ts` | Certifications and education |
| `src/data/writing.ts` | Medium articles |
| `src/data/contact.ts` | Contact links |

## Adding a photo

Replace the placeholder in the Hero and About sections:

1. Add your photo to `public/jeff-mbita.jpg`
2. In `src/components/sections/Hero.tsx`, replace the placeholder `<div>` with:
   ```tsx
   <img src="/jeff-mbita.jpg" alt="Jeff Mbita" className="w-full h-full object-cover" />
   ```
3. Do the same in `src/components/sections/About.tsx`.

## Adding architecture diagrams

Place PNG files in `public/diagrams/` named `[project-slug].png`, e.g. `securing-agentic-ai-aws.png`. Then set `hasDiagram: true` for that project in `src/data/projects.ts`.

## Deploy to AWS Amplify Hosting

1. Push this repo to GitHub.
2. Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/) and connect the repo.
3. Use these build settings (or the included `amplify.yml`):
   - **Build command:** `npm run build`
   - **Output directory:** `out`
4. Add environment variables in the Amplify console:
   - `NEXT_PUBLIC_CONTACT_API_URL` — your Lambda Function URL for the contact form (optional; form degrades gracefully without it)
5. Configure a custom domain in Amplify and TLS is provisioned automatically.

## Contact form Lambda (optional)

If you want the contact form to actually send email:

1. Deploy `lambda/contact/index.mjs` as an AWS Lambda function (Node.js 20).
2. Add a Function URL with auth type `NONE` and CORS allowed for your domain.
3. Set these Lambda environment variables:
   - `SES_FROM_EMAIL` — a verified SES sender address
   - `SES_TO_EMAIL` — jeffmbita69@gmail.com
   - `ALLOWED_ORIGIN` — your portfolio domain
4. Paste the Function URL into Amplify as `NEXT_PUBLIC_CONTACT_API_URL`.
