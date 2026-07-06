# Medical Error Teaching Bot

Static teaching mockup for prescription-verification and medication-error training.

## Features

- 11 simulated Green Olive Hospital prescription cases
- Draft-style pharmacist prescription verification form
- Student free-text answer box
- Keyword-based answer feedback
- Teaching answer reveal panel
- Print-friendly prescription view
- Excel template download for future cases
- Excel case upload with in-browser conversion to the app's internal JSON format
- Local browser deletion/hiding of cases

## Run Locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

## Case Upload

Download `templates/future-case-template.xlsx`, fill in the sheets, then use **Upload case** on the website. Uploaded cases are stored in browser local storage. Because this is a static GitHub Pages site, upload/delete actions do not permanently write back to GitHub.

## GitHub Pages

This is a static site. In GitHub repository settings, enable Pages from the `main` branch and root folder.

## Safety

All prescriptions are simulated for teaching only. Do not use with real patients.
