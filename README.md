# Neeraj Kumar Yadav | Professional Portfolio

**Free static portfolio — responsive, light/dark mode, real project summaries, downloadable resume.**

## Ready to use

- Light theme by default, dark theme toggle with saved preference.
- Mobile-friendly layout and expandable mobile navigation.
- Employer: HELM360 Analytics Pvt Ltd.
- Roles: Software Engineer (2025-present) and Associate Software Engineer (2022-2025).
- Projects: TransitOne, CanopusPrime, CapMetro DMA, Knowledge Base Hub, LBWL Smartsheet-to-SharePoint.
- Microsoft Azure Fundamentals (AZ-900) certification.
- Personal email and LinkedIn connected.
- `resume/Neeraj_Kumar_Yadav_Resume.pdf` already included and connected to both resume links.
- No paid account, build step, frameworks, tracking, or extra hosting dependency.

## 1. Preview

Unzip the download, then double-click `index.html`. Chrome/Edge opens the site. Toggle the theme using the icon in the navigation bar. The Download Resume links open the included PDF.

## 2. Publish for FREE using GitHub Pages

1. Create or sign in to your personal GitHub account at https://github.com/.
2. Select **+ → New repository**.
3. Set repository name to **YOUR_GITHUB_USERNAME.github.io** (replace with your *actual* GitHub username). Choose **Public**, then create it.
4. Open the repository → **Add file → Upload files**.
5. Upload **the contents of this portfolio folder**, not only the ZIP file. Make sure `index.html` appears in the repository root alongside `styles.css`, `script.js`, `settings.js` and the `assets`, `resume` folders.
6. Commit changes. Go to **Settings → Pages** and set **Build and deployment → Deploy from a branch → main → / (root)**, then Save.
7. Your URL will be `https://YOUR_GITHUB_USERNAME.github.io/` when deployment succeeds. It may take a few minutes.
8. Test the live website on both a desktop browser and a phone. Add that URL to your LinkedIn Featured section, LinkedIn Contact info, email signature and resume.

**Alternative:** If the repository is called `portfolio`, the published URL will usually be `https://YOUR_GITHUB_USERNAME.github.io/portfolio/`.

## 3. Updating your resume later (no code edits)

1. Edit your master `Neeraj_Kumar_Yadav_Resume.docx` in Word.
2. Export or Save As PDF with the **exact name** `Neeraj_Kumar_Yadav_Resume.pdf`.
3. In your GitHub repo, browse to `resume/Neeraj_Kumar_Yadav_Resume.pdf`, delete/replace the old PDF in a commit (GitHub web uploader may reject a duplicate path: open the file and use `... → Delete file`, commit, then upload the new PDF under the same path).
4. The same website URL and resume path continue to work after deployment, though cached copies may take a short time to update.

### Easier optional alternative
If you prefer updating your resume in Google Drive, upload a PDF there and give public `Viewer` access to anyone with the link. Paste that share URL into `resumeUrl` in `settings.js`. This replaces the *contact-panel* resume link; to also switch the hero resume button, replace its `href` in `index.html`, or ask ChatGPT to update both links. The repository PDF method is the most consistent with this package.

## 4. Updating contact links (one file)

Open `settings.js` on GitHub, select the pencil/Edit icon, and update the quoted values:

```js
window.PORTFOLIO_SETTINGS = {
  email: "neerajyadav065@gmail.com",
  linkedin: "https://www.linkedin.com/in/neeraj-ce-yadav/",
  github: "",                  // Fill in your public GitHub profile URL
  certificationUrl: "",       // Fill in the verification URL for AZ-900
  resumeUrl: ""                // Leave blank to use bundled PDF
};
```

Commit the change. Never include passwords, keys, client connection strings, internal company URLs or proprietary code.

## 5. Updating project or experience text

Ask ChatGPT to update `index.html` with your new verified job title, project or certification information, then replace the website files on GitHub and commit. Keep these consistent: LinkedIn, resume DOCX/PDF, and portfolio.

## 6. Review before making public

- **Publication approval:** Do not publish client/project names or technical details if your employer's policy prohibits them. Remove/sanitize any names as necessary.
- **Dates:** The supplied LinkedIn profile PDF lists Software Engineer beginning April 2025 and Associate Software Engineer ending May 2025 (overlap). This website uses 2025 year-level role dates until you verify the exact promotion date.
- **Contact privacy:** The website displays your personal email and LinkedIn profile. The attached PDF resume also contains the phone number shown on your LinkedIn profile. Remove the phone from the PDF before uploading if you prefer not to make it public.
- **Missing URLs:** GitHub profile and AZ-900 credential verification URL remain empty, so they are not displayed; add them once provided.
- **Metrics:** Only verified facts are presented. Do not add invented project metrics, ML model accuracy numbers or architecture claims.

This portfolio uses zero third-party JavaScript libraries and no paid hosting requirements.
