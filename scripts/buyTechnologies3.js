//
//Buy Technologies
//
function buySuperSaw(){
var value = document.getElementById('lumberjacks').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var lumberjackAmount = value;

var value = document.getElementById('superSaws').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var superSawAmount = value;

if (superSawAmount >= lumberjackAmount) {
document.getElementById('alert').innerHTML = '需要更多的伐木工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('diamondSuperSawCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondSuperSawCost = value;

var value = document.getElementById('goldSuperSawCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldSuperSawCost = value;

var value = document.getElementById('ironSuperSawCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironSuperSawCost = value;

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondAmount = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (diamondAmount >= diamondSuperSawCost && ironAmount >= ironSuperSawCost && goldAmount >= goldSuperSawCost) {
value = diamondAmount - diamondSuperSawCost;
document.getElementById('diamond').value = numberWithCommas(value);

value = ironAmount - ironSuperSawCost;
document.getElementById('iron').value = numberWithCommas(value);

value = goldAmount - goldSuperSawCost;
document.getElementById('gold').value = numberWithCommas(value);

document.getElementById('superSaws').value -= -1;
document.getElementById('technologies').value -= -1;

value = Math.round(diamondSuperSawCost * 1.2);
document.getElementById('diamondSuperSawCost').value = numberWithCommas(value);

value = Math.round(ironSuperSawCost * 1.2);
document.getElementById('ironSuperSawCost').value = numberWithCommas(value);

value = Math.round(goldSuperSawCost * 1.2);
document.getElementById('goldSuperSawCost').value = numberWithCommas(value);
}}
}
function buyOreReactor(){
var value = document.getElementById('ironMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironMinerAmount = value;

var value = document.getElementById('oreReactors').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var oreReactorAmount = value;

if (oreReactorAmount >= ironMinerAmount) {
document.getElementById('alert').innerHTML = '需要更多的铁矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('goldOreReactorCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldOreReactorCost = value;

var value = document.getElementById('copperOreReactorCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperOreReactorCost = value;

var value = document.getElementById('ironOreReactorCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironOreReactorCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (goldAmount >= goldOreReactorCost && ironAmount >= ironOreReactorCost && copperAmount >= copperOreReactorCost) {
value = goldAmount - goldOreReactorCost;
document.getElementById('gold').value = numberWithCommas(value);

value = ironAmount - ironOreReactorCost;
document.getElementById('iron').value = numberWithCommas(value);

value = copperAmount - copperOreReactorCost;
document.getElementById('copper').value = numberWithCommas(value);

document.getElementById('oreReactors').value -= -1;
document.getElementById('technologies').value -= -1;

value = Math.round(goldOreReactorCost * 1.2);
document.getElementById('goldOreReactorCost').value = numberWithCommas(value);

value = Math.round(ironOreReactorCost * 1.2);
document.getElementById('ironOreReactorCost').value = numberWithCommas(value);

value = Math.round(copperOreReactorCost * 1.2);
document.getElementById('copperOreReactorCost').value = numberWithCommas(value);
}}
}
function buyTesla()
{
var value = document.getElementById('copperMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperMinerAmount = value;

var value = document.getElementById('teslas').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var teslaAmount = value;

if (teslaAmount >= copperMinerAmount) {
document.getElementById('alert').innerHTML = '需要更多铜矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('goldTeslaCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldTeslaCost = value;

var value = document.getElementById('copperTeslaCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperTeslaCost = value;

var value = document.getElementById('ironTeslaCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironTeslaCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (goldAmount >= goldTeslaCost && copperAmount >= copperTeslaCost && ironAmount >= ironTeslaCost) {
value = goldAmount - goldTeslaCost;
document.getElementById('gold').value = numberWithCommas(value);

value = copperAmount - copperTeslaCost;
document.getElementById('copper').value = numberWithCommas(value);

value = ironAmount - ironTeslaCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('teslas').value -= -1;
document.getElementById('technologies').value -= -1;

value = Math.round(goldTeslaCost * 1.2);
document.getElementById('goldTeslaCost').value = numberWithCommas(value);

value = Math.round(copperTeslaCost * 1.2);
document.getElementById('copperTeslaCost').value = numberWithCommas(value);

value = Math.round(ironTeslaCost * 1.2);
document.getElementById('ironTeslaCost').value = numberWithCommas(value);
}}
}
function buyGoldFish()
{
var value = document.getElementById('goldMiners').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldMinerAmount = value;

var value = document.getElementById('goldFish').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldFishAmount = value;

if (goldFishAmount >= goldMinerAmount) {
document.getElementById('alert').innerHTML = '需要更多的金矿工！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('diamondGoldFishCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondGoldFishCost = value;

var value = document.getElementById('goldGoldFishCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldGoldFishCost = value;

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondAmount = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (diamondAmount >= diamondGoldFishCost && goldAmount >= goldGoldFishCost) {
value = diamondAmount - diamondGoldFishCost;
document.getElementById('diamond').value = numberWithCommas(value);

value = goldAmount - goldGoldFishCost;
document.getElementById('gold').value = numberWithCommas(value);

document.getElementById('goldFish').value -= -1;
document.getElementById('technologies').value -= -1;

value = Math.round(diamondGoldFishCost * 1.2);
document.getElementById('diamondGoldFishCost').value = numberWithCommas(value);

value = Math.round(goldGoldFishCost * 1.2);
document.getElementById('goldGoldFishCost').value = numberWithCommas(value);
}}
}
function buyMolecule()
{
var value = document.getElementById('jewelers').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var jewelerAmount = value;

var value = document.getElementById('molecules').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var moleculeAmount = value;

if (moleculeAmount >= jewelerAmount) {
document.getElementById('alert').innerHTML = '需要更多的珠宝商！';
document.getElementById('alert').style.display = 'block';
setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 3000);
return;} else
{
var value = document.getElementById('diamondMoleculeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondMoleculeCost = value;

var value = document.getElementById('copperMoleculeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperMoleculeCost = value;

var value = document.getElementById('ironMoleculeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironMoleculeCost = value;

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondAmount = value;

var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperAmount = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

if (diamondAmount >= diamondMoleculeCost && copperAmount >= copperMoleculeCost && ironAmount >= ironMoleculeCost) {
value = diamondAmount - diamondMoleculeCost;
document.getElementById('diamond').value = numberWithCommas(value);

value = copperAmount - copperMoleculeCost;
document.getElementById('copper').value = numberWithCommas(value);

value = ironAmount - ironMoleculeCost;
document.getElementById('iron').value = numberWithCommas(value);

document.getElementById('molecules').value -= -1;
document.getElementById('technologies').value -= -1;

value = Math.round(diamondMoleculeCost * 1.2);
document.getElementById('diamondMoleculeCost').value = numberWithCommas(value);

value = Math.round(copperMoleculeCost * 1.2);
document.getElementById('copperMoleculeCost').value = numberWithCommas(value);

value = Math.round(ironMoleculeCost * 1.2);
document.getElementById('ironMoleculeCost').value = numberWithCommas(value);

}}
}
function buyBridge()
{
var value = document.getElementById('goldBridgeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldBridgeCost = value;

var value = document.getElementById('woodBridgeCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodBridgeCost = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

if (goldAmount >= goldBridgeCost && woodAmount >= woodBridgeCost) {
value = goldAmount - goldBridgeCost;
document.getElementById('gold').value = numberWithCommas(value);

value = woodAmount - woodBridgeCost;
document.getElementById('wood').value = numberWithCommas(value);

document.getElementById('bridges').value -= -1;
document.getElementById('technologies').value -= -1;
document.getElementById('bridgeButton').style.display = "none";
document.getElementById('iframeButton2').style.display = "block";
}
}