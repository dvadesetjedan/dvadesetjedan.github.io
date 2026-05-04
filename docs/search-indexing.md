# Search indexing nakon deploya

Canonical site je:

```text
https://dvadesetjedan.com
```

## Google Search Console

U Google Search Consoleu dodaj ili provjeri property za `dvadesetjedan.com`, zatim submitaj:

```text
https://dvadesetjedan.com/sitemap.xml
```

Nakon većeg deploya ručno inspect/request indexing za:

- `https://dvadesetjedan.com/`
- `https://dvadesetjedan.com/pocni-ovdje/`
- `https://dvadesetjedan.com/sigurnost/`
- `https://dvadesetjedan.com/clanci/`
- `https://dvadesetjedan.com/dogadaji/`
- `https://dvadesetjedan.com/livestream/`
- `https://dvadesetjedan.com/gradovi/`
- `https://dvadesetjedan.com/zajednica/`

## Provjere nakon deploya

- Otvori `https://dvadesetjedan.com/robots.txt` i provjeri da referencira sitemap.
- Otvori `https://dvadesetjedan.com/sitemap.xml` i provjeri da sadrži canonical rute, ne legacy redirect rute.
- Provjeri da detail stranice imaju canonical tag prema čistoj ruti.
- Ne oslanjati se na stare cached snippetove iz WordPressa.
- Stare WordPress URL-ove pokrivaju statične legacy redirect stranice.
- Social preview koristi PNG fallback na `/social-preview.png`.

## Nakon svake veće content promjene

Pokreni:

```bash
npm run check
npm run build
```

Zatim lokalno ili na live siteu provjeri `sitemap.xml`, `rss.xml`, `feed.json` i par ključnih detail stranica.
