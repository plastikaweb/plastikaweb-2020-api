# Convencions a l'hora de fer commit

Utilitza [commitizen](https://commitizen.github.io/cz-cli/)
per aplicar unes simples regles de format pels nostres missatges de commit.

Els tipus principals de commitizen disponibles són els corresponents al adapter
[cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog).

```bash
feat(header): add Notifications button

Allow users to toggle particular notifications by app section. Sets user
properties to identify whether to send notifications and reminders to particular
user, and enables (un)targeting via Audience settings.

Closes: #155
```

## Execució del commit

Executa el següent comandament:

```bash
git cz
// No recomanable:
// afegir --no-verify per saltar-se qualsevol hook anterior a la resolució del commit
```

### Passos de commitizen

### 1. Tipus i descripció

El tipus és la categoria principal del teu canvi.

Llista predeterminada:

- feat: Una nova funcionalitat.
- fix: Un bug.
- docs: Canvis només de documentació.
- test: Afegir proves que faltin o corregir les proves existents.
- refactor: Un canvi de codi que no soluciona un error ni afegeix una característica.
- perf: Un canvi de codi que millora el rendiment.
- style: Canvis que no afecten el significat del codi (espais en blanc, format, semi-colons desapareguts, etc).
- build: Canvis que afecten el sistema de compilació o dependències externes (exemples: gulp, bròquil, npm).
- CI: Canvis als fitxers i scripts de configuració de CI (exemples: Travis, Circle, BrowserStack, SauceLabs).
- chore: Canvis al procés de compilació, o eines auxiliars i biblioteques com la generació de documentació.
- revert: Tornar a un commit anterior.

#### 2. Scope (opcional)

Descriu el mòdul, paquet, component, etc al que pertany el teu canvi.

Pel grup `test` estan disponibles:

- unit: test unitari.
- e2e: test end-to-end.

Pots triar un dels scopes predeterminats pel grup concret en el cas que existeixin, deixar-lo en blanc o introduir un de nou.

#### 3. Subjecte (capçalera) del commit

- Breu descripció de la intenció del canvi en si mateix, no el contingut tècnic.
- Escrit en imperatiu (`Imperative mood` en anglès).
- No capitalitzar el primer caràcter.
- No ficar un punt final.
- Màxim 72 caràcters.
- Intentar no repetir informació ja inferida en els passos del grup i del scope.

#### 4. Descripció ampliada del commit (opcional)

- Ha d'estar separada per una línia del subjecte.
- Qualsevol informació que pot complementar el subjecte ha d'anar aquí.
- Pots escriure en multi-línia.
- Ajustar la mida de _cada_ línia a 72 caràcters.
- Explicar el què i el perquè enlloc del com.
- També si és el primer commit referent a un issue, pots afegir el número del issue relacionat, creant així un enllaç entre els dos stages del workflow.
  Per fer-ho, només afegeix #xxx al final del commit, on xxx és el identificador del issue.
- Es poden afegir altres referències a issues i/o MRs relacionats.

  ```bash
  Ref #xxx
  ```

> **Atenció:** Enllaçar el teu primer commit al issue corresponent serà important pel procés de tracking amb GitLab Cycle Analytics. Mesurarà el temps entre la creació del issue i el primer commit.

#### 5. Peu del commit (opcional)

Aquí es poden referenciar altres issues i/o MRs relacionats així com issues tancats per aquest commit.

> Atenció: Com que el issue es tancarà amb el merge del MR ja que així s'ha implementat en la descripció del mateix al moment de la seva creació, normalment no serà necessari cap informació en aquest pas.

#### 6. Confirmació final

Commitizen ens mostrarà un resum del missatge de commit i ens demanarà confirmació per procedir.

#### 7. Comprovació de format amb commitlint

[Commitlint](https://github.com/conventional-changelog/commitlint) comprova que el missatge d'un commit compleixi un format definit per uns valors per defecte
que poden ser sobreescrits per un fitxer de configuració (`commitlint.config.js`) existent a l'arrel del projecte.

> **Atenció:** De la mateixa manera qualsevol script afegit a un hook pre-commit o similars (linting, testeig...), s'executarà en aquest punt.

## Enllaços d'interès

- [Commitizen](https://commitizen.github.io/cz-cli/)
- [How to write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- [The Perks of commiting with conventions](https://slides.com/marionebl/the-perks-of-committing-with-conventions#/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [cz-customizable](https://github.com/leonardoanalista/cz-customizable)
