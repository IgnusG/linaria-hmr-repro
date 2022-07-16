# Linaria + `@vitejs/plugin-react` issue

1. Run `npm install && npm run start` and observe log error message:
```
Internal server error: Cannot use 'import.meta' outside a module in
| /.../linaria-hmr-repro/src/app.tsx

  Plugin: linaria
  File: /.../linaria-hmr-repro/src/app.tsx
```
2. Comment out line 8 in `vite.config.ts`
3. Run `npm run start` again and observe the app working again