//
//Buy Tools
//
function buyAxe(){

var value = document.getElementById('lumberjacks').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var lumberjackAmount = value;

var value = document.getElementById('axes').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var axeAmount = value;

if (lumberjackAmount > axeAmount) {

var value = document.getElementById('woodAxeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAxeCost = value;

var value = document.getElementById('ironAxeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAxeCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodAxeCost && ironAmount >= ironAxeCost) {

value = woodAmount - woodAxeCost;
document.getElementById('wood').value = numberWithCommas(value);

value = ironAmount - ironAxeCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('axes').value -= -1;
document.getElementById('tools').value -= -1;

value = Math.round(woodAxeCost * 1.2);
document.getElementById('woodAxeCost').value = numberWithCommas(value);

value = Math.round(ironAxeCost * 1.2);
document.getElementById('ironAxeCost').value = numberWithCommas(value);
}
}
else
{
document.getElementById('alert').innerHTML = '需要更多的伐木工人！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;}
}
function buySteelPickaxe(){
var value = document.getElementById('ironMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironMinerAmount = value;

var value = document.getElementById('steelPickaxes').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var steelPickaxeAmount = value;

if (ironMinerAmount > steelPickaxeAmount) {

var value = document.getElementById('woodSteelPickaxeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodSteelPickaxeCost = value;

var value = document.getElementById('ironSteelPickaxeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironSteelPickaxeCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodSteelPickaxeCost && ironAmount >= ironSteelPickaxeCost) {

value = woodAmount - woodSteelPickaxeCost;
document.getElementById('wood').value = numberWithCommas(value);

value = ironAmount - ironSteelPickaxeCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('steelPickaxes').value -= -1;
document.getElementById('tools').value -= -1;

value = Math.round(woodSteelPickaxeCost * 1.2);
document.getElementById('woodSteelPickaxeCost').value = numberWithCommas(value);

value = Math.round(ironSteelPickaxeCost * 1.2);
document.getElementById('ironSteelPickaxeCost').value = numberWithCommas(value);
}}
else
{
document.getElementById('alert').innerHTML = '需要更多的铁矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;}
}
function buyColdHammer(){

var value = document.getElementById('copperMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperMinerAmount = value;

var value = document.getElementById('coldHammers').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var coldHammerAmount = value;


if (copperMinerAmount > coldHammerAmount) {

var value = document.getElementById('woodColdHammerCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodColdHammerCost = value;

var value = document.getElementById('ironColdHammerCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironColdHammerCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodColdHammerCost && ironAmount >= ironColdHammerCost) {
value = woodAmount - woodColdHammerCost;
document.getElementById('wood').value = numberWithCommas(value);

value = ironAmount - ironColdHammerCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('coldHammers').value -= -1;
document.getElementById('tools').value -= -1;

value = Math.round(woodColdHammerCost * 1.2);
document.getElementById('woodColdHammerCost').value = numberWithCommas(value);

value = Math.round(ironColdHammerCost * 1.2);
document.getElementById('ironColdHammerCost').value = numberWithCommas(value);
}}
else
{
document.getElementById('alert').innerHTML = '需要更多铜矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;}
}
function buyGoldPan(){
var value = document.getElementById('goldMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldMinerAmount = value;

var value = document.getElementById('goldPans').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldPanAmount = value;

if (goldMinerAmount > goldPanAmount) {

var value = document.getElementById('copperGoldPanCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperGoldPanCost = value;

var value = document.getElementById('ironGoldPanCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironGoldPanCost = value;

var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (copperAmount >= copperGoldPanCost && ironAmount >= ironGoldPanCost) {

value = copperAmount - copperGoldPanCost;
document.getElementById('copper').value = numberWithCommas(value);

value = ironAmount - ironGoldPanCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('goldPans').value -= -1;
document.getElementById('tools').value -= -1;

value = Math.round(copperGoldPanCost * 1.2);
document.getElementById('copperGoldPanCost').value = numberWithCommas(value);

value = Math.round(ironGoldPanCost * 1.2);
document.getElementById('ironGoldPanCost').value = numberWithCommas(value);
}}
else
{
document.getElementById('alert').innerHTML = '需要更多的金矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;}
}
function buyChisel(){
var value = document.getElementById('jewelers').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var jewelerAmount = value;

var value = document.getElementById('chisels').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var chiselAmount = value;

if (jewelerAmount > chiselAmount) {

var value = document.getElementById('diamondChiselCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondChiselCost = value;

var value = document.getElementById('ironChiselCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironChiselCost = value;

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (diamondAmount >= diamondChiselCost && ironAmount >= ironChiselCost) {
value = diamondAmount - diamondChiselCost;
document.getElementById('diamond').value = numberWithCommas(value);

value = ironAmount - ironChiselCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('chisels').value -= -1;
document.getElementById('tools').value -= -1;

value = Math.round(diamondChiselCost * 1.2);
document.getElementById('diamondChiselCost').value = numberWithCommas(value);

value = Math.round(ironChiselCost * 1.2);
document.getElementById('ironChiselCost').value = numberWithCommas(value);
}}
else
{
document.getElementById('alert').innerHTML = '需要更多的珠宝商！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;}
}