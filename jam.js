(function(){
if(document.getElementById("jamPopup")){
document.getElementById("jamPopup").remove();
return;
}

var b=document.createElement("div");
b.id="jamPopup";
b.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.85);color:#00ffcc;padding:20px;border:2px solid #00ffcc;border-radius:15px;box-shadow:0 0 25px #00ffcc;z-index:999999;font-family:monospace;resize:both;overflow:hidden;min-width:220px;min-height:110px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:move;";

var t=document.createElement("div");
var j=document.createElement("div");
var c=document.createElement("div");

t.style.fontSize="14px";
t.style.opacity="0.8";

j.style.fontSize="28px";
j.style.fontWeight="bold";

c.innerText="✕";
c.style.cssText="position:absolute;top:5px;right:10px;color:red;cursor:pointer;";
c.onclick=function(){b.remove();};

b.appendChild(c);
b.appendChild(t);
b.appendChild(j);
document.body.appendChild(b);

function u(){
let n=new Date();
let h=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
let m=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

t.innerText=h[n.getDay()]+", "+n.getDate()+" "+m[n.getMonth()]+" "+n.getFullYear();
j.innerText=n.toLocaleTimeString();
}

setInterval(u,1000);
u();

let d=false,x,y;

b.onmousedown=e=>{
d=true;
x=e.clientX-b.offsetLeft;
y=e.clientY-b.offsetTop;
b.style.transform="none";
};

document.onmousemove=e=>{
if(d){
b.style.left=(e.clientX-x)+"px";
b.style.top=(e.clientY-y)+"px";
}
};

document.onmouseup=()=>d=false;

})();
