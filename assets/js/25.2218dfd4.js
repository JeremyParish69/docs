(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{467:function(e,t,s){"use strict";s.r(t);var o=s(8),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"developer-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developer-guide"}},[e._v("#")]),e._v(" Developer guide")]),e._v(" "),s("p",[e._v("This document covers tips and guidelines to help you to understand how Osmosis works and efficiently navigate the codebase of Osmosis Core, the official Golang reference implementation of the Osmosis node software.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Recommendation")]),e._v(" "),s("p",[e._v("Osmosis Core is built using the "),s("a",{attrs:{href:"https://cosmos.network/sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),s("OutboundLink")],1),e._v(", which provides a robust framework for constructing blockchains that run atop the "),s("a",{attrs:{href:"https://tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint"),s("OutboundLink")],1),e._v(" Consensus Protocol.")]),e._v(" "),s("p",[e._v("It is highly recommended that you review these projects before diving into the Osmosis developer documentation, as they assume familiarity with concepts such as ABCI, Validators, Keepers, Message Handlers, etc.")])]),e._v(" "),s("h2",{attrs:{id:"how-to-use-the-docs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-docs"}},[e._v("#")]),e._v(" How to Use the Docs")]),e._v(" "),s("p",[e._v("As a developer, you will likely find the "),s("RouterLink",{attrs:{to:"/developing/modules/"}},[e._v("Module")]),e._v(" section the most informative. Each specification starts out with a short description of the module's main function within the architecture of the system, and how it contributes in implementing Osmosis's features.")],1),e._v(" "),s("p",[e._v("Beyond the introduction, each module will lay out a more detailed description of its main process and algorithms, alongside any concepts you may need to know. It is recommended that you start here to understand a module, as it is usually cross-referenced with more specific sections deeper in the spec such as specific state variables, message handlers and functions that may be of interest.")]),e._v(" "),s("p",[e._v("The current function documentation is not an exhaustive reference, but has been written to be a reference companion for those needing to work directly with the Osmosis Core codebase or understand it. The important functions in each module have been covered, and many of the trivial ones (such as getters and setters) have been left out for economy. Other places where module logic can be found is within either the message handler, or block transitions (begin-blocker and end-blocker).")]),e._v(" "),s("p",[e._v("At the end, the specification lists out various module parameters alongside their default values with a brief explanation of their purpose, and associated events / tags and errors emitted by the module.")]),e._v(" "),s("h3",{attrs:{id:"inherited-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inherited-modules"}},[e._v("#")]),e._v(" Inherited modules")]),e._v(" "),s("p",[e._v("Many of the modules in Osmosis Core are inherited from Cosmos SDK and are configured to work with Osmosis through customization in either genesis parameters or by augmenting their functionality with additional code.")]),e._v(" "),s("h2",{attrs:{id:"block-lifecycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-lifecycle"}},[e._v("#")]),e._v(" Block Lifecycle")]),e._v(" "),s("p",[e._v("The following processes get executed during each block transition:")]),e._v(" "),s("h3",{attrs:{id:"begin-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[e._v("#")]),e._v(" Begin block")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Distribution")]),e._v(" "),s("ul",[s("li",[e._v("Distribute rewards for the previous block")])])]),e._v(" "),s("li",[s("p",[e._v("Slashing")]),e._v(" "),s("ul",[s("li",[e._v("Checking of infraction evidence or downtime of validators for double-signing and downtime penalties.")])])])]),e._v(" "),s("h3",{attrs:{id:"process-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-messages"}},[e._v("#")]),e._v(" Process messages")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Messages are routed to the modules that are responsible for working them and then processed by the appropriate Message Handlers.")])]),e._v(" "),s("h3",{attrs:{id:"end-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end-block"}},[e._v("#")]),e._v(" End block")]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[e._v("Crisis")]),e._v(" "),s("ul",[s("li",[e._v("Check all registered invariants and assert they remain true")])])]),e._v(" "),s("li",[s("p",[e._v("Governance")]),e._v(" "),s("ul",[s("li",[e._v("Get rid of inactive proposals, check active proposals whose voting periods have ended for passes, and run registered proposal handler of the passed proposal.")])])]),e._v(" "),s("li",[s("p",[e._v("Market")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/developing/modules/spec-market.html#end-block"}},[e._v("Replenish")]),e._v(" liquidity pools, "),s("strong",[e._v("allowing spread fees to decrease")]),e._v(".")],1)])]),e._v(" "),s("li",[s("p",[e._v("Treasury")]),e._v(" "),s("ul",[s("li",[e._v("At the end of "),s("code",[e._v("epoch")]),e._v(", update indicators, burn seigniorage, and recalibrate monetary policy levers (tax-rate, reward-weight) for the next epoch.")])])]),e._v(" "),s("li",[s("p",[e._v("Staking")]),e._v(" "),s("ul",[s("li",[e._v("The new set of active validators is determined from the top 130 Osmo stakers. Validators that lose their spot within the set start the unbonding process.")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);