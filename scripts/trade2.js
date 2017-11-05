//
//Trade
//
function tradeWood(){

var value = document.getElementById('tradeWoodCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeWoodCost = value;

var value = document.getElementById('tradeWoodGoldCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeWoodGoldCost = value;

var value = document.getElementById('wood').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodAmount = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (woodAmount >= tradeWoodCost) {

value = woodAmount - tradeWoodCost;
document.getElementById('wood').value = numberWithCommas(value);

value = goldAmount - -tradeWoodGoldCost;
document.getElementById('gold').value = numberWithCommas(value);

value = Math.round(tradeWoodCost * 1.2);
document.getElementById('tradeWoodCost').value = numberWithCommas(value);

value = Math.round(tradeWoodGoldCost * 1.2);
document.getElementById('tradeWoodGoldCost').value = numberWithCommas(value);
}
}
function tradeIron(){

var value = document.getElementById('tradeIronCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeIronCost = value;

var value = document.getElementById('tradeIronGoldCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeIronGoldCost = value;

var value = document.getElementById('iron').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironAmount = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (ironAmount >= tradeIronCost) {
value = ironAmount - tradeIronCost;
document.getElementById('iron').value = numberWithCommas(value);

value = goldAmount - -tradeIronGoldCost;
document.getElementById('gold').value = numberWithCommas(value);

value = Math.round(tradeIronCost * 1.2);
document.getElementById('tradeIronCost').value = numberWithCommas(value);

value = Math.round(tradeIronGoldCost * 1.2);
document.getElementById('tradeIronGoldCost').value = numberWithCommas(value);
}
}
function tradeCopper(){

var value = document.getElementById('tradeCopperCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeCopperCost = value;

var value = document.getElementById('tradeCopperGoldCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeCopperGoldCost = value;

var value = document.getElementById('copper').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperAmount = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (copperAmount >= tradeCopperCost) {

value = copperAmount - tradeCopperCost;
document.getElementById('copper').value = numberWithCommas(value);

value = goldAmount - -tradeCopperGoldCost;
document.getElementById('gold').value = numberWithCommas(value);

value = Math.round(tradeCopperCost * 1.2);
document.getElementById('tradeCopperCost').value = numberWithCommas(value);

value = Math.round(tradeCopperGoldCost * 1.2);
document.getElementById('tradeCopperGoldCost').value = numberWithCommas(value);
}
}
function tradeDiamond(){

var value = document.getElementById('tradeDiamondCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeDiamondCost = value;

var value = document.getElementById('tradeDiamondGoldCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeDiamondGoldCost = value;

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondAmount = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (diamondAmount >= tradeDiamondCost) {

value = diamondAmount - tradeDiamondCost;
document.getElementById('diamond').value = numberWithCommas(value);

value = goldAmount - -tradeDiamondGoldCost;
document.getElementById('gold').value = numberWithCommas(value);

value = Math.round(tradeDiamondCost * 1.2);
document.getElementById('tradeDiamondCost').value = numberWithCommas(value);

value = Math.round(tradeDiamondGoldCost * 1.2);
document.getElementById('tradeDiamondGoldCost').value = numberWithCommas(value);
}
}
function tradeGold(){

var value = document.getElementById('tradeGoldCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeGoldCost = value;

var value = document.getElementById('tradeGoldDiamondCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var tradeGoldDiamondCost = value;

var value = document.getElementById('diamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondAmount = value;

var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (goldAmount >= tradeGoldCost) {

value = goldAmount - tradeGoldCost;
document.getElementById('gold').value = numberWithCommas(value);

value = diamondAmount - -tradeGoldDiamondCost;
document.getElementById('diamond').value = numberWithCommas(value);

value = Math.round(tradeGoldCost * 1.2);
document.getElementById('tradeGoldCost').value = numberWithCommas(value);

value = Math.round(tradeGoldDiamondCost * 1.2);
document.getElementById('tradeGoldDiamondCost').value = numberWithCommas(value);
}
}