(this["webpackJsonpfx1-bitcoin-tracker"]=this["webpackJsonpfx1-bitcoin-tracker"]||[]).push([[0],{176:function(r,n,c){"use strict";c.r(n);var e=c(0),u=c(59),a=c.n(u),o=c(7),y=c(60),t=c(1),i=function(r){var n=r.handleCurrencyChange,c=r.currency;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h2",{children:"Select Currency:"}),Object(t.jsx)("select",{value:c,onChange:function(r){n(r.target.value)},children:y.map((function(r,n){var c=r.currency,e=r.country;return Object(t.jsx)("option",{value:c,children:e},"".concat(n,"-").concat(c))}))})]})},l=c(38),s=c.n(l),d=c(61),D=c(23),b=function(r){var n=r.currency,c=Object(e.useState)({}),u=Object(o.a)(c,2),a=u[0],y=u[1];function i(){return(i=Object(d.a)(s.a.mark((function r(n){var c,e;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=".concat(n));case 2:return c=r.sent,r.next=5,c.json();case 5:e=r.sent,y(e.bpi);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return Object(e.useEffect)((function(){!function(r){i.apply(this,arguments)}(n)}),[n]),D.a.defaults.defaultFontColor="#000",D.a.defaults.defaultFontSize=16,Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("h3",{children:["Bitcoin data in ",n]}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{style:{margin:"1rem",maxWidth:"1000px"},children:Object(t.jsx)(D.b,{height:150,data:{labels:Object.keys(a),datasets:[{label:"Bitcoin",fill:!0,lineTension:.4,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:Object.values(a)}]}})})})]})},h=function(){var r=Object(e.useState)("AUD"),n=Object(o.a)(r,2),c=n[0],u=n[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Bitcoin Index"}),Object(t.jsxs)("span",{children:["Powered by ",Object(t.jsx)("a",{href:"https://www.coindesk.com/price/bitcoin",target:"_blank",rel:"noreferrer",children:"CoinDesk"})]}),Object(t.jsx)(i,{currency:c,handleCurrencyChange:function(r){console.log("Got new currency: ",r),u(r)}}),Object(t.jsx)(b,{currency:c})]})};a.a.render(Object(t.jsx)(h,{}),document.getElementById("root"))},60:function(r){r.exports=JSON.parse('[{"currency":"AED","country":"United Arab Emirates Dirham"},{"currency":"AFN","country":"Afghan Afghani"},{"currency":"ALL","country":"Albanian Lek"},{"currency":"AMD","country":"Armenian Dram"},{"currency":"ANG","country":"Netherlands Antillean Guilder"},{"currency":"AOA","country":"Angolan Kwanza"},{"currency":"ARS","country":"Argentine Peso"},{"currency":"AUD","country":"Australian Dollar"},{"currency":"AWG","country":"Aruban Florin"},{"currency":"AZN","country":"Azerbaijani Manat"},{"currency":"BAM","country":"Bosnia-Herzegovina Convertible Mark"},{"currency":"BBD","country":"Barbadian Dollar"},{"currency":"BDT","country":"Bangladeshi Taka"},{"currency":"BGN","country":"Bulgarian Lev"},{"currency":"BHD","country":"Bahraini Dinar"},{"currency":"BIF","country":"Burundian Franc"},{"currency":"BMD","country":"Bermudan Dollar"},{"currency":"BND","country":"Brunei Dollar"},{"currency":"BOB","country":"Bolivian Boliviano"},{"currency":"BRL","country":"Brazilian Real"},{"currency":"BSD","country":"Bahamian Dollar"},{"currency":"BTC","country":"Bitcoin"},{"currency":"BTN","country":"Bhutanese Ngultrum"},{"currency":"BWP","country":"Botswanan Pula"},{"currency":"BYR","country":"Belarusian Ruble"},{"currency":"BZD","country":"Belize Dollar"},{"currency":"CAD","country":"Canadian Dollar"},{"currency":"CDF","country":"Congolese Franc"},{"currency":"CHF","country":"Swiss Franc"},{"currency":"CLF","country":"Chilean Unit of Account (UF)"},{"currency":"CLP","country":"Chilean Peso"},{"currency":"CNY","country":"Chinese Yuan"},{"currency":"COP","country":"Colombian Peso"},{"currency":"CRC","country":"Costa Rican Col\xf3n"},{"currency":"CUP","country":"Cuban Peso"},{"currency":"CVE","country":"Cape Verdean Escudo"},{"currency":"CZK","country":"Czech Republic Koruna"},{"currency":"DJF","country":"Djiboutian Franc"},{"currency":"DKK","country":"Danish Krone"},{"currency":"DOP","country":"Dominican Peso"},{"currency":"DZD","country":"Algerian Dinar"},{"currency":"EEK","country":"Estonian Kroon"},{"currency":"EGP","country":"Egyptian Pound"},{"currency":"ERN","country":"Eritrean Nnakfa"},{"currency":"ETB","country":"Ethiopian Birr"},{"currency":"EUR","country":"Euro"},{"currency":"FJD","country":"Fijian Dollar"},{"currency":"FKP","country":"Falkland Islands Pound"},{"currency":"GBP","country":"British Pound Sterling"},{"currency":"GEL","country":"Georgian Lari"},{"currency":"GHS","country":"Ghanaian Cedi"},{"currency":"GIP","country":"Gibraltar Pound"},{"currency":"GMD","country":"Gambian Dalasi"},{"currency":"GNF","country":"Guinean Franc"},{"currency":"GTQ","country":"Guatemalan Quetzal"},{"currency":"GYD","country":"Guyanaese Dollar"},{"currency":"HKD","country":"Hong Kong Dollar"},{"currency":"HNL","country":"Honduran Lempira"},{"currency":"HRK","country":"Croatian Kuna"},{"currency":"HTG","country":"Haitian Gourde"},{"currency":"HUF","country":"Hungarian Forint"},{"currency":"IDR","country":"Indonesian Rupiah"},{"currency":"ILS","country":"Israeli New Sheqel"},{"currency":"INR","country":"Indian Rupee"},{"currency":"IQD","country":"Iraqi Dinar"},{"currency":"IRR","country":"Iranian Rial"},{"currency":"ISK","country":"Icelandic Kr\xf3na"},{"currency":"JEP","country":"Jersey Pound"},{"currency":"JMD","country":"Jamaican Dollar"},{"currency":"JOD","country":"Jordanian Dinar"},{"currency":"JPY","country":"Japanese Yen"},{"currency":"KES","country":"Kenyan Shilling"},{"currency":"KGS","country":"Kyrgystani Som"},{"currency":"KHR","country":"Cambodian Riel"},{"currency":"KMF","country":"Comorian Franc"},{"currency":"KPW","country":"North Korean Won"},{"currency":"KRW","country":"South Korean Won"},{"currency":"KWD","country":"Kuwaiti Dinar"},{"currency":"KYD","country":"Cayman Islands Dollar"},{"currency":"KZT","country":"Kazakhstani Tenge"},{"currency":"LAK","country":"Laotian Kip"},{"currency":"LBP","country":"Lebanese Pound"},{"currency":"LKR","country":"Sri Lankan Rupee"},{"currency":"LRD","country":"Liberian Dollar"},{"currency":"LSL","country":"Lesotho Loti"},{"currency":"LTL","country":"Lithuanian Litas"},{"currency":"LVL","country":"Latvian Lats"},{"currency":"LYD","country":"Libyan Dinar"},{"currency":"MAD","country":"Moroccan Dirham"},{"currency":"MDL","country":"Moldovan Leu"},{"currency":"MGA","country":"Malagasy Ariary"},{"currency":"MKD","country":"Macedonian Denar"},{"currency":"MMK","country":"Myanma Kyat"},{"currency":"MNT","country":"Mongolian Tugrik"},{"currency":"MOP","country":"Macanese Pataca"},{"currency":"MRO","country":"Mauritanian Ouguiya"},{"currency":"MTL","country":"Maltese Lira"},{"currency":"MUR","country":"Mauritian Rupee"},{"currency":"MVR","country":"Maldivian Rufiyaa"},{"currency":"MWK","country":"Malawian Kwacha"},{"currency":"MXN","country":"Mexican Peso"},{"currency":"MYR","country":"Malaysian Ringgit"},{"currency":"MZN","country":"Mozambican Metical"},{"currency":"NAD","country":"Namibian Dollar"},{"currency":"NGN","country":"Nigerian Naira"},{"currency":"NIO","country":"Nicaraguan C\xf3rdoba"},{"currency":"NOK","country":"Norwegian Krone"},{"currency":"NPR","country":"Nepalese Rupee"},{"currency":"NZD","country":"New Zealand Dollar"},{"currency":"OMR","country":"Omani Rial"},{"currency":"PAB","country":"Panamanian Balboa"},{"currency":"PEN","country":"Peruvian Nuevo Sol"},{"currency":"PGK","country":"Papua New Guinean Kina"},{"currency":"PHP","country":"Philippine Peso"},{"currency":"PKR","country":"Pakistani Rupee"},{"currency":"PLN","country":"Polish Zloty"},{"currency":"PYG","country":"Paraguayan Guarani"},{"currency":"QAR","country":"Qatari Rial"},{"currency":"RON","country":"Romanian Leu"},{"currency":"RSD","country":"Serbian Dinar"},{"currency":"RUB","country":"Russian Ruble"},{"currency":"RWF","country":"Rwandan Franc"},{"currency":"SAR","country":"Saudi Riyal"},{"currency":"SBD","country":"Solomon Islands Dollar"},{"currency":"SCR","country":"Seychellois Rupee"},{"currency":"SDG","country":"Sudanese Pound"},{"currency":"SEK","country":"Swedish Krona"},{"currency":"SGD","country":"Singapore Dollar"},{"currency":"SHP","country":"Saint Helena Pound"},{"currency":"SLL","country":"Sierra Leonean Leone"},{"currency":"SOS","country":"Somali Shilling"},{"currency":"SRD","country":"Surinamese Dollar"},{"currency":"STD","country":"S\xe3o Tom\xe9 and Pr\xedncipe Dobra"},{"currency":"SVC","country":"Salvadoran Col\xf3n"},{"currency":"SYP","country":"Syrian Pound"},{"currency":"SZL","country":"Swazi Lilangeni"},{"currency":"THB","country":"Thai Baht"},{"currency":"TJS","country":"Tajikistani Somoni"},{"currency":"TMT","country":"Turkmenistani Manat"},{"currency":"TND","country":"Tunisian Dinar"},{"currency":"TOP","country":"Tongan Pa?anga"},{"currency":"TRY","country":"Turkish Lira"},{"currency":"TTD","country":"Trinidad and Tobago Dollar"},{"currency":"TWD","country":"New Taiwan Dollar"},{"currency":"TZS","country":"Tanzanian Shilling"},{"currency":"UAH","country":"Ukrainian Hryvnia"},{"currency":"UGX","country":"Ugandan Shilling"},{"currency":"USD","country":"United States Dollar"},{"currency":"UYU","country":"Uruguayan Peso"},{"currency":"UZS","country":"Uzbekistan Som"},{"currency":"VEF","country":"Venezuelan Bol\xedvar Fuerte"},{"currency":"VND","country":"Vietnamese Dong"},{"currency":"VUV","country":"Vanuatu Vatu"},{"currency":"WST","country":"Samoan Tala"},{"currency":"XAF","country":"CFA Franc BEAC"},{"currency":"XAG","country":"Silver (troy ounce)"},{"currency":"XAU","country":"Gold (troy ounce)"},{"currency":"XBT","country":"Bitcoin"},{"currency":"XCD","country":"East Caribbean Dollar"},{"currency":"XDR","country":"Special Drawing Rights"},{"currency":"XOF","country":"CFA Franc BCEAO"},{"currency":"XPF","country":"CFP Franc"},{"currency":"YER","country":"Yemeni Rial"},{"currency":"ZAR","country":"South African Rand"},{"currency":"ZMK","country":"Zambian Kwacha (pre-2013)"},{"currency":"ZMW","country":"Zambian Kwacha"},{"currency":"ZWL","country":"Zimbabwean Dollar"}]')}},[[176,1,2]]]);
//# sourceMappingURL=main.83d502c5.chunk.js.map