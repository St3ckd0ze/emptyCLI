emptyCLI
Ein schlanker, TypeScript-basierter Blueprint für die Entwicklung von Command-Line-Tools (CLI).
Features
• TypeScript-Support: Vorkonfiguriert mit tsc, ts-node und Typdefinitionen für Node.
• Testing enthalten: Integriertes Testing-Setup mit Jest (ts-jest).
• Asset Copying: Automatisches Kopieren von Nicht-Code-Assets aus dem src-Ordner ins Build-Verzeichnis.
• Ready to Link: Vorbereitet für die Registrierung des CLI-Befehls im System.
Erste Schritte

1. Installation
   Klone das Repository oder kopiere die Dateien in deinen Projektordner und installiere die Abhängigkeiten:
   npm install
2. CLI-Namen und Einstiegspunkt konfigurieren
   Öffne die package.json und passe den Abschnitt bin an. Ersetze YOUR_CLI_NAME_HERE.js durch den tatsächlichen Namen deines Kompilats (z. B. passend zu deiner Hauptdatei in src bzw. dist) und lege fest, unter welchem Befehl das Tool später aufgerufen werden soll:
   "bin": {
   "gitxstat": "./dist/index.js"
   }
   Hinweis: In deiner aktuellen package.json ist bereits "gitxstat" als Key hinterlegt. Passe den Pfad dahinter einfach auf deine kompilierte Hauptdatei an.
3. Lokal verlinken
   Um dein CLI-Tool während der Entwicklung global auf deinem System zu testen, kannst du es über npm verlinken:
   npm link
   Danach kannst du es überall im Terminal über deinen definierten Befehlsnamen aufrufen.
   Verfügbare Skripte
   In der package.json sind folgende Befehle für die Entwicklung hinterlegt:
   Build (Kompilieren & Assets kopieren)
   Führt die komplette Kompilation durch und kopiert gleichzeitig alle Nicht-TS-Dateien (z. B. JSON-Konfigurationen, Templates) aus src/ nach dist/:
   npm run build
   Watch-Modus
   Startet den TypeScript-Compiler im Watch-Modus, der bei jeder Dateiänderung automatisch neu kompiliert:
   npm run \_compile.watch
   Tests ausführen
   Startet die Test-Suite mit Jest:
   npm test
   Aufräumen
   Löscht die generierten Ordner (dist, out, coverage) und temporäre Build-Dateien:
   npm run clean
   Projektstruktur
   ├── src/ # Dein TypeScript-Quellcode (z.B. index.ts)
   ├── dist/ # Kompiliertes JavaScript (wird automatisch generiert)
   ├── package.json # Projektkonfiguration und Abhängigkeiten
   └── tsconfig.json # TypeScript-Konfiguration
   Wichtiger Hinweis für CLI-Skripte
   Achte bei deinem CLI-Einstiegspunkt (der TypeScript-Datei, die als Haupteinstieg dient) darauf, dass in der allerersten Zeile der ausführbaren JavaScript-Datei der sogenannte Shebang steht. In deiner Quellcodedatei (z. B. src/index.ts) sollte ganz oben Folgendes stehen:
   #!/usr/bin/env node
   Dies sorgt dafür, dass die Shell weiß, dass das Skript mit Node.js ausgeführt werden muss.
