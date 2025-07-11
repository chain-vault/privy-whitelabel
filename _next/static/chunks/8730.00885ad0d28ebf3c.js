"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8730],{8730:function(e,t,i){i.r(t),i.d(t,{W3mBuyInProgressView:function(){return H},W3mOnRampActivityView:function(){return b},W3mOnRampProvidersView:function(){return M},W3mOnrampFiatSelectView:function(){return T},W3mOnrampTokensView:function(){return K},W3mOnrampWidget:function(){return eo},W3mWhatIsABuyView:function(){return X}});var r=i(31133),o=i(84927),s=i(32801),a=i(41262),n=i(28921),c=i(70216),l=i(22472),u=i(68584),p=i(48415),d=i(92413);i(96277),i(44732),i(89759);var h=i(17766);i(92374),i(1799),i(81255);var w=(0,r.iv)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,m=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let y=class extends r.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return(0,r.dy)`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?(0,r.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,r.dy)`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await h.ApiController._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return(0,r.dy)`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){let e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return(0,r.dy)`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return(0,r.dy)`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};y.styles=[w],m([(0,o.Cb)({type:Boolean})],y.prototype,"disabled",void 0),m([(0,o.Cb)()],y.prototype,"color",void 0),m([(0,o.Cb)()],y.prototype,"label",void 0),m([(0,o.Cb)()],y.prototype,"purchaseValue",void 0),m([(0,o.Cb)()],y.prototype,"purchaseCurrency",void 0),m([(0,o.Cb)()],y.prototype,"date",void 0),m([(0,o.Cb)({type:Boolean})],y.prototype,"completed",void 0),m([(0,o.Cb)({type:Boolean})],y.prototype,"inProgress",void 0),m([(0,o.Cb)({type:Boolean})],y.prototype,"failed",void 0),m([(0,o.Cb)()],y.prototype,"onClick",void 0),m([(0,o.Cb)()],y.prototype,"symbol",void 0),m([(0,o.Cb)()],y.prototype,"icon",void 0),y=m([(0,d.Mo)("w3m-onramp-activity-item")],y);var g=(0,r.iv)`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,f=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let b=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=n.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=c.s.state.coinbaseTransactions,this.tokenImages=l.W.state.tokenImages,this.unsubscribe.push(n.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),l.W.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},c.s.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),c.s.clearCursor(),this.fetchTransactions()}render(){return(0,r.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(e=>{let t=a.E.formatDate(e?.metadata?.minedAt),i=e.transfers[0],o=i?.fungible_info;if(!o)return null;let n=o?.icon?.url||this.tokenImages?.[o.symbol||""];return r.dy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${s.o(o.symbol)}
          purchaseValue=${i.quantity.numeric}
          date=${t}
          icon=${s.o(n)}
          symbol=${s.o(o.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(e=>{let t=parseInt(e,10);return Array(12).fill(null).map((e,t)=>t).reverse().map(e=>{let i=d.AI.getTransactionGroupTitle(t,e),o=this.coinbaseTransactions[t]?.[e];return o?(0,r.dy)`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${i}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(o)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){let e=u.N.state.address,t=p.OptionsController.state.projectId;if(!e)throw Error("No address found");if(!t)throw Error("No projectId found");this.loading=!0,await c.s.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){let e=new Date;if(0===(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter(e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{let e=u.N.state.address;await c.s.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(7).fill((0,r.dy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};b.styles=g,f([(0,o.SB)()],b.prototype,"selectedOnRampProvider",void 0),f([(0,o.SB)()],b.prototype,"loading",void 0),f([(0,o.SB)()],b.prototype,"coinbaseTransactions",void 0),f([(0,o.SB)()],b.prototype,"tokenImages",void 0),b=f([(0,d.Mo)("w3m-onramp-activity-view")],b);var v=i(81341),x=i(89512);i(53774),i(34041),i(88239);var C=(0,r.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,k=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let T=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=n.ph.state.paymentCurrency,this.currencies=n.ph.state.paymentCurrencies,this.currencyImages=l.W.state.currencyImages,this.checked=v.M.state.isLegalCheckboxChecked,this.unsubscribe.push(n.ph.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),l.W.subscribeKey("currencyImages",e=>this.currencyImages=e),v.M.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=p.OptionsController.state,i=p.OptionsController.state.features?.legalCheckbox,o=!!(e||t)&&!!i&&!this.checked;return(0,r.dy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,s.o)(o?"disabled":void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>(0,r.dy)`
        <wui-list-item
          imageSrc=${(0,s.o)(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,s.o)(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(n.ph.setPaymentCurrency(e),x.I.close())}};T.styles=C,k([(0,o.SB)()],T.prototype,"selectedCurrency",void 0),k([(0,o.SB)()],T.prototype,"currencies",void 0),k([(0,o.SB)()],T.prototype,"currencyImages",void 0),k([(0,o.SB)()],T.prototype,"checked",void 0),T=k([(0,d.Mo)("w3m-onramp-fiat-select-view")],T);var R=i(6943),I=i(86777),$=i(53357),P=i(31929),O=i(43291),A=i(59712),S=i(61704),B=i(4786),j=i(63043);i(4594),i(68562);var _=(0,r.iv)`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,N=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let D=class extends r.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return(0,r.dy)`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,s.o)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?(0,r.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,r.dy)`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=R.R.getAllRequestedCaipNetworks(),t=e?.filter(e=>e?.assets?.imageId)?.slice(0,5);return(0,r.dy)`
      <wui-flex class="networks">
        ${t?.map(e=>r.dy`
            <wui-flex class="network-icon">
              <wui-image src=${s.o(j.f.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};D.styles=[_],N([(0,o.Cb)({type:Boolean})],D.prototype,"disabled",void 0),N([(0,o.Cb)()],D.prototype,"color",void 0),N([(0,o.Cb)()],D.prototype,"name",void 0),N([(0,o.Cb)()],D.prototype,"label",void 0),N([(0,o.Cb)()],D.prototype,"feeRange",void 0),N([(0,o.Cb)({type:Boolean})],D.prototype,"loading",void 0),N([(0,o.Cb)()],D.prototype,"onClick",void 0),D=N([(0,d.Mo)("w3m-onramp-provider-item")],D),i(51437);var W=(0,r.iv)`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let E=class extends r.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=p.OptionsController.state;return e||t?(0,r.dy)`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return(0,r.dy)` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){P.X.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,O.r9)(R.R.state.activeChain)===B.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),I.RouterController.push("WhatIsABuy")}};E.styles=[W],E=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,d.Mo)("w3m-onramp-providers-footer")],E);var L=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let M=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.providers=n.ph.state.providers,this.unsubscribe.push(n.ph.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){Promise.all(this.providers.map(async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url))).then(e=>{this.providers=this.providers.map((t,i)=>({...t,url:e[i]||""}))})}render(){return(0,r.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(R.R.state.activeChain??"eip155")).map(e=>(0,r.dy)`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
            data-testid=${`onramp-provider-${e.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){n.ph.setSelectedProvider(e),I.RouterController.push("BuyInProgress"),$.j.openHref(n.ph.state.selectedProvider?.url||e.url,"popupWindow","width=600,height=800,scrollbars=yes"),P.X.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:(0,O.r9)(R.R.state.activeChain)===B.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){let e=u.N.state.address,t=R.R.state.activeCaipNetwork;if(!e)throw Error("No address found");if(!t?.name)throw Error("No network found");let i=A.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??A.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,r=n.ph.state.purchaseCurrency,o=r?[r.symbol]:n.ph.state.purchaseCurrencies.map(e=>e.symbol);return await S.L.generateOnRampURL({defaultNetwork:i,destinationWallets:[{address:e,blockchains:A.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:o}],partnerUserId:e,purchaseAmount:n.ph.state.purchaseAmount})}};L([(0,o.SB)()],M.prototype,"providers",void 0),M=L([(0,d.Mo)("w3m-onramp-providers-view")],M);var z=(0,r.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,U=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let K=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=n.ph.state.purchaseCurrencies,this.tokens=n.ph.state.purchaseCurrencies,this.tokenImages=l.W.state.tokenImages,this.checked=v.M.state.isLegalCheckboxChecked,this.unsubscribe.push(n.ph.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),l.W.subscribeKey("tokenImages",e=>this.tokenImages=e),v.M.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=p.OptionsController.state,i=p.OptionsController.state.features?.legalCheckbox,o=!!(e||t)&&!!i&&!this.checked;return(0,r.dy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,s.o)(o?"disabled":void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>(0,r.dy)`
        <wui-list-item
          imageSrc=${(0,s.o)(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,s.o)(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(n.ph.setPurchaseCurrency(e),x.I.close())}};K.styles=z,U([(0,o.SB)()],K.prototype,"selectedCurrency",void 0),U([(0,o.SB)()],K.prototype,"tokens",void 0),U([(0,o.SB)()],K.prototype,"tokenImages",void 0),U([(0,o.SB)()],K.prototype,"checked",void 0),K=U([(0,d.Mo)("w3m-onramp-token-select-view")],K);var q=i(64369),V=i(66909),Y=i(52005);i(97585),i(87302);var F=(0,r.iv)`
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
`,G=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let H=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=n.ph.state.selectedProvider,this.uri=q.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(n.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return(0,r.dy)`
      <wui-flex
        data-error=${(0,s.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,s.o)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{let e=u.N.state.address;if(!e)throw Error("No address found");(await S.L.fetchTransactions({account:e,onramp:"coinbase"})).data.filter(e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length?(clearInterval(this.intervalId),I.RouterController.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){V.SnackController.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,$.j.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?(0,r.dy)`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=Y.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,r.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){V.SnackController.showError("No link found"),I.RouterController.goBack();return}try{$.j.copyToClopboard(this.selectedOnRampProvider.url),V.SnackController.showSuccess("Link copied")}catch{V.SnackController.showError("Failed to copy")}}};H.styles=F,G([(0,o.SB)()],H.prototype,"intervalId",void 0),G([(0,o.SB)()],H.prototype,"selectedOnRampProvider",void 0),G([(0,o.SB)()],H.prototype,"uri",void 0),G([(0,o.SB)()],H.prototype,"ready",void 0),G([(0,o.SB)()],H.prototype,"showRetry",void 0),G([(0,o.SB)()],H.prototype,"buffering",void 0),G([(0,o.SB)()],H.prototype,"error",void 0),G([(0,o.SB)()],H.prototype,"startTime",void 0),G([(0,o.Cb)({type:Boolean})],H.prototype,"isMobile",void 0),G([(0,o.Cb)()],H.prototype,"onRetry",void 0),H=G([(0,d.Mo)("w3m-buy-in-progress-view")],H);let X=class extends r.oi{render(){return(0,r.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${I.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};X=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,d.Mo)("w3m-what-is-a-buy-view")],X),i(64349);var Q=(0,r.iv)`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,J=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let Z=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=l.W.state.currencyImages,this.tokenImages=l.W.state.tokenImages,this.unsubscribe.push(n.ph.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),n.ph.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),n.ph.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),l.W.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){n.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return(0,r.dy)`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?(0,r.dy)` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>x.I.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,s.o)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:(0,r.dy)`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Z.styles=Q,J([(0,o.Cb)({type:String})],Z.prototype,"type",void 0),J([(0,o.Cb)({type:Number})],Z.prototype,"value",void 0),J([(0,o.SB)()],Z.prototype,"currencies",void 0),J([(0,o.SB)()],Z.prototype,"selectedCurrency",void 0),J([(0,o.SB)()],Z.prototype,"currencyImages",void 0),J([(0,o.SB)()],Z.prototype,"tokenImages",void 0),Z=J([(0,d.Mo)("w3m-onramp-input")],Z);var ee=(0,r.iv)`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,et=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let ei={USD:"$",EUR:"€",GBP:"\xa3"},er=[100,250,500,1e3],eo=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=R.R.state.activeCaipAddress,this.loading=x.I.state.loading,this.paymentCurrency=n.ph.state.paymentCurrency,this.paymentAmount=n.ph.state.paymentAmount,this.purchaseAmount=n.ph.state.purchaseAmount,this.quoteLoading=n.ph.state.quotesLoading,this.unsubscribe.push(R.R.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),x.I.subscribeKey("loading",e=>{this.loading=e}),n.ph.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,r.dy)`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${er.map(e=>(0,r.dy)`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${ei[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?(0,r.dy)`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:(0,r.dy)`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||x.I.open({view:"OnRampProviders"})}openModal(){x.I.open({view:"Connect"})}async onPaymentAmountChange(e){n.ph.setPaymentAmount(Number(e.detail)),await n.ph.getQuote()}async selectPresetAmount(e){n.ph.setPaymentAmount(e),await n.ph.getQuote()}};eo.styles=ee,et([(0,o.Cb)({type:Boolean})],eo.prototype,"disabled",void 0),et([(0,o.SB)()],eo.prototype,"caipAddress",void 0),et([(0,o.SB)()],eo.prototype,"loading",void 0),et([(0,o.SB)()],eo.prototype,"paymentCurrency",void 0),et([(0,o.SB)()],eo.prototype,"paymentAmount",void 0),et([(0,o.SB)()],eo.prototype,"purchaseAmount",void 0),et([(0,o.SB)()],eo.prototype,"quoteLoading",void 0),eo=et([(0,d.Mo)("w3m-onramp-widget")],eo)},1799:function(e,t,i){i(23805)}}]);