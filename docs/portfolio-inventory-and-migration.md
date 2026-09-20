# Portfolio inventory and migration plan

Last verified: 2026-09-19

## Domain owners

| Canonical domain | Vercel project | Repository | Branch | Purpose |
| --- | --- | --- | --- | --- |
| `razeenali.com` | `razeenali` | `r4z33n4l1/razeenali` | `main` | Personal site |
| `razeenali.app` | `razeenapps` | private | `main` | Apps hub |
| `razeen.im` | `razeenlinks` | `r4z33n4l1/razeenlinks` | `main` | Links hub |

All three domains use Vercel DNS. Before this migration, their apex hosts redirect to `www`; the intended end state is `www.razeenali.com` redirecting to `razeenali.com`, while the apps and links hubs retain their independent domains.

## Public inventory

The public apps source of truth is Apple's current Razeen Ali developer catalogue, supplemented by individual public listings where the developer grid is incomplete. These are appropriate for the apps hub:

| App | Status | Verified destination | Public treatment |
| --- | --- | --- | --- |
| julie: cat translator | Live | App Store, id `6761346408` | Featured |
| Nag: constant reminder | Live | App Store, id `6760954480`; `nag.razeenali.app` | Featured |
| TaskWall: Your todo wallpaper | Live | App Store, id `6760971853` | Index |
| Slate: The Modest Fashion Hub | Live | App Store, id `6752974390` | Featured |
| Business Card Holder | Live | App Store, id `6757991003` | Index |
| Ritual by CariStudios | Live | App Store, id `6757550661` | Index |
| Insta Grid | Live | App Store, id `6757743717` | Index |
| Simple Salat Tracker | Live | App Store, id `6756157269` | Index |
| TodoWallpaper | Live | App Store, id `6744670787` | Featured |

FoodChecker is intentionally omitted: its hub page has no verified store or production destination.

## Other project findings

| Project | Status | Portfolio decision | Evidence and follow-up |
| --- | --- | --- | --- |
| FileZap browser compression | Maintained, unpublished | Do not label Live | Vercel production deployment is `READY` but protected; legacy `filezap.dev` does not resolve. Confirm the intended public flow before assigning a subdomain. |
| QR Maker | Unverified | Do not label Live | Vercel deployment is `READY` but protected. `qrmaker.fyi` answers HTTP but has an expired domain record. Confirm ownership and user flow before migration. |
| PDF Splitter | Maintained, unpublished | Do not label Live | Vercel deployment is `READY` but protected; `pdfsplitter.filezap.dev` does not resolve. |
| Bengali Artistry Generator | Maintained, unpublished | Do not label Live | Vercel deployment is `READY` but protected; `banglaart.dev` does not resolve. |
| Appointify | Broken | Archive / omit | Its former Vercel URL returns 404. |
| Hotspot | Private | Omit | The repository is private, so it is not suitable for a public catalogue. |

## Migration plan

1. Keep current production deployments intact while rebuilding each domain owner in a dedicated branch.
2. Replace stale personal-site claims, legacy domains, unverified social links, and the simulated terminal summary with reviewed static data.
3. Make the nine verified App Store listings the apps hub's reviewed source of truth. Do not include unpublished or private work.
4. Apply shared editorial tokens, accessible theme persistence, metadata, robots, sitemap, 404, and link checking to all three owners.
5. Deploy previews, smoke-test canonical and public links, then assign the canonical aliases only after preview verification. Retain the current production deployment as each project's rollback target.

## Ongoing maintenance

- Update `lib/projects.ts` (personal work) and `lib/apps.ts` (apps hub) only after checking the destination in a browser or App Store listing.
- `status: "live"` requires a working public destination. Use `maintained`, `archived`, or omit a record otherwise.
- Run `npm run check:links`, `npm run lint`, and `npm run build` before each production deployment.
- Vercel environment-variable values are never recorded here; any future server feature must document names and purpose only.
- To add a project, add a typed record with a verified date, then confirm its public URL in CI. To retire one, change its status or remove it from featured data before changing a domain.
