"use strict";(self.webpackChunkcryptodb=self.webpackChunkcryptodb||[]).push([[592],{4592:function(e,n,a){a.r(n),a.d(n,{default:function(){return C}});var r=a(7762),t=a(5861),s=a(885),i=a(7757),c=a.n(i),l=a(8081),o=a(2791),d=a(364),u=a(1523),m=a(184),p=function(e){var n=e.id,a=e.name,r=e.price,t=e.symbol,s=e.image,i=e.priceChange,c=e.setCurrentCrypto,l=e.timeHandler;return(0,m.jsx)("div",{className:"coin-link",children:(0,m.jsx)("div",{className:"coin_cr",children:(0,m.jsxs)(u.OL,{className:"coin-row coin_cr",to:"/chart",onClick:function(){l(Math.floor(10*Math.random())+355),c(n),window.scrollTo(0,0)},children:[(0,m.jsxs)("div",{className:"coin",children:[(0,m.jsx)("img",{src:s,alt:"crypto",width:25}),(0,m.jsx)("p",{className:"coin_name",children:a}),(0,m.jsx)("p",{className:"coin-symbol",children:t})]}),(0,m.jsxs)("div",{className:"coin-data",children:[(0,m.jsxs)("p",{className:"coin-price",children:["$",r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),i<0?(0,m.jsxs)("p",{className:"coin-percent red",children:[i.toFixed(2),"%"]}):(0,m.jsxs)("p",{className:"coin-percent green",children:[i.toFixed(2),"%"]})]})]})})})},h=a(6297),x=function(e){var n=e.latestPrice,a=e.coinsData,r=e.availableToSell,t=e.buyCurrentCoin,s=e.isBuyVisible,i=e.onChangeOpenOrder,c=e.orderValue,l=e.sellCurrentCoin,o=e.updateOrderHandler,d=e.balance;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"button_setting",children:"\u041e\u0440\u0435\u0434"}),(0,m.jsxs)("div",{className:"btn_order_group",children:[(0,m.jsx)("button",{onClick:function(){return i(!0)},className:"btn_order buy_btn",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),(0,m.jsx)("button",{onClick:function(){return i(!1)},className:"btn_order sell_btn",children:"\u041f\u0440\u043e\u0434\u0430\u0442\u044c"})]}),s?(0,m.jsxs)("div",{className:"order order_buy",children:[(0,m.jsxs)("p",{className:"order_available",children:["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e: ",(0,m.jsx)("strong",{children:d.toFixed(2)+"$"})]}),(0,m.jsxs)("div",{className:"order_cost",children:[(0,m.jsx)("p",{className:"order_price_text",children:"\u0426\u0435\u043d\u0430"}),(0,m.jsxs)("p",{className:"order_price_dig",children:[(0,m.jsxs)("span",{style:{paddingRight:"20px",fontWeight:"500"},children:["$",n]})," USDT"]})]}),(0,m.jsx)("input",{className:"order_input",id:"num1",max:d,type:"number",value:Number(c).toString(),onChange:o}),(0,m.jsx)("span",{className:"order_dollar",children:"$"}),(0,m.jsx)("br",{}),(0,m.jsx)("input",{className:"order_range",type:"range",max:d,value:c,onChange:o}),(0,m.jsx)("br",{}),(0,m.jsxs)("button",{onClick:function(){return t(a.id,c)},className:"button_trans_buy",children:["\u041a\u0443\u043f\u0438\u0442\u044c ",a.name]})]}):(0,m.jsxs)("div",{className:"order order_sell",children:[(0,m.jsxs)("p",{className:"order_available",children:["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e: ",(0,m.jsxs)("strong",{children:[r.toFixed(4)," ",a.symbol]})]}),(0,m.jsxs)("div",{className:"order_cost",children:[(0,m.jsx)("p",{className:"order_price_text",children:"\u0426\u0435\u043d\u0430"}),(0,m.jsxs)("p",{className:"order_price_dig",children:[(0,m.jsxs)("span",{style:{paddingRight:"20px",fontWeight:"500"},children:["$",n]})," USDT"]})]}),(0,m.jsx)("br",{}),(0,m.jsxs)("button",{onClick:function(){return l(a.id)},className:"button_trans_sell",children:["\u041f\u0440\u043e\u0434\u0430\u0442\u044c ",a.name]})]})]})},g=(0,d.$j)((function(e){return{balance:e.TradePage.balance,activeDeal:e.TradePage.activeDeal}}),{addOrder:h.fS,addNewDeal:h.lp,setNewBalance:h.Hw,setNewArrOrder:h.xB})((function(e){var n=(0,o.useState)(0),a=(0,s.Z)(n,2),r=a[0],t=a[1],i=(0,o.useState)(!0),c=(0,s.Z)(i,2),l=c[0],d=c[1],u=0,p=function(){e.activeDeal.forEach((function(n){n.coin===e.coinsData.id&&(u+=n.dealVolume)}))};try{p()}catch(h){}return(0,m.jsx)(x,{coinsData:e.coinsData,latestPrice:e.latestPrice,orderValue:r,isBuyVisible:l,availableToSell:u,onChangeOpenOrder:function(e){d(e)},buyCurrentCoin:function(n,a){if(0===a)return 0;var r=(new Date).toLocaleDateString(),s=a/e.latestPrice,i=e.balance-a;e.addNewDeal(n,s),e.addOrder(n,a,s,r),e.setNewBalance(i),t(0)},updateOrderHandler:function(e){var n=e.target,a=n.value,r=n.min,s=n.max;a=Math.max(Number(r),Math.min(Number(s),Number(a))),t(a)},sellCurrentCoin:function(n){var a=e.activeDeal.filter((function(a){if(a.coin!==n)return a;e.setNewBalance(e.balance+a.dealVolume*e.latestPrice),p()}));e.setNewArrOrder(a)},balance:e.balance})})),b=function(e){var n=e.latestPrice,a=e.coinsData,r=e.setTimeframe,t=e.coins,s=e.setCurrentCrypto,i=t.slice(5,14),c=a.market_data.price_change_percentage_24h,l=[{label:"1 \u0414\u0435\u043d\u044c",data:1},{label:"3 \u0414\u043d\u044f",data:3},{label:"1 \u041d\u0435\u0434\u0435\u043b\u044f",data:7},{label:"1 \u041c\u0435\u0441\u044f\u0446",data:30},{label:"6 \u041c\u0435\u0441\u044f\u0446\u0435\u0432",data:182},{label:"1 \u0413\u043e\u0434",data:365}].map((function(e){var n=e.label,a=e.data;return(0,m.jsx)("button",{type:"button",className:"button_chart btn first",onClick:function(){return r(a)},children:n},a)})),o=function(e){r(e)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"coin_page",children:[(0,m.jsxs)("div",{className:"crypto_info",children:[(0,m.jsx)("img",{src:a.image.large,alt:"",width:50}),(0,m.jsxs)("h2",{className:"name_coin",children:[a.name," "]})," ",(0,m.jsx)("span",{className:"text_coin",children:" \u0446\u0435\u043d\u0430 "}),(0,m.jsxs)("strong",{className:"price_coin",children:["$",n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]}),(0,m.jsxs)("div",{className:"day_change_coin",children:[(0,m.jsx)("span",{className:"change_text",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u0430 \u0434\u0435\u043d\u044c"}),c<0?(0,m.jsxs)("p",{className:"coin-percent coin_per red",children:[c.toFixed(2),"%"]}):(0,m.jsxs)("p",{className:"coin-percent coin_per green",children:[c.toFixed(2),"%"]})]}),(0,m.jsx)("div",{id:"chart",className:"p-0 m-0"})]}),(0,m.jsxs)("div",{className:"coin_group",children:[(0,m.jsxs)("div",{className:"coin_left",children:[(0,m.jsx)("h4",{className:"button_setting",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0422\u0424"}),(0,m.jsx)("div",{className:"button_group_time",children:l}),(0,m.jsx)(g,{coinsData:a,latestPrice:n})]}),(0,m.jsxs)("div",{className:"coin_right",children:[(0,m.jsx)("h4",{className:"button_setting",children:"\u0427\u0430\u0441\u0442\u043e \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u0435"}),i.map((function(e){return(0,m.jsx)(p,{id:e.id,name:e.name,price:e.current_price,symbol:e.symbol,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h,coin:e,setCurrentCrypto:s,timeHandler:o},e.id)}))]})]})]})})},f=a(8460),j=a.n(f),_=function(e){var n=[{name:"Price ($)",x:e.index.map((function(e){return new Date(e)})),y:e.price,xaxis:"x",yaxis:"y",type:"scatter",mode:"lines",marker:{color:"black",size:2}},{name:"Volumne ($B)",x:e.index.map((function(e){return new Date(e)})),y:e.volumes,xaxis:"x",yaxis:"y2",type:"bar",barmode:"relative",marker:{color:"rgb(49,130,189)",opacity:.7}}];j().newPlot("chart",n,{autosize:!1,height:700,width:1170,margin:{l:50,r:20,t:35,pad:3},hovermode:"x unified",showlegend:!1,xaxis:{fixedrange:!0,showspikes:!0,domain:[1,1],anchor:"y2"},yaxis:{fixedrange:!0,domain:[.1,1],anchor:"x"},yaxis2:{showticklabels:!1,domain:[0,.1],anchor:"x"},grid:{roworder:"bottom to top"}},{responsive:!1,displayModeBar:!1})},N=a(4508),v=a(6028),y=a(9271),C=(0,d.$j)((function(e){return{selectCrypto:e.CoinListPage.selectCrypto,coins:e.CoinListPage.coins}}),{getTenCoins:v.nX,setCurrentCrypto:v.eS})((function(e){var n=(0,o.useState)(0),a=(0,s.Z)(n,2),i=a[0],d=a[1],u=(0,o.useState)([]),p=(0,s.Z)(u,2),h=p[0],x=p[1],g=(0,o.useState)(!0),f=(0,s.Z)(g,2),j=f[0],v=f[1],C=(0,o.useState)(365),w=(0,s.Z)(C,2),k=w[0],D=w[1],S=function(){var n=(0,t.Z)(c().mark((function n(){var a,t,s,i,o,d,u,m;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={index:[],price:[],volumes:[]},n.next=3,l.b.getChartCoin(e.selectCrypto,k);case 3:t=n.sent,s=(0,r.Z)(t.prices);try{for(s.s();!(i=s.n()).done;)o=i.value,a.index.push(o[0]),a.price.push(o[1])}catch(c){s.e(c)}finally{s.f()}d=(0,r.Z)(t.total_volumes);try{for(d.s();!(u=d.n()).done;)m=u.value,a.volumes.push(m[1])}catch(c){d.e(c)}finally{d.f()}return n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,o.useEffect)((function(){S().then((function(e){_(e),d(parseFloat(e.price[e.price.length-1]).toFixed(2))})),l.b.getExactCoin(e.selectCrypto).then((function(e){x(e.data),v(!1)})).catch((function(e){return console.error(e)}))}),[k]),(0,o.useEffect)((function(){e.getTenCoins()}),[]);var P=document.querySelector("#chart");return JSON.parse(localStorage.getItem("user"))?(0,m.jsx)(m.Fragment,{children:!j||"undefined"!=typeof P&&null!=P?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(b,{coins:e.coins,setCurrentCrypto:e.setCurrentCrypto,selectCrypto:e.selectCrypto,latestPrice:i,coinsData:h,setTimeframe:D})}):(0,m.jsx)(N.Z,{})}):(0,m.jsx)(y.l_,{to:"/login"})}))}}]);
//# sourceMappingURL=592.d5ffc541.chunk.js.map