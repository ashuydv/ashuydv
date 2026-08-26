# Ashutosh Yadav

**Full-Stack Engineer · Technical Lead · Systems-minded builder** — Mumbai, India

Leading UI architecture at **Bereej Technologies**, building **Cloudshot** (a multi-cloud
intelligence platform across AWS/Azure/GCP) — and shipping a new deep-dive project most
weeks to stay sharp across the stack: browser internals, backend concurrency, Web3, and
security.

🟢 **Open to:** Senior / Staff Full-Stack roles · Tech Lead / Engineering Lead · Founding Engineer
📩 Fastest way to reach me: [Twitter/X](https://twitter.com/ashu_ydv18) · [LinkedIn](https://linkedin.com/in/ashuydv18)

---

## Stack

| | |
|---|---|
| **Frontend** | React · Next.js (App Router) · TypeScript · Redux/Zustand · Tailwind · Three.js/WebGL · Canvas 2D |
| **Backend** | Node.js/Express · Go (chi, sqlc) · Java/Spring Boot · Python (FastAPI) |
| **Data** | PostgreSQL · Prisma · Drizzle · SQLite · Spring Data JPA |
| **Systems / Perf** | Web Workers · concurrency & locking · canvas virtualization · Core Web Vitals |
| **Cloud / Infra** | AWS · Azure · GCP · Docker · Kubernetes · CI/CD (Jenkins, GitHub Actions) |
| **Web3** | Solidity · Foundry · wagmi/viem · IPFS |

---

## Featured projects

Each one below is a scoped, from-scratch build with a README that documents the
architecture decisions and trade-offs — not a tutorial clone.

### Backend & distributed systems

**[TradeSim](https://github.com/ashuydv/go-stock-trading)** — Go + Postgres mock trading
platform. The core problem is a check-then-act race on account balances under concurrent
orders; solved with `SELECT ... FOR UPDATE` row locks inside a single transactional
boundary, with strict lock ordering to avoid deadlock. Verified, not just reasoned about:
an integration test fires 30 concurrent goroutines at a 10-buy balance and asserts exactly
10 succeed and the balance never goes negative, run with `go test -race`.

**[PayRecon](https://github.com/ashuydv/payrec)** — Java 17 / Spring Boot + Angular payment
reconciliation platform. Idempotent transaction creation via DB unique constraints (not
check-then-insert), optimistic locking on settlements proven correct under 8 concurrent
threads, and a fault-tolerant nightly Spring Batch reconciliation job with a bounded skip
policy.

### Full-stack product engineering

**[Northstar](https://github.com/ashuydv/drm-lms)** — Next.js 16 course-creator SaaS
(Kajabi-style) built around one hard problem: DRM video delivery enforced server-side, not
by hidden URLs. Playback is gated by short-lived signed JWTs scoped to `(user, lesson,
asset)`, re-verified against enrollment on every request. Clerk auth, Neon/Drizzle,
staged migration from pitch-demo to real infra with each stage documented.

**[Patient Vitals Dashboard](https://github.com/ashuydv/emp-healthcare)** — FastAPI +
React clinician dashboard syncing real FHIR (HAPI R4) data into Postgres and computing
care-gap alerts via pure, independently-tested rule functions. Built HIPAA-aware by
construction: PHI-redacting structured logging, SMART-on-FHIR-shaped auth, and an explicit
gap table of what a real production version would still need.

**[LearnSysDes](https://github.com/ashuydv/learnsysdes)** — Next.js system-design practice
platform: auth, quizzes, and 5 HLD problems on an interactive tldraw canvas with
back-of-envelope estimation and reference-solution reveal.

### Browser internals & performance

**[Web Worker Markdown Compiler](https://github.com/ashuydv/web-worker-compiler)** — a
hand-rolled tokenizer → parser → renderer that never blocks the main thread. Measured, not
claimed: a 439,000-word document compiles in ~65ms synchronously (main-thread FPS drops to
7); moved off-thread, the page never drops a frame regardless of document size.

**[Virtual Canvas File Tree](https://github.com/ashuydv/canvas-file-system-tree)** — a file
explorer rendering 100k+ nodes at 60 FPS by drawing rows on one `<canvas>` instead of
mounting a DOM node per row, so draw cost is bound by viewport size, not dataset size.

**[Memory Leak Visualizer](https://github.com/ashuydv/browser-memory-leak-widget)** — a
Chrome DevTools panel extension that live-charts DOM node count and JS heap, with a rolling-
window heuristic that flags sustained-growth leaks and detached-node retention.

### Web3 & security

**[IsolatedMarket](https://github.com/ashuydv/01-isolated-market)** — a Solidity lending
market (isolated collateral/debt, mirroring Aave/Compound-style risk containment), with a
Foundry invariant suite fuzzing deposit/borrow/repay/withdraw/time-warp across 4 actors to
check solvency and debt-index monotonicity hold under every sequence.

**[Security Audit Sample](https://github.com/ashuydv/03-security-audit-sample)** — a
before/after mock audit engagement: a vulnerable vault, a working reentrancy exploit PoC
that drains it, a remediated version, and a client-facing findings report tying each fix to
a finding ID.

### Systems design & DX tooling

**[DealSync](https://github.com/ashuydv/sifthub-module)** — one component library (design
tokens + a `DealBrief` pattern) shipped to four host surfaces — web app, Chrome extension,
Office add-in, Google Sheets sidebar — with each surface's genuinely different lifecycle
constraints (MV3 non-persistent service workers, `Office.onReady()` gating, Apps Script's
no-bundler sandbox) documented rather than papered over.

**[env-var-parity-checker](https://github.com/ashuydv/env-var-parity-checker)** — a CLI
that runs as a git pre-push hook to catch `.env.example` drift against Vercel/AWS before a
missing env var takes down production. Hexagonal architecture (pure diff core, zero cloud
SDK imports), idempotent hook installation, distinct exit codes for "your config is wrong"
vs. "the tool itself failed."

**[Cross-Tab Whiteboard](https://github.com/ashuydv/cross-tab-whiteboard)** — real-time
collaborative drawing across browser tabs with zero server and zero network calls, via the
`BroadcastChannel` API — strokes, cursors, undo/redo, and late-joiner state sync.

<details>
<summary><b>More projects</b></summary>

- **[Wankhede 3D Stadium](https://github.com/ashuydv/wankhede-3d-stadium)** — a 3D seat-selection
  ticket booking demo (react-three-fiber) over a real SQLite inventory with concurrency-safe
  seat holds (10-minute soft locks, atomic booking confirmation).
- **[alarmcli](https://github.com/ashuydv/alarm-cli)** — a terminal alarm clock; the README
  documents the actual scoping/design/build/review process end-to-end, including bugs caught
  in review before they shipped.
- **[Forge Frontend Integration](https://github.com/ashuydv/forge-frontend-integration)** — a
  focused wagmi/viem component showing read/write contract wiring with real pending →
  confirming → confirmed transaction state.

</details>

---

## How I approach engineering

- **Architecture before code.** Every project above starts with a stated design decision
  (why row-level locks over app-level mutexes, why isolated markets over pooled lending,
  why Zustand over Redux here) — not just a feature list.
- **Claims are verified, not asserted.** Concurrency correctness is proven with race-
  detector tests and multi-actor fuzz invariants; performance claims ship with the number
  and the measurement method, not just "it's fast."
- **Trade-offs are written down.** Every README states what's mocked vs. real, what I'd
  harden next, and why — the same discipline I'd want from a team's PRs and design docs.

## Recent wins

⚡ 439k-word document compiled off-main-thread in ~65ms with zero dropped frames
🔒 Zero-overdraw trading engine verified under 30 concurrent goroutines + `-race`
🖼️ 100k+ node file tree rendered on canvas at a steady 60 FPS
🔗 Web3 browser extension shipped with 400+ installs (Drypto)

---

## GitHub stats

![stats](https://github-readme-stats.vercel.app/api?username=ashuydv&show_icons=true&theme=default)
![streak](https://github-readme-streak-stats.herokuapp.com/?user=ashuydv&theme=default)
