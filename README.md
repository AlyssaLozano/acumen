# Acumen Career Academy — Website

The public website for **Acumen Career Academy**, a GNPEC-licensed cybersecurity
training institution in Augusta, Georgia. Built with React + Vite + Tailwind CSS
and deployed to GitHub Pages.

Live domain: **https://acumencareeracademy.com**

---

## 1. Before it goes live: connect the forms (2 minutes)

The **Apply / Admissions** and **Employer Partnership** forms send submissions
through [Formspree](https://formspree.io). You already have a Formspree account —
you just need to paste in one form ID:

1. Sign in at <https://formspree.io> and create a new form (name it e.g. `Acumen Website`).
2. Formspree shows you an endpoint like `https://formspree.io/f/abcdwxyz`.
   The part after `/f/` (here `abcdwxyz`) is your **form ID**.
3. Open [`src/config/formspree.ts`](src/config/formspree.ts) and paste it in:

   ```ts
   export const FORMSPREE_FORM_ID = 'abcdwxyz';   // <-- your ID here
   ```

4. Save. Every form on the site now delivers to your Formspree inbox. Each
   submission includes a hidden `form_name` field (`admissions` or `employers`)
   so you can tell which page it came from.

> The **Contact** page uses a direct `mailto:enroll@acumencareeracademy.com`
> link, so it needs no setup.

---

## 2. Run it on your computer (optional)

You need [Node.js](https://nodejs.org) 20 or newer installed.

```bash
npm install      # first time only — downloads dependencies
npm run dev      # starts a local preview at http://localhost:3000
```

To build the production version locally: `npm run build` (output goes to `out/`).

---

## 3. Publish to GitHub Pages

This project deploys itself automatically. Every time you push to the `main`
branch, GitHub builds the site and publishes it.

**First-time setup:**

1. Create a **new** repository on GitHub (e.g. `acumen-career-academy`).
2. Upload / push these project files to it (the `main` branch).
3. In the repo, go to **Settings → Pages**, and under **Build and deployment →
   Source**, choose **GitHub Actions**.
4. That's it. The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
   builds and deploys on every push. Watch progress under the repo's **Actions** tab.

---

## 4. Custom domain (acumencareeracademy.com)

The repo already contains a [`public/CNAME`](public/CNAME) file with
`acumencareeracademy.com`, so GitHub will serve the site on that domain once DNS
points to it.

At your domain registrar, add these DNS records:

| Type  | Name / Host | Value |
|-------|-------------|-------|
| A     | `@`         | `185.199.108.153` |
| A     | `@`         | `185.199.109.153` |
| A     | `@`         | `185.199.110.153` |
| A     | `@`         | `185.199.111.153` |
| CNAME | `www`       | `alyssalozano.github.io.` |

Then in **Settings → Pages → Custom domain**, confirm `acumencareeracademy.com`
is listed and tick **Enforce HTTPS** once it becomes available (can take up to an hour).

> **Not using the custom domain yet?** Delete `public/CNAME`, and the site will
> be served at `https://<your-username>.github.io/<repo-name>/` instead. If you do
> that, set the base path when building by editing `.github/workflows/deploy.yml`
> so the Build step reads `run: BASE_PATH=/<repo-name>/ npm run build`.

---

## Project structure

```
public/            Static files copied as-is (logo, CNAME, robots, sitemap, 404 fallback)
src/
  components/      Shared Navbar / Footer / SchemaOrg
  config/          Formspree configuration (edit the form ID here)
  pages/           One folder per page (home, about, programs, admissions, employers, contact…)
  router/          Route table
index.html         Page shell, SEO meta tags, favicon
.github/workflows/ Automatic GitHub Pages deploy
```

## Notes

- Static, single-page React app — no server or database required.
- The Contact form is a `mailto:` link; Admissions and Employer forms use Formspree.
- `node_modules/` and `out/` are generated and are not committed (see `.gitignore`).
