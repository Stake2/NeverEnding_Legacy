G.AddData({
name:'Test mod',
author:'Genertoror',
desc:'A simple test mod that adds cookies',
engineVersion:1,
manifest:'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/Genertoror/Cookie%20Test/Files/catManifest.js',
requires:['Default dataset*'],
sheets:{'cookieSheet':'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/Genertoror/Cookie%20Test/Files/sprits.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{

	new G.Res({
		name:'wheat',
		desc:'[wheat] is not very tasty nor healthy',
		icon:[0,0,'cookieSheet'],
		turnToByContext:{'eat':{'health':0.01,'happiness':0.01},'decay':{'spoiled food':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
	new G.Res({
		name:'cookie',
		desc:'Made from [water] and the [wheat], this [cookie] and gets popular easily.',
		icon:[1,0,'cookieSheet'],
		turnToByContext:{'eat':{'health':0.005,'happiness':1},'decay':{'cookie':0.95,'spoiled food':0.05}},//that last part makes hot sauce effectively have a 95% chance of simply not rotting (in effect, it decays into itself)
		partOf:'food',
		category:'food',
	});
	
	//Then we augment the base data to incorporate our new resources :
		//adding wheat as something that can be gathered from grass
	G.getDict('grass').res['gather']['wheat']=3;
		//adding a new mode to furnace so they can make hot sauce from hot peppers
	G.getDict('furnace').modes['cookie']={name:'Make cookies',desc:'Turn 5 [wheat] and 2 [water] into 1 [cookie].',req:{'cookie preparing':true}};
		//adding a new effect to artisans that handles the actual hot sauce preparing and is only active when the unit has the mode "hot sauce"
	G.getDict('furnace').effects.push({type:'convert',from:{'wheat':5,'water':2},into:{'cookie':2},every:5,mode:'cookie'});
	
	
	new G.Tech({
		name:'cookie preparing',
		desc:'@[furnace]s can now produce [cookie]s from [wheat] and [water]//This special recipe allows a skilled craftsman to fully express the complex aromas present in hot peppers.',
		icon:[0,1,'cookieSheet'],
		cost:{'insight':15},
		req:{'cooking':true},
	});
        new G.Tech({
		name:'healthy cookies',
		desc:'@[cookie]s are now twice as healthy.',
		icon:[0,1,'cookieSheet'],
		cost:{'insight':15},
		req:{'cokie preparing':true},
                effects:[
			{type:'function',func:function(){G.getDict('cookie').turnToByContext['eat']['happiness']=0.5;}},//this is a custom function executed when we gain the trait
		],
	});
	        new G.Tech({
		name:'golden cookies',
		desc:'@[cookie]s are now twice as healthy.',
		icon:[0,1,'cookieSheet'],
		cost:{'insight':25, 'culture':10},
		req:{'cookie preparing':true},
                effects:[
			{type:'function',func:function(){G.getDict('cookie').turnToByContext['eat']['health']=0.1;}},//this is a custom function executed when we gain the trait
		],
	});
	
	new G.Trait({
		name:'Grandma´s love',
		desc:'@[elder]s now give you cookies',
		icon:[1,1,'cookieSheet'],
		chance:5,
		req:{'cookie preparing':true},
		effects:[
			{type:'function',func:function(){G.getDict('elder').effects.push({type:'convert',from:{'wheat':2,'water':1},into:{'cookie':1},every:25,mode:'cookie'});}},//this is a custom function executed when we gain the trait
	        ],
	});
			
}
});
