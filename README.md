
### Routing

- `/` Home
- `/courses` Courses listing (shows all courses)
- `/CourseDetails` Course details page
- `/certificates` Certificate verification
- `/contact` Contact page

### Key Components

- `CourseOfferings`
  - Accepts `limit` prop to constrain cards on Home.
  - Home: `<CourseOfferings FI={true} limit={3} />`
  - Courses page: `<CourseOfferings />` (shows all)
- `CertificateVerification`
  - `getCertificates(code, role)` fetches and validates
  - `generateCertificateImage(data, role)` creates image via Canvas and returns a data URL, displayed if present
- `Header_Full`
  - “Join Now” opens Google Form in a new tab
- `Nav`
  - Desktop menu + mobile hamburger overlay

### Certificate Image Generation

- File: `src/Imggenerate.js`
- Flow:
  - Loads base template `src/assets/Certificates_Designs/${role}_clean.png`
  - Draws onto a canvas and overlays name/course/date/ids
  - Returns `data:image/png;base64,...` URL via `canvas.toDataURL('image/png')`
- Usage:
```js
const imgDataUrl = await generateCertificateImage(certificateData, role)
```

### API: Certificate Verification

- File: `src/api/getCertificate.js`
- Endpoint: `https://msn-certificate-application.vercel.app/api/certificate/getbycode/:code`
- Status handling:
  - 200: returns JSON; role must match
  - 400/404/500: throws descriptive Error

### Image Assets

- Prefer importing assets rather than using string paths:
```js
import heroImage from '@/assets/Placeholder_Image.png'
```
- Path alias `@` points to `./src`.

### Environment & Tooling

- Scripts
  - `dev`, `build`, `preview`, `lint`
- `.gitignore` includes env files, caches, coverage, deploy directories
- Optional: Add `.env.example` to document needed env variables

### Deployment

- Build with `npm run build`
- Deploy `dist/` to your platform (Vercel, Netlify, etc.)
- If using Vercel/Netlify, ensure SPA fallback is enabled for client routing

### Contributing

- Use feature branches
- Run `npm run lint` before PRs
- Keep imports using `@` alias

### License

Proprietary – MSN Academy