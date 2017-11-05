//
//Boss Man, Hire a worker
//
function objective1()
{
var objective1 = parseInt(document.getElementById('objective1').value, 10);
if (objective1 == 1)
{return;}
else
{
var lumberjackAmount = parseInt(document.getElementById('lumberjacks').value, 10);
var ironMinerAmount = parseInt(document.getElementById('ironMiners').value, 10);
var copperMinerAmount = parseInt(document.getElementById('copperMiners').value, 10);
var goldMinerAmount = parseInt(document.getElementById('goldMiners').value, 10);
var jewelerAmount = parseInt(document.getElementById('jewelers').value, 10);
if (lumberjackAmount || ironMinerAmount || copperMinerAmount || goldMinerAmount || jewelerAmount > 0)
{
document.getElementById('objective1').src = "images/checkmark.png";
document.getElementById('objective1').value = 1;
document.getElementById('objective1_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//How Handy?, Purchase one tool.
//
function objective2()
{
var objective2 = parseInt(document.getElementById('objective2').value, 10);
if (objective2 == 1)
{return;}
else
{
var axeAmount = parseInt(document.getElementById('axes').value, 10);
var steelPickaxeAmount = parseInt(document.getElementById('steelPickaxes').value, 10);
var coldHammerAmount = parseInt(document.getElementById('coldHammers').value, 10);
var goldPanAmount = parseInt(document.getElementById('goldPans').value, 10);
var chiselAmount = parseInt(document.getElementById('chisels').value, 10);
if (axeAmount || steelPickaxeAmount || coldHammerAmount || goldPanAmount || chiselAmount > 0)
{
document.getElementById('objective2').src = "images/checkmark.png";
document.getElementById('objective2').value = 1;
document.getElementById('objective2_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Employer, Have at least 5 workers
//
function objective3()
{
var objective3 = parseInt(document.getElementById('objective3').value, 10);
if (objective3 == 1)
{return;}
else
{
var lumberjackAmount = parseInt(document.getElementById('lumberjacks').value, 10);var ironMinerAmount = parseInt(document.getElementById('ironMiners').value, 10);
var copperMinerAmount = parseInt(document.getElementById('copperMiners').value, 10);
var goldMinerAmount = parseInt(document.getElementById('goldMiners').value, 10);
var jewelerAmount = parseInt(document.getElementById('jewelers').value, 10);
if (lumberjackAmount + ironMinerAmount + copperMinerAmount + goldMinerAmount + jewelerAmount >= 5)
{
document.getElementById('objective3').src = "images/checkmark.png";
document.getElementById('objective3').value = 1;
document.getElementById('objective3_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//In the Toolshed, Purchase 5 Tools
//
function objective4()
{
var objective4 = parseInt(document.getElementById('objective4').value, 10);
if (objective4 == 1)
{return;}
else
{
var axeAmount = parseInt(document.getElementById('axes').value, 10);
var steelPickaxeAmount = parseInt(document.getElementById('steelPickaxes').value, 10);
var coldHammerAmount = parseInt(document.getElementById('coldHammers').value, 10);
var goldPanAmount = parseInt(document.getElementById('goldPans').value, 10);
var chiselAmount = parseInt(document.getElementById('chisels').value, 10);
if (axeAmount + steelPickaxeAmount + coldHammerAmount + goldPanAmount + chiselAmount >= 5)
{
document.getElementById('objective4').src = "images/checkmark.png";
document.getElementById('objective4').value = 1;
document.getElementById('objective4_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Crew, Have 10 Workers
//
function objective5()
{
var objective5 = parseInt(document.getElementById('objective5').value, 10);
if (objective5 == 1)
{return;}
else
{
var lumberjackAmount = parseInt(document.getElementById('lumberjacks').value, 10);
var ironMinerAmount = parseInt(document.getElementById('ironMiners').value, 10);var copperMinerAmount = parseInt(document.getElementById('copperMiners').value, 10);
var goldMinerAmount = parseInt(document.getElementById('goldMiners').value, 10);
var jewelerAmount = parseInt(document.getElementById('jewelers').value, 10);
if (lumberjackAmount + ironMinerAmount + copperMinerAmount + goldMinerAmount + jewelerAmount >= 10)
{
document.getElementById('objective5').src = "images/checkmark.png";
document.getElementById('objective5').value = 1;
document.getElementById('objective5_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Lumberjacks Unite, Have 10 Lumberjacks
//
function objective6()
{
var objective6 = parseInt(document.getElementById('objective6').value, 10);
if (objective6 == 1)
{return;}
else
{
var lumberjackAmount = parseInt(document.getElementById('lumberjacks').value, 10);
if (lumberjackAmount >= 10)
{
document.getElementById('objective6').src = "images/checkmark.png";
document.getElementById('objective6').value = 1;
document.getElementById('objective6_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Iron Board, Have 10 Iron Miners
//
function objective7()
{
var objective7 = parseInt(document.getElementById('objective7').value, 10);
if (objective7 == 1)
{return;}
else
{
var ironMinerAmount = parseInt(document.getElementById('ironMiners').value, 10);
if (ironMinerAmount >= 10)
{
document.getElementById('objective7').src = "images/checkmark.png";
document.getElementById('objective7').value = 1;
document.getElementById('objective7_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Copper Hopper, Have 10 Copper Miners
//
function objective8()
{
var objective8 = parseInt(document.getElementById('objective8').value, 10);
if (objective8 == 1)
{return;}
else
{
var copperMinerAmount = parseInt(document.getElementById('copperMiners').value, 10);
if (copperMinerAmount >= 10)
{
document.getElementById('objective8').src = "images/checkmark.png";
document.getElementById('objective8').value = 1;
document.getElementById('objective8_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//The Golderers, Have 10 Gold Miners
//
function objective9()
{
var objective9 = parseInt(document.getElementById('objective9').value, 10);
if (objective9 == 1)
{return;}
else
{
var goldMinerAmount = parseInt(document.getElementById('goldMiners').value, 10);
if (goldMinerAmount >= 10)
{
document.getElementById('objective9').src = "images/checkmark.png";
document.getElementById('objective9').value = 1;
document.getElementById('objective9_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Diamond Time, Have 1 Jeweler
//
function objective10()
{
var objective10 = parseInt(document.getElementById('objective10').value, 10);
if (objective10 == 1)
{return;}
else
{
var jewelerAmount = parseInt(document.getElementById('jewelers').value, 10);
if (jewelerAmount >= 1)
{
document.getElementById('objective10').src = "images/checkmark.png";
document.getElementById('objective10').value = 1;
document.getElementById('objective10_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Entrepreneur, Have 1 Building
//
function objective11()
{
var objective11 = parseInt(document.getElementById('objective11').value, 10);
if (objective11 == 1)
{return;}
else
{
var sawmillAmount = parseInt(document.getElementById('sawmills').value, 10);
var beneAmount = parseInt(document.getElementById('benes').value, 10);
var electroAmount = parseInt(document.getElementById('electros').value, 10);
var smelteryAmount = parseInt(document.getElementById('smelteries').value, 10);
var gemStationAmount = parseInt(document.getElementById('gemStations').value, 10);
if (sawmillAmount || beneAmount || electroAmount || smelteryAmount || gemStationAmount > 1)
{
document.getElementById('objective11').src = "images/checkmark.png";
document.getElementById('objective11').value = 1;
document.getElementById('objective11_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//No. Way, Get 1 Diamond
//
function objective12()
{
var objective12 = parseInt(document.getElementById('objective12').value, 10);
if (objective12 == 1)
{return;}
else
{
var diamondAmount = parseInt(document.getElementById('diamond').value, 10);
if (diamondAmount > 0)
{
document.getElementById('objective12').src = "images/checkmark.png";
document.getElementById('objective12').value = 1;
document.getElementById('objective12_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Company, Purchase 50 workers
//
function objective13()
{
var objective13 = parseInt(document.getElementById('objective13').value, 10);
if (objective13 == 1)
{return;}
else
{
var workers = parseInt(document.getElementById('workers').value, 10);
if (workers >= 50)
{
document.getElementById('objective13').src = "images/checkmark.png";
document.getElementById('objective13').value = 1;
document.getElementById('objective13_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Nuts and Bolts, Purchase 50 Tools
//
function objective14()
{
var objective14 = parseInt(document.getElementById('objective14').value, 10);
if (objective14 == 1)
{return;}
else
{
var tools = parseInt(document.getElementById('tools').value, 10);
if (tools >= 50)
{
document.getElementById('objective14').src = "images/checkmark.png";
document.getElementById('objective14').value = 1;
document.getElementById('objective14_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Franchise, Purchase 5 Buildings
//
function objective15()
{
var objective15 = parseInt(document.getElementById('objective15').value, 10);
if (objective15 == 1)
{return;}
else
{
var buildings = parseInt(document.getElementById('buildings').value, 10);
if (buildings >= 5)
{
document.getElementById('objective15').src = "images/checkmark.png";
document.getElementById('objective15').value = 1;
document.getElementById('objective15_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//The Machines, Purchase 1 technology
//
function objective16()
{
var objective16 = parseInt(document.getElementById('objective16').value, 10);
if (objective16 == 1)
{return;}
else
{
var technologies = parseInt(document.getElementById('technologies').value, 10);
if (technologies > 0)
{
document.getElementById('objective16').src = "images/checkmark.png";
document.getElementById('objective16').value = 1;
document.getElementById('objective16_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Super Saver, Have 1000 Gold
//
function objective17()
{
var objective17 = parseInt(document.getElementById('objective17').value, 10);
if (objective17 == 1)
{return;}
else
{
var value = document.getElementById('gold').value;
var value = value.replace(/,/g, '');
var value = parseInt(value, 10);
var goldAmount = value;

if (goldAmount >= 1000)
{
document.getElementById('objective17').src = "images/checkmark.png";
document.getElementById('objective17').value = 1;
document.getElementById('objective17_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Conglomerate, Purchase 100 Workers
//
function objective18()
{
var objective18 = parseInt(document.getElementById('objective18').value, 10);
if (objective18 == 1)
{return;}
else
{
var workers = parseInt(document.getElementById('workers').value, 10);
if (workers >= 100)
{
document.getElementById('objective18').src = "images/checkmark.png";
document.getElementById('objective18').value = 1;
document.getElementById('objective18_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//International, Purchase 50 of Everything
//
function objective19()
{
var objective19 = parseInt(document.getElementById('objective19').value, 10);
if (objective19 == 1)
{return;}
else
{
var workers = parseInt(document.getElementById('workers').value, 10);
var tools = parseInt(document.getElementById('tools').value, 10);
var buildings = parseInt(document.getElementById('buildings').value, 10);
var technologies = parseInt(document.getElementById('technologies').value, 10);
if (workers >= 50 && tools >= 50 && buildings >= 50 && technologies >= 50)
{
document.getElementById('objective19').src = "images/checkmark.png";
document.getElementById('objective19').value = 1;
document.getElementById('objective19_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//World Domination, Purchase 100 of Everything
//
function objective20()
{
var objective20 = parseInt(document.getElementById('objective20').value, 10);
if (objective20 == 1)
{return;}
else
{
var workers = parseInt(document.getElementById('workers').value, 10);
var tools = parseInt(document.getElementById('tools').value, 10);
var buildings = parseInt(document.getElementById('buildings').value, 10);
var technologies = parseInt(document.getElementById('technologies').value, 10);
if (workers >= 100 && tools >= 100 && buildings >= 100 && technologies >= 100)
{
document.getElementById('objective20').src = "images/checkmark.png";
document.getElementById('objective20').value = 1;
document.getElementById('objective20_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Down to Earth, Space Bridge
//
function objective21()
{
var objective21 = parseInt(document.getElementById('objective21').value, 10);
if (objective21 == 1)
{return;}
else
{
var bridges = parseInt(document.getElementById('bridges').value, 10);
if (bridges > 0)
{
document.getElementById('objective21').src = "images/checkmark.png";
document.getElementById('objective21').value = 1;
document.getElementById('objective21_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Find a Rare Gem
//
function objective22()
{
var objective22 = parseInt(document.getElementById('objective22').value, 10);
if (objective22 == 1)
{return;}
else
{
var benitoite = parseInt(document.getElementById('benitoite').value, 10);
var blackOpal = parseInt(document.getElementById('blackOpal').value, 10);
var emerald = parseInt(document.getElementById('emerald').value, 10);
var painite = parseInt(document.getElementById('painite').value, 10);
var redDiamond = parseInt(document.getElementById('redDiamond').value, 10);
if (benitoite + blackOpal + emerald + painite + redDiamond > 0)
{
document.getElementById('objective22').src = "images/checkmark.png";
document.getElementById('objective22').value = 1;
document.getElementById('objective22_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Purchase one of each powerup
//
function objective23()
{
var objective23 = parseInt(document.getElementById('objective23').value, 10);
if (objective23 == 1)
{return;}
else
{
var woodPowerups = parseInt(document.getElementById('woodPowerups').value, 10);
var ironPowerups = parseInt(document.getElementById('ironPowerups').value, 10);
var copperPowerups = parseInt(document.getElementById('copperPowerups').value, 10);
var goldPowerups = parseInt(document.getElementById('goldPowerups').value, 10);
var diamondPowerups = parseInt(document.getElementById('diamondPowerups').value, 10);
if (woodPowerups > 0 && ironPowerups > 0 && copperPowerups > 0 && goldPowerups > 0 && diamondPowerups > 0)
{
document.getElementById('objective23').src = "images/checkmark.png";
document.getElementById('objective23').value = 1;
document.getElementById('objective23_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Purchase 200 Technologies
//
function objective24()
{
var objective24 = parseInt(document.getElementById('objective24').value, 10);
if (objective24 == 1)
{return;}
else
{
var technologies = parseInt(document.getElementById('technologies').value, 10);
if (technologies >= 200)
{
document.getElementById('objective24').src = "images/checkmark.png";
document.getElementById('objective24').value = 1;
document.getElementById('objective24_style').style.opacity = 0.5;
}
else
{return;}
}
}
//
//Purchase 20 Powerups
//
function objective25()
{
var objective25 = parseInt(document.getElementById('objective25').value, 10);
if (objective25 == 1)
{return;}
else
{
var powerups = parseInt(document.getElementById('powerups').value, 10);
if (powerups >= 20)
{
document.getElementById('objective25').src = "images/checkmark.png";
document.getElementById('objective25').value = 1;
document.getElementById('objective25_style').style.opacity = 0.5;
}
else
{return;}
}
}