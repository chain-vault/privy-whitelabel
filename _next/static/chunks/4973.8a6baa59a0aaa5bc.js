"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4973],{5344:function(e,t,o){o.d(t,{y0:function(){return g}});var r=o(44649),i=o(68584),a=o(6943),s=o(35652),n=o(31929),l=o(86777),c=o(66909),d=o(53357),u=o(36801);async function h(){l.RouterController.push("ConnectingFarcaster");let e=s.ConnectorController.getAuthConnector();if(e&&!i.N.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();i.N.setFarcasterUrl(t,a.R.state.activeChain)}catch(e){l.RouterController.goBack(),c.SnackController.showError(e)}}async function p(e){l.RouterController.push("ConnectingSocial");let t=s.ConnectorController.getAuthConnector(),o=null;try{let s=setTimeout(()=>{throw Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(d.j.isTelegram()||(o=function(){try{return d.j.returnOpenHref(`${r.b.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw Error("Could not open social popup")}}()),o)i.N.setSocialWindow(o,a.R.state.activeChain);else if(!d.j.isTelegram())throw Error("Could not create social popup");let{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(!n)throw o?.close(),Error("Could not fetch the social redirect uri");if(o&&(o.location.href=n),d.j.isTelegram()){u.M.setTelegramSocialProvider(e);let t=d.j.formatTelegramSocialLoginUrl(n);d.j.openHref(t,"_top")}clearTimeout(s)}}catch(e){o?.close(),c.SnackController.showError(e?.message)}}async function g(e){i.N.setSocialProvider(e,a.R.state.activeChain),n.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await h():await p(e)}},8867:function(e,t,o){o.r(t),o.d(t,{W3mConnectSocialsView:function(){return x},W3mConnectingFarcasterView:function(){return _},W3mConnectingSocialView:function(){return j}});var r=o(31133),i=o(84927),a=o(32801),s=o(81341),n=o(48415),l=o(92413);o(96277),o(34041),o(88239);var c=o(35652),d=o(86777),u=o(59712),h=o(72723),p=o(5344),g=o(53357);o(15834);var v=o(55),w=(0,r.iv)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,b=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let f=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=c.ConnectorController.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(c.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),n.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[],t=!!this.authConnector,o=e?.length,i="ConnectSocials"===d.RouterController.state.view;return t&&o||i?(i&&!o&&(e=u.bq.DEFAULT_SOCIALS),(0,r.dy)` <wui-flex flexDirection="column" gap="xs">
      ${e.map(e=>(0,r.dy)`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(e){e&&await (0,p.y0)(e)}async handlePwaFrameLoad(){if(g.j.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof v.S&&await this.authConnector.provider.init()}catch(e){h.AlertController.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};f.styles=w,b([(0,i.Cb)()],f.prototype,"tabIdx",void 0),b([(0,i.SB)()],f.prototype,"connectors",void 0),b([(0,i.SB)()],f.prototype,"authConnector",void 0),b([(0,i.SB)()],f.prototype,"remoteFeatures",void 0),b([(0,i.SB)()],f.prototype,"isPwaLoading",void 0),f=b([(0,l.Mo)("w3m-social-login-list")],f);var m=(0,r.iv)`
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
`,y=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let x=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.checked=s.M.state.isLegalCheckboxChecked,this.unsubscribe.push(s.M.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.OptionsController.state,o=n.OptionsController.state.features?.legalCheckbox,i=!!(e||t)&&!!o,s=i&&!this.checked;return(0,r.dy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.o)(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,a.o)(s?-1:void 0)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};x.styles=m,y([(0,i.SB)()],x.prototype,"checked",void 0),x=y([(0,l.Mo)("w3m-connect-socials-view")],x);var C=o(68584),k=o(64369),$=o(6943),S=o(31929),R=o(36801),P=o(66909),z=o(89512),E=o(52005);o(92374),o(87302),o(84793),o(44732);var O=o(65653),T=o(54946),I=(0,r.iv)`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`,L=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let j=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=C.N.state.socialProvider,this.socialWindow=C.N.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.address=C.N.state.address,this.connectionsByNamespace=k.ConnectionController.getConnections($.R.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=c.ConnectorController.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri){if(e.origin===T.b.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),C.N.setSocialWindow(void 0,$.R.state.activeChain)),this.connecting=!0,this.updateMessage();let t=e.data.resultUri;this.socialProvider&&S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await k.ConnectionController.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:t},this.authConnector.chain),this.socialProvider&&(R.M.setConnectedSocialProvider(this.socialProvider),S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else d.RouterController.goBack(),P.SnackController.showError("Untrusted Origin"),this.socialProvider&&S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}},O.j.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),C.N.setSocialWindow(void 0,$.R.state.activeChain))}),this.unsubscribe.push(C.N.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow)}),n.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}),C.N.subscribeKey("address",e=>{let t=this.remoteFeatures?.multiWallet;e&&e!==this.address&&(this.hasMultipleConnections&&t?(d.RouterController.replace("ProfileWallets"),P.SnackController.showSuccess("New Wallet Added")):(z.I.state.open||n.OptionsController.state.enableEmbedded)&&z.I.close())})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),C.N.setSocialWindow(void 0,$.R.state.activeChain)}render(){return(0,r.dy)`
      <wui-flex
        data-error=${(0,a.o)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,a.o)(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=E.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,r.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==d.RouterController.state.view||(this.socialProvider&&S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),d.RouterController.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};j.styles=I,L([(0,i.SB)()],j.prototype,"socialProvider",void 0),L([(0,i.SB)()],j.prototype,"socialWindow",void 0),L([(0,i.SB)()],j.prototype,"error",void 0),L([(0,i.SB)()],j.prototype,"connecting",void 0),L([(0,i.SB)()],j.prototype,"message",void 0),L([(0,i.SB)()],j.prototype,"remoteFeatures",void 0),j=L([(0,l.Mo)("w3m-connecting-social-view")],j),o(97585),o(4594),o(51437),o(930),o(80843);var N=(0,r.iv)`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`,W=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let _=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=C.N.state.socialProvider,this.uri=C.N.state.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=n.OptionsController.state.remoteFeatures,this.authConnector=c.ConnectorController.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(C.N.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),C.N.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)}),n.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,r.dy)`${this.platformTemplate()}`}platformTemplate(){return g.j.isMobile()?(0,r.dy)`${this.mobileTemplate()}`:(0,r.dy)`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?(0,r.dy)`${this.loadingTemplate()}`:(0,r.dy)`${this.qrTemplate()}`}qrTemplate(){return(0,r.dy)` <wui-flex
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
    </wui-flex>`}loadingTemplate(){return(0,r.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return(0,r.dy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=E.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,r.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(R.M.setConnectedSocialProvider(this.socialProvider),S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;let e=k.ConnectionController.getConnections(this.authConnector.chain).length>0;await k.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain);let t=this.remoteFeatures?.multiWallet;this.socialProvider&&S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,e&&t?(d.RouterController.replace("ProfileWallets"),P.SnackController.showSuccess("New Wallet Added")):z.I.close()}catch(e){this.socialProvider&&S.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),d.RouterController.goBack(),P.SnackController.showError(e)}}mobileLinkTemplate(){return(0,r.dy)`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&g.j.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40;return(0,r.dy)` <wui-qr-code
      size=${e}
      theme=${E.ThemeController.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,a.o)(E.ThemeController.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,r.dy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(g.j.copyToClopboard(this.uri),P.SnackController.showSuccess("Link copied"))}catch{P.SnackController.showError("Failed to copy")}}};_.styles=N,W([(0,i.SB)()],_.prototype,"socialProvider",void 0),W([(0,i.SB)()],_.prototype,"uri",void 0),W([(0,i.SB)()],_.prototype,"ready",void 0),W([(0,i.SB)()],_.prototype,"loading",void 0),W([(0,i.SB)()],_.prototype,"remoteFeatures",void 0),_=W([(0,l.Mo)("w3m-connecting-farcaster-view")],_)},97585:function(e,t,o){o(98629)},15834:function(e,t,o){var r=o(31133),i=o(84927),a=o(32801);o(18360);var s=o(84249),n=o(57116);o(84793);var l=(0,r.iv)`
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
`,c=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let d=class extends r.oi{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return(0,r.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,a.o)(this.tabIdx)}>
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
    `}templatePlacement(){return"center"===this.align?(0,r.dy)` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};d.styles=[s.ET,s.ZM,l],c([(0,i.Cb)()],d.prototype,"logo",void 0),c([(0,i.Cb)()],d.prototype,"name",void 0),c([(0,i.Cb)()],d.prototype,"align",void 0),c([(0,i.Cb)()],d.prototype,"tabIdx",void 0),c([(0,i.Cb)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,n.M)("wui-list-social")],d)},930:function(e,t,o){var r=o(31133),i=o(84927);o(95137),o(23805);var a=o(35819);function s(e,t,o){return e!==t&&(e-t<0?t-e:e-t)<=o+.1}let n={generate({uri:e,size:t,logoSize:o,dotColor:i="#141414"}){let n=[],l=function(e,t){let o=Array.prototype.slice.call(a.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),r=Math.sqrt(o.length);return o.reduce((e,t,o)=>(o%r==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),c=t/l.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:e,y:t})=>{let o=(l.length-7)*c*e,a=(l.length-7)*c*t;for(let e=0;e<d.length;e+=1){let t=c*(7-2*e);n.push((0,r.YP)`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?a+c*e+2.5:a+c*e}
              y= ${0===e?o+c*e+2.5:o+c*e}
            />
          `)}});let u=Math.floor((o+25)/c),h=l.length/2-u/2,p=l.length/2+u/2-1,g=[];l.forEach((e,t)=>{e.forEach((e,o)=>{!l[t][o]||t<7&&o<7||t>l.length-8&&o<7||t<7&&o>l.length-8||t>h&&t<p&&o>h&&o<p||g.push([t*c+c/2,o*c+c/2])})});let v={};return g.forEach(([e,t])=>{v[e]?v[e]?.push(t):v[e]=[t]}),Object.entries(v).map(([e,t])=>{let o=t.filter(e=>t.every(t=>!s(e,t,c)));return[Number(e),o]}).forEach(([e,t])=>{t.forEach(t=>{n.push((0,r.YP)`<circle cx=${e} cy=${t} fill=${i} r=${c/2.5} />`)})}),Object.entries(v).filter(([e,t])=>t.length>1).map(([e,t])=>{let o=t.filter(e=>t.some(t=>s(e,t,c)));return[Number(e),o]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let o=[];for(let e of t){let t=o.find(t=>t.some(t=>s(e,t,c)));t?t.push(e):o.push([e])}return[e,o.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,o])=>{n.push((0,r.YP)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${o}
                stroke=${i}
                stroke-width=${c/1.25}
                stroke-linecap="round"
              />
            `)})}),n}};var l=o(84249),c=o(57116),d=(0,r.iv)`
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
`,u=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let h=class extends r.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??"#3396ff"}
    `,(0,r.dy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return(0,r.YP)`
      <svg height=${e} width=${e}>
        ${n.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,r.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,r.dy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,r.dy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[l.ET,d],u([(0,i.Cb)()],h.prototype,"uri",void 0),u([(0,i.Cb)({type:Number})],h.prototype,"size",void 0),u([(0,i.Cb)()],h.prototype,"theme",void 0),u([(0,i.Cb)()],h.prototype,"imageSrc",void 0),u([(0,i.Cb)()],h.prototype,"alt",void 0),u([(0,i.Cb)()],h.prototype,"color",void 0),u([(0,i.Cb)({type:Boolean})],h.prototype,"arenaClear",void 0),u([(0,i.Cb)({type:Boolean})],h.prototype,"farcaster",void 0),u([(0,c.M)("wui-qr-code")],h)},80843:function(e,t,o){o(42653)},21793:function(e,t,o){var r=o(31133),i=o(84927),a=o(84249),s=o(57116),n=(0,r.iv)`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,l=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c=class extends r.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${"inherit"===this.color?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,(0,r.dy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};c.styles=[a.ET,n],l([(0,i.Cb)()],c.prototype,"color",void 0),l([(0,i.Cb)()],c.prototype,"size",void 0),l([(0,s.M)("wui-loading-spinner")],c)},98629:function(e,t,o){var r=o(31133),i=o(84927);o(21793),o(18360);var a=o(84249),s=o(57116),n=(0,r.iv)`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
    height: 24px;
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='sm'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
    height: 32px;
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
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

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,l=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},u={lg:"md",md:"md",sm:"sm",xs:"sm"},h=class extends r.oi{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??d[this.size];return(0,r.dy)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let e=u[this.size],t=this.disabled?c.disabled:c[this.variant];return(0,r.dy)`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return(0,r.dy)``}};h.styles=[a.ET,a.ZM,n],l([(0,i.Cb)()],h.prototype,"size",void 0),l([(0,i.Cb)({type:Boolean})],h.prototype,"disabled",void 0),l([(0,i.Cb)({type:Boolean})],h.prototype,"fullWidth",void 0),l([(0,i.Cb)({type:Boolean})],h.prototype,"loading",void 0),l([(0,i.Cb)()],h.prototype,"variant",void 0),l([(0,i.Cb)({type:Boolean})],h.prototype,"hasIconLeft",void 0),l([(0,i.Cb)({type:Boolean})],h.prototype,"hasIconRight",void 0),l([(0,i.Cb)()],h.prototype,"borderRadius",void 0),l([(0,i.Cb)()],h.prototype,"textVariant",void 0),l([(0,s.M)("wui-button")],h)},1736:function(e,t,o){var r=o(31133),i=o(84927);o(95137);var a=o(84249),s=o(57116),n=(0,r.iv)`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,l=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c=class extends r.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,o="xl"===this.size,i="gray"===this.background,a="opaque"===this.background,s="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a,n=`var(--wui-color-${this.backgroundColor})`;return s?n=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(n=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${n};
       --local-bg-mix: ${s||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":o?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,r.dy)` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};c.styles=[a.ET,a.ZM,n],l([(0,i.Cb)()],c.prototype,"size",void 0),l([(0,i.Cb)()],c.prototype,"backgroundColor",void 0),l([(0,i.Cb)()],c.prototype,"iconColor",void 0),l([(0,i.Cb)()],c.prototype,"iconSize",void 0),l([(0,i.Cb)()],c.prototype,"background",void 0),l([(0,i.Cb)({type:Boolean})],c.prototype,"border",void 0),l([(0,i.Cb)()],c.prototype,"borderColor",void 0),l([(0,i.Cb)()],c.prototype,"icon",void 0),l([(0,s.M)("wui-icon-box")],c)},84793:function(e,t,o){var r=o(31133),i=o(84927);o(95137);var a=o(84249),s=o(57116),n=(0,r.iv)`
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
`,l=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c=class extends r.oi{constructor(){super(...arguments),this.logo="google"}render(){return(0,r.dy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[a.ET,n],l([(0,i.Cb)()],c.prototype,"logo",void 0),l([(0,s.M)("wui-logo")],c)},77548:function(e,t,o){o.d(t,{V:function(){return s},i:function(){return c}});var r=o(81997),i=o(52144),a=o(42216);let s=()=>new n;class n{}let l=new WeakMap,c=(0,a.XM)(class extends i.sR{render(e){return r.Ld}update(e,[t]){let o=t!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r.Ld}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,o=l.get(t);void 0===o&&(o=new WeakMap,l.set(t,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?l.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}}]);