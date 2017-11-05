function saveGame()
{
localStorage["savedGame"] = 1;
localStorage["fancyGraphics"] = document.getElementById("graphics").checked;
localStorage["textEffects"] = document.getElementById("effects").checked;

//
localStorage["wood"] = document.getElementById('wood').value;
localStorage["iron"] = document.getElementById('iron').value;
localStorage["copper"] = document.getElementById('copper').value;
localStorage["gold"] = document.getElementById('gold').value;
localStorage["diamond"] = document.getElementById('diamond').value;
//
localStorage["benitoite"] = document.getElementById('benitoite').value;
localStorage["blackOpal"] = document.getElementById('blackOpal').value;
localStorage["emerald"] = document.getElementById('emerald').value;
localStorage["painite"] = document.getElementById('painite').value;
localStorage["redDiamond"] = document.getElementById('redDiamond').value;
//
localStorage["workers"] = document.getElementById('workers').value;
localStorage["lumberjacks"] = document.getElementById('lumberjacks').value;
localStorage["lumberjackCost"] = document.getElementById('lumberjackCost').value;
//
localStorage["ironMiners"] = document.getElementById('ironMiners').value;
localStorage["ironMinerCost"] = document.getElementById('ironMinerCost').value;
//
localStorage["copperMiners"] = document.getElementById('copperMiners').value;
localStorage["copperMinerCost"] = document.getElementById('copperMinerCost').value;
//
localStorage["goldMiners"] = document.getElementById('goldMiners').value;
localStorage["goldMinerCost"] = document.getElementById('goldMinerCost').value;
//
localStorage["jewelers"] = document.getElementById('jewelers').value;
localStorage["jewelerCost"] = document.getElementById('jewelerCost').value;
//
localStorage["tools"] = document.getElementById('tools').value;
localStorage["axes"] = document.getElementById('axes').value;
localStorage["woodAxeCost"] = document.getElementById('woodAxeCost').value;
localStorage["ironAxeCost"] = document.getElementById('ironAxeCost').value;
//
localStorage["steelPickaxes"] = document.getElementById('steelPickaxes').value;
localStorage["woodSteelPickaxeCost"] = document.getElementById('woodSteelPickaxeCost').value;
localStorage["ironSteelPickaxeCost"] = document.getElementById('ironSteelPickaxeCost').value;
//
localStorage["coldHammers"] = document.getElementById('coldHammers').value;
localStorage["woodColdHammerCost"] = document.getElementById('woodColdHammerCost').value;
localStorage["ironColdHammerCost"] = document.getElementById('ironColdHammerCost').value;
//
localStorage["goldPans"] = document.getElementById('goldPans').value;
localStorage["copperGoldPanCost"] = document.getElementById('copperGoldPanCost').value;
localStorage["ironGoldPanCost"] = document.getElementById('ironGoldPanCost').value;
//
localStorage["chisels"] = document.getElementById('chisels').value;
localStorage["diamondChiselCost"] = document.getElementById('diamondChiselCost').value;
localStorage["ironChiselCost"] = document.getElementById('ironChiselCost').value;
//
//
localStorage["buildings"] = document.getElementById('buildings').value;
localStorage["sawmills"] = document.getElementById('sawmills').value;
localStorage["woodSawmillCost"] = document.getElementById('woodSawmillCost').value;
localStorage["ironSawmillCost"] = document.getElementById('ironSawmillCost').value;
//
localStorage["benes"] = document.getElementById('benes').value;
localStorage["woodBeneCost"] = document.getElementById('woodBeneCost').value;
localStorage["ironBeneCost"] = document.getElementById('ironBeneCost').value;
//
localStorage["electros"] = document.getElementById('electros').value;
localStorage["woodElectroCost"] = document.getElementById('woodElectroCost').value;
localStorage["ironElectroCost"] = document.getElementById('ironElectroCost').value;
localStorage["copperElectroCost"] = document.getElementById('copperElectroCost').value;
//
localStorage["smelteries"] = document.getElementById('smelteries').value;
localStorage["woodSmelteryCost"] = document.getElementById('woodSmelteryCost').value;
localStorage["ironSmelteryCost"] = document.getElementById('ironSmelteryCost').value;
//
localStorage["gemStations"] = document.getElementById('gemStations').value;
localStorage["woodGemStationCost"] = document.getElementById('woodGemStationCost').value;
localStorage["ironGemStationCost"] = document.getElementById('ironGemStationCost').value;
localStorage["diamondGemStationCost"] = document.getElementById('diamondGemStationCost').value;
//
localStorage["technologies"] = document.getElementById('technologies').value;
localStorage["superSaws"] = document.getElementById('superSaws').value;
localStorage["ironSuperSawCost"] = document.getElementById('ironSuperSawCost').value;
localStorage["diamondSuperSawCost"] = document.getElementById('diamondSuperSawCost').value;
localStorage["goldSuperSawCost"] = document.getElementById('goldSuperSawCost').value;
//
localStorage["oreReactors"] = document.getElementById('oreReactors').value;
localStorage["ironOreReactorCost"] = document.getElementById('ironOreReactorCost').value;
localStorage["copperOreReactorCost"] = document.getElementById('copperOreReactorCost').value;
localStorage["goldOreReactorCost"] = document.getElementById('goldOreReactorCost').value;
//
localStorage["teslas"] = document.getElementById('teslas').value;
localStorage["ironTeslaCost"] = document.getElementById('ironTeslaCost').value;
localStorage["copperTeslaCost"] = document.getElementById('copperTeslaCost').value;
localStorage["goldTeslaCost"] = document.getElementById('goldTeslaCost').value;
//
localStorage["goldFish"] = document.getElementById('goldFish').value;
localStorage["diamondGoldFishCost"] = document.getElementById('diamondGoldFishCost').value;
localStorage["goldGoldFishCost"] = document.getElementById('goldGoldFishCost').value;
//
localStorage["molecules"] = document.getElementById('molecules').value;
localStorage["ironMoleculeCost"] = document.getElementById('ironMoleculeCost').value;
localStorage["copperMoleculeCost"] = document.getElementById('copperMoleculeCost').value;
localStorage["diamondMoleculeCost"] = document.getElementById('diamondMoleculeCost').value;
//
localStorage["bridges"] = document.getElementById('bridges').value;
localStorage["goldBridgeCost"] = document.getElementById('goldBridgeCost').value;
localStorage["woodBridgeCost"] = document.getElementById('woodBridgeCost').value;
//
localStorage["tradeWoodCost"] = document.getElementById('tradeWoodCost').value;
localStorage["tradeWoodGoldCost"] = document.getElementById('tradeWoodGoldCost').value;
localStorage["tradeIronCost"] = document.getElementById('tradeIronCost').value;
localStorage["tradeIronGoldCost"] = document.getElementById('tradeIronGoldCost').value;
localStorage["tradeCopperCost"] = document.getElementById('tradeCopperCost').value;
localStorage["tradeCopperGoldCost"] = document.getElementById('tradeCopperGoldCost').value;
localStorage["tradeDiamondCost"] = document.getElementById('tradeDiamondCost').value;
localStorage["tradeDiamondGoldCost"] = document.getElementById('tradeDiamondGoldCost').value;
localStorage["tradeGoldCost"] = document.getElementById('tradeGoldCost').value;
localStorage["tradeGoldDiamondCost"] = document.getElementById('tradeGoldDiamondCost').value;
//
localStorage["powerups"] = document.getElementById('powerups').value;
localStorage["woodPowerups"] = document.getElementById('woodPowerups').value;
localStorage["ironPowerups"] = document.getElementById('ironPowerups').value;
localStorage["copperPowerups"] = document.getElementById('copperPowerups').value;
localStorage["goldPowerups"] = document.getElementById('goldPowerups').value;
localStorage["diamondPowerups"] = document.getElementById('diamondPowerups').value;
//
//
//
document.getElementById('game_save').style.display = 'block';
setTimeout("hideDiv()", 2000);
}
function hideDiv()
{
document.getElementById('game_save').style.display = 'none';
}