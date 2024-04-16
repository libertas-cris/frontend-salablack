import{j as t}from"./react-fl4AHgaL.js";import{u as a,h as r}from"./styled-components-eQ0WgP19.js";const f={"aria-busy":!0,role:"progressbar"};a.div`
  display: ${s=>s.$visible?"flex":"none"};
`;const e=242.776657104492,c=1.6,p=r`
12.5% {
  stroke-dasharray: ${e*.14}px, ${e}px;
  stroke-dashoffset: -${e*.11}px;
}
43.75% {
  stroke-dasharray: ${e*.35}px, ${e}px;
  stroke-dashoffset: -${e*.35}px;
}
100% {
  stroke-dasharray: ${e*.01}px, ${e}px;
  stroke-dashoffset: -${e*.99}px;
}
`;a.path`
  stroke-dasharray: ${e*.01}px, ${e};
  stroke-dashoffset: 0;
  animation: ${p} ${c}s linear infinite;
`;const x=r`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${x} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
  stroke-width: ${s=>s.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const m=r`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${m} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const u=({visible:s=!0,width:n="80",height:o="80",colors:i=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"],wrapperClass:d="",wrapperStyle:h={},ariaLabel:l="color-ring-loading"})=>s?t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:n,height:o,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:d,style:h,"aria-label":l,"data-testid":"color-ring-svg",...f,children:[t.jsx("defs",{children:t.jsx("mask",{id:"ldio-4offds5dlws-mask",children:t.jsx("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)",children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})})})}),t.jsxs("g",{mask:"url(#ldio-4offds5dlws-mask)",children:[t.jsx("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:i[0],children:t.jsx("animate",{attributeName:"fill",values:i.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})}),t.jsx("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:i[1],children:t.jsx("animate",{attributeName:"fill",values:i.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})}),t.jsx("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:i[2],children:t.jsx("animate",{attributeName:"fill",values:i.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})}),t.jsx("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:i[3],children:t.jsx("animate",{attributeName:"fill",values:i.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})}),t.jsx("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:i[4],children:t.jsx("animate",{attributeName:"fill",values:i.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})})]})]}):null;export{u as $};
