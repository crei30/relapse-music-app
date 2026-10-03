# Relapse Music App

A nostalgia-focused music experience for Filipinos and anyone who finds meaning in songs from the past. Relapse helps listeners revisit memories through curated eras, moods, and personal stories.

## Project structure

- `apps/web` — React + Vite web client
- `apps/mobile` — Expo React Native client for iOS and Android
- `packages/shared` — Shared types and nostalgia-focused catalog data

## Getting started

```bash
npm install
npm run web
```

To run the mobile app:

```bash
npm run mobile
```

The current scaffold uses sample audio metadata only. A production version should connect to a licensed music provider before streaming copyrighted recordings.

## MVP direction

- Browse songs by era, mood, and memory
- Play curated nostalgia sessions
- Save songs and create personal memory playlists
- Add a short note describing the memory behind a song
- Support Filipino and English interface copy
