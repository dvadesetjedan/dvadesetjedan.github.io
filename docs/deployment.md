# Deployment

Projekt je statičan i kompatibilan s GitHub Pages.

## Lokalni build

```bash
npm ci
npm run check
```

`npm run build` pokreće TypeScript build, Vite build i generiranje statičnih artefakata.

## GitHub Pages

Repo već ima GitHub Pages deploy workflow. Artifact za deployment je `dist`.

## Custom domain

Canonical brand URL je:

```text
https://dvadesetjedan.com
```

`public/CNAME` sadrži:

```text
dvadesetjedan.com
```

DNS se mora konfigurirati izvan repozitorija. Ako stari WordPress ili stari hosting još prima promet, preusmjeravanja treba riješiti na domeni/hostingu, ne u ovom statičnom buildu. GitHub Pages direktni URL ne bi trebao biti javni brand URL nakon što custom domain radi.
