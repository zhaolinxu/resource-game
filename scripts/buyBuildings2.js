//
//Buy Buildings
//
function buySawmill(){
var value = document.getElementById('lumberjacks').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var lumberjackAmount = value;

var value = document.getElementById('sawmills').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var sawmillAmount = value;

if (sawmillAmount >= lumberjackAmount) {
document.getElementById('alert').innerHTML = '需要更多的伐木工人！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{

var value = document.getElementById('woodSawmillCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodSawmillCost = value;

var value = document.getElementById('ironSawmillCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironSawmillCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodSawmillCost && ironAmount >= ironSawmillCost) {
value = woodAmount - woodSawmillCost;
document.getElementById('wood').value = numberWithCommas(value);

value = ironAmount - ironSawmillCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('sawmills').value -= -1;
document.getElementById('buildings').value -= -1;

value = Math.round(woodSawmillCost * 1.2);
document.getElementById('woodSawmillCost').value = numberWithCommas(value);

value = Math.round(ironSawmillCost * 1.2);
document.getElementById('ironSawmillCost').value = numberWithCommas(value);
}}
}
function buyBene(){
var value = document.getElementById('ironMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironMinerAmount = value;

var value = document.getElementById('benes').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var beneAmount = value;

if (beneAmount >= ironMinerAmount) {
document.getElementById('alert').innerHTML = '需要更多的铁矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('woodBeneCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodBeneCost = value;

var value = document.getElementById('ironBeneCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironBeneCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodBeneCost && ironAmount >= ironBeneCost) {
value = woodAmount - woodBeneCost;
document.getElementById('wood').value = numberWithCommas(value);

value = ironAmount - ironBeneCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('benes').value -= -1;
document.getElementById('buildings').value -= -1;

value = Math.round(woodBeneCost * 1.2);
document.getElementById('woodBeneCost').value = numberWithCommas(value);

value = Math.round(ironBeneCost * 1.2);
document.getElementById('ironBeneCost').value = numberWithCommas(value);
}}
}
function buyElectro()
{
var value = document.getElementById('copperMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperMinerAmount = value;

var value = document.getElementById('electros').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var electroAmount = value;

if (electroAmount >= copperMinerAmount) {
document.getElementById('alert').innerHTML = '需要更多铜矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('woodElectroCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodElectroCost = value;

var value = document.getElementById('copperElectroCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperElectroCost = value;

var value = document.getElementById('ironElectroCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironElectroCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodElectroCost && copperAmount >= copperElectroCost && ironAmount >= ironElectroCost) {
value = woodAmount - woodElectroCost;
document.getElementById('wood').value = numberWithCommas(value);

value = copperAmount - copperElectroCost;
document.getElementById('copper').value = numberWithCommas(value);

value = ironAmount - ironElectroCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('electros').value -= -1;
document.getElementById('buildings').value -= -1;

value = Math.round(woodElectroCost * 1.2);
document.getElementById('woodElectroCost').value = numberWithCommas(value);

value = Math.round(copperElectroCost * 1.2);
document.getElementById('copperElectroCost').value = numberWithCommas(value);

value = Math.round(ironElectroCost * 1.2);
document.getElementById('ironElectroCost').value = numberWithCommas(value);
}}
}
function buySmeltery()
{
var value = document.getElementById('goldMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldMinerAmount = value;

var value = document.getElementById('smelteries').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var smelteryAmount = value;

if (smelteryAmount >= goldMinerAmount) {
document.getElementById('alert').innerHTML = '需要更多的金矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('woodSmelteryCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodSmelteryCost = value;

var value = document.getElementById('ironSmelteryCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironSmelteryCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodSmelteryCost && ironAmount >= ironSmelteryCost) {
value = woodAmount - woodSmelteryCost;
document.getElementById('wood').value = numberWithCommas(value);

value = ironAmount - ironSmelteryCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('smelteries').value -= -1;
document.getElementById('buildings').value -= -1;

value = Math.round(woodSmelteryCost * 1.2);
document.getElementById('woodSmelteryCost').value = numberWithCommas(value);

value = Math.round(ironSmelteryCost * 1.2);
document.getElementById('ironSmelteryCost').value = numberWithCommas(value);
}}
}
function buyGemStation()
{
var value = document.getElementById('jewelers').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var jewelerAmount = value;

var value = document.getElementById('gemStations').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var gemStationAmount = value;

if (gemStationAmount >= jewelerAmount) {
document.getElementById('alert').innerHTML = '需要更多的珠宝商！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{

var value = document.getElementById('diamondGemStationCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondGemStationCost = value;

var value = document.getElementById('woodGemStationCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodGemStationCost = value;

var value = document.getElementById('ironGemStationCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironGemStationCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (woodAmount >= woodGemStationCost && diamondAmount >= diamondGemStationCost && ironAmount >= ironGemStationCost) {
value = woodAmount - woodGemStationCost;
document.getElementById('wood').value = numberWithCommas(value);

value = diamondAmount - diamondGemStationCost;
document.getElementById('diamond').value = numberWithCommas(value);

value = ironAmount - ironGemStationCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('gemStations').value -= -1;
document.getElementById('buildings').value -= -1;
document.getElementById('woodGemStationCost').value = Math.round(woodGemStationCost * 1.2);
document.getElementById('diamondGemStationCost').value = Math.round(diamondGemStationCost * 1.2);
document.getElementById('ironGemStationCost').value = Math.round(ironGemStationCost * 1.2);

value = Math.round(woodGemStationCost * 1.2);
document.getElementById('woodGemStationCost').value = numberWithCommas(value);

value = Math.round(diamondGemStationCost * 1.2);
document.getElementById('diamondGemStationCost').value = numberWithCommas(value);

value = Math.round(ironGemStationCost * 1.2);
document.getElementById('ironGemStationCost').value = numberWithCommas(value);
}}
}