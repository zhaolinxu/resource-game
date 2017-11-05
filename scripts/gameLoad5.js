//
//Load Game
//
function gameLoad()
{

if (typeof localStorage["fancyGraphics"] === 'undefined')
{
document.getElementById("graphics").setAttribute('checked','checked');
}

if (typeof localStorage["textEffects"] === 'undefined')
{
document.getElementById("effects").setAttribute('checked','checked');
}

if (typeof localStorage["savedGame"] === 'undefined')
{return;}
else
{



if (localStorage["fancyGraphics"] == 'true')
{
document.getElementById("graphics").checked = true;
}
if (localStorage["fancyGraphics"] == 'false')
{
document.getElementById("graphics").checked = false;
}

if (localStorage["textEffects"] == 'true')
{
document.getElementById("effects").checked = true;
}
if (localStorage["textEffects"] == 'false')
{
document.getElementById("effects").checked = false;
}

//
//Check Settings
//
fancyGraphics();

document.getElementById('wood').value = localStorage["wood"];
document.getElementById('iron').value = localStorage["iron"];
document.getElementById('copper').value = localStorage["copper"];
document.getElementById('gold').value = localStorage["gold"];
document.getElementById('diamond').value = localStorage["diamond"];
//

//
document.getElementById('workers').value = localStorage["workers"];
document.getElementById('lumberjacks').value = localStorage["lumberjacks"];
document.getElementById('lumberjackCost').value = localStorage["lumberjackCost"];
//
document.getElementById('ironMiners').value = localStorage["ironMiners"];
document.getElementById('ironMinerCost').value = localStorage["ironMinerCost"];
//
document.getElementById('copperMiners').value = localStorage["copperMiners"];
document.getElementById('copperMinerCost').value = localStorage["copperMinerCost"];
//
document.getElementById('goldMiners').value = localStorage["goldMiners"];
document.getElementById('goldMinerCost').value = localStorage["goldMinerCost"];
//
document.getElementById('jewelers').value = localStorage["jewelers"];
document.getElementById('jewelerCost').value = localStorage["jewelerCost"];
//
//
document.getElementById('tools').value = localStorage["tools"];
document.getElementById('axes').value = localStorage["axes"];
document.getElementById('woodAxeCost').value = localStorage["woodAxeCost"];
document.getElementById('ironAxeCost').value = localStorage["ironAxeCost"];
//
//
document.getElementById('steelPickaxes').value = localStorage["steelPickaxes"];
document.getElementById('woodSteelPickaxeCost').value = localStorage["woodSteelPickaxeCost"];
document.getElementById('ironSteelPickaxeCost').value = localStorage["ironSteelPickaxeCost"];
//
//
document.getElementById('coldHammers').value = localStorage["coldHammers"];
document.getElementById('woodColdHammerCost').value = localStorage["woodColdHammerCost"];
document.getElementById('ironColdHammerCost').value = localStorage["ironColdHammerCost"];
//
//
document.getElementById('goldPans').value = localStorage["goldPans"];
document.getElementById('copperGoldPanCost').value = localStorage["copperGoldPanCost"];
document.getElementById('ironGoldPanCost').value = localStorage["ironGoldPanCost"];
//
document.getElementById('chisels').value = localStorage["chisels"];
document.getElementById('ironChiselCost').value = localStorage["ironChiselCost"];
document.getElementById('diamondChiselCost').value = localStorage["diamondChiselCost"];
//
document.getElementById('buildings').value = localStorage["buildings"];
document.getElementById('sawmills').value = localStorage["sawmills"];
document.getElementById('woodSawmillCost').value = localStorage["woodSawmillCost"];
document.getElementById('ironSawmillCost').value = localStorage["ironSawmillCost"];
//
document.getElementById('benes').value = localStorage["benes"];
document.getElementById('woodBeneCost').value = localStorage["woodBeneCost"];
document.getElementById('ironBeneCost').value = localStorage["ironBeneCost"];
//
document.getElementById('electros').value = localStorage["electros"];
document.getElementById('woodElectroCost').value = localStorage["woodElectroCost"];
document.getElementById('copperElectroCost').value = localStorage["copperElectroCost"];
document.getElementById('ironElectroCost').value = localStorage["ironElectroCost"];
//
document.getElementById('smelteries').value = localStorage["smelteries"];
document.getElementById('woodSmelteryCost').value = localStorage["woodSmelteryCost"];
document.getElementById('ironSmelteryCost').value = localStorage["ironSmelteryCost"];
//
document.getElementById('gemStations').value = localStorage["gemStations"];
document.getElementById('woodGemStationCost').value = localStorage["woodGemStationCost"];
document.getElementById('ironGemStationCost').value = localStorage["ironGemStationCost"];
document.getElementById('diamondGemStationCost').value = localStorage["diamondGemStationCost"];
//
//
document.getElementById('technologies').value = localStorage["technologies"];
//
document.getElementById('superSaws').value = localStorage["superSaws"];
document.getElementById('diamondSuperSawCost').value = localStorage["diamondSuperSawCost"];
document.getElementById('goldSuperSawCost').value = localStorage["goldSuperSawCost"];
document.getElementById('ironSuperSawCost').value = localStorage["ironSuperSawCost"];
//
document.getElementById('oreReactors').value = localStorage["oreReactors"];
document.getElementById('goldOreReactorCost').value = localStorage["goldOreReactorCost"];
document.getElementById('copperOreReactorCost').value = localStorage["copperOreReactorCost"];
document.getElementById('ironOreReactorCost').value = localStorage["ironOreReactorCost"];
//
document.getElementById('teslas').value = localStorage["teslas"];
document.getElementById('goldTeslaCost').value = localStorage["goldTeslaCost"];
document.getElementById('copperTeslaCost').value = localStorage["copperTeslaCost"];
document.getElementById('ironTeslaCost').value = localStorage["ironTeslaCost"];
//
document.getElementById('goldFish').value = localStorage["goldFish"];
document.getElementById('goldGoldFishCost').value = localStorage["goldGoldFishCost"];
document.getElementById('diamondGoldFishCost').value = localStorage["diamondGoldFishCost"];
//
document.getElementById('molecules').value = localStorage["molecules"];
document.getElementById('diamondMoleculeCost').value = localStorage["diamondMoleculeCost"];
document.getElementById('copperMoleculeCost').value = localStorage["copperMoleculeCost"];
document.getElementById('ironMoleculeCost').value = localStorage["ironMoleculeCost"];
//
if (typeof localStorage["benitoite"] === 'undefined')
{
document.getElementById('benitoite').value = 0;
document.getElementById('blackOpal').value = 0;
document.getElementById('emerald').value = 0;
document.getElementById('painite').value = 0;
document.getElementById('redDiamond').value = 0;
}
else
{
document.getElementById('benitoite').value = localStorage["benitoite"];
document.getElementById('blackOpal').value = localStorage["blackOpal"];
document.getElementById('emerald').value = localStorage["emerald"];
document.getElementById('painite').value = localStorage["painite"];
document.getElementById('redDiamond').value = localStorage["redDiamond"];
}
//
if (typeof localStorage["powerups"] === 'undefined')
{
document.getElementById('woodPowerups').value = 0;
document.getElementById('ironPowerups').value = 0;
document.getElementById('copperPowerups').value = 0;
document.getElementById('goldPowerups').value = 0;
document.getElementById('diamondPowerups').value = 0;
}
else
{
document.getElementById('powerups').value = localStorage["powerups"];
document.getElementById('woodPowerups').value = localStorage["woodPowerups"];
document.getElementById('ironPowerups').value = localStorage["ironPowerups"];
document.getElementById('copperPowerups').value = localStorage["copperPowerups"];
document.getElementById('goldPowerups').value = localStorage["goldPowerups"];
document.getElementById('diamondPowerups').value = localStorage["diamondPowerups"];
}
//
document.getElementById('bridges').value = localStorage["bridges"];
document.getElementById('goldBridgeCost').value = localStorage["goldBridgeCost"];
document.getElementById('woodBridgeCost').value = localStorage["woodBridgeCost"];
if(document.getElementById('bridges').value == '1'){
document.getElementById('bridgeButton').style.display = "none";
document.getElementById('iframeButton').style.display = "block";
document.getElementById('iframeButton2').style.display = "block";
}
//
document.getElementById('tradeWoodCost').value = localStorage["tradeWoodCost"];
document.getElementById('tradeWoodGoldCost').value = localStorage["tradeWoodGoldCost"];
document.getElementById('tradeIronCost').value = localStorage["tradeIronCost"];
document.getElementById('tradeIronGoldCost').value = localStorage["tradeIronGoldCost"];
document.getElementById('tradeCopperCost').value = localStorage["tradeCopperCost"];
document.getElementById('tradeCopperGoldCost').value = localStorage["tradeCopperGoldCost"];
document.getElementById('tradeDiamondCost').value = localStorage["tradeDiamondCost"];
document.getElementById('tradeDiamondGoldCost').value = localStorage["tradeDiamondGoldCost"];
document.getElementById('tradeGoldCost').value = localStorage["tradeGoldCost"];
document.getElementById('tradeGoldDiamondCost').value = localStorage["tradeGoldDiamondCost"];
}
}