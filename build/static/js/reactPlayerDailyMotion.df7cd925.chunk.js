(self.webpackChunkperfect_taxi=self.webpackChunkperfect_taxi||[]).push([[596],{4303:function(e,t,n){var a,r=n(2122).default,o=n(7424).default,u=n(6690).default,i=n(9728).default,l=n(6115).default,p=n(1655).default,c=n(6389).default,s=n(4704).default,f=Object.create,y=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,v=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,g=function(e,t,n,a){if(t&&"object"===typeof t||"function"===typeof t){var r,o=s(h(t));try{var u=function(){var o=r.value;m.call(e,o)||o===n||y(e,o,{get:function(){return t[o]},enumerable:!(a=d(t,o))||a.enumerable})};for(o.s();!(r=o.n()).done;)u()}catch(i){o.e(i)}finally{o.f()}}return e},k=function(e,t,n){return function(e,t,n){t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},b={};!function(e,t){for(var n in t)y(e,n,{get:t[n],enumerable:!0})}(b,{default:function(){return D}}),e.exports=(a=b,g(y({},"__esModule",{value:!0}),a));var P=function(e,t,n){return n=null!=e?f(v(e)):{},g(!t&&e&&e.__esModule?n:y(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),O=n(135),w=n(365),D=function(e){"use strict";p(n,e);var t=c(n);function n(){var e;return u(this,n),e=t.apply(this,arguments),k(l(e),"callPlayer",O.callPlayer),k(l(e),"onDurationChange",(function(){var t=e.getDuration();e.props.onDuration(t)})),k(l(e),"mute",(function(){e.callPlayer("setMuted",!0)})),k(l(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),k(l(e),"ref",(function(t){e.container=t})),e}return i(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,a=n.controls,u=n.config,i=n.onError,l=n.playing,p=e.match(w.MATCH_URL_DAILYMOTION),c=o(p,2)[1];this.player?this.player.load(c,{start:(0,O.parseStartTime)(e),autoplay:l}):(0,O.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(function(e){return e.player})).then((function(n){if(t.container){var o=n.player;t.player=new o(t.container,{width:"100%",height:"100%",video:c,params:r({controls:a,autoplay:t.props.playing,mute:t.props.muted,start:(0,O.parseStartTime)(e),origin:window.location.origin},u.params),events:{apiready:t.props.onReady,seeked:function(){return t.props.onSeek(t.player.currentTime)},video_end:t.props.onEnded,durationchange:t.onDurationChange,pause:t.props.onPause,playing:t.props.onPlay,waiting:t.props.onBuffer,error:function(e){return i(e)}}})}}),i)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return P.default.createElement("div",{style:e},P.default.createElement("div",{ref:this.ref}))}}]),n}(P.Component);k(D,"displayName","DailyMotion"),k(D,"canPlay",w.canPlay.dailymotion),k(D,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerDailyMotion.df7cd925.chunk.js.map