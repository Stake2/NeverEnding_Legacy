G.AddData({
name:'Extra ores(for data.js)',
author:'pelletsstarPL',
desc:'Mod dedicated for data.js made cause of my main huge mod\'s 1st anniversary. Have fun data.js fans. Also this content can be found in my main mod(Magix).',
engineVersion:1,
manifest:'ModManifest.js',
requires:['Default dataset*'],
sheets:{'extraores':'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/PelletsstarPL/Extra%20Ores/Files/Extra%20ores.png'},
func:function(){
	//ICON FIXES
	G.fixTooltipIcons=function()
	{
		G.parse=function(what)
		{
			var str='<div class="par">'+((what
			.replaceAll(']s',',*PLURAL*]'))
			.replace(/\[(.*?)\]/gi,G.parseFunc))
			.replaceAll('http(s?)://','http$1:#SLASH#SLASH#')
			.replaceAll('//','</div><div class="par">')
			.replaceAll('#SLASH#SLASH#','//')
			.replaceAll('@','</div><div class="par bulleted">')
			.replaceAll('<>','</div><div class="divider"></div><div class="par">')+'</div>';
			return str;
		}
	}
	G.initializeFixIcons=function()
	{
		if (G.parse("http://").search("http://") == -1)
		{
			G.fixTooltipIcons();
			setTimeout(G.initializeFixIcons,500);	// check again to make sure this version of the function stays applied during page load
		}
	}
	G.initializeFixIcons();
	new G.Res({
		name:'lead ore',
		desc:'Ore that can be processed into [hard metal ingot]s.',
		icon:[0,1,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
  new G.Res({
		name:'mythril ore',
		desc:'Ore that is harder to find than gold and silver. Can be processed into [mythril ingot]s.',
		icon:[1,1,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
  new G.Res({
		name:'zinc ore',
		desc:'Ore that can be processed into [hard metal ingot]s.',
		icon:[2,1,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
  new G.Res({
		name:'osmium ore',
		desc:'Ore that can be processed into [soft metal ingot]s.',
		icon:[3,1,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
  new G.Res({
		name:'blackium ore',
		desc:'Ore that can be processed into [strong metal ingot]s.',
		icon:[4,1,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
  new G.Res({
		name:'mythril ingot',
		desc:'Can be used to craft [mythril block].',
		icon:[3,2,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
  new G.Res({
		name:'mythril block',
		desc:'A valuable, if unreliable construction material.',
		icon:[4,3,'extraores'],
		partOf:'precious building materials',
		category:'build',
	});
   new G.Res({
		name:'unknownium ore',
		desc:'unknown ore ¯\_(ツ)_/¯',
		icon:[0,2,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
   new G.Res({
		name:'dinium ore',
		desc:'What to do with that ore? Seems like furnaces cannot smelt it.',
		icon:[1,2,'extraores'],
		partOf:'misc materials',
		category:'build',
	});
    new G.Res({
		name:'pyrite',
		desc:'A fool\'s gold.',
		icon:[2,2,'extraores'],
		category:'misc',
	});
new G.Tech({
		name:'lead-working',
		desc:'@[furnace]s can now make [hard metal ingot]s from [lead ore]<>',
		icon:[0,0,'extraores'],
		cost:{'insight':80},
		req:{'monument-building':true},
	});
  new G.Tech({
		name:'mythril-working',
		desc:'@[furnace]s can now make [precious metal ingot]s from [mythril ore]@[blacksmith workshop] can now forge [mythril block] out of [mythril ingot]s.<>',
		icon:[1,0,'extraores'],
		cost:{'insight':80},
		req:{'monument-building':true},
	});
  new G.Tech({
		name:'zinc-working',
		desc:'@[furnace]s can now make [hard metal ingot]s from [zinc ore]<>',
		icon:[2,0,'extraores'],
		cost:{'insight':80},
		req:{'monument-building':true},
	});
  new G.Tech({
		name:'osmium-working',
		desc:'@[furnace]s can now make [soft metal ingot]s from [osmium ore]<>',
		icon:[3,0,'extraores'],
		cost:{'insight':80},
		req:{'monument-building':true},
	});
  new G.Tech({
		name:'blackium-working',
		desc:'@[furnace]s can now make [strong metal ingot]s from [blackium ore]<>',
		icon:[4,0,'extraores'],
		cost:{'insight':80},
		req:{'monument-building':true},
	});
  new G.Tech({
		name:'deep mining & quarrying',
		desc:'@Unlocks two new territory contexts: Deep mining and Deep quarrying<>',
		icon:[4,2,'extraores'],
		cost:{'insight':100,'influence':15},
		req:{'monument-building':true,'prospecting':true},
    effects:[
    	{type:'show context',what:['deep mining']},
      	{type:'show context',what:['deep quarrying']},
    {type:'function',func:function(){}}
    ]
	});
   new G.Trait({
		name:'unique ores',
		desc:'@people can find two new ores but... they will never know what to do with them. And [prospecting] cannot affect them<>',
		icon:[8,12,4,2,'extraores'],
		cost:{'insight':25,'influence':15},
		req:{'monument-building':true,'prospecting':true,'deep mining & quarrying':true},
    chance:150,
    effects:[
    
    ]
	});
  G.getDict('quarry').modes['quarry for ores']={name:'Quarry for ores',icon:[8,12,0,8],desc:'This quarry will gain 3x less [cut stone], [marble] but will be able to mine for ores like [mythril ore,Mythril] or [blackium ore,Blackium].',req:{'deep mining & quarrying':true},use:{'metal tools':4,'worker':4}};
  G.getDict('mine').modes['anydeep']={name:'Any(Deep mining)',icon:[8,12,8,8],desc:'Works like <b>Any</b> mode but its gathering context is <b>Deep mining</b> instead of <b>Mining</b>',req:{'deep mining & quarrying':true},use:{'metal tools':3,'worker':3}};
  G.getDict('mine').modes['lead']={name:'lead',icon:[0,1,'extraores'],desc:'Mine for [lead ore] with 4x efficiency.',req:{'deep mining & quarrying':true,'prospecting':true},use:{'metal tools':3,'worker':3}};
  G.getDict('mine').modes['zinc']={name:'zinc',icon:[2,1,'extraores'],desc:'Mine for [zinc ore] with 4x efficiency.',req:{'deep mining & quarrying':true,'prospecting':true},use:{'metal tools':3,'worker':3}};
  G.getDict('mine').effects.push({type:'gather',context:'deepmining',what:{'lead ore':40},max:30,mode:'lead'});
  G.getDict('mine').effects.push({type:'gather',context:'deepmining',what:{'zinc ore':40},max:30,mode:'zinc'});
	 G.getDict('mine').effects.push({type:'gather',context:'deepmining',what:{'stone':1},mode:'anydeep'});
  G.getDict('mine').effects.push({type:'gather',context:'deepmining',what:{'lead ore':5},max:15,mode:'anydeep'});
G.getDict('mine').effects.push({type:'gather',context:'deepmining',what:{'zinc ore':5},max:15,mode:'anydeep'});
G.getDict('mine').effects.push({type:'gather',context:'deepmining',what:{'dinium ore':2},max:4,mode:'anydeep',req:{'unique ores':true}});
  G.getDict('quarry').effects.push({type:'gather',context:'quarry',amount:0.5,max:2,mode:'quarry for ores'});
   G.getDict('quarry').effects.push({type:'gather',context:'deepquarrying',what:{'mythril ore':2},max:4,mode:'quarry for ores'});
G.getDict('quarry').effects.push({type:'gather',context:'deepquarrying',what:{'blackium ore':2},max:4,mode:'quarry for ores'});
	 G.getDict('quarry').effects.push({type:'gather',context:'deepquarrying',what:{'unknownium ore':2},max:4,mode:'quarry for ores',req:{'unique ores':true}});
	G.getDict('mine').effects.push({type:'gather',context:'deepmining',what:{'unknownium ore':2},max:4,mode:'quarry for ores',req:{'unique ores':true}});
  G.getDict('furnace').modes['lead']={name:'Lead smelting',icon:[10,9],desc:'Cast [hard metal ingot]s out of 6 [lead ore]s each.',req:{'deep mining & quarrying':true,'lead-working':true},use:{'metal tools':2,'worker':2}};
  G.getDict('furnace').modes['mythril']={name:'Mythril smelting',icon:[3,2,'extraores'],desc:'Cast [mythril ingot]s out of 6 [mythril ore]s and 1 [gold ore] each.',req:{'deep mining & quarrying':true,'mythril-working':true},use:{'metal tools':2,'worker':2}};
  G.getDict('furnace').modes['osmium']={name:'Osmium smelting',icon:[9,9],desc:'Cast [soft metal ingot]s out of 4 [osmium ore]s each.',req:{'deep mining & quarrying':true,'osmium-working':true},use:{'metal tools':2,'worker':2}};
  G.getDict('furnace').modes['blackium']={name:'Blackium alloying',icon:[12,9],desc:'Cast [strong metal ingot]s out of 6 [blackium ore]s each.',req:{'deep mining & quarrying':true,'blackium-working':true},use:{'metal tools':2,'worker':2}};
  G.getDict('furnace').modes['zinc']={name:'Zinc smelting',icon:[10,9],desc:'Cast [hard metal ingot]s out of 7 [zinc ore]s each.',req:{'deep mining & quarrying':true,'zinc-working':true},use:{'metal tools':2,'worker':2}};
  G.getDict('blacksmith workshop').modes['mythril blocks']={name:'Forge mythril blocks',icon:[4,3,'extraores'],desc:'Forge [mythril block]s out of 10 [mythril ingot]s each.',req:{'deep mining & quarrying':true,'mythril-working':true},use:{'metal tools':1,'worker':1}}; 
  //EFFECTS
  G.getDict('furnace').effects.push({type:'convert',from:{'lead ore':6},into:{'hard metal ingot':1},every:5,mode:'lead'});
  G.getDict('furnace').effects.push({type:'convert',from:{'mythril ore':6,'gold ore':1},into:{'mythril ingot':1},every:5,mode:'mythril'});
  G.getDict('furnace').effects.push({type:'convert',from:{'osmium ore':4},into:{'hard metal ingot':1},every:5,mode:'osmium'});
  G.getDict('furnace').effects.push({type:'convert',from:{'blackium ore':6},into:{'strong metal ingot':1},every:5,mode:'blackium'});
  G.getDict('furnace').effects.push({type:'convert',from:{'zinc ore':7},into:{'hard metal ingot':1},every:5,mode:'zinc'});
  G.getDict('blacksmith workshop').effects.push({type:'convert',from:{'mythril ingot':10},into:{'mythril block':1},every:5,mode:'mythril blocks'});

	
}});
