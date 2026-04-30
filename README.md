# Ferari Impianti — landing pronto intervento (Bologna)

Sito statico: `index.html`, `styles.css`, `script.js`. Apri `index.html` in locale o pubblica la cartella su un hosting statico / GitHub Pages.

**Telefono:** 392 632 2720  

## Collegare GitHub (da PowerShell)

```powershell
cd $env:USERPROFILE\Desktop\ferari-landing-bologna
gh auth login
gh repo create ferari-impianti-bologna-landing --public --source=. --remote=origin --push
```

Il link del **codice** per il cliente: `https://github.com/TUO_UTENTE/ferari-impianti-bologna-landing`

## Sito online (GitHub Pages)

Sul repo GitHub: **Settings → Pages → Branch `main`** e cartella **`/ (root)`**. L’anteprima pubblica sarà circa:

`https://TUO_UTENTE.github.io/ferari-impianti-bologna-landing/`
