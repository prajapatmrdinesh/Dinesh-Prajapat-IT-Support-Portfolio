# Dinesh Prajapat Portfolio

## Deploy on GitHub and Vercel

1. Extract this ZIP. Upload the contents (not the enclosing folder) to the root of your GitHub repository.
2. Confirm GitHub shows `assets/Dinesh-Prajapat-Resume.pdf` with this exact capitalization.
3. In Vercel, choose **Add New > Project**, import the repository, leave Framework Preset as **Other**, and deploy.
4. Open `https://your-domain.vercel.app/assets/Dinesh-Prajapat-Resume.pdf` directly. It should display/download the resume.
5. Replace `YOUR-DOMAIN` in `robots.txt` and `sitemap.xml`, commit, and let Vercel redeploy.
6. Submit `https://your-domain.vercel.app/sitemap.xml` in Google Search Console.

## Resume link

The button in `index.html` uses the relative path `assets/Dinesh-Prajapat-Resume.pdf`. GitHub and Vercel paths are case-sensitive, so the PDF filename and HTML reference must remain identical.
