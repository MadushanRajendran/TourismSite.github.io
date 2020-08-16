var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const name = document.getElementById("name");
const mail = document.getElementById("mail");
const number = document.getElementById("number");
const cname = document.getElementById("cname");
const cnumber = document.getElementById("cnumber");
const cmail = document.getElementById("cmail");
const btnOrder = document.getElementById("order");
btnOrder.addEventListener("click",details);
function details(){
  
  cname.innerText=("Name : "+ name.value); 
  cnumber.innerText=("Number : "+ number.value); 
  cmail.innerText=("Mail : "+ mail.value); 
}
let vehi=null;
const ct = document.getElementById("ct");
btnOrder.addEventListener("click",vehicle);
function vehicle(){
if (document.getElementById("tuk").checked){
  vehi=`Tuk-Tuk`
}
if (document.getElementById("mc").checked){
  vehi=`Mini-Car`
}
if (document.getElementById("lc").checked){
  vehi=`Luxury-Car`
}
if (document.getElementById("lv").checked){
  vehi=`Luxury-Van `
}
if (document.getElementById("lb").checked){
  vehi=`Luxury-Bus`
}
}

let vc;
let km = document.getElementById("km")
btnOrder.addEventListener("click",cost);
function cost(){
let n;
if (document.getElementById("tuk").checked){
  n=50;
  vc=n*km.value;
}
if (document.getElementById("mc").checked){
  n=75;
  vc=n*km.value;
}
if (document.getElementById("lc").checked){
  n=100;
  vc=n*km.value;
}
if (document.getElementById("lv").checked){
  n=150;
  vc=n*km.value;
}
if (document.getElementById("lb").checked){
  n=200;
  vc=n*km.value;
}
}

let fc;
let fe=null;

btnOrder.addEventListener("click",fuel);
function fuel(){
if (document.getElementById("high").checked){
  fc=2000;
  fe=`High`
}
if (document.getElementById("medium").checked){
  fc=1000;
  fe=`Medium`
}
if (document.getElementById("low").checked){
  fc=500;
  fe=`Low`
}
}
let ntotal=0;
let total;
let st=null;
const ctc = document.getElementById("ctc");
btnOrder.addEventListener("click",stay);
function stay(){
if (document.getElementById("oneway").checked){
 total=(vc*1)+fc;
 st=`One Way`
  ctc.innerText=`Current Taxi Cost is  ${total}`;
}
if (document.getElementById("twoway").checked){
  total=(vc*2)+fc;
  st=`Two Way`
  ctc.innerText=`Current Taxi Cost is  ${total}`;
}
if (document.getElementById("overnight").checked){
  total=((vc*2)+5000)+fc;
  st=`Overnight`
  ctc.innerText=`Current Taxi Cost is  ${total}`;
}
ntotal=ntotal+total;
}
let nvehi=" " ;
let address = document.getElementById("address");
btnOrder.addEventListener("click",cto);
function cto(){
  ct.innerText=`The vehicle selected is ${vehi}. The fuel efficency selected is ${fe}. The distance is ${km.value} kms. The stay is ${st}. The pickup location is ${address.value}`
  nvehi=nvehi + " " + vehi; 
}
const btnReserve = document.getElementById("reserve");
const oco= document.getElementById("oco");
const oo = document.getElementById("oo");
btnReserve.addEventListener("click",res)
function res(){
 alert("Thank you for your order"); 
cname.innerText=null; 
cnumber.innerText=null;
cmail.innerText=null; 
ct.innerText=null;
ctc.innerText=`0`;
oco.innerText=`0`;
oo.innerText=null;
}

const btnAorder = document.getElementById("aorder");
btnAorder.addEventListener("click",overallorder);
function overallorder(){
oco.innerText=`The overall cost is ${ntotal}.`
oo.innerText=`The taxis ordered are ${nvehi}`
}

btnAorder.addEventListener("click",overallordero)
function overallordero(){
ct.innerText=null;
ctc.innerText=`0`;
}

let n=0;
btnAorder.addEventListener("click",loyaltya)
function loyaltya(){
n=n+1;
}

let loyaltyp=0;
const lp=document.getElementById("lp");
const btnCl=document.getElementById("cl");
btnCl.addEventListener("click",checkl);
function checkl(){
if (n>3){
loyaltyp=n*20;
lp.innerText=`The loyalty points is : ${loyaltyp}`
}
else{
 lp.innerText=`0`;
}
}

const btnButton = document.getElementById("button");
btnButton.addEventListener("click",submit);
function submit(){
  alert(`Thank you for subscription!`)
}

const btnaFav= document.getElementById("aFav");
const btnoFav = document.getElementById("oFav");
btnaFav.addEventListener("click",addEntry);
let directory;
var en;

btnoFav.addEventListener("click",showEntries);
function showEntries(){
en=JSON.parse(localStorage.getItem('directory'));
ct.innerText="";
ct.innerText=en.name +" " + en.number +" " + en.mail +" "+ en.vehi +" "+ en.fe +" "+ en.km +" " + en.st +" "+ en.address;
}
function addEntry(){
  const entry={
    "name":name.value,
    "number":number.value,
    "mail":mail.value,
    "vehi":vehi,
    "fe":fe,
    "km":km.value,
    "st":st,
    "address":address.value
  };
  localStorage.setItem('directory',JSON.stringify(entry));
}

const btnTop = document.getElementById("top");
btnTop.addEventListener("click",topFunction);
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


