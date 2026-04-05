# Weather 7

An unfinished cinematic weather dashboard I started in 2023 and recently documented properly.

I started this as a personal weather interface experiment on `2023-02-05`, got it close by `2023-02-09`, and then left it unfinished for a long time. I came back on `2026-04-02` to close out the last documentation and verification pass without pretending this repo suddenly became a polished product.

> I started this project a few years ago and never fully finished it. I used agents to help me close out this last stretch and tighten the docs/testing pass, but the direction, implementation choices, and final review are still mine.

## Status

The core app runs, builds, and is documented. It is still better described as unfinished work that now has a clean README than as a production-ready release.

## What The App Does

- Accepts U.S. city names, ZIP codes, street addresses, and raw coordinates as search input.
- Resolves locations server-side with the U.S. Census Geocoder and falls back to Open-Meteo when needed.
- Pulls forecast data, current conditions, and active alerts from the National Weather Service API.
- Renders the result as a dashboard with current conditions, solar arc, hourly rhythm, outlook board, and observation deck sections.

## Stack

- Next.js 13
- TypeScript
- React 18
- Styled Components
- SWR
- Bun test
- React Testing Library
- Storybook

## How It Works

The main page in `src/pages/index.tsx` manages the search input and calls `/api/weather` through the client helper in `src/api/index.ts`. The API route in `src/pages/api/weather.ts` validates the request and delegates the actual weather lookup to `src/lib/weather.ts`.

That service layer resolves the location, fetches forecast and observation data, normalizes alerts, and returns a single response object. The response contract is defined in `src/types/weather.ts`, and `src/components/WeatherDashboard/` composes the current dashboard from section-level presentational components with matching Storybook stories.

## Project Structure

```text
.
├── .github/workflows/ci.yml
├── .storybook/
├── src/
│   ├── components/
│   │   └── WeatherDashboard/
│   │       ├── sections/
│   │       ├── __tests__/
│   │       ├── fixtures.ts
│   │       └── index.tsx
│   ├── lib/weather.ts
│   ├── pages/
│   │   ├── api/weather.ts
│   │   └── index.tsx
│   └── types/weather.ts
└── README.md
```

## Running It Locally

```bash
bun install
bun run dev
bun run generate
bun run lint
bun run type-check
bun run test:ci
bun run build
```

The repo is now aligned around `bun` for local installs, script execution, and CI.

## Scaffolding

Use the generator when you want to scaffold a new component with styles, story, and test files:

```bash
bun run generate
```

If you prefer the shell wrapper directly, it is still available at `generators/bash.sh`.

## Optional Environment Variable

You can optionally set a custom National Weather Service user agent header in `.env.local`:

```bash
NWS_USER_AGENT="weather-7/1.0 (https://your-app.example; you@example.com)"
```

This only changes the request header sent to the National Weather Service API.

## Verification

On `2026-04-05`, I verified this workspace successfully with:

- `bun run lint`
- `bun run type-check`
- `bun run test:ci`
- `bun run build`
- `bun run build-storybook`

The current automated coverage is now centered on `src/components/WeatherDashboard`, including the composed page plus alert, outlook, and observation section fallbacks. There is still no Playwright, Cypress, or other end-to-end test suite in this repo right now.

## What’s Still Incomplete

- There is no end-to-end coverage for the actual search and dashboard experience.
- There are no focused automated tests for `src/lib/weather.ts`.
- There are no focused automated tests for `src/pages/api/weather.ts`.

## What I’d Change Next

1. Add end-to-end coverage for city, ZIP code, street address, raw coordinate, and error-state searches.
2. Add service-layer and API-route tests around `src/lib/weather.ts` and `src/pages/api/weather.ts`.
3. Add focused integration coverage around the `useSWR` search flow in `src/pages/index.tsx`.
4. Revisit heavier framework upgrades like Next, Storybook, and TypeScript in one dedicated pass instead of mixing them into UI work.

I’m keeping this here as a real snapshot of the project: working, documented, and still a little unfinished.
