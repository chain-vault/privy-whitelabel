"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3508],{8330:function(e,t,i){i.d(t,{U:function(){return o}});let o={URLS:{FAQ:"https://walletconnect.com/faq"}}},5344:function(e,t,i){i.d(t,{y0:function(){return w}});var o=i(44649),r=i(68584),n=i(6943),a=i(35652),s=i(31929),l=i(86777),c=i(66909),d=i(53357),u=i(36801);async function p(){l.RouterController.push("ConnectingFarcaster");let e=a.ConnectorController.getAuthConnector();if(e&&!r.N.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();r.N.setFarcasterUrl(t,n.R.state.activeChain)}catch(e){l.RouterController.goBack(),c.SnackController.showError(e)}}async function h(e){l.RouterController.push("ConnectingSocial");let t=a.ConnectorController.getAuthConnector(),i=null;try{let a=setTimeout(()=>{throw Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(d.j.isTelegram()||(i=function(){try{return d.j.returnOpenHref(`${o.b.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw Error("Could not open social popup")}}()),i)r.N.setSocialWindow(i,n.R.state.activeChain);else if(!d.j.isTelegram())throw Error("Could not create social popup");let{uri:s}=await t.provider.getSocialRedirectUri({provider:e});if(!s)throw i?.close(),Error("Could not fetch the social redirect uri");if(i&&(i.location.href=s),d.j.isTelegram()){u.M.setTelegramSocialProvider(e);let t=d.j.formatTelegramSocialLoginUrl(s);d.j.openHref(t,"_top")}clearTimeout(a)}}catch(e){i?.close(),c.SnackController.showError(e?.message)}}async function w(e){r.N.setSocialProvider(e,n.R.state.activeChain),s.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await p():await h(e)}},83508:function(e,t,i){i.r(t),i.d(t,{AppKitAccountButton:function(){return k},AppKitButton:function(){return I},AppKitConnectButton:function(){return B},AppKitNetworkButton:function(){return V},W3mAccountButton:function(){return C},W3mAccountSettingsView:function(){return el},W3mAccountView:function(){return eV},W3mAllWalletsView:function(){return tA},W3mButton:function(){return T},W3mChooseAccountNameView:function(){return i5},W3mConnectButton:function(){return P},W3mConnectView:function(){return i$},W3mConnectWalletsView:function(){return oo},W3mConnectingExternalView:function(){return iB},W3mConnectingMultiChainView:function(){return iW},W3mConnectingWcBasicView:function(){return i0},W3mConnectingWcView:function(){return iQ},W3mDownloadsView:function(){return i4},W3mGetWalletView:function(){return i6},W3mNetworkButton:function(){return F},W3mNetworkSwitchView:function(){return ol},W3mNetworksView:function(){return og},W3mProfileWalletsView:function(){return e7},W3mRouter:function(){return H.A},W3mSIWXSignMessageView:function(){return oL},W3mSwitchActiveChainView:function(){return ov},W3mUnsupportedChainView:function(){return o$},W3mWalletCompatibleNetworksView:function(){return oO},W3mWhatIsANetworkView:function(){return ox},W3mWhatIsAWalletView:function(){return oe}});var o=i(31133),r=i(84927),n=i(32801),a=i(48415),s=i(6943),l=i(22472),c=i(63043),d=i(68584),u=i(53357),p=i(89512),h=i(92413);i(23805),i(21793),i(18360),i(5680);var w=i(84249),g=i(3874),b=i(57116);i(48682),i(1736);var f=(0,o.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,m=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let v=class extends o.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return(0,o.dy)`
      <button
        ?disabled=${this.disabled}
        class=${(0,n.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?g.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return(0,o.dy)` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
          data-testid="wui-account-button-unsupported-chain"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?(0,o.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,o.dy)`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?(0,o.dy)`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:(0,o.dy)`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return(0,o.dy)`${e} ${t}`}return null}};v.styles=[w.ET,w.ZM,f],m([(0,r.Cb)()],v.prototype,"networkSrc",void 0),m([(0,r.Cb)()],v.prototype,"avatarSrc",void 0),m([(0,r.Cb)()],v.prototype,"balance",void 0),m([(0,r.Cb)({type:Boolean})],v.prototype,"isUnsupportedChain",void 0),m([(0,r.Cb)({type:Boolean})],v.prototype,"disabled",void 0),m([(0,r.Cb)({type:Boolean})],v.prototype,"loading",void 0),m([(0,r.Cb)()],v.prototype,"address",void 0),m([(0,r.Cb)()],v.prototype,"profileName",void 0),m([(0,r.Cb)()],v.prototype,"charsStart",void 0),m([(0,r.Cb)()],v.prototype,"charsEnd",void 0),v=m([(0,b.M)("wui-account-button")],v);var y=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class x extends o.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!a.OptionsController.state.allowUnsupportedChain||!s.R.state.activeChain||s.R.checkIfSupportedNetwork(s.R.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(s.R.getAccountData(this.namespace)),this.setNetworkData(s.R.getNetworkData(this.namespace))}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(s.R.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),s.R.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=s.R.checkIfSupportedNetwork(e,t?.caipNetwork)},e)):this.unsubscribe.push(l.W.subscribeNetworkImages(()=>{this.networkImage=c.f.getNetworkImage(this.network)}),s.R.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),d.N.subscribeKey("balance",e=>this.balanceVal=e),d.N.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.N.subscribeKey("profileName",e=>this.profileName=e),d.N.subscribeKey("profileImage",e=>this.profileImage=e),s.R.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=c.f.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.R.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!s.R.state.activeChain)return null;let e="show"===this.balance,t="string"!=typeof this.balanceVal;return(0,o.dy)`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!a.OptionsController.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,n.o)(u.j.getPlainAddress(this.caipAddress))}
        profileName=${(0,n.o)(this.profileName)}
        networkSrc=${(0,n.o)(this.networkImage)}
        avatarSrc=${(0,n.o)(this.profileImage)}
        balance=${e?u.j.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||a.OptionsController.state.allowUnsupportedChain?p.I.open({namespace:this.namespace}):p.I.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await c.f.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=c.f.getNetworkImage(e.caipNetwork))}}y([(0,r.Cb)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,r.Cb)()],x.prototype,"balance",void 0),y([(0,r.Cb)()],x.prototype,"charsStart",void 0),y([(0,r.Cb)()],x.prototype,"charsEnd",void 0),y([(0,r.Cb)()],x.prototype,"namespace",void 0),y([(0,r.SB)()],x.prototype,"caipAddress",void 0),y([(0,r.SB)()],x.prototype,"balanceVal",void 0),y([(0,r.SB)()],x.prototype,"balanceSymbol",void 0),y([(0,r.SB)()],x.prototype,"profileName",void 0),y([(0,r.SB)()],x.prototype,"profileImage",void 0),y([(0,r.SB)()],x.prototype,"network",void 0),y([(0,r.SB)()],x.prototype,"networkImage",void 0),y([(0,r.SB)()],x.prototype,"isSupported",void 0);let C=class extends x{};C=y([(0,h.Mo)("w3m-account-button")],C);let k=class extends x{};k=y([(0,h.Mo)("appkit-account-button")],k);var $=(0,o.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,S=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class R extends o.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}connectedCallback(){super.connectedCallback(),this.caipAddress=this.namespace?s.R.state.chains.get(this.namespace)?.accountState?.caipAddress:s.R.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(s.R.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(s.R.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?(0,o.dy)`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${(0,n.o)(this.balance)}
            .charsStart=${(0,n.o)(this.charsStart)}
            .charsEnd=${(0,n.o)(this.charsEnd)}
            namespace=${(0,n.o)(this.namespace)}
          >
          </appkit-account-button>
        `:(0,o.dy)`
          <appkit-connect-button
            size=${(0,n.o)(this.size)}
            label=${(0,n.o)(this.label)}
            loadingLabel=${(0,n.o)(this.loadingLabel)}
            namespace=${(0,n.o)(this.namespace)}
          ></appkit-connect-button>
        `}}R.styles=$,S([(0,r.Cb)({type:Boolean})],R.prototype,"disabled",void 0),S([(0,r.Cb)()],R.prototype,"balance",void 0),S([(0,r.Cb)()],R.prototype,"size",void 0),S([(0,r.Cb)()],R.prototype,"label",void 0),S([(0,r.Cb)()],R.prototype,"loadingLabel",void 0),S([(0,r.Cb)()],R.prototype,"charsStart",void 0),S([(0,r.Cb)()],R.prototype,"charsEnd",void 0),S([(0,r.Cb)()],R.prototype,"namespace",void 0),S([(0,r.SB)()],R.prototype,"caipAddress",void 0);let T=class extends R{};T=S([(0,h.Mo)("w3m-button")],T);let I=class extends R{};I=S([(0,h.Mo)("appkit-button")],I);var O=(0,o.iv)`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,E=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let A=class extends o.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return(0,o.dy)`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?(0,o.dy)`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};A.styles=[w.ET,w.ZM,O],E([(0,r.Cb)()],A.prototype,"size",void 0),E([(0,r.Cb)({type:Boolean})],A.prototype,"loading",void 0),A=E([(0,b.M)("wui-connect-button")],A);var N=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class j extends o.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=p.I.state.open,this.loading=this.namespace?p.I.state.loadingNamespaceMap.get(this.namespace):p.I.state.loading,this.unsubscribe.push(p.I.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-connect-button
        size=${(0,n.o)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?p.I.close():this.loading||p.I.open({view:"Connect",namespace:this.namespace})}}N([(0,r.Cb)()],j.prototype,"size",void 0),N([(0,r.Cb)()],j.prototype,"label",void 0),N([(0,r.Cb)()],j.prototype,"loadingLabel",void 0),N([(0,r.Cb)()],j.prototype,"namespace",void 0),N([(0,r.SB)()],j.prototype,"open",void 0),N([(0,r.SB)()],j.prototype,"loading",void 0);let P=class extends j{};P=N([(0,h.Mo)("w3m-connect-button")],P);let B=class extends j{};B=N([(0,h.Mo)("appkit-connect-button")],B);var D=i(31929),L=(0,o.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,W=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let M=class extends o.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return(0,o.dy)`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?(0,o.dy)`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,o.dy)`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};M.styles=[w.ET,w.ZM,L],W([(0,r.Cb)()],M.prototype,"imageSrc",void 0),W([(0,r.Cb)({type:Boolean})],M.prototype,"isUnsupportedChain",void 0),W([(0,r.Cb)({type:Boolean})],M.prototype,"disabled",void 0),M=W([(0,b.M)("wui-network-button")],M);var z=(0,o.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,U=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class _ extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=s.R.state.activeCaipNetwork,this.networkImage=c.f.getNetworkImage(this.network),this.caipAddress=s.R.state.activeCaipAddress,this.loading=p.I.state.loading,this.isSupported=!!a.OptionsController.state.allowUnsupportedChain||!s.R.state.activeChain||s.R.checkIfSupportedNetwork(s.R.state.activeChain),this.unsubscribe.push(l.W.subscribeNetworkImages(()=>{this.networkImage=c.f.getNetworkImage(this.network)}),s.R.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),s.R.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=c.f.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.R.checkIfSupportedNetwork(e.chainNamespace),c.f.fetchNetworkImage(e?.assets?.imageId)}),p.I.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){c.f.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||s.R.checkIfSupportedNetwork(this.network.chainNamespace);return(0,o.dy)`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!a.OptionsController.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,n.o)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||a.OptionsController.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(D.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.I.open({view:"Networks"}))}}_.styles=z,U([(0,r.Cb)({type:Boolean})],_.prototype,"disabled",void 0),U([(0,r.Cb)({type:String})],_.prototype,"label",void 0),U([(0,r.SB)()],_.prototype,"network",void 0),U([(0,r.SB)()],_.prototype,"networkImage",void 0),U([(0,r.SB)()],_.prototype,"caipAddress",void 0),U([(0,r.SB)()],_.prototype,"loading",void 0),U([(0,r.SB)()],_.prototype,"isSupported",void 0);let F=class extends _{};F=U([(0,h.Mo)("w3m-network-button")],F);let V=class extends _{};V=U([(0,h.Mo)("appkit-network-button")],V);var H=i(77770),K=i(44649),q=i(35652),G=i(59712),X=i(66909),Y=i(43291),Z=i(86777),Q=i(64369),J=i(61347);i(96277),i(29158),i(53774),i(95137),i(98629);var ee=(0,o.iv)`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,et=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ei=class extends o.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return(0,o.dy)`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};ei.styles=[w.ET,w.ZM,ee],et([(0,r.Cb)()],ei.prototype,"label",void 0),et([(0,r.Cb)()],ei.prototype,"description",void 0),et([(0,r.Cb)()],ei.prototype,"icon",void 0),ei=et([(0,b.M)("wui-notice-card")],ei),i(44732);var eo=i(4786),er=i(36801),en=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ea=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=er.M.getConnectedSocialProvider(),this.socialUsername=er.M.getConnectedSocialUsername(),this.namespace=s.R.state.activeChain,this.unsubscribe.push(s.R.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=q.ConnectorController.getConnectorId(this.namespace),t=q.ConnectorController.getAuthConnector();if(!t||e!==K.b.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;let i=t.provider.getEmail()??"";return i||this.socialUsername?(0,o.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||Z.RouterController.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};en([(0,r.SB)()],ea.prototype,"namespace",void 0),ea=en([(0,h.Mo)("w3m-account-auth-button")],ea);var es=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let el=class extends o.oi{constructor(){super(),this.usubscribe=[],this.networkImages=l.W.state.networkImages,this.address=d.N.state.address,this.profileImage=d.N.state.profileImage,this.profileName=d.N.state.profileName,this.network=s.R.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.usubscribe.push(d.N.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),s.R.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),a.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.assets?.imageId??""];return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,n.o)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Hg.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,n.o)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=q.ConnectorController.getConnectorId(e),i=q.ConnectorController.getAuthConnector();return s.R.checkIfNamesSupported()&&i&&t===K.b.CONNECTOR_ID.AUTH&&!this.profileName?(0,o.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=q.ConnectorController.getConnectorId(this.network?.chainNamespace),t=q.ConnectorController.getAuthConnector(),{origin:i}=location;return!t||e!==K.b.CONNECTOR_ID.AUTH||i.includes(G.bq.SECURE_SITE)?null:(0,o.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=s.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(u.j.copyToClopboard(this.address),X.SnackController.showSuccess("Address copied"))}catch{X.SnackController.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let e=this.network?.chainNamespace,t=s.R.checkIfSmartAccountEnabled(),i=q.ConnectorController.getConnectorId(e);return q.ConnectorController.getAuthConnector()&&i===K.b.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=(0,Y.r9)(e)===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),(0,o.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){Z.RouterController.push("ChooseAccountName")}async changePreferredAccountType(){let e=this.network?.chainNamespace,t=s.R.checkIfSmartAccountEnabled(),i=(0,Y.r9)(e)!==eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t?eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT:eo.y_.ACCOUNT_TYPES.EOA;q.ConnectorController.getAuthConnector()&&(this.loading=!0,await Q.ConnectionController.setPreferredAccountType(i,e),this.text=i===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,J.S.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&Z.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;let e=this.network?.chainNamespace,t=Q.ConnectionController.getConnections(e).length>0,i=e&&q.ConnectorController.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await Q.ConnectionController.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Z.RouterController.push("ProfileWallets"),X.SnackController.showSuccess("Wallet deleted"))}catch{D.X.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){D.X.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Z.RouterController.push("UpgradeEmailWallet")}};es([(0,r.SB)()],el.prototype,"address",void 0),es([(0,r.SB)()],el.prototype,"profileImage",void 0),es([(0,r.SB)()],el.prototype,"profileName",void 0),es([(0,r.SB)()],el.prototype,"network",void 0),es([(0,r.SB)()],el.prototype,"disconnecting",void 0),es([(0,r.SB)()],el.prototype,"loading",void 0),es([(0,r.SB)()],el.prototype,"switched",void 0),es([(0,r.SB)()],el.prototype,"text",void 0),es([(0,r.SB)()],el.prototype,"remoteFeatures",void 0),el=es([(0,h.Mo)("w3m-account-settings-view")],el),i(97585),i(4594);var ec=(0,o.iv)`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,ed=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eu=class extends o.oi{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){let e=q.ConnectorController.getConnectorId(s.R.state.activeChain)===K.b.CONNECTOR_ID.AUTH;return(0,o.dy)`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${e?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&"copy-address"===e.target.id){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return(0,o.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};eu.styles=[w.ET,w.ZM,ec],ed([(0,r.Cb)()],eu.prototype,"avatarSrc",void 0),ed([(0,r.Cb)()],eu.prototype,"profileName",void 0),ed([(0,r.Cb)()],eu.prototype,"address",void 0),ed([(0,r.Cb)()],eu.prototype,"icon",void 0),ed([(0,r.Cb)()],eu.prototype,"onProfileClick",void 0),ed([(0,r.Cb)()],eu.prototype,"onCopyClick",void 0),eu=ed([(0,b.M)("wui-profile-button-v2")],eu);var ep=(0,o.iv)`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,eh=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ew=class extends o.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let i=t===this.activeTab;return(0,o.dy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?(0,o.dy)`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let i=this.buttons[this.activeTab],o=this.buttons[e],r=i?.querySelector("wui-text"),n=o?.querySelector("wui-text"),a=o?.getBoundingClientRect(),s=n?.getBoundingClientRect();i&&r&&!t&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&s&&n&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,o.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};ew.styles=[w.ET,w.ZM,ep],eh([(0,r.Cb)({type:Array})],ew.prototype,"tabs",void 0),eh([(0,r.Cb)()],ew.prototype,"onTabChange",void 0),eh([(0,r.Cb)({type:Array})],ew.prototype,"buttons",void 0),eh([(0,r.Cb)({type:Boolean})],ew.prototype,"disabled",void 0),eh([(0,r.Cb)()],ew.prototype,"localTabWidth",void 0),eh([(0,r.SB)()],ew.prototype,"activeTab",void 0),eh([(0,r.SB)()],ew.prototype,"isDense",void 0),ew=eh([(0,b.M)("wui-tabs")],ew),i(60830);var eg=(0,o.iv)`
  button {
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-xxs);
    column-gap: var(--wui-spacing-xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-xxl);
    height: var(--wui-spacing-xxl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: var(--wui-color-gray-glass-005);
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: var(--wui-spacing-1xs);
    height: var(--wui-spacing-1xs);
    background-color: var(--wui-color-success-100);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
  }
`,eb=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ef=class extends o.oi{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return(0,o.dy)`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let e=this.icon?(0,o.dy)`<wui-icon
          size=${this.iconSize}
          color="fg-200"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return(0,o.dy)`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return(0,o.dy)`
      <wui-text variant="paragraph-500" color="fg-100">
        ${g.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return(0,o.dy)`<wui-icon name="chevronBottom" size="xs" color="fg-200"></wui-icon>`}};ef.styles=[w.ET,w.ZM,eg],eb([(0,r.Cb)()],ef.prototype,"address",void 0),eb([(0,r.Cb)()],ef.prototype,"profileName",void 0),eb([(0,r.Cb)()],ef.prototype,"alt",void 0),eb([(0,r.Cb)()],ef.prototype,"imageSrc",void 0),eb([(0,r.Cb)()],ef.prototype,"icon",void 0),eb([(0,r.Cb)()],ef.prototype,"iconSize",void 0),eb([(0,r.Cb)({type:Boolean})],ef.prototype,"loading",void 0),eb([(0,r.Cb)({type:Number})],ef.prototype,"charsStart",void 0),eb([(0,r.Cb)({type:Number})],ef.prototype,"charsEnd",void 0),ef=eb([(0,b.M)("wui-wallet-switch")],ef);var em=(0,o.iv)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-wallet-switch {
    margin-top: var(--wui-spacing-xs);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,ev=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ey=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.caipAddress=d.N.state.caipAddress,this.address=u.j.getPlainAddress(d.N.state.caipAddress),this.profileImage=d.N.state.profileImage,this.profileName=d.N.state.profileName,this.disconnecting=!1,this.balance=d.N.state.balance,this.balanceSymbol=d.N.state.balanceSymbol,this.features=a.OptionsController.state.features,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.namespace=s.R.state.activeChain,this.activeConnectorIds=q.ConnectorController.state.activeConnectorIds,this.unsubscribe.push(d.N.subscribeKey("caipAddress",e=>{this.address=u.j.getPlainAddress(e),this.caipAddress=e}),d.N.subscribeKey("balance",e=>this.balance=e),d.N.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.N.subscribeKey("profileName",e=>this.profileName=e),d.N.subscribeKey("profileImage",e=>this.profileImage=e),a.OptionsController.subscribeKey("features",e=>this.features=e),a.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),q.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.R.subscribeKey("activeChain",e=>this.namespace=e),s.R.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?q.ConnectorController.getConnectorById(e):void 0,i=c.f.getConnectorImage(t);return(0,o.dy)`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="s"
      >
        <wui-avatar
          alt=${(0,n.o)(this.caipAddress)}
          address=${(0,n.o)(u.j.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,n.o)(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${i}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${u.j.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;let e=this.remoteFeatures?.onramp,t=G.bq.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return e&&t?(0,o.dy)`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||G.bq.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&G.bq.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?(0,o.dy)` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=s.R.state.activeChain===K.b.CHAIN.EVM;return e&&t?(0,o.dy)`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){let e=this.features?.send,t=s.R.state.activeChain;if(!t)throw Error("SendController:sendTemplate - namespace is required");let i=G.bq.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?(0,o.dy)`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=s.R.state.activeChain;if(!e)throw Error("AuthCardTemplate:authCardTemplate - namespace is required");let t=q.ConnectorController.getConnectorId(e),i=q.ConnectorController.getAuthConnector(),{origin:r}=location;return!i||t!==K.b.CONNECTOR_ID.AUTH||r.includes(G.bq.SECURE_SITE)?null:(0,o.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){Z.RouterController.push("OnRampProviders")}handleClickSwap(){Z.RouterController.push("Swap")}handleClickSend(){Z.RouterController.push("WalletSend")}explorerBtnTemplate(){return d.N.state.addressExplorerUrl?(0,o.dy)`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){D.X.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(0,Y.r9)(s.R.state.activeChain)===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),Z.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;let e=Q.ConnectionController.getConnections(this.namespace).length>0,t=this.namespace&&q.ConnectorController.state.activeConnectorIds[this.namespace],i=this.remoteFeatures?.multiWallet;await Q.ConnectionController.disconnect(i?{id:t,namespace:this.namespace}:{}),e&&i&&(Z.RouterController.push("ProfileWallets"),X.SnackController.showSuccess("Wallet deleted"))}catch{D.X.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=d.N.state.addressExplorerUrl;e&&u.j.openHref(e,"_blank")}onGoToUpgradeView(){D.X.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Z.RouterController.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){Z.RouterController.push("ProfileWallets")}};ey.styles=em,ev([(0,r.SB)()],ey.prototype,"caipAddress",void 0),ev([(0,r.SB)()],ey.prototype,"address",void 0),ev([(0,r.SB)()],ey.prototype,"profileImage",void 0),ev([(0,r.SB)()],ey.prototype,"profileName",void 0),ev([(0,r.SB)()],ey.prototype,"disconnecting",void 0),ev([(0,r.SB)()],ey.prototype,"balance",void 0),ev([(0,r.SB)()],ey.prototype,"balanceSymbol",void 0),ev([(0,r.SB)()],ey.prototype,"features",void 0),ev([(0,r.SB)()],ey.prototype,"remoteFeatures",void 0),ev([(0,r.SB)()],ey.prototype,"namespace",void 0),ev([(0,r.SB)()],ey.prototype,"activeConnectorIds",void 0),ey=ev([(0,h.Mo)("w3m-account-default-widget")],ey);var ex=(0,o.iv)`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,eC=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ek=class extends o.oi{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return(0,o.dy)`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ek.styles=[w.ET,ex],eC([(0,r.Cb)()],ek.prototype,"dollars",void 0),eC([(0,r.Cb)()],ek.prototype,"pennies",void 0),ek=eC([(0,b.M)("wui-balance")],ek),i(65451);var e$=(0,o.iv)`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,eS=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eR=class extends o.oi{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,(0,o.dy)`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};eR.styles=[w.ET,w.ZM,e$],eS([(0,r.Cb)()],eR.prototype,"placement",void 0),eS([(0,r.Cb)()],eR.prototype,"variant",void 0),eS([(0,r.Cb)()],eR.prototype,"message",void 0),eR=eS([(0,b.M)("wui-tooltip")],eR);var eT=i(46773),eI=i(54946);let eO=e=>e&&e===K.b.CHAIN.EVM?a.OptionsController.state.remoteFeatures?.activity===!1?eI.b.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):eI.b.ACCOUNT_TABS:[];i(45557);var eE=(0,o.iv)`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let eA=class extends o.oi{render(){return(0,o.dy)`<w3m-activity-list page="account"></w3m-activity-list>`}};eA.styles=eE,eA=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-account-activity-widget")],eA),i(92374),i(51437);var eN=(0,o.iv)`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let ej=class extends o.oi{render(){return(0,o.dy)`${this.nftTemplate()}`}nftTemplate(){return(0,o.dy)` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){Z.RouterController.push("WalletReceive")}};ej.styles=eN,ej=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-account-nfts-widget")],ej),i(80675);var eP=(0,o.iv)`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,eB=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eD=class extends o.oi{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return(0,o.dy)`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?(0,o.dy)` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:(0,o.dy)`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};eD.styles=[w.ET,w.ZM,eP],eB([(0,r.Cb)()],eD.prototype,"icon",void 0),eB([(0,r.Cb)()],eD.prototype,"text",void 0),eB([(0,r.Cb)()],eD.prototype,"description",void 0),eB([(0,r.Cb)()],eD.prototype,"tag",void 0),eB([(0,r.Cb)()],eD.prototype,"iconBackgroundColor",void 0),eB([(0,r.Cb)()],eD.prototype,"iconColor",void 0),eB([(0,r.Cb)({type:Boolean})],eD.prototype,"disabled",void 0),eD=eB([(0,b.M)("wui-list-description")],eD),i(79207);var eL=(0,o.iv)`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,eW=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eM=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=d.N.state.tokenBalance,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.unsubscribe.push(d.N.subscribe(e=>{this.tokenBalance=e.tokenBalance}),a.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?(0,o.dy)`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:(0,o.dy)` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?(0,o.dy)`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description>`:(0,o.dy)``}tokenItemTemplate(){return this.tokenBalance?.map(e=>o.dy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){Z.RouterController.push("WalletReceive")}onBuyClick(){D.X.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(0,Y.r9)(s.R.state.activeChain)===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),Z.RouterController.push("OnRampProviders")}};eM.styles=eL,eW([(0,r.SB)()],eM.prototype,"tokenBalance",void 0),eW([(0,r.SB)()],eM.prototype,"remoteFeatures",void 0),eM=eW([(0,h.Mo)("w3m-account-tokens-widget")],eM),i(32567),i(92815);var ez=(0,o.iv)`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,eU=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e_=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.address=d.N.state.address,this.profileName=d.N.state.profileName,this.network=s.R.state.activeCaipNetwork,this.currentTab=d.N.state.currentTab,this.tokenBalance=d.N.state.tokenBalance,this.features=a.OptionsController.state.features,this.namespace=s.R.state.activeChain,this.activeConnectorIds=q.ConnectorController.state.activeConnectorIds,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.unsubscribe.push(d.N.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):p.I.close()}),q.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.R.subscribeKey("activeChain",e=>this.namespace=e),s.R.subscribeKey("activeCaipNetwork",e=>this.network=e),a.OptionsController.subscribeKey("features",e=>this.features=e),a.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){d.N.fetchTokenBalance()}render(){if(!this.address)throw Error("w3m-account-view: No account provided");if(!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?q.ConnectorController.getConnectorById(e):void 0,{icon:i,iconSize:r}=this.getAuthData();return(0,o.dy)`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="xs">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${i}
          iconSize=${r}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||G.bq.DEFAULT_FEATURES.walletFeaturesOrder;return e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e])?null:(0,o.dy)`<wui-flex gap="s">
      ${e.map(e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}onrampTemplate(){return this.remoteFeatures?.onramp?(0,o.dy)`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=s.R.state.activeChain===K.b.CHAIN.EVM;return e&&t?(0,o.dy)`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){return this.features?.receive?(0,o.dy)`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){let e=this.features?.send,t=s.R.state.activeChain,i=G.bq.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?(0,o.dy)`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>d.N.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===K.b.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?(0,o.dy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?(0,o.dy)`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?(0,o.dy)`<w3m-account-activity-widget></w3m-account-activity-widget>`:(0,o.dy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=u.j.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=u.j.formatTokenBalance(e);return(0,o.dy)`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return(0,o.dy)`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=eO(s.R.state.activeChain);if(0===e.length)return null;let t=u.j.isMobile()&&window.innerWidth<430,i="104px";return i=t?`${(window.innerWidth-48)/e.length}px`:2===e.length?"156px":"104px",(0,o.dy)`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${i}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){d.N.setCurrentTab(e)}onBuyClick(){Z.RouterController.push("OnRampProviders")}onSwapClick(){this.network?.caipNetworkId&&!G.bq.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?Z.RouterController.push("UnsupportedChain",{swapUnsupportedChain:!0}):(D.X.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,Y.r9)(s.R.state.activeChain)===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),Z.RouterController.push("Swap"))}getAuthData(){let e=er.M.getConnectedSocialProvider(),t=er.M.getConnectedSocialUsername(),i=q.ConnectorController.getAuthConnector(),o=i?.provider.getEmail()??"";return{name:eT.C.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onReceiveClick(){Z.RouterController.push("WalletReceive")}onGoToProfileWalletsView(){Z.RouterController.push("ProfileWallets")}onSendClick(){D.X.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,Y.r9)(s.R.state.activeChain)===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),Z.RouterController.push("WalletSend")}};e_.styles=ez,eU([(0,r.SB)()],e_.prototype,"watchTokenBalance",void 0),eU([(0,r.SB)()],e_.prototype,"address",void 0),eU([(0,r.SB)()],e_.prototype,"profileName",void 0),eU([(0,r.SB)()],e_.prototype,"network",void 0),eU([(0,r.SB)()],e_.prototype,"currentTab",void 0),eU([(0,r.SB)()],e_.prototype,"tokenBalance",void 0),eU([(0,r.SB)()],e_.prototype,"features",void 0),eU([(0,r.SB)()],e_.prototype,"namespace",void 0),eU([(0,r.SB)()],e_.prototype,"activeConnectorIds",void 0),eU([(0,r.SB)()],e_.prototype,"remoteFeatures",void 0),e_=eU([(0,h.Mo)("w3m-account-wallet-features-widget")],e_);var eF=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eV=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.namespace=s.R.state.activeChain,this.unsubscribe.push(s.R.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=q.ConnectorController.getConnectorId(this.namespace),t=q.ConnectorController.getAuthConnector();return(0,o.dy)`
      ${t&&e===K.b.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return(0,o.dy)`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return(0,o.dy)`<w3m-account-default-widget></w3m-account-default-widget>`}};eF([(0,r.SB)()],eV.prototype,"namespace",void 0),eV=eF([(0,h.Mo)("w3m-account-view")],eV);var eH=i(89906),eK=i(86988),eq=i(8789);i(4308),i(43465);var eG=(0,o.iv)`
  wui-image {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`,eX=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eY=class extends o.oi{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return(0,o.dy)`
      <wui-flex flexDirection="column" rowGap="xs">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return(0,o.dy)`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?(0,o.dy)`<wui-icon-link
              iconColor="fg-200"
              size="sm"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return(0,o.dy)` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?(0,o.dy)`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>

            ${this.iconBadge?(0,o.dy)`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:(0,o.dy)`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:(0,o.dy)`
      <wui-flex flexDirection="column" rowGap="s">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:i,description:r,enableButton:n,buttonType:a,buttonLabel:s,buttonVariant:l,tagVariant:c,tagLabel:d,alignItems:u="flex-end"}){return(0,o.dy)`
      <wui-flex justifyContent="space-between" alignItems=${u} columnGap="3xs">
        <wui-flex flexDirection="column" rowGap="4xs">
          ${i?(0,o.dy)`<wui-text variant="micro-600" color="fg-200">${i}</wui-text>`:null}

          <wui-flex alignItems="center" columnGap="3xs">
            <wui-text variant="small-500" color="fg-100">
              ${g.H.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${c&&d?(0,o.dy)`<wui-tag variant=${c} size="xs">${d}</wui-tag>`:null}
          </wui-flex>

          ${r?(0,o.dy)`<wui-text variant="tiny-500" color="fg-200">${r}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:a,buttonLabel:s,buttonVariant:l}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:i}){return(0,o.dy)`
      <wui-button
        size="xs"
        variant=${i}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};eY.styles=[w.ET,w.ZM,eG],eX([(0,r.Cb)()],eY.prototype,"address",void 0),eX([(0,r.Cb)()],eY.prototype,"profileName",void 0),eX([(0,r.Cb)({type:Array})],eY.prototype,"content",void 0),eX([(0,r.Cb)()],eY.prototype,"alt",void 0),eX([(0,r.Cb)()],eY.prototype,"imageSrc",void 0),eX([(0,r.Cb)()],eY.prototype,"icon",void 0),eX([(0,r.Cb)()],eY.prototype,"iconSize",void 0),eX([(0,r.Cb)()],eY.prototype,"iconBadge",void 0),eX([(0,r.Cb)()],eY.prototype,"iconBadgeSize",void 0),eX([(0,r.Cb)()],eY.prototype,"buttonVariant",void 0),eX([(0,r.Cb)({type:Boolean})],eY.prototype,"enableMoreButton",void 0),eX([(0,r.Cb)({type:Number})],eY.prototype,"charsStart",void 0),eX([(0,r.Cb)({type:Number})],eY.prototype,"charsEnd",void 0),eY=eX([(0,b.M)("wui-active-profile-wallet-item")],eY);var eZ=(0,o.iv)`
  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`,eQ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eJ=class extends o.oi{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="off",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return(0,o.dy)`
      <wui-flex alignItems="center" columnGap="xs">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?(0,o.dy)`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>
            ${this.iconBadge?(0,o.dy)`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:(0,o.dy)`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="small-500" color="fg-100">
          ${g.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return(0,o.dy)`
      <wui-flex columnGap="3xs" alignItems="center" justifyContent="center">
        <wui-button
          size="xs"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          iconColor="fg-200"
          size=${this.rightIconSize}
          icon=${this.rightIcon}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};eJ.styles=[w.ET,w.ZM,eZ],eQ([(0,r.Cb)()],eJ.prototype,"address",void 0),eQ([(0,r.Cb)()],eJ.prototype,"profileName",void 0),eQ([(0,r.Cb)()],eJ.prototype,"alt",void 0),eQ([(0,r.Cb)()],eJ.prototype,"buttonLabel",void 0),eQ([(0,r.Cb)()],eJ.prototype,"buttonVariant",void 0),eQ([(0,r.Cb)()],eJ.prototype,"imageSrc",void 0),eQ([(0,r.Cb)()],eJ.prototype,"icon",void 0),eQ([(0,r.Cb)()],eJ.prototype,"iconSize",void 0),eQ([(0,r.Cb)()],eJ.prototype,"iconBadge",void 0),eQ([(0,r.Cb)()],eJ.prototype,"iconBadgeSize",void 0),eQ([(0,r.Cb)()],eJ.prototype,"rightIcon",void 0),eQ([(0,r.Cb)()],eJ.prototype,"rightIconSize",void 0),eQ([(0,r.Cb)({type:Boolean})],eJ.prototype,"loading",void 0),eQ([(0,r.Cb)({type:Number})],eJ.prototype,"charsStart",void 0),eQ([(0,r.Cb)({type:Number})],eJ.prototype,"charsEnd",void 0),eJ=eQ([(0,b.M)("wui-inactive-profile-wallet-item")],eJ),i(39203);var e0=i(54090);let e3={getAuthData(e){let t=e.connectorId===K.b.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};let i=e?.auth?.name??er.M.getConnectedSocialProvider(),o=e?.auth?.username??er.M.getConnectedSocialUsername(),r=q.ConnectorController.getAuthConnector(),n=r?.provider.getEmail()??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?eT.C.getAuthName({email:n,socialUsername:o,socialProvider:i}):void 0}}};var e1=(0,o.iv)`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: var(--wui-spacing-l);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-separator {
    margin: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  .active-connection {
    padding: var(--wui-spacing-xs);
  }

  .recent-connection {
    padding: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`,e2=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e5={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},e4={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},e6=[{namespace:"eip155",icon:e4.eip155,label:"EVM"},{namespace:"solana",icon:e4.solana,label:"Solana"},{namespace:"bip122",icon:e4.bip122,label:"Bitcoin"}],e8={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}},e7=class extends o.oi{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=s.R.state.activeChain,this.namespaces=Array.from(s.R.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=q.ConnectorController.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=s.R.state.activeCaipNetwork,this.user=d.N.state.user,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.tabWidth="",this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=s.R.getAccountData(this.namespace)?.caipAddress,this.profileName=s.R.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(Q.ConnectionController.subscribeKey("connections",()=>this.requestUpdate()),Q.ConnectionController.subscribeKey("recentConnections",()=>this.requestUpdate()),q.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.R.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),d.N.subscribeKey("user",e=>this.user=e),a.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=s.R.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.tabsResizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){let e=this.shadowRoot?.querySelector(".wallet-list"),t=this.shadowRoot?.querySelector("wui-tabs");if(!e)return;let i=()=>this.updateScrollOpacity(e);if(requestAnimationFrame(i),e.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(e),i(),t){let e=()=>{let e=e6.filter(e=>this.namespaces.includes(e.namespace)).length;if(e>1){let t=this.getBoundingClientRect()?.width;this.tabWidth=`${(t-32-8)/e}px`,this.requestUpdate()}};this.tabsResizeObserver=new ResizeObserver(e),this.tabsResizeObserver.observe(this),e()}}render(){let e=this.namespace;if(!e)throw Error("Namespace is not set");return(0,o.dy)`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="l">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){let e=e6.filter(e=>this.namespaces.includes(e.namespace));return e.length>1?(0,o.dy)`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          localTabWidth=${this.tabWidth}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){let t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+(this.caipAddress?1:0);return(0,o.dy)`
      <wui-flex alignItems="center" columnGap="3xs">
        <wui-icon
          name=${e4[e]??e4.eip155}
          size="lg"
        ></wui-icon>
        <wui-text color="fg-200" variant="small-400"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="fg-100"
          variant="small-400"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="fg-200"
          @click=${()=>Q.ConnectionController.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){let t=this.hasAnyConnections(e);return(0,o.dy)`
      <wui-flex flexDirection="column" class=${(0,eH.$)({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowGap="s">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){let t=this.getActiveConnections(e),i=this.activeConnectorIds[e],r=this.getPlainAddress();return(0,o.dy)`
      ${r||i||t.length>0?(0,o.dy)`<wui-flex
            flexDirection="column"
            .padding=${["l","0","xs","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){let t=this.activeConnectorIds[e];if(!t)return null;let{connections:i}=eq.f.getConnectionsData(e),r=q.ConnectorController.getConnectorById(t),n=c.f.getConnectorImage(r),a=this.getPlainAddress();if(!a)return null;let s=e===K.b.CHAIN.BITCOIN,l=e3.getAuthData({connectorId:t,accounts:[]}),d=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=i.find(e=>e.connectorId===t),p=u?.accounts.filter(e=>!e0.g.isLowerCaseMatch(e.address,a));return(0,o.dy)`
      <wui-flex flexDirection="column" .padding=${["0","l","0","l"]}>
        <wui-active-profile-wallet-item
          address=${a}
          alt=${r?.name}
          .content=${this.getProfileContent({address:a,connections:i,connectorId:t,namespace:e})}
          .charsStart=${e5.ADDRESS_DISPLAY.START}
          .charsEnd=${e5.ADDRESS_DISPLAY.END}
          .icon=${l.icon}
          .iconSize=${l.iconSize}
          .iconBadge=${this.isSmartAccount(a)?e5.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(a)?e5.BADGE.SIZE:void 0}
          imageSrc=${n}
          ?enableMoreButton=${l.isAuth}
          @copy=${()=>this.handleCopyAddress(a)}
          @disconnect=${()=>this.handleDisconnect(e,{id:t})}
          @switch=${()=>{s&&u&&p?.[0]&&this.handleSwitchWallet(u,p[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(a)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${d?(0,o.dy)`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){let t=this.getActiveConnections(e);return 0===t.length?null:(0,o.dy)`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){let{recentConnections:t}=eq.f.getConnectionsData(e);return 0===t.flatMap(e=>e.accounts).length?null:(0,o.dy)`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]} rowGap="xs">
        <wui-text color="fg-200" variant="micro-500" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,i){return e.filter(e=>e.accounts.length>0).map((e,r)=>{let n=q.ConnectorController.getConnectorById(e.connectorId),a=c.f.getConnectorImage(n)??"",s=e3.getAuthData(e);return e.accounts.map((n,l)=>{let c=this.isAccountLoading(e.connectorId,n.address);return(0,o.dy)`
            <wui-flex flexDirection="column">
              ${0!==r||0!==l?(0,o.dy)`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${n.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral":"accent"}
                rightIcon=${t?"bin":"off"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(n.address)?e5.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(n.address)?e5.BADGE.SIZE:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${c}
                .showBalance=${!1}
                .charsStart=${e5.ADDRESS_DISPLAY.START}
                .charsEnd=${e5.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(e,n.address,i)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:n.address,isRecentConnection:t,namespace:i})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;let{title:t}=this.getChainLabelInfo(e);return(0,o.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){let{title:t,description:i}=this.getChainLabelInfo(e);return(0,o.dy)`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="s"
          class="empty-box"
        >
          <wui-icon-box
            size="lg"
            icon="wallet"
            background="gray"
            iconColor="fg-200"
            backgroundColor="glass-002"
          ></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="3xs">
            <wui-text color="fg-100" variant="paragraph-500" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="fg-200" variant="tiny-500" data-testid="empty-state-description"
              >${i}</wui-text
            >
          </wui-flex>

          <wui-button
            variant="neutral"
            size="md"
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
          >
            <wui-icon color="inherit" slot="iconLeft" name="plus"></wui-icon>
            ${t}
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){let t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=s.R.getAccountData(t)?.caipAddress,this.profileName=s.R.getAccountData(t)?.profileName,this.chainListener=s.R.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,i){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,await Q.ConnectionController.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?X.SnackController.showSuccess("Wallet switched"):e&&X.SnackController.showSuccess("Account switched")}})}catch(e){X.SnackController.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){let{connection:t,address:i,isRecentConnection:o,namespace:r}=e;o?(er.M.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:r}),Q.ConnectionController.syncStorageConnections(),X.SnackController.showSuccess("Wallet deleted")):this.handleDisconnect(r,{id:t.connectorId})}async handleDisconnect(e,{id:t}){try{await Q.ConnectionController.disconnect({id:t,namespace:e}),X.SnackController.showSuccess("Wallet disconnected")}catch{X.SnackController.showError("Failed to disconnect wallet")}}handleCopyAddress(e){u.j.copyToClopboard(e),X.SnackController.showSuccess("Address copied")}handleMore(){Z.RouterController.push("AccountSettings")}handleExternalLink(e){let t=this.caipNetwork?.blockExplorers?.default.url;t&&u.j.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){q.ConnectorController.setFilterByNamespace(e),Z.RouterController.push("Connect")}getChainLabelInfo(e){return e8[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;let t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!!t&&!!e&&e0.g.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?u.j.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){let t=this.activeConnectorIds[e],{connections:i}=eq.f.getConnectionsData(e),[o]=i.filter(e=>e0.g.isLowerCaseMatch(e.connectorId,t));if(!t)return i;let r=e===K.b.CHAIN.BITCOIN,{address:n}=this.caipAddress?eK.u.parseCaipAddress(this.caipAddress):{},a=[...n?[n]:[]];return r&&o&&(a=o.accounts.map(e=>e.address)||[]),eq.f.excludeConnectorAddressFromConnections({connectorId:t,addresses:a,connections:i})}hasAnyConnections(e){let t=this.getActiveConnections(e),{recentConnections:i}=eq.f.getConnectionsData(e);return!!this.caipAddress||t.length>0||i.length>0}isAccountLoading(e,t){return e0.g.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&e0.g.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){let{address:t,connections:i,connectorId:o,namespace:r}=e,[n]=i.filter(e=>e0.g.isLowerCaseMatch(e.connectorId,o));if(r===K.b.CHAIN.BITCOIN&&n?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(n.accounts,t);let a=e3.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral",...a.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){let i=e.length>1,o=this.getPlainAddress();return e.map(e=>{let r=e0.g.isLowerCaseMatch(e.address,o),n="PAYMENT";return"ordinal"===e.type&&(n="ORDINALS"),{address:e.address,tagLabel:e0.g.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:e0.g.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:n,alignItems:"flex-end",buttonType:r?"disconnect":"switch",buttonLabel:r?"Disconnect":"Switch",buttonVariant:r?"neutral":"accent"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral"}}})}removeScrollListener(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",h.kj.interpolate([0,e5.SCROLL_THRESHOLD],e5.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",h.kj.interpolate([0,e5.SCROLL_THRESHOLD],e5.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}};e7.styles=e1,e2([(0,r.SB)()],e7.prototype,"currentTab",void 0),e2([(0,r.SB)()],e7.prototype,"namespace",void 0),e2([(0,r.SB)()],e7.prototype,"namespaces",void 0),e2([(0,r.SB)()],e7.prototype,"caipAddress",void 0),e2([(0,r.SB)()],e7.prototype,"profileName",void 0),e2([(0,r.SB)()],e7.prototype,"activeConnectorIds",void 0),e2([(0,r.SB)()],e7.prototype,"lastSelectedAddress",void 0),e2([(0,r.SB)()],e7.prototype,"lastSelectedConnectorId",void 0),e2([(0,r.SB)()],e7.prototype,"isSwitching",void 0),e2([(0,r.SB)()],e7.prototype,"caipNetwork",void 0),e2([(0,r.SB)()],e7.prototype,"user",void 0),e2([(0,r.SB)()],e7.prototype,"remoteFeatures",void 0),e2([(0,r.SB)()],e7.prototype,"tabWidth",void 0),e7=e2([(0,h.Mo)("w3m-profile-wallets-view")],e7);var e9=i(77548),te=(0,o.iv)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,tt=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ti=class extends o.oi{constructor(){super(...arguments),this.inputElementRef=(0,e9.V)(),this.checked=void 0}render(){return(0,o.dy)`
      <label>
        <input
          ${(0,e9.i)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,n.o)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};ti.styles=[w.ET,w.ZM,w.Bp,te],tt([(0,r.Cb)({type:Boolean})],ti.prototype,"checked",void 0),ti=tt([(0,b.M)("wui-switch")],ti);var to=(0,o.iv)`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,tr=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tn=class extends o.oi{constructor(){super(...arguments),this.checked=void 0}render(){return(0,o.dy)`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,n.o)(this.checked)}></wui-switch>
      </button>
    `}};tn.styles=[w.ET,w.ZM,to],tr([(0,r.Cb)({type:Boolean})],tn.prototype,"checked",void 0),tn=tr([(0,b.M)("wui-certified-switch")],tn);var ta=(0,o.iv)`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,ts=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tl=class extends o.oi{constructor(){super(...arguments),this.icon="copy"}render(){return(0,o.dy)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};tl.styles=[w.ET,w.ZM,ta],ts([(0,r.Cb)()],tl.prototype,"icon",void 0),tl=ts([(0,b.M)("wui-input-element")],tl),i(4163);var tc=(0,o.iv)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let td=class extends o.oi{constructor(){super(...arguments),this.inputComponentRef=(0,e9.V)()}render(){return(0,o.dy)`
      <wui-input-text
        ${(0,e9.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};td.styles=[w.ET,tc],td=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,b.M)("wui-search-bar")],td);var tu=i(17766),tp=i(24348);i(42653);var th=(0,o.iv)`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,tw=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tg=class extends o.oi{constructor(){super(...arguments),this.type="wallet"}render(){return(0,o.dy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,o.dy)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tp.W}`:(0,o.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tg.styles=[w.ET,w.ZM,th],tw([(0,r.Cb)()],tg.prototype,"type",void 0),tg=tw([(0,b.M)("wui-card-select-loader")],tg);var tb=(0,o.iv)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,tf=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tm=class extends o.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&g.H.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&g.H.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&g.H.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&g.H.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&g.H.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&g.H.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&g.H.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&g.H.getSpacingStyles(this.margin,3)};
    `,(0,o.dy)`<slot></slot>`}};tm.styles=[w.ET,tb],tf([(0,r.Cb)()],tm.prototype,"gridTemplateRows",void 0),tf([(0,r.Cb)()],tm.prototype,"gridTemplateColumns",void 0),tf([(0,r.Cb)()],tm.prototype,"justifyItems",void 0),tf([(0,r.Cb)()],tm.prototype,"alignItems",void 0),tf([(0,r.Cb)()],tm.prototype,"justifyContent",void 0),tf([(0,r.Cb)()],tm.prototype,"alignContent",void 0),tf([(0,r.Cb)()],tm.prototype,"columnGap",void 0),tf([(0,r.Cb)()],tm.prototype,"rowGap",void 0),tf([(0,r.Cb)()],tm.prototype,"gap",void 0),tf([(0,r.Cb)()],tm.prototype,"padding",void 0),tf([(0,r.Cb)()],tm.prototype,"margin",void 0),tm=tf([(0,b.M)("wui-grid")],tm);var tv=i(70768);i(80843),i(40511);var ty=(0,o.iv)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,tx=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tC=class extends o.oi{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return(0,o.dy)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,n.o)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?(0,o.dy)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?(0,o.dy)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,n.o)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return(0,o.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=c.f.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await c.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};tC.styles=ty,tx([(0,r.SB)()],tC.prototype,"visible",void 0),tx([(0,r.SB)()],tC.prototype,"imageSrc",void 0),tx([(0,r.SB)()],tC.prototype,"imageLoading",void 0),tx([(0,r.Cb)()],tC.prototype,"wallet",void 0),tC=tx([(0,h.Mo)("w3m-all-wallets-list-item")],tC);var tk=(0,o.iv)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,t$=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tS="local-paginator",tR=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!tu.ApiController.state.wallets.length,this.wallets=tu.ApiController.state.wallets,this.recommended=tu.ApiController.state.recommended,this.featured=tu.ApiController.state.featured,this.filteredWallets=tu.ApiController.state.filteredWallets,this.unsubscribe.push(tu.ApiController.subscribeKey("wallets",e=>this.wallets=e),tu.ApiController.subscribeKey("recommended",e=>this.recommended=e),tu.ApiController.subscribeKey("featured",e=>this.featured=e),tu.ApiController.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return(0,o.dy)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await tu.ApiController.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,o.dy)`
        <wui-card-select-loader type="wallet" id=${(0,n.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=this.filteredWallets?.length>0?u.j.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):u.j.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return tv.J.markWalletsAsInstalled(e).map(e=>(0,o.dy)`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:o}=tu.ApiController.state,r=window.innerWidth<352?3:4,n=e.length+t.length,a=Math.ceil(n/r)*r-n+r;return(a-=e.length?i.length%r:0,0===o&&i.length>0)?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(a,tS):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tS}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:i}=tu.ApiController.state;i.length<t&&tu.ApiController.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){q.ConnectorController.selectWalletConnector(e)}};tR.styles=tk,t$([(0,r.SB)()],tR.prototype,"loading",void 0),t$([(0,r.SB)()],tR.prototype,"wallets",void 0),t$([(0,r.SB)()],tR.prototype,"recommended",void 0),t$([(0,r.SB)()],tR.prototype,"featured",void 0),t$([(0,r.SB)()],tR.prototype,"filteredWallets",void 0),tR=t$([(0,h.Mo)("w3m-all-wallets-list")],tR),i(81255);var tT=(0,o.iv)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,tI=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tO=class extends o.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,o.dy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await tu.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=tu.ApiController.state,t=tv.J.markWalletsAsInstalled(e);return e.length?(0,o.dy)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(e=>(0,o.dy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,o.dy)`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){q.ConnectorController.selectWalletConnector(e)}};tO.styles=tT,tI([(0,r.SB)()],tO.prototype,"loading",void 0),tI([(0,r.Cb)()],tO.prototype,"query",void 0),tI([(0,r.Cb)()],tO.prototype,"badge",void 0),tO=tI([(0,h.Mo)("w3m-all-wallets-search")],tO);var tE=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tA=class extends o.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=u.j.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,o.dy)`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?(0,o.dy)`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,n.o)(this.badge)}
          ></w3m-all-wallets-search>`:(0,o.dy)`<w3m-all-wallets-list badge=${(0,n.o)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if("certified"===this.badge){this.badge=void 0;return}this.badge="certified",X.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return u.j.isMobile()?(0,o.dy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Z.RouterController.push("ConnectingWalletConnect")}};tE([(0,r.SB)()],tA.prototype,"search",void 0),tE([(0,r.SB)()],tA.prototype,"badge",void 0),tA=tE([(0,h.Mo)("w3m-all-wallets-view")],tA);var tN=i(704),tj=i(81341),tP=(0,o.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,tB=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tD=class extends o.oi{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return(0,o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.o)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};tD.styles=[w.ET,w.ZM,tP],tB([(0,r.Cb)()],tD.prototype,"text",void 0),tB([(0,r.Cb)({type:Boolean})],tD.prototype,"disabled",void 0),tB([(0,r.Cb)()],tD.prototype,"tabIdx",void 0),tD=tB([(0,b.M)("wui-list-button")],tD);var tL=i(88578);i(7861);var tW=(0,o.iv)`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,tM=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tz=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,e9.V)(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.unsubscribe.push(a.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.AUTH);return(0,o.dy)`
      <form ${(0,e9.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,n.o)(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?(0,o.dy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?(0,o.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?(0,o.dy)`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!K.b.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.R.state.activeChain)){let e=s.R.getFirstCaipNetworkSupportsAuthConnector();if(e){Z.RouterController.push("SwitchNetwork",{network:e});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=q.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:i}=await t.provider.connectEmail({email:this.email});if(D.X.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i)D.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Z.RouterController.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===i)Z.RouterController.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===i){let e=this.remoteFeatures?.multiWallet;await Q.ConnectionController.connectExternal(t,s.R.state.activeChain),e?(Z.RouterController.replace("ProfileWallets"),X.SnackController.showSuccess("New Wallet Added")):Z.RouterController.replace("Account")}}catch(t){let e=u.j.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":X.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){D.X.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};tz.styles=tW,tM([(0,r.Cb)()],tz.prototype,"tabIdx",void 0),tM([(0,r.SB)()],tz.prototype,"email",void 0),tM([(0,r.SB)()],tz.prototype,"loading",void 0),tM([(0,r.SB)()],tz.prototype,"error",void 0),tM([(0,r.SB)()],tz.prototype,"remoteFeatures",void 0),tz=tM([(0,h.Mo)("w3m-email-login-widget")],tz),i(34041),i(88239);var tU=i(72723),t_=i(5344);i(15834),i(84793);var tF=(0,o.iv)`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,tV=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tH=class extends o.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return(0,o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.o)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};tH.styles=[w.ET,w.ZM,tF],tV([(0,r.Cb)()],tH.prototype,"logo",void 0),tV([(0,r.Cb)({type:Boolean})],tH.prototype,"disabled",void 0),tV([(0,r.Cb)()],tH.prototype,"tabIdx",void 0),tH=tV([(0,b.M)("wui-logo-select")],tH);var tK=i(55),tq=(0,o.iv)`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,tG=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tX=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),a.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e="explore"===this.walletGuide,t=this.remoteFeatures?.socials;return!t&&e?(t=G.bq.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?(0,o.dy)` <wui-flex gap="xs">
        ${e.slice(0,2).map(e=>(0,o.dy)`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:(0,o.dy)` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${(0,n.o)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0,n.o)(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-social>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials,t="explore"===this.walletGuide;return(this.authConnector&&e&&0!==e.length||!t||(e=G.bq.DEFAULT_SOCIALS),!e||e.length<=2)?null:e&&e.length>6?(0,o.dy)`<wui-flex gap="xs">
        ${e.slice(1,5).map(e=>(0,o.dy)`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,n.o)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?(0,o.dy)`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(e=>(0,o.dy)`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,n.o)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){Z.RouterController.push("ConnectSocials")}async onSocialClick(e){if(!K.b.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.R.state.activeChain)){let e=s.R.getFirstCaipNetworkSupportsAuthConnector();if(e){Z.RouterController.push("SwitchNetwork",{network:e});return}}e&&await (0,t_.y0)(e)}async handlePwaFrameLoad(){if(u.j.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof tK.S&&await this.authConnector.provider.init()}catch(e){tU.AlertController.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.AUTH)}};tX.styles=tq,tG([(0,r.Cb)()],tX.prototype,"walletGuide",void 0),tG([(0,r.Cb)()],tX.prototype,"tabIdx",void 0),tG([(0,r.SB)()],tX.prototype,"connectors",void 0),tG([(0,r.SB)()],tX.prototype,"remoteFeatures",void 0),tG([(0,r.SB)()],tX.prototype,"authConnector",void 0),tG([(0,r.SB)()],tX.prototype,"isPwaLoading",void 0),tX=tG([(0,h.Mo)("w3m-social-login-widget")],tX),i(26018);var tY=(0,o.iv)`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`,tZ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tQ=class extends o.oi{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?(0,o.dy)`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:(0,o.dy)`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,n.o)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){Z.RouterController.push("Create")}};tQ.styles=tY,tZ([(0,r.Cb)()],tQ.prototype,"tabIdx",void 0),tZ([(0,r.Cb)()],tQ.prototype,"walletGuide",void 0),tQ=tZ([(0,h.Mo)("w3m-wallet-guide")],tQ);var tJ=(0,o.iv)`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,t0=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t3=class extends o.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return(0,o.dy)`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>(0,o.dy)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,n.o)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>(0,o.dy)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};t3.styles=[w.ET,tJ],t0([(0,r.Cb)({type:Array})],t3.prototype,"walletImages",void 0),t3=t0([(0,b.M)("wui-all-wallets-image")],t3);var t1=(0,o.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,t2=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t5=class extends o.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return(0,o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.o)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?(0,o.dy)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?(0,o.dy)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?(0,o.dy)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:(0,o.dy)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?(0,o.dy)`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?(0,o.dy)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?(0,o.dy)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};t5.styles=[w.ET,w.ZM,t1],t2([(0,r.Cb)({type:Array})],t5.prototype,"walletImages",void 0),t2([(0,r.Cb)()],t5.prototype,"imageSrc",void 0),t2([(0,r.Cb)()],t5.prototype,"name",void 0),t2([(0,r.Cb)()],t5.prototype,"tagLabel",void 0),t2([(0,r.Cb)()],t5.prototype,"tagVariant",void 0),t2([(0,r.Cb)()],t5.prototype,"icon",void 0),t2([(0,r.Cb)()],t5.prototype,"walletIcon",void 0),t2([(0,r.Cb)()],t5.prototype,"tabIdx",void 0),t2([(0,r.Cb)({type:Boolean})],t5.prototype,"installed",void 0),t2([(0,r.Cb)({type:Boolean})],t5.prototype,"disabled",void 0),t2([(0,r.Cb)({type:Boolean})],t5.prototype,"showAllWallets",void 0),t2([(0,r.Cb)({type:Boolean})],t5.prototype,"loading",void 0),t2([(0,r.Cb)({type:String})],t5.prototype,"loadingSpinnerColor",void 0),t5=t2([(0,b.M)("wui-list-wallet")],t5);var t4=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t6=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.count=tu.ApiController.state.count,this.filteredCount=tu.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=tu.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),tu.ApiController.subscribeKey("count",e=>this.count=e),tu.ApiController.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),tu.ApiController.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=a.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!u.j.isMobile())return null;let i=tu.ApiController.state.featured.length,r=this.count+i,s=this.filteredCount>0?this.filteredCount:r<10?r:10*Math.floor(r/10),l=`${s}`;this.filteredCount>0?l=`${this.filteredCount}`:s<r&&(l=`${s}+`);let c=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,n.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
        ?disabled=${c}
      ></wui-list-wallet>
    `}onAllWallets(){D.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Z.RouterController.push("AllWallets")}};t4([(0,r.Cb)()],t6.prototype,"tabIdx",void 0),t4([(0,r.SB)()],t6.prototype,"connectors",void 0),t4([(0,r.SB)()],t6.prototype,"count",void 0),t4([(0,r.SB)()],t6.prototype,"filteredCount",void 0),t4([(0,r.SB)()],t6.prototype,"isFetchingRecommendedWallets",void 0),t6=t4([(0,h.Mo)("w3m-all-wallets-widget")],t6);var t8=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t7=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.connections=Q.ConnectionController.state.connections,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),Q.ConnectionController.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(eT.C.showConnector).map(e=>{let t=(this.connections.get(e.chain)??[]).some(t=>e0.g.isLowerCaseMatch(t.connectorId,e.id));return(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(c.f.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant=${t?"shade":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${(0,n.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?u.j.isMobile()?Z.RouterController.push("AllWallets"):Z.RouterController.push("ConnectingWalletConnect"):Z.RouterController.push("ConnectingExternal",{connector:e})}};t8([(0,r.Cb)()],t7.prototype,"tabIdx",void 0),t8([(0,r.SB)()],t7.prototype,"connectors",void 0),t8([(0,r.SB)()],t7.prototype,"connections",void 0),t7=t8([(0,h.Mo)("w3m-connect-announced-widget")],t7);var t9=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ie=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e)),u.j.isTelegram()&&u.j.isIos()&&(this.loading=!Q.ConnectionController.state.wcUri,this.unsubscribe.push(Q.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=a.OptionsController.state;if(!e?.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e),i=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`<wui-flex flexDirection="column" gap="xs">
      ${t.map(e=>(0,o.dy)`
          <wui-list-wallet
            imageSrc=${(0,n.o)(c.f.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,n.o)(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${i}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){let t=er.M.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),o=t.map(e=>e.rdns).filter(Boolean),r=i.concat(o);if(r.includes("io.metamask.mobile")&&u.j.isMobile()){let e=r.indexOf("io.metamask.mobile");r[e]="io.metamask"}return e.filter(e=>!r.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||Z.RouterController.push("ConnectingWalletConnect",{wallet:e})}};t9([(0,r.Cb)()],ie.prototype,"tabIdx",void 0),t9([(0,r.SB)()],ie.prototype,"connectors",void 0),t9([(0,r.SB)()],ie.prototype,"loading",void 0),ie=t9([(0,h.Mo)("w3m-connect-custom-widget")],ie);var it=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ii=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(eT.C.showConnector).filter(e=>e.id!==K.b.CONNECTOR_ID.COINBASE_SDK);if(!e?.length)return this.style.cssText="display: none",null;let t=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(c.f.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){Z.RouterController.push("ConnectingExternal",{connector:e})}};it([(0,r.Cb)()],ii.prototype,"tabIdx",void 0),it([(0,r.SB)()],ii.prototype,"connectors",void 0),ii=it([(0,h.Mo)("w3m-connect-external-widget")],ii);var io=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ir=class extends o.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;let e=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>(0,o.dy)`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,n.o)(c.f.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){q.ConnectorController.selectWalletConnector(e)}};io([(0,r.Cb)()],ir.prototype,"tabIdx",void 0),io([(0,r.Cb)()],ir.prototype,"wallets",void 0),ir=io([(0,h.Mo)("w3m-connect-featured-widget")],ir);var ia=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let is=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=Q.ConnectionController.state.connections,this.unsubscribe.push(Q.ConnectionController.subscribeKey("connections",e=>this.connections=e))}render(){let e=this.connectors.filter(eT.C.showConnector);return 0===e.length?(this.style.cssText="display: none",null):(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>{let t=(this.connections.get(e.chain)??[]).some(t=>e0.g.isLowerCaseMatch(t.connectorId,e.id));return(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(c.f.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant=${t?"shade":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,n.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){q.ConnectorController.setActiveConnector(e),Z.RouterController.push("ConnectingExternal",{connector:e})}};ia([(0,r.Cb)()],is.prototype,"tabIdx",void 0),ia([(0,r.Cb)()],is.prototype,"connectors",void 0),ia([(0,r.SB)()],is.prototype,"connections",void 0),is=ia([(0,h.Mo)("w3m-connect-injected-widget")],is);var il=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ic=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);return e?.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(c.f.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,n.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){q.ConnectorController.setActiveConnector(e),Z.RouterController.push("ConnectingMultiChain")}};il([(0,r.Cb)()],ic.prototype,"tabIdx",void 0),il([(0,r.SB)()],ic.prototype,"connectors",void 0),ic=il([(0,h.Mo)("w3m-connect-multi-chain-widget")],ic);var id=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iu=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e)),u.j.isTelegram()&&u.j.isIos()&&(this.loading=!Q.ConnectionController.state.wcUri,this.unsubscribe.push(Q.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let e=er.M.getRecentWallets().filter(e=>!tv.J.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));if(!e.length)return this.style.cssText="display: none",null;let t=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(c.f.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||q.ConnectorController.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){let t=s.R.state.activeChain;return!t||!e.chains||e.chains.some(e=>t===e.split(":")[0])}};id([(0,r.Cb)()],iu.prototype,"tabIdx",void 0),id([(0,r.SB)()],iu.prototype,"connectors",void 0),id([(0,r.SB)()],iu.prototype,"loading",void 0),iu=id([(0,h.Mo)("w3m-connect-recent-widget")],iu);var ip=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ih=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.j.isTelegram()&&u.j.isIos()&&(this.loading=!Q.ConnectionController.state.wcUri,this.unsubscribe.push(Q.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let{connectors:e}=q.ConnectorController.state,{customWallets:t,featuredWalletIds:i}=a.OptionsController.state,r=er.M.getRecentWallets(),s=e.find(e=>"walletConnect"===e.id),l=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type).filter(e=>"Browser Wallet"!==e.name);if(!s)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;let d=l.length+r.length,u=tv.J.filterOutDuplicateWallets(this.wallets).slice(0,Math.max(0,2-d));if(!u.length)return this.style.cssText="display: none",null;let p=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${u.map(e=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,n.o)(c.f.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,n.o)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${p}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;let t=q.ConnectorController.getConnector(e.id,e.rdns);t?Z.RouterController.push("ConnectingExternal",{connector:t}):Z.RouterController.push("ConnectingWalletConnect",{wallet:e})}};ip([(0,r.Cb)()],ih.prototype,"tabIdx",void 0),ip([(0,r.Cb)()],ih.prototype,"wallets",void 0),ip([(0,r.SB)()],ih.prototype,"loading",void 0),ih=ip([(0,h.Mo)("w3m-connect-recommended-widget")],ih);var iw=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ig=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.connectorImages=l.W.state.connectorImages,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),l.W.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(u.j.isMobile())return this.style.cssText="display: none",null;let e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;let t=e.imageUrl||this.connectorImages[e?.imageId??""],i=Q.ConnectionController.hasAnyConnection(K.b.CONNECTOR_ID.WALLET_CONNECT);return(0,o.dy)`
      <wui-list-wallet
        imageSrc=${(0,n.o)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,n.o)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        ?disabled=${i}
      >
      </wui-list-wallet>
    `}onConnector(e){q.ConnectorController.setActiveConnector(e),Z.RouterController.push("ConnectingWalletConnect")}};iw([(0,r.Cb)()],ig.prototype,"tabIdx",void 0),iw([(0,r.SB)()],ig.prototype,"connectors",void 0),iw([(0,r.SB)()],ig.prototype,"connectorImages",void 0),ig=iw([(0,h.Mo)("w3m-connect-walletconnect-widget")],ig);var ib=(0,o.iv)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,im=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iv=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=q.ConnectorController.state.connectors,this.recommended=tu.ApiController.state.recommended,this.featured=tu.ApiController.state.featured,this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),tu.ApiController.subscribeKey("recommended",e=>this.recommended=e),tu.ApiController.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){let{custom:e,recent:t,announced:i,injected:r,multiChain:a,recommended:s,featured:l,external:c}=eT.C.getConnectorsByType(this.connectors,this.recommended,this.featured);return eT.C.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:r,multiChain:a,recommended:s,featured:l,external:c}).map(e=>{switch(e){case"injected":return(0,o.dy)`
            ${a.length?(0,o.dy)`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,n.o)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?(0,o.dy)`<w3m-connect-announced-widget
                  tabIdx=${(0,n.o)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?(0,o.dy)`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${(0,n.o)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return(0,o.dy)`<w3m-connect-walletconnect-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return(0,o.dy)`<w3m-connect-recent-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return(0,o.dy)`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return(0,o.dy)`<w3m-connect-custom-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return(0,o.dy)`<w3m-connect-external-widget
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return(0,o.dy)`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,n.o)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}})}};iv.styles=ib,im([(0,r.Cb)()],iv.prototype,"tabIdx",void 0),im([(0,r.SB)()],iv.prototype,"connectors",void 0),im([(0,r.SB)()],iv.prototype,"recommended",void 0),im([(0,r.SB)()],iv.prototype,"featured",void 0),iv=im([(0,h.Mo)("w3m-connector-list")],iv);var iy=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ix=class extends o.oi{constructor(){super(...arguments),this.tabIdx=void 0}render(){return(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,n.o)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,n.o)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};iy([(0,r.Cb)()],ix.prototype,"tabIdx",void 0),ix=iy([(0,h.Mo)("w3m-wallet-login-list")],ix);var iC=(0,o.iv)`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,ik=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let i$=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.connectors=q.ConnectorController.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=a.OptionsController.state.features,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.enableWallets=a.OptionsController.state.enableWallets,this.noAdapters=s.R.state.noAdapters,this.walletGuide="get-started",this.checked=tj.M.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!s.R.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!s.R.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(q.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),a.OptionsController.subscribeKey("features",e=>{this.features=e}),a.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),a.OptionsController.subscribeKey("enableWallets",e=>this.enableWallets=e),s.R.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),tj.M.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=a.OptionsController.state,i=a.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!i&&"get-started"===this.walletGuide&&!this.checked,n=a.OptionsController.state.enableWalletGuide,s=this.enableWallets,l=this.isSocialEnabled||this.authConnector,c=r?-1:void 0;return(0,o.dy)`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,eH.$)({connect:!0,disabled:r})}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${l&&s&&n&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(c)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(r)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===tL.b.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return K.b.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){let t=tv.J.getConnectOrderMethod(this.features,this.connectors);return(0,o.dy)`${t.map((t,i)=>{switch(t){case"email":return(0,o.dy)`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return(0,o.dy)`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return(0,o.dy)`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=tv.J.getConnectOrderMethod(this.features,this.connectors)[e+1];return t?this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,t){let i=this.checkIsThereNextMethod(e),r="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!r?(0,o.dy)`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":return this.isAuthEnabled&&this.isEmailEnabled&&"social"!==i&&i?(0,o.dy)`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null;case"social":return this.isAuthEnabled&&this.isSocialEnabled&&"email"!==i&&i?(0,o.dy)`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?(0,o.dy)`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,n.o)(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?(0,o.dy)`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,n.o)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){let t=this.enableWallets,i=this.features?.emailShowWallets===!1,r=this.features?.collapseWallets;return t?(u.j.isTelegram()&&(u.j.isSafari()||u.j.isIos())&&Q.ConnectionController.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&(i||r)?(0,o.dy)`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,n.o)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:(0,o.dy)`<w3m-wallet-login-list tabIdx=${(0,n.o)(e)}></w3m-wallet-login-list>`:null}guideTemplate(e=!1){return a.OptionsController.state.enableWalletGuide&&(this.authConnector||this.isSocialEnabled)?(0,o.dy)`
      ${"explore"!==this.walletGuide||s.R.state.noAdapters?null:(0,o.dy)`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <w3m-wallet-guide
        class=${(0,eH.$)({guide:!0,disabled:e})}
        tabIdx=${(0,n.o)(e?-1:void 0)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:(0,o.dy)`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".connect");e&&(e.scrollHeight>470?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",h.kj.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",h.kj.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){Z.RouterController.push("ConnectWallets")}};i$.styles=iC,ik([(0,tN.S)()],i$.prototype,"connectors",void 0),ik([(0,tN.S)()],i$.prototype,"authConnector",void 0),ik([(0,tN.S)()],i$.prototype,"features",void 0),ik([(0,tN.S)()],i$.prototype,"remoteFeatures",void 0),ik([(0,tN.S)()],i$.prototype,"enableWallets",void 0),ik([(0,tN.S)()],i$.prototype,"noAdapters",void 0),ik([(0,r.Cb)()],i$.prototype,"walletGuide",void 0),ik([(0,tN.S)()],i$.prototype,"checked",void 0),ik([(0,tN.S)()],i$.prototype,"isEmailEnabled",void 0),ik([(0,tN.S)()],i$.prototype,"isSocialEnabled",void 0),ik([(0,tN.S)()],i$.prototype,"isAuthEnabled",void 0),i$=ik([(0,h.Mo)("w3m-connect-view")],i$);var iS=i(52005);i(87302),i(74530);var iR=(0,o.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,iT=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iI=class extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,o.dy)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};iI.styles=[w.ET,w.ZM,iR],iT([(0,r.Cb)({type:Boolean})],iI.prototype,"disabled",void 0),iT([(0,r.Cb)()],iI.prototype,"label",void 0),iT([(0,r.Cb)()],iI.prototype,"buttonLabel",void 0),iI=iT([(0,b.M)("wui-cta-button")],iI);var iO=(0,o.iv)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,iE=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iA=class extends o.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:i,chrome_store:r,homepage:n}=this.wallet,a=u.j.isMobile(),s=u.j.isIos(),l=u.j.isAndroid(),c=[t,i,n,r].filter(Boolean).length>1,d=h.Hg.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!a?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>Z.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&u.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.j.openHref(this.wallet.homepage,"_blank")}};iA.styles=[iO],iE([(0,r.Cb)({type:Object})],iA.prototype,"wallet",void 0),iA=iE([(0,h.Mo)("w3m-mobile-download-links")],iA);var iN=(0,o.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,ij=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class iP extends o.oi{constructor(){super(),this.wallet=Z.RouterController.state.data?.wallet,this.connector=Z.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=c.f.getWalletImage(this.wallet)??c.f.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Q.ConnectionController.state.wcUri,this.error=Q.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Q.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),Q.ConnectionController.subscribeKey("wcError",e=>this.error=e)),(u.j.isTelegram()||u.j.isSafari())&&u.j.isIos()&&Q.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),Q.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),(0,o.dy)`
      <wui-flex
        data-error=${(0,n.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,n.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text
            align="center"
            variant="paragraph-500"
            color=${this.error?"error-100":"fg-100"}
          >
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,o.dy)`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?(0,o.dy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){Q.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=iS.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,o.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.j.copyToClopboard(this.uri),X.SnackController.showSuccess("Link copied"))}catch{X.SnackController.showError("Failed to copy")}}}iP.styles=iN,ij([(0,r.SB)()],iP.prototype,"isRetrying",void 0),ij([(0,r.SB)()],iP.prototype,"uri",void 0),ij([(0,r.SB)()],iP.prototype,"error",void 0),ij([(0,r.SB)()],iP.prototype,"ready",void 0),ij([(0,r.SB)()],iP.prototype,"showRetry",void 0),ij([(0,r.SB)()],iP.prototype,"label",void 0),ij([(0,r.SB)()],iP.prototype,"secondaryBtnLabel",void 0),ij([(0,r.SB)()],iP.prototype,"secondaryLabel",void 0),ij([(0,r.SB)()],iP.prototype,"isLoading",void 0),ij([(0,r.Cb)({type:Boolean})],iP.prototype,"isMobile",void 0),ij([(0,r.Cb)()],iP.prototype,"onRetry",void 0);let iB=class extends iP{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=Q.ConnectionController.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.currentActiveConnectorId=q.ConnectorController.state.activeConnectorIds[this.connector?.chain],!this.connector)throw Error("w3m-connecting-view: No connector provided");let e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),D.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(q.ConnectorController.subscribeKey("activeConnectorIds",t=>{let i=t[e],o=this.remoteFeatures?.multiWallet;i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(Z.RouterController.replace("ProfileWallets"),X.SnackController.showSuccess("New Wallet Added")):p.I.close())}),Q.ConnectionController.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===K.b.CONNECTOR_ID.COINBASE_SDK&&this.error||(await Q.ConnectionController.connectExternal(this.connector,this.connector.chain),D.X.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}}catch(e){D.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){let t=e.get(this.connector.chain)??[],i=this.remoteFeatures?.multiWallet;if(0===t.length)Z.RouterController.replace("Connect");else{let e=eq.f.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),o=eq.f.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);0===o.length?this.hasMultipleConnections&&i?(Z.RouterController.replace("ProfileWallets"),X.SnackController.showSuccess("Wallet deleted")):p.I.close():!e.every(e=>o.some(t=>e0.g.isLowerCaseMatch(e.address,t.address)))&&i&&Z.RouterController.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>e0.g.isLowerCaseMatch(t.connectorId,e.id))}};iB=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-connecting-external-view")],iB);var iD=(0,o.iv)`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,iL=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iW=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.activeConnector=q.ConnectorController.state.activeConnector,this.unsubscribe.push(q.ConnectorController.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,n.o)(c.f.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?o.dy`
            <wui-list-wallet
              imageSrc=${n.o(c.f.getChainImage(e.chain))}
              name=${K.b.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain);if(!t){X.SnackController.showError("Failed to find connector");return}"walletConnect"===t.id?u.j.isMobile()?Z.RouterController.push("AllWallets"):Z.RouterController.push("ConnectingWalletConnect"):Z.RouterController.push("ConnectingExternal",{connector:t})}};iW.styles=iD,iL([(0,r.SB)()],iW.prototype,"activeConnector",void 0),iW=iL([(0,h.Mo)("w3m-connecting-multi-chain-view")],iW);var iM=i(68069),iz=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iU=class extends o.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,o.dy)`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};iz([(0,r.Cb)({type:Array})],iU.prototype,"platforms",void 0),iz([(0,r.Cb)()],iU.prototype,"onSelectPlatfrom",void 0),iU=iz([(0,h.Mo)("w3m-connecting-header")],iU);let i_=class extends iP{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),D.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=q.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await Q.ConnectionController.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");p.I.close(),D.X.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){D.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};i_=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-connecting-wc-browser")],i_);let iF=class extends iP{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),D.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.j.formatNativeUrl(e,this.uri);Q.ConnectionController.setWcLinking({name:t,href:o}),Q.ConnectionController.setRecentWallet(this.wallet),u.j.openHref(i,"_blank")}catch{this.error=!0}}};iF=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-connecting-wc-desktop")],iF);var iV=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iH=class extends iP{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=a.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:r,href:n}=u.j.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=r,this.target=u.j.isIframe()?"_top":"_self",Q.ConnectionController.setWcLinking({name:i,href:n}),Q.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?u.j.openHref(this.redirectUniversalLink,this.target):u.j.openHref(this.redirectDeeplink,this.target)}catch(e){D.X.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=G.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(Q.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),D.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){Q.ConnectionController.setWcError(!1),this.onConnect?.()}};iV([(0,r.SB)()],iH.prototype,"redirectDeeplink",void 0),iV([(0,r.SB)()],iH.prototype,"redirectUniversalLink",void 0),iV([(0,r.SB)()],iH.prototype,"target",void 0),iV([(0,r.SB)()],iH.prototype,"preferUniversalLinks",void 0),iV([(0,r.SB)()],iH.prototype,"isLoading",void 0),iH=iV([(0,h.Mo)("w3m-connecting-wc-mobile")],iH),i(930),i(18742);var iK=(0,o.iv)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let iq=class extends iP{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),D.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return Q.ConnectionController.setWcLinking(void 0),Q.ConnectionController.setRecentWallet(this.wallet),(0,o.dy)` <wui-qr-code
      size=${e}
      theme=${iS.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,n.o)(c.f.getWalletImage(this.wallet))}
      color=${(0,n.o)(iS.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,n.o)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,o.dy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};iq.styles=iK,iq=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-connecting-wc-qrcode")],iq);let iG=class extends o.oi{constructor(){if(super(),this.wallet=Z.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");D.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,n.o)(c.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};iG=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-connecting-wc-unsupported")],iG);var iX=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iY=class extends iP{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=G.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(Q.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),D.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.j.formatUniversalUrl(e,this.uri);Q.ConnectionController.setWcLinking({name:t,href:o}),Q.ConnectionController.setRecentWallet(this.wallet),u.j.openHref(i,"_blank")}catch{this.error=!0}}};iX([(0,r.SB)()],iY.prototype,"isLoading",void 0),iY=iX([(0,h.Mo)("w3m-connecting-wc-web")],iY);var iZ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iQ=class extends o.oi{constructor(){super(),this.wallet=Z.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!a.OptionsController.state.siwx,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(a.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?(0,o.dy)`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!a.OptionsController.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:i}=Q.ConnectionController.state;if(e||a.OptionsController.state.enableEmbedded||u.j.isPairingExpired(t)||"connecting"===i){let e=Q.ConnectionController.getConnections(s.R.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await Q.ConnectionController.connectWalletConnect(),this.isSiwxEnabled||(i&&t?(Z.RouterController.replace("ProfileWallets"),X.SnackController.showSuccess("New Wallet Added")):p.I.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!a.OptionsController.state.enableNetworkSwitch&&s.R.state.activeChain){s.R.setActiveCaipNetwork(iM.f.getUnsupportedNetwork(`${s.R.state.activeChain}:${s.R.state.activeCaipNetwork?.id}`)),s.R.showUnsupportedChainUI();return}D.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),Q.ConnectionController.setWcError(!0),X.SnackController.showError(e.message??"Connection error"),Q.ConnectionController.resetWcConnection(),Z.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:r}=this.wallet,n=o?.map(({injected_id:e})=>e).filter(Boolean),l=[...r?[r]:n??[]],c=!a.OptionsController.state.isUniversalProvider&&l.length,d=Q.ConnectionController.checkInstalled(l),p=c&&d,h=t&&!u.j.isMobile();p&&!s.R.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(u.j.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),h&&this.platforms.push("desktop"),p||!c||s.R.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,o.dy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,o.dy)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,o.dy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,o.dy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,o.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,o.dy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,o.dy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};iZ([(0,r.SB)()],iQ.prototype,"platform",void 0),iZ([(0,r.SB)()],iQ.prototype,"platforms",void 0),iZ([(0,r.SB)()],iQ.prototype,"isSiwxEnabled",void 0),iZ([(0,r.SB)()],iQ.prototype,"remoteFeatures",void 0),iQ=iZ([(0,h.Mo)("w3m-connecting-wc-view")],iQ);var iJ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let i0=class extends o.oi{constructor(){super(...arguments),this.isMobile=u.j.isMobile()}render(){if(this.isMobile){let{featured:e,recommended:t}=tu.ApiController.state,{customWallets:i}=a.OptionsController.state,r=er.M.getRecentWallets(),n=e.length||t.length||i?.length||r.length;return(0,o.dy)`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?(0,o.dy)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,o.dy)`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};iJ([(0,r.SB)()],i0.prototype,"isMobile",void 0),i0=iJ([(0,h.Mo)("w3m-connecting-wc-basic-view")],i0);var i3=i(8330),i1=(0,o.iv)`
  .continue-button-container {
    width: 100%;
  }
`,i2=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let i5=class extends o.oi{constructor(){super(...arguments),this.loading=!1}render(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{u.j.openHref(i3.U.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,o.dy)` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,o.dy)`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){Z.RouterController.push("RegisterAccountName"),D.X.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(0,Y.r9)(s.R.state.activeChain)===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};i5.styles=i1,i2([(0,r.SB)()],i5.prototype,"loading",void 0),i5=i2([(0,h.Mo)("w3m-choose-account-name-view")],i5);let i4=class extends o.oi{constructor(){super(...arguments),this.wallet=Z.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,o.dy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,o.dy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&u.j.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&u.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.j.openHref(this.wallet.homepage,"_blank")}};i4=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-downloads-view")],i4);let i6=class extends o.oi{render(){return(0,o.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{u.j.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=tu.ApiController.state,{customWallets:i}=a.OptionsController.state;return[...t,...i??[],...e].slice(0,4).map(e=>(0,o.dy)`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,n.o)(c.f.getWalletImage(e))}
          @click=${()=>{u.j.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};i6=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-get-wallet-view")],i6),i(68562);var i8=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let i7=class extends o.oi{constructor(){super(...arguments),this.data=[]}render(){return(0,o.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>(0,o.dy)`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>(0,o.dy)`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};i8([(0,r.Cb)({type:Array})],i7.prototype,"data",void 0),i7=i8([(0,h.Mo)("w3m-help-widget")],i7);let i9=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],oe=class extends o.oi{render(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${i9}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){D.X.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Z.RouterController.push("GetWallet")}};oe=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-what-is-a-wallet-view")],oe);var ot=(0,o.iv)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,oi=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let oo=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.checked=tj.M.state.isLegalCheckboxChecked,this.unsubscribe.push(tj.M.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=a.OptionsController.state,i=a.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!i,s=r&&!this.checked;return(0,o.dy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,n.o)(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,n.o)(s?-1:void 0)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};oo.styles=ot,oi([(0,r.SB)()],oo.prototype,"checked",void 0),oo=oi([(0,h.Mo)("w3m-connect-wallets-view")],oo);var or=(0,o.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let on=class extends o.oi{render(){return(0,o.dy)`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};on.styles=[w.ET,or],on=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,b.M)("wui-loading-hexagon")],on),i(74953);var oa=(0,o.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,os=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ol=class extends o.oi{constructor(){super(),this.network=Z.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return(0,o.dy)`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,n.o)(c.f.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:(0,o.dy)`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=q.ConnectorController.getConnectorId(s.R.state.activeChain);return q.ConnectorController.getAuthConnector()&&e===K.b.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=q.ConnectorController.getConnectorId(s.R.state.activeChain);return q.ConnectorController.getAuthConnector()&&e===K.b.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onSwitchNetwork(){try{this.error=!1,s.R.state.activeChain!==this.network?.chainNamespace&&s.R.setIsSwitchingNamespace(!0),this.network&&s.R.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};ol.styles=oa,os([(0,r.SB)()],ol.prototype,"showRetry",void 0),os([(0,r.SB)()],ol.prototype,"error",void 0),ol=os([(0,h.Mo)("w3m-network-switch-view")],ol);var oc=i(4822);i(64349),i(19374);var od=(0,o.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,ou=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let op=class extends o.oi{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return(0,o.dy)`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?(0,o.dy)`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?(0,o.dy)`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:(0,o.dy)`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};op.styles=[w.ET,w.ZM,od],ou([(0,r.Cb)()],op.prototype,"imageSrc",void 0),ou([(0,r.Cb)()],op.prototype,"name",void 0),ou([(0,r.Cb)({type:Boolean})],op.prototype,"disabled",void 0),ou([(0,r.Cb)({type:Boolean})],op.prototype,"selected",void 0),ou([(0,r.Cb)({type:Boolean})],op.prototype,"transparent",void 0),op=ou([(0,b.M)("wui-list-network")],op);var oh=(0,o.iv)`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,ow=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let og=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.network=s.R.state.activeCaipNetwork,this.requestedCaipNetworks=s.R.getCaipNetworks(),this.search="",this.onDebouncedSearch=u.j.debounce(e=>{this.search=e},100),this.unsubscribe.push(l.W.subscribeNetworkImages(()=>this.requestUpdate()),s.R.subscribeKey("activeCaipNetwork",e=>this.network=e),s.R.subscribe(()=>{this.requestedCaipNetworks=s.R.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return(0,o.dy)`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){D.X.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Z.RouterController.push("WhatIsANetwork")}networksTemplate(){let e=s.R.getAllApprovedCaipNetworkIds(),t=u.j.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>o.dy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${n.o(c.f.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){let t=e.chainNamespace,i=d.N.getCaipAddress(t),o=s.R.getAllApprovedCaipNetworkIds(),r=!1!==s.R.getNetworkProp("supportsAllNetworks",t),n=q.ConnectorController.getConnectorId(t),a=q.ConnectorController.getAuthConnector(),l=n===K.b.CONNECTOR_ID.AUTH&&a;return!!i&&!r&&!l&&!o?.includes(e.caipNetworkId)}onSwitchNetwork(e){oc.p.onSwitchNetwork({network:e})}};og.styles=oh,ow([(0,r.SB)()],og.prototype,"network",void 0),ow([(0,r.SB)()],og.prototype,"requestedCaipNetworks",void 0),ow([(0,r.SB)()],og.prototype,"filteredNetworks",void 0),ow([(0,r.SB)()],og.prototype,"search",void 0),og=ow([(0,h.Mo)("w3m-networks-view")],og);var ob=(0,o.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`,of=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let om={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0},ov=class extends o.oi{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=Z.RouterController.state.data?.switchToChain,this.caipNetwork=Z.RouterController.state.data?.network,this.activeChain=s.R.state.activeChain}firstUpdated(){this.unsubscribe.push(s.R.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?K.b.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;let t=K.b.CHAIN_NAME_MAP[this.switchToChain];return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,n.o)(om[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(s.R.setIsSwitchingNamespace(!0),q.ConnectorController.setFilterByNamespace(this.switchToChain),this.caipNetwork?await s.R.switchActiveNetwork(this.caipNetwork):s.R.setActiveNamespace(this.switchToChain),Z.RouterController.reset("Connect"))}};ov.styles=ob,of([(0,r.Cb)()],ov.prototype,"activeChain",void 0),ov=of([(0,h.Mo)("w3m-switch-active-chain-view")],ov);let oy=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],ox=class extends o.oi{render(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${oy}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{u.j.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ox=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-what-is-a-network-view")],ox);var oC=(0,o.iv)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,ok=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let o$=class extends o.oi{constructor(){super(),this.swapUnsupportedChain=Z.RouterController.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=a.OptionsController.state.remoteFeatures,this.unsubscribe.push(l.W.subscribeNetworkImages(()=>this.requestUpdate()),a.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?(0,o.dy)`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:(0,o.dy)`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=s.R.getAllRequestedCaipNetworks(),t=s.R.getAllApprovedCaipNetworkIds(),i=u.j.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter(e=>G.bq.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):i).map(e=>(0,o.dy)`
        <wui-list-network
          imageSrc=${(0,n.o)(c.f.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;let e=s.R.state.activeChain,t=Q.ConnectionController.getConnections(e).length>0,i=e&&q.ConnectorController.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await Q.ConnectionController.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Z.RouterController.push("ProfileWallets"),X.SnackController.showSuccess("Wallet deleted"))}catch{D.X.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),X.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){let t=d.N.state.caipAddress,i=s.R.getAllApprovedCaipNetworkIds(),o=(s.R.getNetworkProp("supportsAllNetworks",e.chainNamespace),Z.RouterController.state.data);t?i?.includes(e.caipNetworkId)?await s.R.switchActiveNetwork(e):Z.RouterController.push("SwitchNetwork",{...o,network:e}):t||(s.R.setActiveCaipNetwork(e),Z.RouterController.push("Connect"))}};o$.styles=oC,ok([(0,r.SB)()],o$.prototype,"disconnecting",void 0),ok([(0,r.SB)()],o$.prototype,"remoteFeatures",void 0),o$=ok([(0,h.Mo)("w3m-unsupported-chain-view")],o$);var oS=(0,o.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,oR=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let oT=class extends o.oi{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return(0,o.dy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};oT.styles=[w.ET,w.ZM,oS],oR([(0,r.Cb)()],oT.prototype,"icon",void 0),oR([(0,r.Cb)()],oT.prototype,"text",void 0),oT=oR([(0,b.M)("wui-banner")],oT);var oI=(0,o.iv)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let oO=class extends o.oi{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,o.dy)` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=s.R.getAllRequestedCaipNetworks(),t=s.R.getAllApprovedCaipNetworkIds(),i=s.R.state.activeCaipNetwork,r=s.R.checkIfSmartAccountEnabled(),a=u.j.sortRequestedNetworks(t,e);if(r&&(0,Y.r9)(i?.chainNamespace)===eo.y_.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;a=[i]}return a.filter(e=>e.chainNamespace===i?.chainNamespace).map(e=>(0,o.dy)`
        <wui-list-network
          imageSrc=${(0,n.o)(c.f.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};oO.styles=oI,oO=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-wallet-compatible-networks-view")],oO);var oE=i(60389),oA=(0,o.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,oN=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let oj=class extends o.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,(0,o.dy)`${this.templateVisual()}`}templateVisual(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:(0,o.dy)`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};oj.styles=[w.ET,oA],oN([(0,r.Cb)()],oj.prototype,"imageSrc",void 0),oN([(0,r.Cb)()],oj.prototype,"alt",void 0),oN([(0,r.Cb)({type:Boolean})],oj.prototype,"borderRadiusFull",void 0),oj=oN([(0,b.M)("wui-visual-thumbnail")],oj);var oP=(0,o.iv)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let oB=class extends o.oi{constructor(){super(...arguments),this.dappImageUrl=a.OptionsController.state.metadata?.icons,this.walletImageUrl=d.N.state.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,o.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};oB.styles=oP,oB=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,h.Mo)("w3m-siwx-sign-message-thumbnails")],oB);var oD=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let oL=class extends o.oi{constructor(){super(...arguments),this.dappName=a.OptionsController.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return(0,o.dy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await oE.w.requestSignMessage().finally(()=>this.isSigning=!1)}async onCancel(){this.isCancelling=!0,await oE.w.cancelSignMessage().finally(()=>this.isCancelling=!1)}};oD([(0,r.SB)()],oL.prototype,"isCancelling",void 0),oD([(0,r.SB)()],oL.prototype,"isSigning",void 0),oL=oD([(0,h.Mo)("w3m-siwx-sign-message-view")],oL)},32567:function(e,t,i){var o=i(31133),r=i(84927),n=i(7574),a=i(86777),s=i(89512),l=i(92413),c=(0,o.iv)`
  :host {
    width: 100%;
    display: block;
  }
`,d=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=n.f.state.open,this.unsubscribe.push(a.RouterController.subscribeKey("view",()=>{n.f.hide()}),s.I.subscribeKey("open",e=>{e||n.f.hide()}),n.f.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),n.f.hide()}render(){return(0,o.dy)`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return(0,o.dy)`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();this.open||n.f.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||n.f.hide()}};u.styles=[c],d([(0,r.Cb)()],u.prototype,"text",void 0),d([(0,r.SB)()],u.prototype,"open",void 0),d([(0,l.Mo)("w3m-tooltip-trigger")],u)},26018:function(e,t,i){var o=i(31133),r=i(84927);i(95137),i(23805),i(18360);var n=i(84249),a=i(3874),s=i(57116),l=(0,o.iv)`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`,c=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return(0,o.dy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:a.H.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?(0,o.dy)`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};d.styles=[n.ET,n.ZM,l],c([(0,r.Cb)()],d.prototype,"variant",void 0),c([(0,r.Cb)()],d.prototype,"imageSrc",void 0),c([(0,r.Cb)()],d.prototype,"imageIcon",void 0),c([(0,r.Cb)()],d.prototype,"imageIconSize",void 0),c([(0,r.Cb)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.Cb)()],d.prototype,"icon",void 0),c([(0,r.Cb)()],d.prototype,"href",void 0),c([(0,r.Cb)()],d.prototype,"text",void 0),c([(0,s.M)("wui-chip")],d)},7861:function(e,t,i){var o=i(31133),r=i(84927),n=i(32801);i(18360);var a=i(84249),s=i(57116);i(4163);var l=(0,o.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,c=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.oi{constructor(){super(...arguments),this.disabled=!1}render(){return(0,o.dy)`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,n.o)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?(0,o.dy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};d.styles=[a.ET,l],c([(0,r.Cb)()],d.prototype,"errorMessage",void 0),c([(0,r.Cb)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.Cb)()],d.prototype,"value",void 0),c([(0,r.Cb)()],d.prototype,"tabIdx",void 0),c([(0,s.M)("wui-email-input")],d)},65451:function(e,t,i){var o=i(31133),r=i(84927);i(95137);var n=i(84249),a=i(57116),s=(0,o.iv)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,l=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return(0,o.dy)`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};c.styles=[n.ET,n.ZM,s],l([(0,r.Cb)()],c.prototype,"text",void 0),l([(0,r.Cb)()],c.prototype,"icon",void 0),l([(0,a.M)("wui-icon-button")],c)},15834:function(e,t,i){var o=i(31133),r=i(84927),n=i(32801);i(18360);var a=i(84249),s=i(57116);i(84793);var l=(0,o.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,c=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.oi{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return(0,o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,n.o)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?(0,o.dy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};d.styles=[a.ET,a.ZM,l],c([(0,r.Cb)()],d.prototype,"logo",void 0),c([(0,r.Cb)()],d.prototype,"name",void 0),c([(0,r.Cb)()],d.prototype,"align",void 0),c([(0,r.Cb)()],d.prototype,"tabIdx",void 0),c([(0,r.Cb)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,s.M)("wui-list-social")],d)},79207:function(e,t,i){var o=i(31133),r=i(84927);i(95137),i(23805),i(18360),i(5680);var n=i(84249),a=i(3874),s=i(57116),l=(0,o.iv)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,c=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.oi{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return(0,o.dy)`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${a.H.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?(0,o.dy)`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:(0,o.dy)`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};d.styles=[n.ET,n.ZM,l],c([(0,r.Cb)()],d.prototype,"tokenName",void 0),c([(0,r.Cb)()],d.prototype,"tokenImageUrl",void 0),c([(0,r.Cb)({type:Number})],d.prototype,"tokenValue",void 0),c([(0,r.Cb)()],d.prototype,"tokenAmount",void 0),c([(0,r.Cb)()],d.prototype,"tokenCurrency",void 0),c([(0,r.Cb)({type:Boolean})],d.prototype,"clickable",void 0),c([(0,s.M)("wui-list-token")],d)},74953:function(e,t,i){i(19374)},930:function(e,t,i){var o=i(31133),r=i(84927);i(95137),i(23805);var n=i(35819);function a(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}let s={generate({uri:e,size:t,logoSize:i,dotColor:r="#141414"}){let s=[],l=function(e,t){let i=Array.prototype.slice.call(n.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((e,t,i)=>(i%o==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),c=t/l.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:e,y:t})=>{let i=(l.length-7)*c*e,n=(l.length-7)*c*t;for(let e=0;e<d.length;e+=1){let t=c*(7-2*e);s.push((0,o.YP)`
            <rect
              fill=${2===e?r:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${r}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?n+c*e+2.5:n+c*e}
              y= ${0===e?i+c*e+2.5:i+c*e}
            />
          `)}});let u=Math.floor((i+25)/c),p=l.length/2-u/2,h=l.length/2+u/2-1,w=[];l.forEach((e,t)=>{e.forEach((e,i)=>{!l[t][i]||t<7&&i<7||t>l.length-8&&i<7||t<7&&i>l.length-8||t>p&&t<h&&i>p&&i<h||w.push([t*c+c/2,i*c+c/2])})});let g={};return w.forEach(([e,t])=>{g[e]?g[e]?.push(t):g[e]=[t]}),Object.entries(g).map(([e,t])=>{let i=t.filter(e=>t.every(t=>!a(e,t,c)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{s.push((0,o.YP)`<circle cx=${e} cy=${t} fill=${r} r=${c/2.5} />`)})}),Object.entries(g).filter(([e,t])=>t.length>1).map(([e,t])=>{let i=t.filter(e=>t.some(t=>a(e,t,c)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let i=[];for(let e of t){let t=i.find(t=>t.some(t=>a(e,t,c)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{s.push((0,o.YP)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${r}
                stroke-width=${c/1.25}
                stroke-linecap="round"
              />
            `)})}),s}};var l=i(84249),c=i(57116),d=(0,o.iv)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,u=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let p=class extends o.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??"#3396ff"}
    `,(0,o.dy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return(0,o.YP)`
      <svg height=${e} width=${e}>
        ${s.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,o.dy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,o.dy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};p.styles=[l.ET,d],u([(0,r.Cb)()],p.prototype,"uri",void 0),u([(0,r.Cb)({type:Number})],p.prototype,"size",void 0),u([(0,r.Cb)()],p.prototype,"theme",void 0),u([(0,r.Cb)()],p.prototype,"imageSrc",void 0),u([(0,r.Cb)()],p.prototype,"alt",void 0),u([(0,r.Cb)()],p.prototype,"color",void 0),u([(0,r.Cb)({type:Boolean})],p.prototype,"arenaClear",void 0),u([(0,r.Cb)({type:Boolean})],p.prototype,"farcaster",void 0),u([(0,c.M)("wui-qr-code")],p)},39203:function(e,t,i){var o=i(31133),r=i(84927);i(18360);var n=i(84249),a=i(57116),s=(0,o.iv)`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`,l=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.text=""}render(){return(0,o.dy)`${this.template()}`}template(){return this.text?(0,o.dy)`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[n.ET,s],l([(0,r.Cb)()],c.prototype,"text",void 0),l([(0,a.M)("wui-separator")],c)},80843:function(e,t,i){i(42653)},40511:function(e,t,i){i(43465)},24348:function(e,t,i){i.d(t,{W:function(){return r}});var o=i(31133);let r=(0,o.YP)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},48682:function(e,t,i){var o=i(31133),r=i(84927);i(23805);var n=i(84249),a=i(3874),s=i(57116),l=(0,o.iv)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,c=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,(0,o.dy)`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=a.H.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};d.styles=[n.ET,l],c([(0,r.Cb)()],d.prototype,"imageSrc",void 0),c([(0,r.Cb)()],d.prototype,"alt",void 0),c([(0,r.Cb)()],d.prototype,"address",void 0),c([(0,r.Cb)()],d.prototype,"size",void 0),c([(0,s.M)("wui-avatar")],d)},74530:function(e,t,i){var o=i(31133),r=i(84927);i(95137),i(23805),i(18360);var n=i(84249),a=i(57116),s=(0,o.iv)`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,l=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let e="sm"===this.size?"small-600":"paragraph-600";return(0,o.dy)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};c.styles=[n.ET,n.ZM,s],l([(0,r.Cb)()],c.prototype,"variant",void 0),l([(0,r.Cb)()],c.prototype,"imageSrc",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,r.Cb)()],c.prototype,"icon",void 0),l([(0,r.Cb)()],c.prototype,"size",void 0),l([(0,r.Cb)()],c.prototype,"text",void 0),l([(0,a.M)("wui-chip-button")],c)},84793:function(e,t,i){var o=i(31133),r=i(84927);i(95137);var n=i(84249),a=i(57116),s=(0,o.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,l=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.logo="google"}render(){return(0,o.dy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[n.ET,s],l([(0,r.Cb)()],c.prototype,"logo",void 0),l([(0,a.M)("wui-logo")],c)},19374:function(e,t,i){var o=i(31133),r=i(84927);let n=(0,o.YP)`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var a=i(24348);let s=(0,o.YP)`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;i(95137),i(23805);var l=i(84249),c=i(57116),d=(0,o.iv)`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,u=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let p=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:a.W,lg:n},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,(0,o.dy)`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:(0,o.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};p.styles=[l.ET,d],u([(0,r.Cb)()],p.prototype,"size",void 0),u([(0,r.Cb)()],p.prototype,"name",void 0),u([(0,r.Cb)({type:Object})],p.prototype,"networkImagesBySize",void 0),u([(0,r.Cb)()],p.prototype,"imageSrc",void 0),u([(0,r.Cb)({type:Boolean})],p.prototype,"selected",void 0),u([(0,r.Cb)({type:Boolean})],p.prototype,"round",void 0),u([(0,c.M)("wui-network-image")],p)},43465:function(e,t,i){var o=i(31133),r=i(84927);i(95137),i(23805),i(5680);var n=i(84249),a=i(57116);i(1736);var s=(0,o.iv)`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,l=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),(0,o.dy)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?(0,o.dy)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:(0,o.dy)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};c.styles=[n.ZM,n.ET,s],l([(0,r.Cb)()],c.prototype,"size",void 0),l([(0,r.Cb)()],c.prototype,"name",void 0),l([(0,r.Cb)()],c.prototype,"imageSrc",void 0),l([(0,r.Cb)()],c.prototype,"walletIcon",void 0),l([(0,r.Cb)({type:Boolean})],c.prototype,"installed",void 0),l([(0,r.Cb)()],c.prototype,"badgeSize",void 0),l([(0,a.M)("wui-wallet-image")],c)}}]);