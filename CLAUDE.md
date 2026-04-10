# LumenFE — Claude Code Guidelines

## Project Overview
Angular application (LumenFE) using SCSS and routing.

## Tech Stack
- Angular (latest)
- SCSS for styling
- Angular Router for navigation

## Code Style
- Components are standalone by default (Angular 17+) — do not write `standalone: true` explicitly
- Always use `ChangeDetectionStrategy.OnPush` on every component
- Prefer `inject()` over constructor injection
- Use `signal`/`computed` for reactive state where applicable
- Filenames: kebab-case (e.g., `user-profile.component.ts`)
- Keep components small and focused — one responsibility per component

## SCSS Conventions
- Use BEM methodology for class naming
- Define shared variables and mixins in `src/styles/`
- Never use inline styles

## Git Conventions
- Commit messages in English, imperative mood (e.g., `add login page`, `fix routing issue`)
- Branch naming: `feature/`, `fix/`, `refactor/` prefixes

## General Rules
- Do not add unnecessary comments or docstrings to code that was not changed
- Do not introduce speculative abstractions — implement only what is needed
- Do not mock HTTP calls in tests unless integration with a real backend is impossible
- Never skip pre-commit hooks (`--no-verify`)
