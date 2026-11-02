# Add a server

Open a PR adding exactly one file: `submissions/<slug>.json`. Use a lowercase, hyphenated slug. Do not edit any other file. Endpoints must use public HTTPS without credentials, fragments, custom ports or redirects. Never include API keys or secrets.

```json
{"name":"Example","url":"https://example.com/mcp","category":"Developer Tools","site":"https://example.com/","auth":"Open","maintainer":"Example team"}
```

All six fields are required. Auth: `Open`, `OAuth`, `API Key`, or `other`. Categories:

- Developer Tools
- Data & Analytics
- Productivity
- Communication
- Social Media
- Marketing & SEO
- Advertising
- Finance & Payments
- Crypto & Web3
- Commerce
- Design & Media
- Security
- Search & Web Data
- Knowledge & Docs
- Travel & Local
- Education
- AI & Memory
- Other

The bot reads JSON through the GitHub API, validates it and checks initialize plus tools/list, or a 401 auth challenge for protected endpoints. It never invokes tools. Passing PRs are squash-merged automatically; a follow-up commit moves the submission into servers.json and regenerates README. Failed checks receive a comment and remain open. Daily sync refreshes Appside data and rechecks repository-only listings, removing failures. A transient failure after merge can omit a listing; resubmit when healthy.

By submitting, you license listing data under CC BY 4.0. Code uses MIT. Appside imports new verified entries hourly; domain proof is required to claim ownership. Maintainers must enable Actions write access, PR comments and squash merging. Branch protections must permit bot merging and follow-up commits.
