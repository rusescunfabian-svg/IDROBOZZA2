# GitHub + Netlify — site live

## Structura proiectului (rădăcină repo)

```
index.html
styles.css
main.js
netlify.toml
images/
  impianti-caldo-freddo.png   ← pune imaginea aici (obligatoriu pentru secțiunea „caldo/freddo”)
```

## Pasul 1 — GitHub

1. Creează un repo nou (poate fi **public**).
2. Încarcă **tot** folderul proiectului (sau folosește Git push).
3. Verifică pe GitHub că în **rădăcina** repo-ului există `index.html` și `netlify.toml`.

## Pasul 2 — Netlify

1. Intră pe [https://app.netlify.com](https://app.netlify.com) și conectează-te.
2. **Add new site** → **Import an existing project**.
3. Alege **GitHub** și autorizează accesul la repo.
4. Selectează repo-ul cu site-ul.
5. Netlify citește `netlify.toml`; ar trebui să vezi:
   - **Publish directory:** `.` (punct = rădăcina repo-ului)
   - **Build command:** lasă gol (sau cum apare după import).
6. **Deploy site**.

După deploy primești un URL gen `https://nume-random.netlify.app`. Îl poți schimba din **Site settings** → **Domain management**.

## Dacă lipsește imaginea

Dacă `images/impianti-caldo-freddo.png` nu există, secțiunea cu ilustrația nu afișează poza. După ce adaugi fișierul în repo, Netlify face un deploy nou automat (sau declanșează **Deploys** → **Trigger deploy**).

## Observații

- **Nu** este nevoie de GitHub Pages pentru Netlify; Netlify ia fișierele direct din GitHub.
- Orice push pe ramura conectată (de obicei `main`) declanșează un deploy nou.
