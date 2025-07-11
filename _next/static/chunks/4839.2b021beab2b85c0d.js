"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4839],{23227:function(o,e,t){t.r(e),t.d(e,{W3mTransactionsView:function(){return c}});var r=t(31133),i=t(92413);t(96277),t(45557);var s=(0,r.iv)`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let c=class extends r.oi{render(){return(0,r.dy)`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=s,c=function(o,e,t,r){var i,s=arguments.length,c=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(e,t,c):i(e,t))||c);return s>3&&c&&Object.defineProperty(e,t,c),c}([(0,i.Mo)("w3m-transactions-view")],c)},92374:function(o,e,t){t(1736)},51437:function(o,e,t){var r=t(31133),i=t(84927),s=t(32801);t(18360);var c=t(84249),a=t(57116),l=(0,r.iv)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,n=function(o,e,t,r){var i,s=arguments.length,c=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(e,t,c):i(e,t))||c);return s>3&&c&&Object.defineProperty(e,t,c),c};let d=class extends r.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,r.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,s.o)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[c.ET,c.ZM,l],n([(0,i.Cb)()],d.prototype,"tabIdx",void 0),n([(0,i.Cb)({type:Boolean})],d.prototype,"disabled",void 0),n([(0,i.Cb)()],d.prototype,"color",void 0),n([(0,a.M)("wui-link")],d)},89759:function(o,e,t){var r=t(31133);t(42653),t(5680);var i=t(84249),s=t(57116),c=(0,r.iv)`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let a=class extends r.oi{render(){return(0,r.dy)`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};a.styles=[i.ET,c],function(o,e,t,r){var i,s=arguments.length,c=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(e,t,c):i(e,t))||c);s>3&&c&&Object.defineProperty(e,t,c)}([(0,s.M)("wui-transaction-list-item-loader")],a)},23805:function(o,e,t){var r=t(31133),i=t(84927),s=t(84249),c=t(57116),a=(0,r.iv)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`,l=function(o,e,t,r){var i,s=arguments.length,c=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(e,t,c):i(e,t))||c);return s>3&&c&&Object.defineProperty(e,t,c),c};let n=class extends r.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,r.dy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};n.styles=[s.ET,s.Bp,a],l([(0,i.Cb)()],n.prototype,"src",void 0),l([(0,i.Cb)()],n.prototype,"alt",void 0),l([(0,i.Cb)()],n.prototype,"size",void 0),l([(0,i.Cb)()],n.prototype,"objectFit",void 0),l([(0,c.M)("wui-image")],n)},42653:function(o,e,t){var r=t(31133),i=t(84927),s=t(57116),c=(0,r.iv)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,a=function(o,e,t,r){var i,s=arguments.length,c=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(e,t,c):i(e,t))||c);return s>3&&c&&Object.defineProperty(e,t,c),c};let l=class extends r.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,r.dy)`<slot></slot>`}};l.styles=[c],a([(0,i.Cb)()],l.prototype,"width",void 0),a([(0,i.Cb)()],l.prototype,"height",void 0),a([(0,i.Cb)()],l.prototype,"borderRadius",void 0),a([(0,i.Cb)()],l.prototype,"variant",void 0),a([(0,s.M)("wui-shimmer")],l)},1736:function(o,e,t){var r=t(31133),i=t(84927);t(95137);var s=t(84249),c=t(57116),a=(0,r.iv)`
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
`,l=function(o,e,t,r){var i,s=arguments.length,c=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(e,t,c):i(e,t))||c);return s>3&&c&&Object.defineProperty(e,t,c),c};let n=class extends r.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let o=this.iconSize||this.size,e="lg"===this.size,t="xl"===this.size,i="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s,a=`var(--wui-color-${this.backgroundColor})`;return c?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(a=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${a};
       --local-bg-mix: ${c||i?"100%":e?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${e?"xxs":t?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,r.dy)` <wui-icon color=${this.iconColor} size=${o} name=${this.icon}></wui-icon> `}};n.styles=[s.ET,s.ZM,a],l([(0,i.Cb)()],n.prototype,"size",void 0),l([(0,i.Cb)()],n.prototype,"backgroundColor",void 0),l([(0,i.Cb)()],n.prototype,"iconColor",void 0),l([(0,i.Cb)()],n.prototype,"iconSize",void 0),l([(0,i.Cb)()],n.prototype,"background",void 0),l([(0,i.Cb)({type:Boolean})],n.prototype,"border",void 0),l([(0,i.Cb)()],n.prototype,"borderColor",void 0),l([(0,i.Cb)()],n.prototype,"icon",void 0),l([(0,c.M)("wui-icon-box")],n)}}]);