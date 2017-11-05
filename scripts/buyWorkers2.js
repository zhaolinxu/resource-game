//
//Buy Workers
//
function buyLumberjack(){

var value = document.getElementById('lumberjackCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var lumberjackCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (goldAmount >= lumberjackCost) 
{
value = goldAmount - lumberjackCost;
document.getElementById('gold').value = numberWithCommas(value);

document.getElementById('lumberjacks').value -= -1;
document.getElementById('workers').value -= -1;

value = Math.round(lumberjackCost * 1.2);
document.getElementById('lumberjackCost').value = numberWithCommas(value);
}
}
function buyIronMiner(){

var value = document.getElementById('ironMinerCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironMinerCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (goldAmount >= ironMinerCost) 
{
value = goldAmount - ironMinerCost;
document.getElementById('gold').value = numberWithCommas(value);

document.getElementById('ironMiners').value -= -1;
document.getElementById('workers').value -= -1;

value = Math.round(ironMinerCost * 1.2);
document.getElementById('ironMinerCost').value = numberWithCommas(value);
}
}
function buyCopperMiner(){
var value = document.getElementById('copperMinerCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperMinerCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (goldAmount >= copperMinerCost) {
value = goldAmount - copperMinerCost;
document.getElementById('gold').value = numberWithCommas(value);

document.getElementById('copperMiners').value -= -1;
document.getElementById('workers').value -= -1;

value = Math.round(copperMinerCost * 1.2);
document.getElementById('copperMinerCost').value = numberWithCommas(value);
}
}
function buyGoldMiner(){
var value = document.getElementById('goldMinerCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldMinerCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (goldAmount >= goldMinerCost) {
value = goldAmount - goldMinerCost;
document.getElementById('gold').value = numberWithCommas(value);

document.getElementById('goldMiners').value -= -1;
document.getElementById('workers').value -= -1;

value = Math.round(goldMinerCost * 1.2);
document.getElementById('goldMinerCost').value = numberWithCommas(value);
}
}
function buyJeweler(){
var value = document.getElementById('jewelerCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var jewelerCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (goldAmount >= jewelerCost) {
value = goldAmount - jewelerCost;
document.getElementById('gold').value = numberWithCommas(value);

document.getElementById('jewelers').value -= -1;
document.getElementById('workers').value -= -1;

value = Math.round(jewelerCost * 1.2);
document.getElementById('jewelerCost').value = numberWithCommas(value);
}
}