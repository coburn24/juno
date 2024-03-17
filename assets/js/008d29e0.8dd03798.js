"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1678],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={slug:"/config",sidebar_position:3,title:"Example Configuration"},a=void 0,l={unversionedId:"example_config",id:"version-0.6.1/example_config",title:"Example Configuration",description:"The Juno binary uses reasonable defaults and can be used without configuration.",source:"@site/versioned_docs/version-0.6.1/example_config.md",sourceDirName:".",slug:"/config",permalink:"/0.6.1/config",draft:!1,tags:[],version:"0.6.1",sidebarPosition:3,frontMatter:{slug:"/config",sidebar_position:3,title:"Example Configuration"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/0.6.1/"},next:{title:"Database Snapshots",permalink:"/0.6.1/snapshots"}},s={},p=[],u={toc:p},c="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Juno binary uses reasonable defaults and can be used without configuration.\nFor basic fine-tuning, the ",(0,o.kt)("inlineCode",{parentName:"p"},"--db-path")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--http-port")," options are usually sufficient."),(0,o.kt)("p",null,"All available options are in the YAML file below with their default values.\nProvide the config using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config <filename>")," option (Juno looks in ",(0,o.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME")," by default)."),(0,o.kt)("p",null,"Juno can also be configured using command line params by prepending ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," to the option name (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"--log-level info"),").\nCommand line params override values in the configuration file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Enable colored logs\ncolour: true\n\n# Path to the database.\n# Juno uses `$XDG_DATA_HOME/juno` by default, which is usually something like the value below on Linux.\ndb-path: /home/<user>/.local/share/juno\n\n# Websocket endpoint of the Ethereum node used to verify the L2 chain.\n# If using Infura, it looks something like `wss://mainnet.infura.io/ws/v3/your-infura-project-id`\neth-node: ""\n\n# Enables the HTTP RPC server.\nhttp: false\n# Port on which the HTTP RPC server will listen for requests.\nhttp-port: 6060\n\n# The options below are similar to the HTTP RPC options above.\nws: false # Websocket RPC server\nws-port: 6061\npprof: false\npprof-port: 6062\nmetrics: false\nmetrics-port: 9090\ngrpc: false\ngrpc-port: 6064\n\n# Options: debug, info, warn, error\nlog-level: info\n\n# Options: mainnet, goerli, goerli2, integration\nnetwork: mainnet\n\n# How often to fetch the pending block when synced to the head of the chain.\n# Provide a duration like 5s (five seconds) or 10m (10 minutes).\n# Disabled by default.\npending-poll-interval: 0s\n\n# Experimental p2p options; there is currently no standardized Starknet p2p testnet.\np2p: false # Enable the p2p server\np2p-addr: "" # Source address\np2p-boot-peers: "" # Boot nodes\n')))}f.isMDXComponent=!0}}]);