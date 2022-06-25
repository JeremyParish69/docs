(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{522:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"single-node-rpc-setup-with-monitor-alerts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-node-rpc-setup-with-monitor-alerts"}},[t._v("#")]),t._v(" Single Node RPC setup with monitor alerts")]),t._v(" "),a("p",[t._v("This examples creates a single droplet in Digitalocean that:")]),t._v(" "),a("ul",[a("li",[t._v("runs the latest osmosisd binary")]),t._v(" "),a("li",[t._v("authomatically syncs the state from a pruned snapshot")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"create-digitalocean-api-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-digitalocean-api-token"}},[t._v("#")]),t._v(" Create DigitalOcean API Token")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Get an API token from "),a("a",{attrs:{href:"https://cloud.digitalocean.com/account/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Export the token to an environment variable. Do not share this token as it gives access to your console.")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('export DIGITALOCEAN_TOKEN="your_personal_access_token"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"create-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-infrastructure"}},[t._v("#")]),t._v(" Create infrastructure")]),t._v(" "),a("ol",[a("li",[t._v("Initialize terraform:")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" init\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Create a plan:")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" plan\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Inspect the plan and then deploy the infrastructure:")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" apply\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Get ssh instructions:")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terraform output --raw  ssh_help \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Expected output:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" key:\nterraform output --raw private_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" droplet.key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" droplet.key\n\nConnect to the instancs:\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -i droplet.key\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Follow the instructions to ssh into the droplet:")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terraform output --raw private_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" droplet.key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" droplet.key\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -i droplet.key "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <IP> will be the actual ip of the droplet")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("The nodes are configured to accept traffic to port "),a("code",[t._v("22")]),t._v(" from anywhere which is not\ngenerally recommended for production setup.")]),t._v(" "),a("p",[t._v("Please setup firewall rules according to your needs.")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Wait for the node to be initialized. The droplets is initialized via the "),a("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis-installer",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmosis-installer"),a("OutboundLink")],1),t._v(" which installs the necessary packages and statesync the node. You can follow the process with:")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -f /var/log/cloud-init-output.log\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Play around with your osmosis node!")])]),t._v(" "),a("h2",{attrs:{id:"get-started-in-digitalocean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-started-in-digitalocean"}},[t._v("#")]),t._v(" Get started in Digitalocean")]),t._v(" "),a("p",[t._v("Get $100 in credit over 60 days through our referral link:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.digitalocean.com/?refcode=f6e2bb0e0af7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg",alt:"DigitalOcean Referral Badge"}}),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);