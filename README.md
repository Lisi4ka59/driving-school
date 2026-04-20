# Автошкола Маневр

Лендинг автошколы на React, TypeScript и Vite.

## Команды

```bash
npm ci
npm run dev
npm run build
npm run lint
```

## Деплой на GitHub Pages

Деплой настроен через GitHub Actions в `.github/workflows/deploy.yml`.

После пуша в ветку `main` или `master` workflow:

1. установит зависимости через `npm ci`;
2. соберет проект командой `npm run build`;
3. загрузит папку `dist` как Pages artifact;
4. опубликует сайт в GitHub Pages.

В настройках репозитория откройте `Settings -> Pages` и выберите источник `GitHub Actions`.

Для GitHub Pages в `vite.config.ts` установлен `base: './'`, чтобы ассеты корректно открывались на адресе вида `https://username.github.io/repository/`.
