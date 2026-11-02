# Verified Remote MCP Servers

Every server is checked with a real MCP handshake: initialize + tools/list for open servers, and a 401 auth challenge for protected ones. Failures are removed. PRs are checked automatically and merged within a day — no waiting months. Checks are dated observations; auth challenges establish reachability, and we never invoke tools.

434 servers · 184 handshakes passed · 250 require authentication · 18 categories

[Add a server](CONTRIBUTING.md) · [Data license: CC BY 4.0](LICENSE-DATA) · [Code license: MIT](LICENSE)

## Contents

- [Developer Tools](#developer-tools)
- [Data & Analytics](#data--analytics)
- [Productivity](#productivity)
- [Communication](#communication)
- [Social Media](#social-media)
- [Marketing & SEO](#marketing--seo)
- [Advertising](#advertising)
- [Finance & Payments](#finance--payments)
- [Crypto & Web3](#crypto--web3)
- [Commerce](#commerce)
- [Design & Media](#design--media)
- [Security](#security)
- [Search & Web Data](#search--web-data)
- [Knowledge & Docs](#knowledge--docs)
- [Travel & Local](#travel--local)
- [Education](#education)
- [AI & Memory](#ai--memory)
- [Other](#other)

## Developer Tools

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [affectUI](https://appside.build/mcp-servers/affectui/) | <code>https://www.affectui.com/api/mcp</code> | API Key | ✅ handshake · 4 tools | [affectUI](https://www.affectui.com/) |
| [AgentDiet](https://appside.build/mcp-servers/agentdiet/) | <code>https://agentdiet-72343955726.us-central1.run.app/mcp</code> | other | ✅ handshake · 4 tools | [robertoyanguas-ops](https://github.com/robertoyanguas-ops) |
| [AgentRender](https://appside.build/mcp-servers/agentrender/) | <code>https://api.agentrenderapi.com/mcp</code> | OAuth | 🔐 auth required | [AgentRender](https://agentrenderapi.com/) |
| [Atlassian](https://appside.build/mcp-servers/atlassian/) | <code>https://mcp.atlassian.com/v1/sse</code> | OAuth | 🔐 auth required | [Atlassian](https://atlassian.com/) |
| [AWS Knowledge](https://appside.build/mcp-servers/aws-knowledge/) | <code>https://knowledge-mcp.global.api.aws/</code> | Open | ✅ handshake · 5 tools | [AWS](https://aws.github.io/) |
| [Benchlight](https://appside.build/mcp-servers/benchlight/) | <code>https://benchlight.dev/mcp</code> | OAuth | 🔐 auth required | [Benchlight](https://benchlight.dev/) |
| [briq](https://appside.build/mcp-servers/briq/) | <code>https://api.briq.cloud/mcp</code> | OAuth | 🔐 auth required | [briq](https://briq.cloud/) |
| [Buildkite](https://appside.build/mcp-servers/buildkite/) | <code>https://mcp.buildkite.com/mcp</code> | OAuth | 🔐 auth required | [Buildkite](https://buildkite.com/) |
| [ConnectorReport](https://appside.build/mcp-servers/connectorreport/) | <code>https://connectorreport.com/api/mcp</code> | Open | ✅ handshake · 5 tools | [ConnectorReport](https://connectorreport.com/) |
| [Cortex](https://appside.build/mcp-servers/cortex/) | <code>https://mcp.cortex.io/mcp</code> | API Key | 🔐 auth required | [Cortex](https://cortex.io/) |
| [doDomain](https://appside.build/mcp-servers/dodomain/) | <code>https://app.dodomain.io/api/mcp</code> | OAuth | 🔐 auth required | [doDomain](https://dodomain.io/) |
| [DropTheHassle](https://appside.build/mcp-servers/dropthehassle/) | <code>https://dropthehassle.com/mcp</code> | OAuth | ✅ handshake · 52 tools | [DropTheHassle](https://dropthehassle.com/) |
| [Fiskmås](https://appside.build/mcp-servers/fiskmas/) | <code>https://mcp.fiskmas.dev/mcp</code> | API Key | ✅ handshake · 23 tools | [Fiskmås](https://fiskmas.dev/) |
| [Friday Work](https://appside.build/mcp-servers/friday-work/) | <code>https://www.app.tryfridaywork.com/mcp</code> | OAuth | 🔐 auth required | [Friday Work](https://www.tryfridaywork.com/) |
| [Ginta](https://appside.build/mcp-servers/ginta/) | <code>https://ginta.app/mcp</code> | OAuth | 🔐 auth required | [Ginta](https://ginta.app/) |
| [GitHub](https://appside.build/mcp-servers/github/) | <code>https://api.githubcopilot.com/mcp</code> | OAuth | 🔐 auth required | [GitHub](https://github.com/) |
| [GitMCP](https://appside.build/mcp-servers/gitmcp/) | <code>https://gitmcp.io/docs</code> | Open | ✅ handshake · 5 tools | [GitMCP](https://gitmcp.io/) |
| [Globalping](https://appside.build/mcp-servers/globalping/) | <code>https://mcp.globalping.dev/sse</code> | OAuth | 🔐 auth required | [Globalping](https://globalping.io/) |
| [Google Compute Engine](https://appside.build/mcp-servers/google-compute-engine/) | <code>https://compute.googleapis.com/mcp</code> | API Key | ✅ handshake · 29 tools | [Google](https://docs.cloud.google.com/compute/docs/reference/mcp) |
| [Google GKE](https://appside.build/mcp-servers/google-gke/) | <code>https://container.googleapis.com/mcp</code> | API Key | ✅ handshake · 23 tools | [Google](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp) |
| [Hugging Face](https://appside.build/mcp-servers/hugging-face/) | <code>https://hf.co/mcp</code> | Open | ✅ handshake · 4 tools | [Hugging Face](https://huggingface.co/) |
| [Instant](https://appside.build/mcp-servers/instant/) | <code>https://mcp.instantdb.com/mcp</code> | OAuth | 🔐 auth required | [Instant](https://www.instantdb.com/) |
| [Invokary Platform Requirements](https://appside.build/mcp-servers/invokary-platform-requirements/) | <code>https://mcp.invokary.com/mcp</code> | Open | ✅ handshake · 6 tools | [Invokary](https://invokary.com/) |
| [Jam](https://appside.build/mcp-servers/jam/) | <code>https://mcp.jam.dev/mcp</code> | OAuth | 🔐 auth required | [Jam.dev](https://jam.dev/) |
| [Javadocs](https://appside.build/mcp-servers/javadocs/) | <code>https://www.javadocs.dev/mcp</code> | Open | ✅ handshake · 8 tools | [Javadocs.dev](https://javadocs.dev/) |
| [Loadbay](https://appside.build/mcp-servers/loadbay/) | <code>https://loadbay.xyz/api/mcp</code> | Open | ✅ handshake · 6 tools | [Loadbay](https://loadbay.xyz/) |
| [Local Commander](https://appside.build/mcp-servers/local-commander/) | <code>https://localcmd.app/mcp</code> | OAuth | 🔐 auth required | [Local Commander](https://localcmd.app/?utm_source=awesome-remote-mcp&utm_medium=directory&utm_campaign=growth283&utm_content=listing) |
| [MCP Canary](https://appside.build/mcp-servers/mcp-canary/) | <code>https://api.mcpcanary.com/mcp</code> | Open | ✅ handshake · 2 tools | [MCP Canary](https://mcpcanary.com/) |
| [MCP Charts](https://appside.build/mcp-servers/mcp-charts/) | <code>https://mcpcharts.com/mcp</code> | Open | ✅ handshake · 3 tools | [MCP Charts](https://mcpcharts.com/) |
| [mcp.site](https://appside.build/mcp-servers/mcp-site/) | <code>https://mcp.site/mcp/public</code> | Open | ✅ handshake · 3 tools | [InfiWebs](https://mcp.site/) |
| [model.tools](https://appside.build/mcp-servers/model-tools/) | <code>https://mcp.model.tools/mcp</code> | Open | ✅ handshake · 10 tools | [model.tools](https://model.tools/) |
| [Multilocale](https://appside.build/mcp-servers/multilocale/) | <code>https://mcp.multilocale.com/mcp</code> | OAuth | ✅ handshake · 18 tools | [Multilocale](https://www.multilocale.com/integrations/mcp-server/) |
| [Neon](https://appside.build/mcp-servers/neon/) | <code>https://mcp.neon.tech/mcp</code> | OAuth | 🔐 auth required | [Neon](https://neon.tech/) |
| [Netlify](https://appside.build/mcp-servers/netlify/) | <code>https://netlify-mcp.netlify.app/mcp</code> | OAuth | 🔐 auth required | [Netlify](https://netlify.com/) |
| [NoMac](https://appside.build/mcp-servers/nomac/) | <code>https://mcp.nomac.app/mcp</code> | OAuth | 🔐 auth required | [NoMac](https://nomac.app/) |
| [OpenZeppelin Cairo Contracts](https://appside.build/mcp-servers/openzeppelin-cairo-contracts/) | <code>https://mcp.openzeppelin.com/contracts/cairo/mcp</code> | Open | ✅ handshake · 9 tools | [OpenZeppelin](https://openzeppelin.com/) |
| [OpenZeppelin Solidity Contracts](https://appside.build/mcp-servers/openzeppelin-solidity-contracts/) | <code>https://mcp.openzeppelin.com/contracts/solidity/mcp</code> | Open | ✅ handshake · 8 tools | [OpenZeppelin](https://openzeppelin.com/) |
| [OpenZeppelin Stellar Contracts](https://appside.build/mcp-servers/openzeppelin-stellar-contracts/) | <code>https://mcp.openzeppelin.com/contracts/stellar/mcp</code> | Open | ✅ handshake · 6 tools | [OpenZeppelin](https://openzeppelin.com/) |
| [OpenZeppelin Stylus Contracts](https://appside.build/mcp-servers/openzeppelin-stylus-contracts/) | <code>https://mcp.openzeppelin.com/contracts/stylus/mcp</code> | Open | ✅ handshake · 3 tools | [OpenZeppelin](https://openzeppelin.com/) |
| [Persqo](https://appside.build/mcp-servers/persqo/) | <code>https://persqo.com/api/mcp</code> | API Key | 🔐 auth required | [Persqo](https://persqo.com/) |
| [Pinafly UAT](https://appside.build/mcp-servers/pinafly-uat/) | <code>https://pinafly.com/mcp/uat</code> | OAuth | 🔐 auth required | [Pinafly](https://pinafly.com/) |
| [Polar Signals](https://appside.build/mcp-servers/polar-signals/) | <code>https://api.polarsignals.com/api/mcp/</code> | API Key | 🔐 auth required | [Polar Signals](https://www.polarsignals.com/blog/posts/2025/07/17/the-mcp-for-performance-engineering) |
| [Proxy Mail QA](https://appside.build/mcp-servers/proxy-mail-qa/) | <code>https://api.proxymail.qa/mcp</code> | OAuth | 🔐 auth required | [Proxy Mail QA](https://proxymail.qa/) |
| [Relvato](https://appside.build/mcp-servers/relvato/) | <code>https://app.relvato.com/api/mcp</code> | OAuth | ✅ handshake · 58 tools | [Relvato](https://www.relvato.com/) |
| [Remote MCP](https://appside.build/mcp-servers/remote-mcp/) | <code>https://mcp.remote-mcp.com/</code> | Open | ✅ handshake · 1 tools | [Remote MCP](https://remote-mcp.com/) |
| [Rivo Tools](https://appside.build/mcp-servers/rivo-tools/) | <code>https://mcp.rivo.tools/mcp</code> | OAuth | 🔐 auth required | [Rivo Tools](https://rivo.tools/) |
| [Runtime Cloud](https://appside.build/mcp-servers/runtime-cloud/) | <code>https://api.withruntime.com/mcp</code> | OAuth | 🔐 auth required | [Runtime Cloud](https://withruntime.com/) |
| [Shipvela](https://appside.build/mcp-servers/shipvela/) | <code>https://shipvela.com/mcp</code> | OAuth | 🔐 auth required | [Shipvela](https://shipvela.com/integrations/codex) |
| [Sitelemetry](https://appside.build/mcp-servers/sitelemetry/) | <code>https://sitelemetry.com/mcp</code> | OAuth | 🔐 auth required | [Sitelemetry](https://sitelemetry.com/) |
| [SnapVisor](https://appside.build/mcp-servers/snapvisor/) | <code>https://mcp.snapvisor.io/</code> | OAuth | 🔐 auth required | [SnapVisor](https://snapvisor.io/) |
| [SolidPing](https://appside.build/mcp-servers/solidping/) | <code>https://solidping.io/api/v1/mcp</code> | OAuth | 🔐 auth required | [SolidPing](https://www.solidping.io/) |
| [SpriteFuse](https://appside.build/mcp-servers/spritefuse/) | <code>https://spritefuse.com/api/mcp</code> | OAuth | 🔐 auth required | [SpriteFuse](https://spritefuse.com/mcp) |
| [Stack Overflow](https://appside.build/mcp-servers/stack-overflow/) | <code>https://mcp.stackoverflow.com/</code> | OAuth | 🔐 auth required | [StackOverflow](https://stackoverflow.com/) |
| [StoreFast](https://appside.build/mcp-servers/storefast/) | <code>https://storefast.app/mcp</code> | OAuth | 🔐 auth required | [StoreFast](https://storefast.app/) |
| [Tá Rodando](https://appside.build/mcp-servers/ta-rodando/) | <code>https://tarodando.com.br/mcp</code> | OAuth | 🔐 auth required | [Tá Rodando](https://tarodando.com.br/) |
| [upAPI](https://appside.build/mcp-servers/upapi/) | <code>https://app.upapi.io/api/mcp</code> | OAuth | 🔐 auth required | [upAPI](https://upapi.io/) |
| [Uptimely](https://appside.build/mcp-servers/uptimely/) | <code>https://app.getuptimely.com/api/mcp</code> | OAuth | 🔐 auth required | [Uptimely](https://getuptimely.com/) |
| [Vercel](https://appside.build/mcp-servers/vercel/) | <code>https://mcp.vercel.com/</code> | OAuth | 🔐 auth required | [Vercel](https://vercel.com/) |
| [Vinktar](https://appside.build/mcp-servers/vinktar/) | <code>https://mcp.vinktar.com/mcp</code> | OAuth | ✅ handshake · 31 tools | [Vinktar](https://vinktar.com/) |
| [WebZum](https://appside.build/mcp-servers/webzum/) | <code>https://webzum.com/api/mcp</code> | Open | ✅ handshake · 6 tools | [WebZum](https://webzum.com/) |

## Data & Analytics

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Airtable](https://appside.build/mcp-servers/airtable/) | <code>https://mcp.airtable.com/mcp</code> | OAuth | 🔐 auth required | [Airtable](https://airtable.com/) |
| [AlphaPrime](https://appside.build/mcp-servers/alphaprime/) | <code>https://mcp.alphaprime.trading/mcp</code> | OAuth | 🔐 auth required | [AlphaPrime](https://alphaprime.trading/) |
| [baseray](https://appside.build/mcp-servers/baseray/) | <code>https://api.baseray.ai/mcp</code> | OAuth | 🔐 auth required | [baseray](https://baseray.ai/) |
| [BORME API](https://appside.build/mcp-servers/borme-api/) | <code>https://mcp.bormeapi.com/mcp</code> | API Key | ✅ handshake · 10 tools | [BORME API](https://bormeapi.com/mcp) |
| [Cairn Commons](https://appside.build/mcp-servers/cairn-commons/) | <code>https://cairn-commons.com/mcp</code> | OAuth | 🔐 auth required | [Cairn Commons](https://cairn-commons.com/) |
| [Carrier Ledger](https://appside.build/mcp-servers/carrier-ledger/) | <code>https://carrierledger.tryneverclosed.com/mcp</code> | Open | ✅ handshake · 3 tools | [Carrier Ledger](https://carrierledger.tryneverclosed.com/?ref=awesome-remote-mcp) |
| [Context Awesome](https://appside.build/mcp-servers/context-awesome/) | <code>https://www.context-awesome.com/api/mcp</code> | Open | ✅ handshake · 2 tools | [Context Awesome](https://www.context-awesome.com/) |
| [CoworkingView](https://appside.build/mcp-servers/coworkingview/) | <code>https://mcp.coworkingview.com/mcp</code> | Open | ✅ handshake · 10 tools | [CoworkingView](https://coworkingview.com/) |
| [DealScore](https://appside.build/mcp-servers/dealscore/) | <code>https://cardealscore.com/api/mcp</code> | OAuth | ✅ handshake · 3 tools | [DealScore](https://cardealscore.com/agents?ref=jaw9c&utm_source=jaw9c&utm_medium=mcp_directory) |
| [EAN-Search.org](https://appside.build/mcp-servers/ean-search-org/) | <code>https://www.ean-search.org/mcp</code> | OAuth | 🔐 auth required | [EAN-Search.org](https://www.ean-search.org/) |
| [ExtensionDash](https://appside.build/mcp-servers/extensiondash/) | <code>https://extensiondash.com/mcp</code> | OAuth | ✅ handshake · 14 tools | [ExtensionDash](https://extensiondash.com/) |
| [Find My Tide](https://appside.build/mcp-servers/find-my-tide/) | <code>https://api.findmytide.com/mcp</code> | Open | ✅ handshake · 3 tools | [Find My Tide](https://findmytide.com/mcp) |
| [FloorFeed](https://appside.build/mcp-servers/floorfeed/) | <code>https://floorfeed.io/api/mcp</code> | OAuth | 🔐 auth required | [FloorFeed](https://floorfeed.io/) |
| [FluxProof](https://appside.build/mcp-servers/fluxproof/) | <code>https://fluxproof.tryneverclosed.com/mcp</code> | API Key | ✅ handshake · 6 tools | [FluxProof](https://fluxproof.tryneverclosed.com/?ref=awesome-remote-mcp) |
| [GSCmate](https://appside.build/mcp-servers/gscmate/) | <code>https://gscmate.com/mcp</code> | OAuth | 🔐 auth required | [GSCmate](https://gscmate.com/) |
| [Homo Universalis — Viveka](https://appside.build/mcp-servers/homo-universalis-viveka/) | <code>https://homouniversalis.ai/mcp</code> | Open | ✅ handshake · 4 tools | [Homo Universalis](https://homouniversalis.ai/) |
| [Hoot Lens](https://appside.build/mcp-servers/hoot-lens/) | <code>https://mcp.hootlens.com/mcp</code> | OAuth | 🔐 auth required | [Parallel Platforms](https://hootlens.com/) |
| [HousingFeed](https://appside.build/mcp-servers/housingfeed/) | <code>https://housingfeed.com/mcp</code> | Open | ✅ handshake · 5 tools | [HousingFeed](https://housingfeed.com/) |
| [Houston](https://appside.build/mcp-servers/houston/) | <code>https://ok-houston.com/mcp</code> | OAuth | 🔐 auth required | [Houston](https://ok-houston.com/) |
| [iGaming Tools](https://appside.build/mcp-servers/igaming-tools/) | <code>https://mcp.i-gaming.tools/mcp</code> | Open | ✅ handshake · 17 tools | [iGaming Tools](https://i-gaming.tools/) |
| [Invokely](https://appside.build/mcp-servers/invokely/) | <code>https://invokely.ai/mcp</code> | OAuth | 🔐 auth required | [Invokely](https://invokely.ai/) |
| [Kontekstolog](https://appside.build/mcp-servers/kontekstolog/) | <code>https://kontekstolog.online/mcp</code> | OAuth | 🔐 auth required | [Kontekstolog](https://kontekstolog.online/mcp-yandex-direct) |
| [Kyras](https://appside.build/mcp-servers/kyras/) | <code>https://app.kyras.ai/api/mcp/mcp</code> | OAuth | 🔐 auth required | [Kyras by Hint](https://kyras.ai/) |
| [Leadgen ONRC Romania](https://appside.build/mcp-servers/leadgen-onrc-romania/) | <code>https://leadgen-mcp.adrianhomelab.com/mcp</code> | API Key | ✅ handshake · 21 tools | [Leadgen](https://leadgen.adrianhomelab.com/) |
| [looot](https://appside.build/mcp-servers/looot/) | <code>https://api.looot.ai/mcp</code> | OAuth | 🔐 auth required | [looot](https://looot.ai/) |
| [Manifold](https://appside.build/mcp-servers/manifold/) | <code>https://api.manifold.markets/v0/mcp</code> | Open | ✅ handshake · 5 tools | [Manifold](https://manifold.markets/) |
| [Metruvo](https://appside.build/mcp-servers/metruvo/) | <code>https://metruvo.com/api/mcp</code> | other | ✅ handshake · 4 tools | [Metruvo](https://metruvo.com/) |
| [Murkuz](https://appside.build/mcp-servers/murkuz/) | <code>https://murkuz.com/mcp</code> | OAuth | 🔐 auth required | [Murkuz](https://murkuz.com/) |
| [Muvia](https://appside.build/mcp-servers/muvia/) | <code>https://api.muviabi.com/mcp/v1</code> | OAuth | 🔐 auth required | [Muvia](https://muviabi.com/) |
| [Octagon](https://appside.build/mcp-servers/octagon/) | <code>https://mcp.octagonagents.com/mcp</code> | OAuth | 🔐 auth required | [Octagon](https://octagonai.co/) |
| [PampaIA.ar](https://appside.build/mcp-servers/pampaia-ar/) | <code>https://pampaia.ar/mcp</code> | OAuth | 🔐 auth required | [Magirium Labs](https://pampaia.ar/) |
| [Pandlens](https://appside.build/mcp-servers/pandlens/) | <code>https://api.pandlens.com/mcp</code> | API Key | ✅ handshake · 12 tools | [Pandlens](https://pandlens.com/) |
| [Papers by Ouroboros Apps](https://appside.build/mcp-servers/papers-by-ouroboros-apps/) | <code>https://papers-mcp.vercel.app/mcp</code> | OAuth | ✅ handshake · 4 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/papers) |
| [Patent by Ouroboros Apps](https://appside.build/mcp-servers/patent-by-ouroboros-apps/) | <code>https://patent-mcp.vercel.app/mcp</code> | OAuth | ✅ handshake · 4 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/patent) |
| [PeekPanda](https://appside.build/mcp-servers/peekpanda/) | <code>https://mcp.peekpanda.com/mcp</code> | OAuth | 🔐 auth required | [PeekPanda](https://peekpanda.com/) |
| [PMWallets](https://appside.build/mcp-servers/pmwallets/) | <code>https://api.pmwallets.com/mcp</code> | OAuth | 🔐 auth required | [PMWallets](https://pmwallets.com/) |
| [Probative legal-marketing data](https://appside.build/mcp-servers/probative-legal-marketing-data/) | <code>https://probativegrowth.com/mcp</code> | Open | ✅ handshake · 24 tools | [Probative Growth](https://probativegrowth.com/) |
| [QuerySail](https://appside.build/mcp-servers/querysail/) | <code>https://mcp.querysail.com/gsc/mcp</code> | OAuth | 🔐 auth required | [QuerySail](https://querysail.com/google-search-console) |
| [QuerySail Google Analytics](https://appside.build/mcp-servers/querysail-google-analytics/) | <code>https://mcp.querysail.com/ga4/mcp</code> | OAuth | 🔐 auth required | [QuerySail](https://querysail.com/google-analytics) |
| [Rank by Ouroboros Apps](https://appside.build/mcp-servers/rank-by-ouroboros-apps/) | <code>https://rank.ouroborosapps.com/mcp</code> | OAuth | ✅ handshake · 9 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/rank) |
| [SpiderLook](https://appside.build/mcp-servers/spiderlook/) | <code>https://api.spiderlook.com/mcp</code> | OAuth | 🔐 auth required | [SpiderLook](https://spiderlook.com/mcp) |
| [StackRates](https://appside.build/mcp-servers/stackrates/) | <code>https://stackrates.ai/mcp</code> | Open | ✅ handshake · 5 tools | [StackRates](https://stackrates.ai/) |
| [Stanza](https://appside.build/mcp-servers/stanza/) | <code>https://stanzaapi.com/mcp</code> | API Key | ✅ handshake · 13 tools | [Stanza](https://stanzaapi.com/) |
| [Supabase](https://appside.build/mcp-servers/supabase/) | <code>https://mcp.supabase.com/mcp</code> | OAuth | 🔐 auth required | [Supabase](https://supabase.com/) |
| [ThoughtSpot](https://appside.build/mcp-servers/thoughtspot/) | <code>https://agent.thoughtspot.app/mcp</code> | OAuth | 🔐 auth required | [ThoughtSpot](https://thoughtspot.com/) |
| [TradingAgentStack](https://appside.build/mcp-servers/tradingagentstack/) | <code>https://tradingagentstack.com/api/mcp</code> | Open | ✅ handshake · 10 tools | [TradingAgentStack](https://tradingagentstack.com/) |
| [TrendsFast](https://appside.build/mcp-servers/trendsfast/) | <code>https://trendsfast.com/api/mcp/v3</code> | OAuth | ✅ handshake · 8 tools | [TrendsFast](https://trendsfast.com/) |
| [Trudex](https://appside.build/mcp-servers/trudex/) | <code>https://trudex.dev/api/mcp</code> | OAuth | 🔐 auth required | [Trudex](https://trudex.dev/) |
| [UK Planning](https://appside.build/mcp-servers/uk-planning/) | <code>https://uk-planning-mcp.donniertf.workers.dev/mcp</code> | Open | ✅ handshake · 4 tools | [donniertf-hub](https://github.com/donniertf-hub/uk-mcp-fleet) |
| [UK Tenders](https://appside.build/mcp-servers/uk-tenders/) | <code>https://uk-tenders-mcp.donniertf.workers.dev/mcp</code> | Open | ✅ handshake · 4 tools | [donniertf-hub](https://github.com/donniertf-hub/uk-mcp-fleet) |
| [Underanchor](https://appside.build/mcp-servers/underanchor/) | <code>https://underanchor.com/mcp</code> | OAuth | 🔐 auth required | [Underanchor](https://underanchor.com/) |
| [Vaneform](https://appside.build/mcp-servers/vaneform/) | <code>https://vaneform.com/mcp</code> | API Key | ✅ handshake · 10 tools | [Vaneform](https://vaneform.com/) |
| [VATFind](https://appside.build/mcp-servers/vatfind/) | <code>https://vatfind.com/api/mcp</code> | OAuth | 🔐 auth required | [VATFind](https://vatfind.com/docs/mcp) |
| [VRAMGlass](https://appside.build/mcp-servers/vramglass/) | <code>https://mcp.vramglass.com/mcp</code> | OAuth | 🔐 auth required | [VRAMGlass](https://vramglass.com/mcp) |
| [Whimbrel: Medtech Research](https://appside.build/mcp-servers/whimbrel-medtech-research/) | <code>https://data.whimbrelresearch.com/</code> | OAuth | 🔐 auth required | [Whimbrel Research](https://whimbrelresearch.com/) |

## Productivity

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Agents Handbook](https://appside.build/mcp-servers/agents-handbook/) | <code>https://agentshandbook.com/mcp</code> | Open | ✅ handshake · 11 tools | [Agents Handbook](https://agentshandbook.com/) |
| [Align](https://appside.build/mcp-servers/align/) | <code>https://api.meet-align.com/mcp</code> | OAuth | 🔐 auth required | [Align](https://meet-align.com/mcp) |
| [Annsa](https://appside.build/mcp-servers/annsa/) | <code>https://app.annsa.ai/mcp</code> | OAuth | 🔐 auth required | [Annsa](https://annsa.ai/) |
| [arkerah](https://appside.build/mcp-servers/arkerah/) | <code>https://app.arkerah.com/api/mcp</code> | OAuth | 🔐 auth required | [arkerah](https://arkerah.com/) |
| [Asana](https://appside.build/mcp-servers/asana/) | <code>https://mcp.asana.com/sse</code> | OAuth | 🔐 auth required | [Asana](https://asana.com/) |
| [Attio](https://appside.build/mcp-servers/attio/) | <code>https://mcp.attio.com/mcp</code> | OAuth | 🔐 auth required | [Attio](https://attio.com/) |
| [Bay Area Mobile Dog Wash](https://appside.build/mcp-servers/bay-area-mobile-dog-wash/) | <code>https://bayareamobiledogwash.com/api/mcp</code> | Open | ✅ handshake · 6 tools | [Bay Area Mobile Dog Wash](https://bayareamobiledogwash.com/) |
| [Calculate Pool](https://appside.build/mcp-servers/calculate-pool/) | <code>https://calculatepool.com/mcp?src=mcp</code> | Open | ✅ handshake · 5 tools | [Calculate Pool](https://calculatepool.com/) |
| [Calculator for Grading](https://appside.build/mcp-servers/calculator-for-grading/) | <code>https://calculatorforgrading.com/mcp?src=mcp</code> | Open | ✅ handshake · 6 tools | [Calculator for Grading](https://calculatorforgrading.com/) |
| [Calendly](https://appside.build/mcp-servers/calendly/) | <code>https://mcp.calendly.com/</code> | OAuth | 🔐 auth required | [Calendly](https://calendly.com/) |
| [Caly](https://appside.build/mcp-servers/caly/) | <code>https://mcp.trycaly.com/mcp</code> | OAuth | 🔐 auth required | [Caly](https://trycaly.com/) |
| [Carbon Voice](https://appside.build/mcp-servers/carbon-voice/) | <code>https://mcp.carbonvoice.app/</code> | OAuth | 🔐 auth required | [Carbon Voice](https://getcarbon.app/) |
| [CheckTaJob](https://appside.build/mcp-servers/checktajob/) | <code>https://api.checktajob.com/mcp</code> | OAuth | 🔐 auth required | [CheckTaJob](https://checktajob.com/) |
| [Circleback](https://appside.build/mcp-servers/circleback/) | <code>https://circleback.ai/api/mcp</code> | OAuth | 🔐 auth required | [Circleback](https://circleback.ai/) |
| [ClickUp](https://appside.build/mcp-servers/clickup/) | <code>https://mcp.clickup.com/mcp</code> | OAuth | 🔐 auth required | [ClickUp](https://clickup.com/) |
| [Close CRM](https://appside.build/mcp-servers/close-crm/) | <code>https://mcp.close.com/mcp</code> | OAuth | 🔐 auth required | [Close](https://close.com/) |
| [Desk by Ouroboros Apps](https://appside.build/mcp-servers/desk-by-ouroboros-apps/) | <code>https://desk-mcp-continuity2.vercel.app/mcp</code> | OAuth | ✅ handshake · 13 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/desk) |
| [Evidence Board](https://appside.build/mcp-servers/evidence-board/) | <code>https://evidence.mtgtechnical.com/api/mcp</code> | OAuth | 🔐 auth required | [Evidence Board](https://evidence.mtgtechnical.com/) |
| [Fathom](https://appside.build/mcp-servers/fathom/) | <code>https://api.fathom.ai/mcp</code> | OAuth | 🔐 auth required | [Fathom](https://fathom.ai/) |
| [Find-A-Domain](https://appside.build/mcp-servers/find-a-domain/) | <code>https://api.findadomain.dev/mcp</code> | Open | ✅ handshake · 2 tools | [Find-A-Domain](https://findadomain.dev/) |
| [Fireflies.ai](https://appside.build/mcp-servers/fireflies-ai/) | <code>https://api.fireflies.ai/mcp</code> | OAuth | 🔐 auth required | [Fireflies.ai](https://fireflies.ai/) |
| [flconsole](https://appside.build/mcp-servers/flconsole/) | <code>https://mcp.lite.flconsole.com/mcp</code> | OAuth | 🔐 auth required | [flconsole](https://flconsole.com/) |
| [GetItDone](https://appside.build/mcp-servers/getitdone/) | <code>https://app.nowgetitdone.com/api/mcp</code> | OAuth | 🔐 auth required | [GetItDone](https://nowgetitdone.com/) |
| [gotlinq](https://appside.build/mcp-servers/gotlinq/) | <code>https://gotlinq.com/mcp</code> | OAuth | 🔐 auth required | [gotlinq](https://gotlinq.com/mcp-server) |
| [Granola](https://appside.build/mcp-servers/granola/) | <code>https://mcp.granola.ai/mcp</code> | OAuth | 🔐 auth required | [Granola](https://granola.ai/) |
| [Headcount Labs](https://appside.build/mcp-servers/headcount-labs/) | <code>https://api.headcountlabs.com/mcp</code> | OAuth | 🔐 auth required | [Headcount Labs](https://headcountlabs.com/) |
| [HireLayer](https://appside.build/mcp-servers/hirelayer/) | <code>https://hirelayer.co/mcp</code> | OAuth | 🔐 auth required | [HireLayer](https://hirelayer.co/) |
| [HubSpot](https://appside.build/mcp-servers/hubspot/) | <code>https://app.hubspot.com/mcp/v1/http</code> | API Key | 🔐 auth required | [HubSpot](https://hubspot.com/) |
| [Indeed](https://appside.build/mcp-servers/indeed/) | <code>https://mcp.indeed.com/claude/mcp</code> | OAuth | 🔐 auth required | [Indeed](https://indeed.com/) |
| [Intercom](https://appside.build/mcp-servers/intercom/) | <code>https://mcp.intercom.com/sse</code> | OAuth | 🔐 auth required | [Intercom](https://intercom.com/) |
| [JustBacked](https://appside.build/mcp-servers/justbacked/) | <code>https://justbacked.com/api/mcp</code> | OAuth | ✅ handshake · 14 tools | [JustBacked](https://justbacked.com/) |
| [Kaiku](https://appside.build/mcp-servers/kaiku/) | <code>https://mcp.kaiku.tech/mcp</code> | API Key | ✅ handshake · 203 tools | [Kaiku](https://kaiku.tech/) |
| [KanbanMCP](https://appside.build/mcp-servers/kanbanmcp/) | <code>https://kanbanmcp.com/</code> | OAuth | ✅ handshake · 31 tools | [Onitsoga Labs](https://kanbanmcp.com/) |
| [Level](https://appside.build/mcp-servers/level/) | <code>https://jobsbylevel.com/mcp</code> | Open | ✅ handshake · 8 tools | [Level](https://jobsbylevel.com/developers) |
| [LFG Alarm](https://appside.build/mcp-servers/lfg-alarm/) | <code>https://mcp.lfg.gm/</code> | OAuth | 🔐 auth required | [LFG Alarm](https://lfg.gm/) |
| [Lintelly HR Deutschland](https://appside.build/mcp-servers/lintelly-hr-deutschland/) | <code>https://hr.lintelly.com/mcp</code> | Open | ✅ handshake · 38 tools | [Lintelly](https://lintelly.com/hr) |
| [Listenetic](https://appside.build/mcp-servers/listenetic/) | <code>https://mcp.listenetic.com/v1/mcp</code> | OAuth | 🔐 auth required | [Listenetic](https://app.listenetic.com/) |
| [Milestone by Ouroboros Apps](https://appside.build/mcp-servers/milestone-by-ouroboros-apps/) | <code>https://milestone-continuity2.vercel.app/mcp</code> | OAuth | ✅ handshake · 15 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/milestone) |
| [NogPets](https://appside.build/mcp-servers/nogpets/) | <code>https://mcp.nogpets.com/mcp</code> | OAuth | 🔐 auth required | [NogPets](https://nogpets.com/for-groomers) |
| [Notion](https://appside.build/mcp-servers/notion/) | <code>https://mcp.notion.com/sse</code> | OAuth | 🔐 auth required | [Notion](https://notion.so/) |
| [Otter.ai](https://appside.build/mcp-servers/otter-ai/) | <code>https://mcp.otter.ai/mcp</code> | OAuth | 🔐 auth required | [Otter.ai](https://otter.ai/) |
| [Pagelive](https://appside.build/mcp-servers/pagelive/) | <code>https://app.pagelive.io/api/mcp</code> | OAuth | 🔐 auth required | [Pagelive](https://pagelive.io/) |
| [Pathista](https://appside.build/mcp-servers/pathista/) | <code>https://pathista.com/mcp</code> | OAuth | 🔐 auth required | [Pathista](https://pathista.com/) |
| [ppl](https://appside.build/mcp-servers/ppl/) | <code>https://withppl.com/mcp</code> | OAuth | 🔐 auth required | [ppl](https://withppl.com/) |
| [QuickPick](https://appside.build/mcp-servers/quickpick/) | <code>https://www.quickpick.space/api/mcp</code> | OAuth | 🔐 auth required | [QuickPick](https://www.quickpick.space/mcp) |
| [Read AI](https://appside.build/mcp-servers/read-ai/) | <code>https://api.read.ai/mcp</code> | OAuth | 🔐 auth required | [Read AI](https://read.ai/) |
| [Rowbrief](https://appside.build/mcp-servers/rowbrief/) | <code>https://rowbrief.inkcroft.com/mcp</code> | OAuth | 🔐 auth required | [Inkcroft](https://rowbrief.inkcroft.com/) |
| [Scope by Ouroboros Apps](https://appside.build/mcp-servers/scope-by-ouroboros-apps/) | <code>https://scope-continuity2.vercel.app/mcp</code> | OAuth | ✅ handshake · 9 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/scope) |
| [ScreenVerb](https://appside.build/mcp-servers/screenverb/) | <code>https://mcp.screenverb.com/mcp</code> | OAuth | 🔐 auth required | [ScreenVerb](https://screenverb.com/) |
| [Shorty](https://appside.build/mcp-servers/shorty/) | <code>https://aishorty.com/api/mcp</code> | OAuth | 🔐 auth required | [Shorty](https://aishorty.com/) |
| [StaffPick](https://appside.build/mcp-servers/staffpick/) | <code>https://staffpick.ai/mcp</code> | OAuth | 🔐 auth required | [StaffPick](https://staffpick.ai/) |
| [tl;dv](https://appside.build/mcp-servers/tl-dv/) | <code>https://mcp.tldv.io/mcp</code> | OAuth | 🔐 auth required | [tl;dv](https://tldv.io/) |
| [Todoist](https://appside.build/mcp-servers/todoist/) | <code>https://ai.todoist.net/mcp</code> | OAuth | 🔐 auth required | [Doist](https://todoist.com/) |
| [Unblockd](https://appside.build/mcp-servers/unblockd/) | <code>https://unblockd.ai/mcp</code> | OAuth | 🔐 auth required | [Unblockd](https://unblockd.ai/) |
| [Vocenya](https://appside.build/mcp-servers/vocenya/) | <code>https://vocenya.com/mcp/platform</code> | OAuth | 🔐 auth required | [Vocenya](https://vocenya.com/) |
| [Vorsorge-Regeln](https://appside.build/mcp-servers/vorsorge-regeln/) | <code>https://vorsorge-regeln.de/mcp.php?src=mcp</code> | Open | ✅ handshake · 4 tools | [Vorsorge-Regeln](https://vorsorge-regeln.de/) |
| [Wolfram](https://appside.build/mcp-servers/wolfram/) | <code>https://agenttools.wolfram.com/mcp</code> | Open | ✅ handshake · 3 tools | [Wolfram Research](https://www.wolfram.com/) |
| [Xenition](https://appside.build/mcp-servers/xenition/) | <code>https://api.xenition.com/mcp</code> | OAuth | ✅ handshake · 68 tools | [Xenition](https://xenition.com/) |
| [Zapier](https://appside.build/mcp-servers/zapier/) | <code>https://mcp.zapier.com/api/mcp/mcp</code> | API Key | 🔐 auth required | [Zapier](https://zapier.com/) |

## Communication

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [AI Mail MCP](https://appside.build/mcp-servers/ai-mail-mcp/) | <code>https://aimailmcp.com/mcp</code> | OAuth | 🔐 auth required | [AI Mail MCP](https://aimailmcp.com/) |
| [AskOne](https://appside.build/mcp-servers/askone/) | <code>https://askone.org/api/mcp</code> | OAuth | 🔐 auth required | [AskOne](https://askone.org/) |
| [ChatRail](https://appside.build/mcp-servers/chatrail/) | <code>https://www.chatrail.dev/v1/mcp</code> | OAuth | 🔐 auth required | [ChatRail](https://www.chatrail.dev/) |
| [CommSync](https://appside.build/mcp-servers/commsync/) | <code>https://server.commsync.ai/api/mcp</code> | OAuth | 🔐 auth required | [CommSync](https://commsync.ai/) |
| [crosswalk](https://appside.build/mcp-servers/crosswalk/) | <code>https://mcp.crosswalk.to/</code> | OAuth | 🔐 auth required | [crosswalk](https://crosswalk.to/) |
| [Dialer](https://appside.build/mcp-servers/dialer/) | <code>https://getdialer.app/sse</code> | OAuth | 🔐 auth required | [Dialer](https://getdialer.app/) |
| [DirectMailAmerica](https://appside.build/mcp-servers/directmailamerica/) | <code>https://directmailamerica.com/api/mcp</code> | OAuth | ✅ handshake · 75 tools | [Rainmaker LLC](https://directmailamerica.com/?utm_source=jaw9c&utm_medium=referral&utm_campaign=mcp_directories) |
| [DomainSpace](https://appside.build/mcp-servers/domainspace/) | <code>https://domainspace.si/mcp</code> | API Key | ✅ handshake · 15 tools | [DomainSpace](https://domainspace.si/agents) |
| [Grupy](https://appside.build/mcp-servers/grupy/) | <code>https://mcp.grupy.chat/mcp</code> | OAuth | 🔐 auth required | [Grupy](https://grupy.chat/) |
| [Notifly](https://appside.build/mcp-servers/notifly/) | <code>https://api.notifly.io/mcp</code> | OAuth | 🔐 auth required | [Notifly](https://notifly.io/) |
| [SendFaxFast](https://appside.build/mcp-servers/sendfaxfast/) | <code>https://sendfaxfast.com/api/mcp-oauth.php</code> | OAuth | 🔐 auth required | [SendFaxFast](https://sendfaxfast.com/ai-connect.html) |
| [SendHQ](https://appside.build/mcp-servers/sendhq/) | <code>https://mcp.sendhq.cc/mcp</code> | OAuth | 🔐 auth required | [SendHQ](https://sendhq.cc/docs/mcp) |
| [Sending](https://appside.build/mcp-servers/sending/) | <code>https://sending.dev/api/mcp</code> | OAuth | 🔐 auth required | [Sending](https://sending.dev/) |
| [Sendly](https://appside.build/mcp-servers/sendly/) | <code>https://app.sendly.now/api/mcp</code> | OAuth | 🔐 auth required | [Sendly](https://sendly.now/) |
| [SendRaven](https://appside.build/mcp-servers/sendraven/) | <code>https://mcp.sendraven.ai/mcp</code> | OAuth | ✅ handshake · 63 tools | [SendRaven](https://sendraven.ai/) |
| [Signatoro](https://appside.build/mcp-servers/signatoro/) | <code>https://signatoro.com/mcp</code> | OAuth | ✅ handshake · 11 tools | [Signatoro](https://signatoro.com/) |
| [Slack](https://appside.build/mcp-servers/slack/) | <code>https://mcp.slack.com/mcp</code> | OAuth | 🔐 auth required | [Slack](https://slack.com/) |
| [Sparetext](https://appside.build/mcp-servers/sparetext/) | <code>https://sparetext.dev/mcp</code> | OAuth | 🔐 auth required | [Sparetext](https://sparetext.dev/) |
| [Telnyx](https://appside.build/mcp-servers/telnyx/) | <code>https://api.telnyx.com/v2/mcp</code> | API Key | ✅ handshake · 6 tools | [Telnyx](https://telnyx.com/) |
| [WA MCP](https://appside.build/mcp-servers/wa-mcp/) | <code>https://server.wa-mcp.com/mcp</code> | OAuth | 🔐 auth required | [WA MCP](https://wa-mcp.com/) |
| [Zoom](https://appside.build/mcp-servers/zoom/) | <code>https://mcp.zoom.us/mcp/zoom/streamable</code> | OAuth | 🔐 auth required | [Zoom](https://zoom.us/) |
| [zoomfort](https://appside.build/mcp-servers/zoomfort/) | <code>https://mail.zoomfort.com/mcp</code> | OAuth | 🔐 auth required | [zoomfort](https://zoomfort.com/) |

## Social Media

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Baixador do Afiliado](https://appside.build/mcp-servers/baixador-do-afiliado/) | <code>https://baixadorafiliado.com/mcp</code> | OAuth | ✅ handshake · 5 tools | [Baixador do Afiliado](https://baixadorafiliado.com/ia) |
| [DMParrot](https://appside.build/mcp-servers/dmparrot/) | <code>https://dmparrot.com/mcp</code> | OAuth | 🔐 auth required | [DMParrot](https://dmparrot.com/) |
| [Hookbird](https://appside.build/mcp-servers/hookbird/) | <code>https://app.hookbird.ai/mcp-oauth-dynamic</code> | OAuth | 🔐 auth required | [Hookbird](https://hookbird.ai/agents) |
| [Klype AI](https://appside.build/mcp-servers/klype-ai/) | <code>https://api.klype.ai/api/v1/mcp</code> | OAuth | 🔐 auth required | [Klype AI](https://klype.ai/) |
| [LurkAPI](https://appside.build/mcp-servers/lurkapi/) | <code>https://api.lurkapi.com/mcp</code> | OAuth | 🔐 auth required | [LurkAPI](https://lurkapi.com/) |
| [MediaFast](https://appside.build/mcp-servers/mediafast/) | <code>https://api.mediafa.st/mcp</code> | OAuth | 🔐 auth required | [MediaFast](https://www.mediafa.st/) |
| [Mutator](https://appside.build/mcp-servers/mutator/) | <code>https://mutator.app/mcp</code> | OAuth | 🔐 auth required | [Mutator](https://mutator.app/) |
| [Postemi](https://appside.build/mcp-servers/postemi/) | <code>https://mcp.postemi.com/mcp</code> | OAuth | 🔐 auth required | [Postemi](https://postemi.com/) |
| [Postify](https://appside.build/mcp-servers/postify/) | <code>https://app.usepostify.com/api/mcp</code> | OAuth | 🔐 auth required | [Postify](https://usepostify.com/) |
| [PostQuest](https://appside.build/mcp-servers/postquest/) | <code>https://mcp.post-quest.com/mcp</code> | OAuth | 🔐 auth required | [PostQuest](https://post-quest.com/mcp) |
| [PostWire](https://appside.build/mcp-servers/postwire/) | <code>https://postwire.io/api/mcp</code> | OAuth | ✅ handshake · 26 tools | [PostWire](https://postwire.io/) |
| [ScraperSocial](https://appside.build/mcp-servers/scrapersocial/) | <code>https://mcp.scrapersocial.com/</code> | OAuth | 🔐 auth required | [ScraperSocial](https://scrapersocial.com/) |
| [Scrollhound](https://appside.build/mcp-servers/scrollhound/) | <code>https://api.scrollhound.com/mcp</code> | OAuth | 🔐 auth required | [Scrollhound](https://scrollhound.com/) |
| [SkedCast](https://appside.build/mcp-servers/skedcast/) | <code>https://api.skedcast.com/mcp</code> | OAuth | 🔐 auth required | [SkedCast](https://skedcast.com/) |
| [Sloppable](https://appside.build/mcp-servers/sloppable/) | <code>https://sloppable.pages.dev/mcp</code> | API Key | ✅ handshake · 15 tools | [Sloppable](https://sloppable.pages.dev/) |
| [Tavern Talk Bot Lounge](https://appside.build/mcp-servers/tavern-talk-bot-lounge/) | <code>https://tavern-talk.pages.dev/mcp</code> | API Key | ✅ handshake · 10 tools | [PatriotTactical](https://github.com/PatriotTactical/tavern-talk-mcp) |
| [Transcribe A Reel](https://appside.build/mcp-servers/transcribe-a-reel/) | <code>https://transcribeareel.com/mcp</code> | Open | ✅ handshake · 3 tools | [transcribeareel.com](https://transcribeareel.com/) |
| [VibeMarketing](https://appside.build/mcp-servers/vibemarketing/) | <code>https://vibemarketing.ninja/mcp</code> | OAuth | ✅ handshake · 7 tools | [VibeMarketing](https://vibemarketing.ninja/) |
| [Weir](https://appside.build/mcp-servers/weir/) | <code>https://api.weirapp.io/mcp</code> | OAuth | 🔐 auth required | [Weir](https://weirapp.io/) |

## Marketing & SEO

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [BacklinkGenie](https://appside.build/mcp-servers/backlinkgenie/) | <code>https://app.backlinkgenie.com/mcp</code> | OAuth | 🔐 auth required | [BacklinkGenie](https://backlinkgenie.com/) |
| [BioFlow](https://appside.build/mcp-servers/bioflow/) | <code>https://app.getbioflow.com/api/mcp</code> | OAuth | 🔐 auth required | [BioFlow](https://getbioflow.com/) |
| [Claim by Ouroboros Apps](https://appside.build/mcp-servers/claim-by-ouroboros-apps/) | <code>https://claim-continuity2.vercel.app/mcp</code> | OAuth | ✅ handshake · 10 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/claim) |
| [GEO SEO Records](https://appside.build/mcp-servers/geo-seo-records/) | <code>https://api.seorecords.com/mcp/geo</code> | Open | ✅ handshake · 4 tools | [SEO Records](https://seorecords.com/) |
| [Go Rocket](https://appside.build/mcp-servers/go-rocket/) | <code>https://www.go-rocket.ai/mcp/</code> | Open | ✅ handshake · 5 tools | [Go Rocket](https://www.go-rocket.ai/mcp-setup/) |
| [Google Maps Scraper](https://appside.build/mcp-servers/google-maps-scraper/) | <code>https://gmapsleadfinder.com/mcp</code> | API Key | ✅ handshake · 10 tools | [GMaps Lead Finder](https://gmapsleadfinder.com/) |
| [GSC Magic](https://appside.build/mcp-servers/gsc-magic/) | <code>https://mcp.gscmagic.com/mcp</code> | OAuth | 🔐 auth required | [GSC Magic](https://gscmagic.com/) |
| [HarborRank](https://appside.build/mcp-servers/harborrank/) | <code>https://app.harborrank.com/mcp</code> | OAuth | 🔐 auth required | [HarborRank](https://harborrank.com/) |
| [LeadMCP](https://appside.build/mcp-servers/leadmcp/) | <code>https://mcp.leadmcp.ai/</code> | OAuth | 🔐 auth required | [LeadMCP](https://leadmcp.ai/) |
| [LivePublicator](https://appside.build/mcp-servers/livepublicator/) | <code>https://livepublicator.com/api/mcp</code> | OAuth | ✅ handshake · 9 tools | [LivePublicator](https://livepublicator.com/) |
| [Localnord](https://appside.build/mcp-servers/localnord/) | <code>https://app.localnord.io/api/mcp/mcp</code> | OAuth | 🔐 auth required | [Localnord](https://www.localnord.io/) |
| [Manifold](https://appside.build/mcp-servers/manifold-2/) | <code>https://mcp.manifoldmcp.com/mcp</code> | OAuth | 🔐 auth required | [Manifold](https://www.manifoldmcp.com/) |
| [Nabit](https://appside.build/mcp-servers/nabit/) | <code>https://nabit.ai/mcp</code> | OAuth | 🔐 auth required | [Nabit](https://nabit.ai/) |
| [Porteur](https://appside.build/mcp-servers/porteur/) | <code>https://porteur.ai/mcp</code> | OAuth | 🔐 auth required | [Porteur](https://porteur.ai/) |
| [Prends](https://appside.build/mcp-servers/prends/) | <code>https://prends.app/mcp</code> | OAuth | 🔐 auth required | [Smarter Futures LLC](https://prends.app/) |
| [Proofsource](https://appside.build/mcp-servers/proofsource/) | <code>https://app.proofsource.co/v1/mcp</code> | OAuth | ✅ handshake · 15 tools | [Proofsource](https://proofsource.co/ai-assistants) |
| [QRFLOW.codes](https://appside.build/mcp-servers/qrflow-codes/) | <code>https://qrflow.codes/mcp</code> | OAuth | 🔐 auth required | [QRFLOW.codes](https://qrflow.codes/) |
| [SeeGeo](https://appside.build/mcp-servers/seegeo/) | <code>https://see-geo.com/mcp/anonymous</code> | Open | ✅ handshake · 3 tools | [SeeGeo](https://see-geo.com/) |
| [SeeGeo (account)](https://appside.build/mcp-servers/seegeo-account/) | <code>https://see-geo.com/mcp</code> | OAuth | 🔐 auth required | [SeeGeo](https://see-geo.com/) |
| [SendLit](https://appside.build/mcp-servers/sendlit/) | <code>https://api.sendlit.app/mcp</code> | OAuth | 🔐 auth required | [SendLit](https://sendlit.app/) |
| [SEO Records](https://appside.build/mcp-servers/seo-records/) | <code>https://api.seorecords.com/mcp</code> | Open | ✅ handshake · 5 tools | [SEO Records](https://seorecords.com/) |
| [SEO Records Corrector](https://appside.build/mcp-servers/seo-records-corrector/) | <code>https://api.seorecords.com/mcp/corrector</code> | Open | ✅ handshake · 2 tools | [SEO Records](https://seorecords.com/) |
| [SEO·AEO·GEO](https://appside.build/mcp-servers/seo-aeo-geo/) | <code>https://seoaeogeo.app/mcp</code> | Open | ✅ handshake · 2 tools | [SEO·AEO·GEO](https://seoaeogeo.app/) |
| [zip1.io](https://appside.build/mcp-servers/zip1-io/) | <code>https://zip1.io/mcp</code> | Open | ✅ handshake · 4 tools | [zip1.io](https://zip1.io/) |

## Advertising

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Ad Radar](https://appside.build/mcp-servers/ad-radar/) | <code>https://app.ad-radar.dev/api/mcp</code> | API Key | ✅ handshake · 6 tools | [Ad Radar](https://ad-radar.dev/) |
| [Adrails](https://appside.build/mcp-servers/adrails/) | <code>https://adrails.ai/api/mcp</code> | OAuth | 🔐 auth required | [Adrails](https://adrails.ai/) |
| [AdRecast](https://appside.build/mcp-servers/adrecast/) | <code>https://adrecast.com/api/mcp</code> | API Key | 🔐 auth required | [AdRecast](https://adrecast.com/) |
| [Ads MCP](https://appside.build/mcp-servers/ads-mcp/) | <code>https://adsmcp.dev/mcp</code> | OAuth | 🔐 auth required | [Ads MCP](https://adsmcp.dev/) |
| [AdsCove](https://appside.build/mcp-servers/adscove/) | <code>https://adscove.com/api/mcp</code> | OAuth | 🔐 auth required | [AdsCove](https://adscove.com/) |
| [Krafters](https://appside.build/mcp-servers/krafters/) | <code>https://www.krafters.fr/mcp</code> | OAuth | 🔐 auth required | [Krafters](https://www.krafters.fr/) |
| [Meta Ads by Pipeboard](https://appside.build/mcp-servers/meta-ads-by-pipeboard/) | <code>https://mcp.pipeboard.co/meta-ads-mcp</code> | OAuth | 🔐 auth required | [Pipeboard](https://pipeboard.co/) |
| [SponsorHound](https://appside.build/mcp-servers/sponsorhound/) | <code>https://mcp.sponsorhound.com/mcp</code> | OAuth | 🔐 auth required | [SponsorHound](https://sponsorhound.com/) |

## Finance & Payments

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Aggregate](https://appside.build/mcp-servers/aggregate/) | <code>https://app.aggregate.finance/mcp</code> | OAuth | 🔐 auth required | [Aggregate](https://aggregate.finance/) |
| [Before the Lot](https://appside.build/mcp-servers/before-the-lot/) | <code>https://beforethelot.com/mcp</code> | Open | ✅ handshake · 16 tools | [Volocent Labs](https://beforethelot.com/) |
| [CentsCheck AI Link](https://appside.build/mcp-servers/centscheck-ai-link/) | <code>https://mcp.centscheck.com/mcp</code> | OAuth | 🔐 auth required | [CentsCheck](https://centscheck.com/) |
| [Cloudinary](https://appside.build/mcp-servers/cloudinary/) | <code>https://asset-management.mcp.cloudinary.com/sse</code> | OAuth | 🔐 auth required | [Cloudinary](https://cloudinary.com/) |
| [Cubicle](https://appside.build/mcp-servers/cubicle/) | <code>https://cubicle.algotrada.com/deck/api/mcp</code> | API Key | ✅ handshake · 48 tools | [Cubicle (AlgoTrada)](https://cubicle.algotrada.com/) |
| [Deposit by Ouroboros Apps](https://appside.build/mcp-servers/deposit-by-ouroboros-apps/) | <code>https://deposit-continuity2.vercel.app/mcp</code> | OAuth | ✅ handshake · 12 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/deposit) |
| [Ekwo](https://appside.build/mcp-servers/ekwo/) | <code>https://mcp.ekwo.ai/mcp</code> | OAuth | 🔐 auth required | [Ekwo](https://ekwo.ai/) |
| [Foresee](https://appside.build/mcp-servers/foresee/) | <code>https://agents.go-foresee.com/mcp</code> | Open | ✅ handshake · 2 tools | [Foresee](https://go-foresee.com/) |
| [Formquote](https://appside.build/mcp-servers/formquote/) | <code>https://formquote-mcp.chen-yu-d1.workers.dev/mcp</code> | Open | ✅ handshake · 4 tools | [Formquote](https://pcba-quote-lab.pages.dev/en/) |
| [Invoice by Ouroboros Apps](https://appside.build/mcp-servers/invoice-by-ouroboros-apps/) | <code>https://invoice-continuity2.vercel.app/mcp</code> | OAuth | ✅ handshake · 13 tools | [Ouroboros Apps](https://ouroborosapps.com/docs/invoice) |
| [Optionscanner](https://appside.build/mcp-servers/optionscanner/) | <code>https://optionscanner.ai/mcp</code> | Open | ✅ handshake · 10 tools | [Optionscanner](https://optionscanner.ai/) |
| [outcometick](https://appside.build/mcp-servers/outcometick/) | <code>https://outcometick.com/v1/mcp</code> | OAuth | 🔐 auth required | [outcometick](https://outcometick.com/) |
| [PayPal](https://appside.build/mcp-servers/paypal/) | <code>https://mcp.paypal.com/sse</code> | OAuth | 🔐 auth required | [PayPal](https://paypal.com/) |
| [Poplin](https://appside.build/mcp-servers/poplin/) | <code>https://agents.poplinmoney.com/public</code> | Open | ✅ handshake · 11 tools | [Poplin](https://poplinmoney.com/) |
| [Poplin account](https://appside.build/mcp-servers/poplin-account/) | <code>https://agents.poplinmoney.com/account</code> | OAuth | 🔐 auth required | [Poplin](https://poplinmoney.com/) |
| [Ramp](https://appside.build/mcp-servers/ramp/) | <code>https://ramp-mcp-remote.ramp.com/mcp</code> | OAuth | 🔐 auth required | [Ramp](https://ramp.com/) |
| [Retirement Atlas](https://appside.build/mcp-servers/retirement-atlas/) | <code>https://retirement-atlas.pages.dev/mcp</code> | Open | ✅ handshake · 4 tools | [Retirement Atlas](https://retirement-atlas.pages.dev/) |
| [Silicon Floor](https://appside.build/mcp-servers/silicon-floor/) | <code>https://siliconfloor.com/mcp</code> | Open | ✅ handshake · 19 tools | [Silicon Floor](https://siliconfloor.com/) |
| [Square](https://appside.build/mcp-servers/square/) | <code>https://mcp.squareup.com/sse</code> | OAuth | 🔐 auth required | [Square](https://square.com/) |
| [Stripe](https://appside.build/mcp-servers/stripe/) | <code>https://mcp.stripe.com/</code> | OAuth | 🔐 auth required | [Stripe](https://stripe.com/) |
| [SuperBooks](https://appside.build/mcp-servers/superbooks/) | <code>https://app.superbooks.io/mcp</code> | OAuth | 🔐 auth required | [SuperBooks](https://superbooks.io/) |

## Crypto & Web3

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [47620 Base + Polygon Data](https://appside.build/mcp-servers/47620-base-polygon-data/) | <code>https://47620.xyz/mcp/evm</code> | other | ✅ handshake · 18 tools | [47620](https://github.com/fito311/evm-data-mcp) |
| [47620 Solana Data](https://appside.build/mcp-servers/47620-solana-data/) | <code>https://47620.xyz/mcp</code> | other | ✅ handshake · 52 tools | [47620](https://github.com/fito311/solana-data-mcp) |
| [ADEXTO](https://appside.build/mcp-servers/adexto/) | <code>https://adexto.xyz/api/mcp</code> | Open | ✅ handshake · 14 tools | [ADEXTO](https://adexto.xyz/) |
| [Archalis Radar](https://appside.build/mcp-servers/archalis-radar/) | <code>https://api.archalis.com/v1/mcp</code> | API Key | ✅ handshake · 4 tools | [Archalis](https://archalis.com/) |
| [Chord](https://appside.build/mcp-servers/chord/) | <code>https://api.getchord.xyz/v1/mcp</code> | API Key | ✅ handshake · 17 tools | [Chord](https://getchord.xyz/) |
| [Dexra](https://appside.build/mcp-servers/dexra/) | <code>https://api.dexra.dev/mcp</code> | API Key | ✅ handshake · 12 tools | [Dexra](https://dexra.dev/) |
| [Hive Intelligence](https://appside.build/mcp-servers/hive-intelligence/) | <code>https://hiveintelligence.xyz/mcp</code> | OAuth | ✅ handshake · 8 tools | [Hive Intelligence](https://hiveintelligence.xyz/) |
| [LPSignal](https://appside.build/mcp-servers/lpsignal/) | <code>https://api.lpsignal.app/v1/mcp</code> | OAuth | 🔐 auth required | [LPSignal](https://lpsignal.app/) |
| [MoltNode by Chord](https://appside.build/mcp-servers/moltnode-by-chord/) | <code>https://moltnode.ag/mcp</code> | Open | ✅ handshake · 7 tools | [MoltNode / Chord](https://moltnode.ag/) |
| [TxWhy](https://appside.build/mcp-servers/txwhy/) | <code>https://txwhy.vercel.app/api/mcp</code> | Open | ✅ handshake · 3 tools | [TxWhy](https://txwhy.vercel.app/) |
| [WakeTrades](https://appside.build/mcp-servers/waketrades/) | <code>https://waketrades.com/mcp</code> | API Key | ✅ handshake · 33 tools | [WakeTrades](https://waketrades.com/) |
| [WhereItGoes](https://appside.build/mcp-servers/whereitgoes/) | <code>https://api.whereitgoes.money/api/mcp</code> | OAuth | 🔐 auth required | [WhereItGoes](https://whereitgoes.money/) |

## Commerce

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [AgentMade Print on Demand](https://appside.build/mcp-servers/agentmade-print-on-demand/) | <code>https://pod.agentmade.dev/mcp/pay</code> | Open | ✅ handshake · 9 tools | [AgentMade](https://pod.agentmade.dev/agents) |
| [AIR Bandenservice](https://appside.build/mcp-servers/air-bandenservice/) | <code>https://www.airbandenservice.com/mcp</code> | Open | ✅ handshake · 6 tools | [AIR Bandenservice](https://github.com/riceharvest/air-bandenservice-mcp) |
| [BuyWhere](https://appside.build/mcp-servers/buywhere/) | <code>https://api.buywhere.ai/mcp</code> | Open | ✅ handshake · 13 tools | [BuyWhere](https://buywhere.ai/) |
| [Chaletiste](https://appside.build/mcp-servers/chaletiste/) | <code>https://chaletiste.fr/api/mcp</code> | Open | ✅ handshake · 12 tools | [Chaletiste](https://chaletiste.fr/developpeurs/) |
| [McClipFace](https://appside.build/mcp-servers/mcclipface/) | <code>https://mcclipface.com/mcp/read</code> | Open | ✅ handshake · 4 tools | [McClipFace](https://mcclipface.com/) |
| [OneFindMe](https://appside.build/mcp-servers/onefindme/) | <code>https://onefindme.com/mcp</code> | Open | ✅ handshake · 1 tools | [OneFindMe](https://onefindme.com/mcp) |
| [OpenShopGraph](https://appside.build/mcp-servers/openshopgraph/) | <code>https://api.openshopgraph.com/mcp</code> | Open | ✅ handshake · 6 tools | [OpenShopGraph](https://openshopgraph.com/) |
| [Productify](https://appside.build/mcp-servers/productify/) | <code>https://www.useproductify.com/api/mcp</code> | OAuth | 🔐 auth required | [Productify](https://www.useproductify.com/printify-chatgpt-mcp) |
| [Tangibl](https://appside.build/mcp-servers/tangibl/) | <code>https://gettangibl.com/api/mcp</code> | OAuth | 🔐 auth required | [Tangibl](https://gettangibl.com/connect) |
| [Vendwiser](https://appside.build/mcp-servers/vendwiser/) | <code>https://app.vendwiser.ai/mcp</code> | OAuth | 🔐 auth required | [Vendwiser](https://vendwiser.ai/) |
| [WhizzyCommerce](https://appside.build/mcp-servers/whizzycommerce/) | <code>https://app.whizzycommerce.com/mcp</code> | OAuth | 🔐 auth required | [WhizzyCommerce](https://whizzycommerce.com/) |

## Design & Media

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Azurade](https://appside.build/mcp-servers/azurade/) | <code>https://azurade.com/mcp</code> | OAuth | 🔐 auth required | [Azurade](https://azurade.com/) |
| [Blipsmith](https://appside.build/mcp-servers/blipsmith/) | <code>https://blipsmith.ai/api/mcp</code> | API Key | 🔐 auth required | [Blipsmith](https://blipsmith.ai/) |
| [Canva](https://appside.build/mcp-servers/canva/) | <code>https://mcp.canva.com/mcp</code> | OAuth | 🔐 auth required | [Canva](https://canva.com/) |
| [Continuity by Ouroboros Apps](https://appside.build/mcp-servers/continuity-by-ouroboros-apps/) | <code>https://continuitywriter.com/mcp</code> | OAuth | ✅ handshake · 11 tools | [Ouroboros Apps](https://ouroborosapps.com/) |
| [CurlShot](https://appside.build/mcp-servers/curlshot/) | <code>https://curlshot.com/api/mcp</code> | API Key | ✅ handshake · 2 tools | [CurlShot](https://curlshot.com/docs?utm_source=awesome-mcp&utm_medium=listing&utm_campaign=dist-q4) |
| [decodx](https://appside.build/mcp-servers/decodx/) | <code>https://api.decodx.ai/mcp</code> | OAuth | 🔐 auth required | [decodx](https://decodx.ai/) |
| [Drint](https://appside.build/mcp-servers/drint/) | <code>https://drint.io/mcp</code> | OAuth | ✅ handshake · 11 tools | [Drint](https://drint.io/) |
| [Emero](https://appside.build/mcp-servers/emero/) | <code>https://mcp.emero.studio/mcp</code> | OAuth | 🔐 auth required | [Emero](https://www.emero.studio/) |
| [Figma](https://appside.build/mcp-servers/figma/) | <code>https://mcp.figma.com/mcp</code> | OAuth | 🔐 auth required | [Figma](https://figma.com/) |
| [FilmeeAi](https://appside.build/mcp-servers/filmeeai/) | <code>https://filmee.app/mcp</code> | OAuth | 🔐 auth required | [FilmeeAi](https://filmee.app/) |
| [Gamma](https://appside.build/mcp-servers/gamma/) | <code>https://mcp.gamma.app/mcp</code> | OAuth | 🔐 auth required | [Gamma](https://gamma.app/) |
| [KitCut](https://appside.build/mcp-servers/kitcut/) | <code>https://kitcut.ai/mcp</code> | OAuth | 🔐 auth required | [KitCut](https://kitcut.ai/docs/assistants) |
| [Miro](https://appside.build/mcp-servers/miro/) | <code>https://mcp.miro.com/</code> | OAuth | 🔐 auth required | [Miro](https://miro.com/) |
| [motionprompts](https://appside.build/mcp-servers/motionprompts/) | <code>https://motionprompts.dev/mcp</code> | API Key | ✅ handshake · 14 tools | [motionprompts](https://motionprompts.dev/) |
| [PageToVid](https://appside.build/mcp-servers/pagetovid/) | <code>https://pagetovid.com/mcp</code> | OAuth | ✅ handshake · 82 tools | [PageToVid](https://pagetovid.com/) |
| [Plot Speaks](https://appside.build/mcp-servers/plot-speaks/) | <code>https://account.plotspeaks.com/mcp</code> | OAuth | 🔐 auth required | [Volocent Labs](https://plotspeaks.com/) |
| [RecordHTML](https://appside.build/mcp-servers/recordhtml/) | <code>https://mcp.recordhtml.com/</code> | OAuth | 🔐 auth required | [RecordHTML](https://recordhtml.com/) |
| [Reelhouse](https://appside.build/mcp-servers/reelhouse/) | <code>https://api.reelhouse.io/mcp</code> | OAuth | 🔐 auth required | [Reelhouse](https://reelhouse.io/agents) |
| [ROMKADE](https://appside.build/mcp-servers/romkade/) | <code>https://mcp.romkade.com/</code> | OAuth | 🔐 auth required | [ROMKADE](https://romkade.com/) |
| [SnapDub](https://appside.build/mcp-servers/snapdub/) | <code>https://snapdub.ai/mcp</code> | OAuth | 🔐 auth required | [SnapDub](https://snapdub.ai/) |
| [SpriteForge](https://appside.build/mcp-servers/spriteforge/) | <code>https://www.spriteforge.tech/mcp</code> | OAuth | 🔐 auth required | [SpriteForge](https://www.spriteforge.tech/) |
| [SVG Me](https://appside.build/mcp-servers/svg-me/) | <code>https://svgme.app/mcp</code> | OAuth | 🔐 auth required | [SVG Me](https://svgme.app/) |
| [VoiceLabs](https://appside.build/mcp-servers/voicelabs/) | <code>https://app.voicelabs.now/api/mcp</code> | OAuth | 🔐 auth required | [VoiceLabs](https://voicelabs.now/) |

## Security

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Agency Check](https://appside.build/mcp-servers/agency-check/) | <code>https://agency-check.app/mcp</code> | OAuth | 🔐 auth required | [Cyber Strategy Institute](https://agency-check.app/) |
| [AI Website Security](https://appside.build/mcp-servers/ai-website-security/) | <code>https://scan.aiwebsitesecurity.com/api/mcp</code> | Open | ✅ handshake · 2 tools | [AI Website Security](https://aiwebsitesecurity.com/) |
| [Assay](https://appside.build/mcp-servers/assay/) | <code>https://assay-207908449630.us-central1.run.app/mcp</code> | other | ✅ handshake · 4 tools | [robertoyanguas-ops](https://github.com/robertoyanguas-ops) |
| [Metal Mantra](https://appside.build/mcp-servers/metal-mantra/) | <code>https://metalmantra.io/mcp</code> | Open | ✅ handshake · 6 tools | [Metal Mantra](https://metalmantra.io/) |
| [nittim](https://appside.build/mcp-servers/nittim/) | <code>https://nittim.com/api/mcp</code> | API Key | ✅ handshake · 15 tools | [nittim](https://nittim.com/) |
| [Privi](https://appside.build/mcp-servers/privi/) | <code>https://privi-ledger.onrender.com/mcp</code> | API Key | ✅ handshake · 121 tools | [Privi](https://privi-hub.onrender.com/) |
| [VerifyPulse](https://appside.build/mcp-servers/verifypulse/) | <code>https://verifypulse-seven.vercel.app/mcp</code> | API Key | ✅ handshake · 12 tools | [VerifyPulse](https://verifypulse-seven.vercel.app/) |
| [withHuman](https://appside.build/mcp-servers/withhuman/) | <code>https://app.withhuman.ai/api/mcp/v1</code> | OAuth | 🔐 auth required | [withHuman](https://withhuman.ai/) |
| [Zenable](https://appside.build/mcp-servers/zenable/) | <code>https://mcp.zenable.app/</code> | OAuth | 🔐 auth required | [Zenable](https://zenable.io/) |

## Search & Web Data

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Agent Kiosk](https://appside.build/mcp-servers/agent-kiosk/) | <code>https://agent-kiosk.vercel.app/mcp</code> | API Key | ✅ handshake · 24 tools | [Agent Kiosk](https://agent-kiosk.vercel.app/) |
| [AgentDrives](https://appside.build/mcp-servers/agentdrives/) | <code>https://agentdrives.com/api/mcp</code> | Open | ✅ handshake · 8 tools | [AgentDrives](https://agentdrives.com/) |
| [Apify](https://appside.build/mcp-servers/apify/) | <code>https://mcp.apify.com/</code> | API Key | 🔐 auth required | [Apify](https://apify.com/) |
| [ContextFetch](https://appside.build/mcp-servers/contextfetch/) | <code>https://api.contextfetch.dev/mcp</code> | API Key | ✅ handshake · 14 tools | [ContextFetch](https://contextfetch.dev/) |
| [EveryInfra](https://appside.build/mcp-servers/everyinfra/) | <code>https://api.everyinfra.com/mcp</code> | API Key | ✅ handshake · 12 tools | [EveryInfra](https://everyinfra.com/en) |
| [Exa Search](https://appside.build/mcp-servers/exa-search/) | <code>https://mcp.exa.ai/mcp</code> | Open | ✅ handshake · 2 tools | [Exa](https://exa.ai/) |
| [Hyperresearch](https://appside.build/mcp-servers/hyperresearch/) | <code>https://mcp.hyperresearch.ai/mcp</code> | OAuth | 🔐 auth required | [Hyperresearch](https://hyperresearch.ai/?utm_source=awesome-remote-mcp-servers-jaw9c&utm_medium=mcp_directory) |
| [Hyperresearch Answers](https://appside.build/mcp-servers/hyperresearch-answers/) | <code>https://answers.hyperresearch.ai/mcp</code> | OAuth | 🔐 auth required | [Hyperresearch](https://hyperresearch.ai/answers?utm_source=awesome-remote-mcp-servers-jaw9c&utm_medium=mcp_directory) |
| [Parallel Task MCP](https://appside.build/mcp-servers/parallel-task-mcp/) | <code>https://task-mcp.parallel.ai/mcp</code> | OAuth | 🔐 auth required | [Parallel Web Systems](https://parallel.ai/) |
| [Perceptlayer](https://appside.build/mcp-servers/perceptlayer/) | <code>https://api.perceptlayer.com/mcp</code> | API Key | ✅ handshake · 3 tools | [Perceptlayer](https://perceptlayer.com/) |
| [QuanticData](https://appside.build/mcp-servers/quanticdata/) | <code>https://api.quanticdata.io/mcp</code> | OAuth | 🔐 auth required | [QuanticData](https://quanticdata.io/) |
| [SearchAPI](https://appside.build/mcp-servers/searchapi/) | <code>https://www.searchapi.io/mcp</code> | API Key | 🔐 auth required | [SearchAPI](https://www.searchapi.io/) |
| [Simplescraper](https://appside.build/mcp-servers/simplescraper/) | <code>https://mcp.simplescraper.io/mcp</code> | OAuth | 🔐 auth required | [Simplescraper](https://simplescraper.io/) |

## Knowledge & Docs

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Appside](https://appside.build/mcp-servers/appside/) | <code>https://appside.build/mcp</code> | Open | ✅ handshake · 8 tools | [Appside](https://appside.build/) |
| [Astro Docs](https://appside.build/mcp-servers/astro-docs/) | <code>https://mcp.docs.astro.build/mcp</code> | Open | ✅ handshake · 1 tools | [Astro](https://astro.build/) |
| [Box](https://appside.build/mcp-servers/box/) | <code>https://mcp.box.com/</code> | OAuth | 🔐 auth required | [Box](https://box.com/) |
| [ChimpanSEO](https://appside.build/mcp-servers/chimpanseo/) | <code>https://chimpanseo.app/api/mcp</code> | API Key | ✅ handshake · 13 tools | [ChimpanSEO](https://chimpanseo.app/) |
| [Doconda](https://appside.build/mcp-servers/doconda/) | <code>https://api.eu.doconda.com/mcp</code> | OAuth | 🔐 auth required | [Doconda](https://doconda.com/) |
| [Edgepedia](https://appside.build/mcp-servers/edgepedia/) | <code>https://www.edgechat.ai/mcp</code> | Open | ✅ handshake · 5 tools | [EdgeChat](https://www.edgechat.ai/) |
| [Egnyte](https://appside.build/mcp-servers/egnyte/) | <code>https://mcp-server.egnyte.com/sse</code> | OAuth | 🔐 auth required | [Egnyte](https://egnyte.com/) |
| [HaveTML](https://appside.build/mcp-servers/havetml/) | <code>https://havetml.com/api/mcp</code> | OAuth | 🔐 auth required | [HaveTML](https://havetml.com/) |
| [Helvedrive](https://appside.build/mcp-servers/helvedrive/) | <code>https://app.helvedrive.com/mcp</code> | OAuth | 🔐 auth required | [Helvedrive](https://helvedrive.com/) |
| [Pinafly Guides](https://appside.build/mcp-servers/pinafly-guides/) | <code>https://pinafly.com/mcp/guides</code> | OAuth | 🔐 auth required | [Pinafly](https://pinafly.com/) |
| [The Brains](https://appside.build/mcp-servers/the-brains/) | <code>https://mcp.brains.ceo/mcp</code> | OAuth | 🔐 auth required | [The Brains](https://brains.ceo/) |
| [TransformPipe](https://appside.build/mcp-servers/transformpipe/) | <code>https://transformpipe.com/api/mcp</code> | OAuth | 🔐 auth required | [Raudar Labs](https://transformpipe.com/) |
| [Vocenya Docs](https://appside.build/mcp-servers/vocenya-docs/) | <code>https://vocenya.com/mcp/docs</code> | Open | ✅ handshake · 4 tools | [Vocenya](https://vocenya.com/) |
| [Webflow](https://appside.build/mcp-servers/webflow/) | <code>https://mcp.webflow.com/sse</code> | OAuth | 🔐 auth required | [Webflow](https://webflow.com/) |
| [Wix](https://appside.build/mcp-servers/wix/) | <code>https://mcp.wix.com/sse</code> | OAuth | 🔐 auth required | [Wix](https://wix.com/) |

## Travel & Local

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Airfare Brain](https://appside.build/mcp-servers/airfare-brain/) | <code>https://airfarebrain.com/mcp</code> | Open | ✅ handshake · 5 tools | [Airfare Brain](https://airfarebrain.com/) |
| [Close Knit](https://appside.build/mcp-servers/close-knit/) | <code>https://getcloseknit.com/mcp</code> | Open | ✅ handshake · 31 tools | [Close Knit](https://getcloseknit.com/) |
| [Feminiq Rides](https://appside.build/mcp-servers/feminiq-rides/) | <code>https://www.feminiqrides.nl/mcp</code> | Open | ✅ handshake · 6 tools | [Feminiq Rides](https://www.feminiqrides.nl/) |
| [GateRoam](https://appside.build/mcp-servers/gateroam/) | <code>https://gateroam.com/mcp</code> | OAuth | 🔐 auth required | [GateRoam](https://gateroam.com/?utm_source=github.com&utm_medium=directory&utm_campaign=mcp-listing) |
| [Google Maps](https://appside.build/mcp-servers/google-maps/) | <code>https://mapstools.googleapis.com/mcp</code> | API Key | ✅ handshake · 5 tools | [Google](https://developers.google.com/maps/ai/grounding-lite/reference/mcp) |
| [Jet Cab AMS](https://appside.build/mcp-servers/jet-cab-ams/) | <code>https://www.jetcabams.nl/mcp</code> | Open | ✅ handshake · 6 tools | [Jet Cab AMS](https://www.jetcabams.nl/) |
| [Metro MCP](https://appside.build/mcp-servers/metro-mcp/) | <code>https://metro-mcp.anuragd.me/sse</code> | OAuth | ✅ handshake · 18 tools | [Anurag](https://metro-mcp.anuragd.me/) |
| [Stay Cost Brain](https://appside.build/mcp-servers/stay-cost-brain/) | <code>https://staycostbrain.com/mcp</code> | Open | ✅ handshake · 5 tools | [Stay Cost Brain](https://staycostbrain.com/) |
| [StayingAPI](https://appside.build/mcp-servers/stayingapi/) | <code>https://mcp.stayingapi.com/mcp</code> | OAuth | 🔐 auth required | [StayingAPI](https://stayingapi.com/) |
| [Trvlrr](https://appside.build/mcp-servers/trvlrr/) | <code>https://trvlrr.app/mcp</code> | OAuth | 🔐 auth required | [Trvlrr](https://trvlrr.app/) |
| [Turkish Airlines](https://appside.build/mcp-servers/turkish-airlines/) | <code>https://mcp.turkishtechlab.com/mcp</code> | OAuth | 🔐 auth required | [Turkish Technology](https://mcp.turkishtechlab.com/) |
| [UK Places](https://appside.build/mcp-servers/uk-places/) | <code>https://uk-places-mcp.donniertf.workers.dev/mcp</code> | Open | ✅ handshake · 6 tools | [donniertf-hub](https://github.com/donniertf-hub/uk-mcp-fleet) |

## Education

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [Japanese Skills · 言の葉](https://appside.build/mcp-servers/japanese-skills/) | <code>https://japaneseskills.com/mcp</code> | Open | ✅ handshake · 4 tools | [Japanese Skills](https://japaneseskills.com/en/) |
| [Laplace’s Mini World](https://appside.build/mcp-servers/laplace-s-mini-world/) | <code>https://world.lapla.si/mcp</code> | Open | ✅ handshake · 3 tools | [Laplace’s Mini World](https://world.lapla.si/en/) |
| [mypromind.com](https://appside.build/mcp-servers/mypromind-com/) | <code>https://www.mypromind.com/interface/mcp</code> | OAuth | 🔐 auth required | [mypromind MCP](https://www.mypromind.com/) |
| [PPL Free Ground School](https://appside.build/mcp-servers/ppl-free-ground-school/) | <code>https://pplfree.com/mcp</code> | Open | ✅ handshake · 5 tools | [PPL Free Ground School](https://pplfree.com/mcp-server) |
| [uNotes](https://appside.build/mcp-servers/unotes/) | <code>https://unotes.net/api/mcp</code> | OAuth | 🔐 auth required | [uNotes](https://unotes.net/) |

## AI & Memory

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [AgentWorld](https://appside.build/mcp-servers/agentworld/) | <code>https://agentworld.me/mcp</code> | Open | ✅ handshake · 164 tools | [AgentPay](https://agentworld.me/) |
| [Audioscrape](https://appside.build/mcp-servers/audioscrape/) | <code>https://mcp.audioscrape.com/</code> | OAuth | 🔐 auth required | [Audioscrape](https://www.audioscrape.com/) |
| [Contextely](https://appside.build/mcp-servers/contextely/) | <code>https://www.contextely.com/api/mcp</code> | OAuth | ✅ handshake · 14 tools | [Contextely](https://www.contextely.com/) |
| [Locul](https://appside.build/mcp-servers/locul/) | <code>https://team-api.locul.ai/mcp</code> | OAuth | 🔐 auth required | [Locul](https://locul.ai/) |
| [Nysa](https://appside.build/mcp-servers/nysa/) | <code>https://mcp.usenysa.com/mcp</code> | OAuth | 🔐 auth required | [Nysa](https://usenysa.com/) |
| [OneContext](https://appside.build/mcp-servers/onecontext/) | <code>https://rag-mcp-2.whatsmcp.workers.dev/sse</code> | OAuth | 🔐 auth required | [OneContext](https://onecontext.ai/) |
| [past.dev](https://appside.build/mcp-servers/past-dev/) | <code>https://app.past.dev/mcp</code> | OAuth | 🔐 auth required | [past.dev](https://past.dev/) |
| [Scorecard](https://appside.build/mcp-servers/scorecard/) | <code>https://scorecard-mcp.dare-d5b.workers.dev/sse</code> | OAuth | 🔐 auth required | [Scorecard](https://scorecard.io/) |
| [SmithTalks](https://appside.build/mcp-servers/smithtalks/) | <code>https://smithtalks.pages.dev/api/v1/mcp</code> | other | ✅ handshake · 29 tools | [SmithTalks](https://smithtalks.pages.dev/) |
| [Takibi Base](https://appside.build/mcp-servers/takibi-base/) | <code>https://app.takibibase.com/mcp</code> | OAuth | 🔐 auth required | [Takibi Base](https://takibibase.com/) |
| [Zine](https://appside.build/mcp-servers/zine/) | <code>https://www.zine.ai/mcp</code> | OAuth | 🔐 auth required | [Zine](https://www.zine.ai/) |

## Other

| Server | Endpoint | Auth | Check | Maintainer |
| --- | --- | --- | --- | --- |
| [AbuzzHive](https://appside.build/mcp-servers/abuzzhive/) | <code>https://www.abuzzhive.com/mcp</code> | OAuth | 🔐 auth required | [AbuzzHive](https://www.abuzzhive.com/) |
| [Agent Nexus](https://appside.build/mcp-servers/agent-nexus/) | <code>https://agentnexus.app/mcp</code> | OAuth | ✅ handshake · 6 tools | [Agent Nexus](https://agentnexus.app/) |
| [AI Agents Listing](https://appside.build/mcp-servers/ai-agents-listing/) | <code>https://aiagentslisting.com/api/mcp</code> | OAuth | ✅ handshake · 10 tools | [AI Agents Listing](https://aiagentslisting.com/) |
| [Backwork](https://appside.build/mcp-servers/backwork/) | <code>https://backworkhealth.com/mcp</code> | OAuth | 🔐 auth required | [Backwork](https://backworkhealth.com/) |
| [BotGathering](https://appside.build/mcp-servers/botgathering/) | <code>https://botgathering.com/mcp</code> | Open | ✅ handshake · 10 tools | [BotGathering](https://botgathering.com/) |
| [BotSesh](https://appside.build/mcp-servers/botsesh/) | <code>https://botsesh.com/mcp</code> | OAuth | 🔐 auth required | [BotSesh](https://botsesh.com/) |
| [CheckFitment](https://appside.build/mcp-servers/checkfitment/) | <code>https://checkfitment.com/mcp?src=mcp</code> | Open | ✅ handshake · 6 tools | [CheckFitment](https://checkfitment.com/) |
| [China Footnotes](https://appside.build/mcp-servers/china-footnotes/) | <code>https://chinafootnotes.com/mcp</code> | Open | ✅ handshake · 5 tools | [China Footnotes](https://chinafootnotes.com/) |
| [CloneKit](https://appside.build/mcp-servers/clonekit/) | <code>https://clonekit.ai/mcp</code> | OAuth | 🔐 auth required | [CloneKit](https://clonekit.ai/) |
| [Contextli](https://appside.build/mcp-servers/contextli/) | <code>https://mcp.contextli.com/mcp</code> | OAuth | 🔐 auth required | [Contextli](https://contextli.com/) |
| [Diver Atlas](https://appside.build/mcp-servers/diver-atlas/) | <code>https://www.diveratlas.com/mcp</code> | Open | ✅ handshake · 6 tools | [CoreSpaces](https://www.diveratlas.com/about) |
| [DroneClear Thailand](https://appside.build/mcp-servers/droneclear-thailand/) | <code>https://www.droneclearthailand.com/mcp?src=mcp</code> | Open | ✅ handshake · 2 tools | [DroneClear Thailand](https://www.droneclearthailand.com/) |
| [Entry](https://appside.build/mcp-servers/entry/) | <code>https://entry.fyi/mcp</code> | OAuth | 🔐 auth required | [Entry](https://entry.fyi/) |
| [Factusur](https://appside.build/mcp-servers/factusur/) | <code>https://factusur.com/mcp</code> | OAuth | 🔐 auth required | [Factusur](https://factusur.com/) |
| [Ferryhopper](https://appside.build/mcp-servers/ferryhopper/) | <code>https://mcp.ferryhopper.com/mcp</code> | Open | ✅ handshake · 6 tools | [Ferryhopper](https://ferryhopper.github.io/fh-mcp/) |
| [FindADoctor.si](https://appside.build/mcp-servers/findadoctor-si/) | <code>https://api.findadoctor.si/mcp</code> | Open | ✅ handshake · 9 tools | [FindADoctor.si](https://findadoctor.si/) |
| [GetMattered](https://appside.build/mcp-servers/getmattered/) | <code>https://mcp.getmattered.com/mcp</code> | OAuth | ✅ handshake · 40 tools | [GetMattered](https://getmattered.com/) |
| [HK Racing AI](https://appside.build/mcp-servers/hk-racing-ai/) | <code>https://hkracing.live/mcp</code> | Open | ✅ handshake · 10 tools | [OddsFlow](https://hkracing.live/about) |
| [IZeat](https://appside.build/mcp-servers/izeat/) | <code>https://izeat.app/api/mcp</code> | OAuth | 🔐 auth required | [IZeat](https://izeat.app/) |
| [Kamaan](https://appside.build/mcp-servers/kamaan/) | <code>https://kamaan.io/mcp</code> | OAuth | 🔐 auth required | [Kamaan](https://kamaan.io/) |
| [Kingy Guides](https://appside.build/mcp-servers/kingy-guides/) | <code>https://kingy-guides.vercel.app/mcp</code> | Open | ✅ handshake · 4 tools | [kingy.wiki](https://kingy.wiki/) |
| [Launch Ready](https://appside.build/mcp-servers/launch-ready/) | <code>https://uselaunchready.com/api/mcp</code> | API Key | 🔐 auth required | [Launch Ready](https://uselaunchready.com/) |
| [Lebanese Legislation](https://appside.build/mcp-servers/lebanese-legislation/) | <code>https://lebaneselegislation.com/mcp</code> | Open | ✅ handshake · 10 tools | [Lebanese Legislation](https://lebaneselegislation.com/ai/) |
| [LigoSocial](https://appside.build/mcp-servers/ligosocial/) | <code>https://ligosocial.com/mcp</code> | OAuth | 🔐 auth required | [LigoSocial](https://ligosocial.com/) |
| [Meisa](https://appside.build/mcp-servers/meisa/) | <code>https://mcp.meisa.io/mcp</code> | OAuth | 🔐 auth required | [Meisa](https://meisa.io/) |
| [Melso](https://appside.build/mcp-servers/melso/) | <code>https://mcp.melso.ai/mcp</code> | OAuth | 🔐 auth required | [Melso](https://melso.ai/) |
| [MicoRadar](https://appside.build/mcp-servers/micoradar/) | <code>https://micoradar.com/mcp</code> | OAuth | 🔐 auth required | [MicoRadar](https://micoradar.com/mcp/docs) |
| [Name Generators by kits](https://appside.build/mcp-servers/name-generators-by-kits/) | <code>https://kits-596.pages.dev/mcp</code> | Open | ✅ handshake · 2 tools | [kits](https://kits-596.pages.dev/name-generators/) |
| [Offhand MCP](https://appside.build/mcp-servers/offhand-mcp/) | <code>https://offhandapp.com/mcp</code> | OAuth | 🔐 auth required | [Offhand](https://offhandapp.com/) |
| [PDFLean](https://appside.build/mcp-servers/pdflean/) | <code>https://mcp.pdflean.com/mcp</code> | OAuth | 🔐 auth required | [PDFLean](https://pdflean.com/) |
| [Peek.com](https://appside.build/mcp-servers/peek-com/) | <code>https://mcp.peek.com/</code> | Open | ✅ handshake · 6 tools | [Peek.com](https://peek.com/) |
| [Pflegegradpunkte](https://appside.build/mcp-servers/pflegegradpunkte/) | <code>https://pflegegradpunkte.de/mcp?src=mcp</code> | Open | ✅ handshake · 3 tools | [Pflegegradpunkte](https://pflegegradpunkte.de/) |
| [pournasserian.com](https://appside.build/mcp-servers/pournasserian-com/) | <code>https://ai.pournasserian.com/mcp</code> | Open | ✅ handshake · 2 tools | [Amir Pournasserian](https://pournasserian.com/) |
| [Prox](https://appside.build/mcp-servers/prox/) | <code>https://proxgetlocal.app/api/mcp</code> | Open | ✅ handshake · 4 tools | [Prox](https://proxgetlocal.app/) |
| [QuickBuild agent tools](https://appside.build/mcp-servers/quickbuild-agent-tools/) | <code>https://quickbuild.quynguyenbac.workers.dev/mcp</code> | Open | ✅ handshake · 38 tools | [QuickBuild agent](https://quickbuild.quynguyenbac.workers.dev/about/) |
| [Rechtsklar24](https://appside.build/mcp-servers/rechtsklar24/) | <code>https://rechtsklar24.de/mcp?src=mcp</code> | Open | ✅ handshake · 4 tools | [Rechtsklar24](https://rechtsklar24.de/) |
| [Remembite](https://appside.build/mcp-servers/remembite/) | <code>https://remembite.com/mcp</code> | OAuth | 🔐 auth required | [Remembite](https://remembite.com/?utm_source=awesome-remote-mcp&utm_medium=directory&utm_campaign=first100) |
| [RoboParts](https://appside.build/mcp-servers/roboparts/) | <code>https://roboparts.cc/mcp</code> | other | ✅ handshake · 26 tools | [lm203688](https://github.com/lm203688) |
| [Rolês em SP](https://appside.build/mcp-servers/roles-em-sp/) | <code>https://rolesemsp.com.br/mcp</code> | OAuth | 🔐 auth required | [Rolês em SP](https://rolesemsp.com.br/) |
| [screenRIG](https://appside.build/mcp-servers/screenrig/) | <code>https://api.screenrig.ai/mcp</code> | OAuth | 🔐 auth required | [screenRIG](https://screenrig.ai/) |
| [Scribiz](https://appside.build/mcp-servers/scribiz/) | <code>https://scribiz.com/mcp</code> | API Key | ✅ handshake · 5 tools | [Scribiz](https://scribiz.com/?ref=awesome-remote-mcp) |
| [Seamark](https://appside.build/mcp-servers/seamark/) | <code>https://seamark.app/mcp</code> | OAuth | ✅ handshake · 13 tools | [Seamark](https://seamark.app/?utm_source=awesome-remote-mcp&utm_medium=listing) |
| [SeedViral](https://appside.build/mcp-servers/seedviral/) | <code>https://seedviral.com/mcp</code> | OAuth | 🔐 auth required | [SeedViral](https://seedviral.com/agents) |
| [Shortform Kit](https://appside.build/mcp-servers/shortform-kit/) | <code>https://shortformkit.com/mcp</code> | Open | ✅ handshake · 9 tools | [Shortform Kit](https://shortformkit.com/mcp-server/) |
| [Somvia](https://appside.build/mcp-servers/somvia/) | <code>https://somvia.app/mcp</code> | OAuth | 🔐 auth required | [Somvia](https://somvia.app/) |
| [Sports Odds API (BetRivers, Unibet &#38; 22 more books)](https://appside.build/mcp-servers/sports-odds-api-betrivers-unibet-22-more-books/) | <code>https://mcp.apify.com/?tools=publicrecords/sports-odds-api</code> | OAuth | 🔐 auth required | [publicrecords](https://apify.com/publicrecords/sports-odds-api) |
| [SubmitMyStartup](https://appside.build/mcp-servers/submitmystartup/) | <code>https://submitmystartup.com/mcp</code> | Open | ✅ handshake · 5 tools | [SubmitMyStartup](https://submitmystartup.com/) |
| [SubwayInfo NYC](https://appside.build/mcp-servers/subwayinfo-nyc/) | <code>https://subwayinfo.nyc/mcp</code> | Open | ✅ handshake · 26 tools | [SubwayInfo NYC](https://subwayinfo.nyc/) |
| [Swatch Ledger](https://appside.build/mcp-servers/swatch-ledger/) | <code>https://swatch-ledger.pages.dev/mcp</code> | Open | ✅ handshake · 2 tools | [Swatch Ledger](https://swatch-ledger.pages.dev/) |
| [Testimonials.ltd](https://appside.build/mcp-servers/testimonials-ltd/) | <code>https://testimonials.ltd/mcp</code> | OAuth | 🔐 auth required | [Testimonials.ltd](https://testimonials.ltd/) |
| [Tiny Plates](https://appside.build/mcp-servers/tiny-plates/) | <code>https://api.tinyplates.dev/mcp</code> | OAuth | 🔐 auth required | [Tiny Plates](https://www.tinyplates.dev/) |
| [TreppenliftVergleich](https://appside.build/mcp-servers/treppenliftvergleich/) | <code>https://treppenliftvergleichsportal.de/mcp?src=mcp</code> | Open | ✅ handshake · 6 tools | [TreppenliftVergleich](https://treppenliftvergleichsportal.de/ki-assistenten) |
| [Vedar (Kamchatka travel)](https://appside.build/mcp-servers/vedar-kamchatka-travel/) | <code>https://vedarai.ru/api/mcp</code> | Open | ✅ handshake · 24 tools | [Vedar](https://vedarai.ru/) |
| [ViaFrei](https://appside.build/mcp-servers/viafrei/) | <code>https://mcp.viafrei.de/mcp</code> | Open | ✅ handshake · 22 tools | [ViaFrei](https://viafrei.de/en/developers) |
| [VideoBGRemover](https://appside.build/mcp-servers/videobgremover/) | <code>https://videobgremover.net/api/mcp</code> | OAuth | 🔐 auth required | [VideoBGRemover](https://videobgremover.net/mcp) |

Maintained by Appside (https://appside.build). Data: https://appside.build/mcp-servers.json. Agents can submit and claim listings over MCP: https://appside.build/docs/agent-accounts/.
