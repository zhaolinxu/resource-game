//
//Buy Powerups
//
function buyWoodPowerup(){

var value = document.getElementById('woodPowerupCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var woodPowerupCost = value;

var value = document.getElementById('benitoite').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var benitoiteAmount = value;

if (benitoiteAmount >= woodPowerupCost) 
{
value = benitoiteAmount - woodPowerupCost;
document.getElementById('benitoite').value = numberWithCommas(value);

document.getElementById('woodPowerups').value -= -1;
document.getElementById('powerups').value -= -1;
}
}
function buyIronPowerup(){

var value = document.getElementById('ironPowerupCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var ironPowerupCost = value;

var value = document.getElementById('blackOpal').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var blackOpalAmount = value;

if (blackOpalAmount >= ironPowerupCost) 
{
value = blackOpalAmount - ironPowerupCost;
document.getElementById('blackOpal').value = numberWithCommas(value);

document.getElementById('ironPowerups').value -= -1;
document.getElementById('powerups').value -= -1;
}
}
function buyCopperPowerup(){

var value = document.getElementById('copperPowerupCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var copperPowerupCost = value;

var value = document.getElementById('emerald').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var emeraldAmount = value;

if (emeraldAmount >= copperPowerupCost) 
{
value = emeraldAmount - copperPowerupCost;
document.getElementById('emerald').value = numberWithCommas(value);

document.getElementById('copperPowerups').value -= -1;
document.getElementById('powerups').value -= -1;
}
}
function buyGoldPowerup(){

var value = document.getElementById('goldPowerupCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldPowerupCost = value;

var value = document.getElementById('painite').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var painiteAmount = value;

if (painiteAmount >= goldPowerupCost) 
{
value = painiteAmount - goldPowerupCost;
document.getElementById('painite').value = numberWithCommas(value);

document.getElementById('goldPowerups').value -= -1;
document.getElementById('powerups').value -= -1;
}
}
function buyDiamondPowerup(){

var value = document.getElementById('diamondPowerupCost').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var diamondPowerupCost = value;

var value = document.getElementById('redDiamond').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var redDiamondAmount = value;

if (redDiamondAmount >= diamondPowerupCost) 
{
value = redDiamondAmount - diamondPowerupCost;
document.getElementById('redDiamond').value = numberWithCommas(value);

document.getElementById('diamondPowerups').value -= -1;
document.getElementById('powerups').value -= -1;
}
}