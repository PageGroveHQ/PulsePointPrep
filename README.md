# PulsePoint Prep

A calm, engaging NCLEX-RN study workspace with a pulse-inspired visual identity. This project lives in its own checkout and has no dependency on Learning Arcade, PageGrove, or the earlier NCLEX prototype.

## Run locally

Requires Node.js 20 or newer. No package installation is required.

```sh
npm start
```

Open http://127.0.0.1:4190 in the Codex agentic browser or another browser.

```sh
npm run check
npm test
```

## Features

- Brief skippable animated pulse introduction, replayable from Study plan. This is a brand animation, not a real loading indicator.
- Responsive dashboard, daily five-question goal, real study streak, recent activity, and focused study recommendations.
- Daytime and evening themes, reduced-motion support, and an optional 30-second breathing break.
- 22 original draft questions, including two multiple-response items, randomized choices, topic/pool filters, tutor and timed practice, and per-choice rationales.
- Adaptive practice demonstration, session reports, confidence tracking, bookmarks, reflections, and mistake notebook.
- Three-decision guided fictional patient case, concept flashcards with review scheduling, performance reports, exam countdown, and suggested daily study routine.

## Data and scope

Progress is stored on the device in browser localStorage under `pulsepoint-v1`; theme under `pulsepoint-theme`. The welcome animation uses sessionStorage. No authentication, backend, analytics, or data sharing is implemented. Changing origin or clearing browser data changes/removes the stored workspace. Google Fonts are optional external font requests; system fonts are the fallback.

Clinical content is draft educational material pending independent nurse-educator review. It is original content, not UWorld content. The 22-item starter mock exam is not a full-length NCLEX simulation. Adaptive mode uses authored difficulty tags, not a calibrated CAT or validated pass predictor. Multiple-response practice scoring is max(0, correct selections minus incorrect selections) / correct options. Guided case decisions are not included in question-bank statistics.

## Files

`index.html` — entry and welcome screen; `app.js` — study engine and study views; `experience.js` — PulsePoint branding, dashboard, theme, animation and engagement; `questions.js` — authored bank; `style.css` — foundational layout; `pulsepoint.css` — brand styles and responsive behavior; `assets/pulsepoint.svg` — original vector identity; `server.cjs` — loopback-only preview server; `tests/` — scoring and adaptive-selection checks.

## Next steps

Independent content review, expansion of the question bank, broader NGN formats, full-length exam behavior, and accessibility evaluation. Readiness prediction requires calibrated content and outcome validation.
