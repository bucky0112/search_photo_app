import{a as e,r as t,R as a,n as r,b as s}from"./vendor.13361092.js";var n=e.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID Mc6G7MSVHWkvg7BfIqQz6Rl4tsFTIf2H4flZFq4zr-A"}});const l=e=>{const{handleSubmit:r}=e,[s,n]=t.exports.useState({inputText:""});return a.createElement("div",{className:"ui segment"},a.createElement("form",{className:"ui form",onSubmit:e=>{e.preventDefault(),r(s.inputText)}},a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"search"},"Search"),a.createElement("input",{placeholder:"Search photos",id:"search",type:"text",value:s.inputText,onChange:e=>{n({inputText:e.target.value})}}))))},i=r.img`
  width: 250px;
  grid-row-end: span 2;
`,c=e=>{const{src:r,alt:s}=e,n=t.exports.useRef(),[l,c]=t.exports.useState({spans:0});t.exports.useEffect((()=>{n.current.addEventListener("load",o)}),[]);const o=()=>{const e=n.current.clientHeight,t=Math.ceil(e/10);c({spans:t})};return a.createElement("div",{style:{gridRowEnd:`span ${l.spans}`}},a.createElement(i,{className:"ui rounded image",ref:n,src:r,alt:s}))},o=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`,m=e=>{const{images:t}=e,r=t.map((({urls:e,description:t,id:r})=>a.createElement(c,{src:e.regular,alt:t,key:r})));return a.createElement(o,null,r)};function u(){const[e,r]=t.exports.useState({images:[]});return a.createElement("div",{className:"ui container",style:{marginTop:20}},a.createElement(l,{handleSubmit:async e=>{const t=await n.get("/search/photos",{params:{query:e,page:(a=20,Math.floor(Math.random()*a))}});var a;r({images:t.data.results})}}),a.createElement(m,{images:e.images}))}s.render(a.createElement(u,null),document.getElementById("root"));
