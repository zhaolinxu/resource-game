//
//When you click Earth
//
function clickEarth()
{
document.getElementById('firstClick').style.display = 'none';
clickWood();
clickIron();
clickCopper();
clickGold();
clickDiamond();
//
var rnd = Math.random();
if (rnd < .45) {
var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('wood').value = numberWithCommas(value);
}
if (rnd < .35) {
var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('iron').value = numberWithCommas(value);
}
if (rnd < .30) {
var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('copper').value = numberWithCommas(value);
}
if (rnd < .05) {
var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('gold').value = numberWithCommas(value);
}
if (rnd < .001) {
var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('diamond').value = numberWithCommas(value);
}
}
//
//Click Functions
//
function clickWood(){
var rnd = Math.random();
if (rnd < .45) {

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);

var lumberjacks = parseInt(document.getElementById('lumberjacks').value, 10);
var axes = parseInt(document.getElementById('axes').value, 10);
var sawmills = 50 * parseInt(document.getElementById('sawmills').value, 10);
var superSaws = 100 * parseInt(document.getElementById('superSaws').value, 10);
var woodPowerups = 0.05 * parseInt(document.getElementById('woodPowerups').value, 10);
var percent = woodPowerups * (lumberjacks + axes + sawmills + superSaws);
value -= -(lumberjacks + axes + sawmills + superSaws + percent);
value = Math.round(value);
document.getElementById('wood').value = numberWithCommas(value);

if (lumberjacks + axes + sawmills + superSaws + percent > 0 && document.getElementById("effects").checked == true){

var span = document.createElement("span");
span.innerHTML = "+"+numberWithCommas(Math.round((lumberjacks + axes + sawmills + superSaws + percent)));
span.style.color = "rgb(192,133,64)";
span.style.position = "absolute";
span.style.top = "15px";
span.style.left = "150px";
$(span).show().appendTo("#woodAdd").fadeOut(1000).animate({top: -5}, {duration: 1000, queue: false, complete: function()
{
$(this).remove();
}}
);

}
}
}
function clickIron(){
var rnd = Math.random();
if (rnd < .35) {

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);

var ironMiners = parseInt(document.getElementById('ironMiners').value, 10);
var steelPickaxes = parseInt(document.getElementById('steelPickaxes').value, 10);
var benes = 50 * parseInt(document.getElementById('benes').value, 10);
var oreReactors = 100 * parseInt(document.getElementById('oreReactors').value, 10);
var ironPowerups = 0.05 * parseInt(document.getElementById('ironPowerups').value, 10);
var percent = ironPowerups * (ironMiners + steelPickaxes + benes + oreReactors);
value -= -(ironMiners + steelPickaxes + benes + oreReactors + percent);
value = Math.round(value);
document.getElementById('iron').value = numberWithCommas(value);

if (ironMiners + steelPickaxes + benes + oreReactors + percent > 0 && document.getElementById("effects").checked == true){

var span = document.createElement("span");
span.innerHTML = "+"+numberWithCommas(Math.round((ironMiners + steelPickaxes + benes + oreReactors + percent)));
span.style.color = "rgb(188,188,188)";
span.style.position = "absolute";
span.style.top = "55px";
span.style.left = "140px";
$(span).show().appendTo("#ironAdd").fadeOut(1000).animate({top: 35}, {duration: 1000, queue: false, complete: function()
{
$(this).remove();
}}
);

}

}
}
function clickCopper(){
var rnd = Math.random();
if (rnd < .30) {

var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);

var copperMiners = parseInt(document.getElementById('copperMiners').value, 10);
var coldHammers = parseInt(document.getElementById('coldHammers').value, 10);
var electros = 50 * parseInt(document.getElementById('electros').value, 10);
var teslas = 100 * parseInt(document.getElementById('teslas').value, 10);
var copperPowerups = 0.05 * parseInt(document.getElementById('copperPowerups').value, 10);
var percent = copperPowerups * (copperMiners + coldHammers + electros + teslas);
value -= -(copperMiners + coldHammers + electros + teslas + percent);
value = Math.round(value);
document.getElementById('copper').value = numberWithCommas(value);

if (copperMiners + coldHammers + electros + teslas + percent > 0 && document.getElementById("effects").checked == true){

var span = document.createElement("span");
span.innerHTML = "+"+numberWithCommas(Math.round((copperMiners + coldHammers + electros + teslas + percent)));
span.style.color = "rgb(215,130,35)";
span.style.position = "absolute";
span.style.top = "100px";
span.style.left = "160px";
$(span).show().appendTo("#copperAdd").fadeOut(1000).animate({top: 80}, {duration: 1000, queue: false, complete: function()
{
$(this).remove();
}}
);

}

}
}
function clickGold(){
var rnd = Math.random();
if (rnd < .05) {

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);

var goldMiners = parseInt(document.getElementById('goldMiners').value, 10);
var goldPans = parseInt(document.getElementById('goldPans').value, 10);
var smelteries = 50 * parseInt(document.getElementById('smelteries').value, 10);
var goldFish = 100 * parseInt(document.getElementById('goldFish').value, 10);
var goldPowerups = 0.05 * parseInt(document.getElementById('goldPowerups').value, 10);
var percent = goldPowerups * (goldMiners + goldPans + smelteries + goldFish);
value -= -(goldMiners + goldPans + smelteries + goldFish + percent);
value = Math.round(value);
document.getElementById('gold').value = numberWithCommas(value);

if (goldMiners + goldPans + smelteries + goldFish + percent > 0 && document.getElementById("effects").checked == true){

var span = document.createElement("span");
span.innerHTML = "+"+numberWithCommas(Math.round((goldMiners + goldPans + smelteries + goldFish + percent)));
span.style.color = "rgb(255,196,0)";
span.style.position = "absolute";
span.style.top = "135px";
span.style.left = "140px";
$(span).show().appendTo("#goldAdd").fadeOut(1000).animate({top: 115}, {duration: 1000, queue: false, complete: function()
{
$(this).remove();
}}
);

}

}
}
function clickDiamond(){
var rnd = Math.random();
if (rnd < .001) {

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);

var jewelers = parseInt(document.getElementById('jewelers').value, 10);
var chisels = parseInt(document.getElementById('chisels').value, 10);
var gemStations = 50 * parseInt(document.getElementById('gemStations').value, 10);
var molecules = 100 * parseInt(document.getElementById('molecules').value, 10);
var diamondPowerups = 0.05 * parseInt(document.getElementById('diamondPowerups').value, 10);
var percent = diamondPowerups * (jewelers + chisels + gemStations + molecules);
value -= -(jewelers + chisels + gemStations + molecules + percent);
value = Math.round(value);
document.getElementById('diamond').value = numberWithCommas(value);

if (jewelers + chisels + gemStations + molecules + percent > 0 && document.getElementById("effects").checked == true){

var span = document.createElement("span");
span.innerHTML = "+"+numberWithCommas(Math.round((jewelers + chisels + gemStations + molecules + percent)));
span.style.color = "rgb(68,194,236)";
span.style.position = "absolute";
span.style.top = "190px";
span.style.left = "160px";
$(span).show().appendTo("#diamondAdd").fadeOut(1000).animate({top: 170}, {duration: 1000, queue: false, complete: function()
{
$(this).remove();
}}
);

}

}
}
function removeFloaty()
{
this.parentNode.removeChild(this);
}


