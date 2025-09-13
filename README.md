<div align="center">
  <img src="public/logo.png" width="80" alt="Yash Goswami Logo" />
  
  <h1>Yash Goswami's Portfolio</h1>
  <b>Unified Space Portfolio & Developer Hub</b><br>
  Multi‑section showcase, animated UI, modern stack, and rapid iteration.
  <br><br>
  <a href="#getting-started">Getting Started</a> · <a href="#features">Features</a> · <a href="#roadmap">Roadmap</a> · <a href="#contributing">Contributing</a>
  <br><br>
  <img src="https://img.shields.io/badge/Next.js-14-000?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-18-61dafb?logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript" />
  <img src="https://img.shields.io/badge/Framer%20Motion-10-0055ff?logo=framer" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
</div>

---

## Features

- 🚀 Animated hero section with space background
- 📱 Responsive design (Tailwind CSS)
- 🧩 Modular sections: About, Skills, Projects, Experience, Contact
- 🎬 Framer Motion for smooth transitions
- ⚙️ Centralized config and constants for easy updates
- ♿ Accessibility: semantic HTML, aria labels
- 🎨 Modern UI: gradients, glassmorphism, iconography

---

## Project Structure

```text
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
components/
  main/
    contact.tsx
    encryption.tsx
    experience.tsx
    footer.tsx
    hero.tsx
    navbar.tsx
    projects.tsx
    skills.tsx
    star-background.tsx
  sub/
    hero-content.tsx
    project-card.tsx
    skill-data-provider.tsx
    skill-text.tsx
config/
  index.ts
constants/
  index.ts
lib/
  motion.ts
  utils.ts
public/
  hero-bg.svg
  logo.png
  lock-main.png
  lock-top.png
  projects/
  skills/
  videos/
```

---

## Getting Started

### 1. Clone & Install

```powershell
git clone https://github.com/yashhhgoswami/YashNewPortfolio.git
cd YashNewPortfolio
npm install
```

### 2. Run Dev Server

```powershell
npm run dev
```
Visit the printed local URL (default `http://localhost:3000`).

### 3. Lint

```powershell
npm run lint
```

### 4. Production Build

```powershell
npm run build
npm start
```

---

## Key Components

| Component         | Description                                 |
|-------------------|---------------------------------------------|
| Navbar            | Global navigation, social links             |
| Hero              | Animated intro, space theme                 |
| Projects          | Portfolio projects showcase                 |
| Skills            | Tech stack, skills grid                     |
| Experience        | Work & internship timeline                  |
| Contact           | Email/contact form, socials                 |
| Footer            | Copyright, quick links                      |

---

## Security & Data

- No sensitive keys or secrets in repo
- Use environment variables for future API integrations
- Prefer HTTPS for all external links

---

## Roadmap

- Add blog section
- Integrate contact form backend
- Add dark mode toggle
- Expand project details with case studies
- Add unit/integration tests
- Internationalization (i18n)

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/awesome`
3. Commit changes: `git commit -m "feat: add awesome"`
4. Push: `git push origin feat/awesome`
5. Open a Pull Request

Coding style: follow existing component patterns, keep components focused, and prefer semantic HTML + accessible aria attributes.

---

## Testing (Planned)

Unit tests & integration UI snapshots will be introduced. Suggestions welcome.

---

## License

Licensed under the MIT License.

---

## Acknowledgements

- Next.js, React, Tailwind CSS, Framer Motion
- Community iconography via `react-icons`

---

## Contact

- Email: yashhhgoswami@gmail.com
- GitHub: https://github.com/yashhhgoswami
- LinkedIn: https://www.linkedin.com/in/yashhhgoswami/
- X (Twitter): https://x.com/yashhhgoswami
- Instagram: https://www.instagram.com/yashhhgoswami/

---

Enjoy building with YashNewPortfolio! 🚀
