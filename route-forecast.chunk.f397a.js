(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{XVO3:function(t){t.exports={snippet:"snippet__3Ln0y",text:"text__3awYV",time:"time__2Dp_G"}},YLUE:function(t,e,s){"use strict";s.r(e);var n=s("hosL"),i=s("vi7N"),c=s.n(i),a=s("Q/DC"),r=s("TE3c"),p=s.n(r),u=s("XVO3"),o=s.n(u),h=s("Qi1R"),l=function(t){var e=t.time,s=t.description,i=t.temp,c=t.sunrise,r=t.sunset,u=Object(h.a)(s,c,r,e);return Object(n.h)("div",{class:o.a.snippet},Object(n.h)("div",{class:o.a.text},Object(n.h)("p",{class:o.a.time},i,"°C - ",Object(a.a)(1e3*e).format("LT")),Object(n.h)("p",null,p()(s))),Object(n.h)("i",{class:"wi "+u}))};e.default=function(t){var e=t.data,s=e.city,i=s.sunrise,a=s.sunset,r=e.list.slice(1,5).map((function(t,e){return Object(n.h)("div",{key:e},Object(n.h)(l,{time:t.dt,description:t.weather[0].description,state:t.weather[0].main,temp:Math.round(t.main.temp-273.15),sunrise:i,sunset:a}),Object(n.h)("hr",null))}));return Object(n.h)("div",{class:c.a.forecast},Object(n.h)("ul",null,r))}},vi7N:function(t){t.exports={forecast:"forecast__2je-L"}}}]);
//# sourceMappingURL=route-forecast.chunk.f397a.js.map