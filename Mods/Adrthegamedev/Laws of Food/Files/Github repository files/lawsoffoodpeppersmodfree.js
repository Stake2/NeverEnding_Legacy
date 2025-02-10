G.AddData({
name:'Laws Of Food - Peppers Mod',
author:'Adr',
desc:'A mod that increases the amount of choices in rules of food.',
engineVersion:1,
requires:['Default dataset*','Example mod'],
sheets:{'spicySheet':'img/spicyModIconSheet.png','iconSheet':'img/iconSheet.png'},// custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{

	new G.Policy({
		name:'eat hot peppers',
		desc:'[hot pepper,Hot peppers] are now food items.',
		icon:[6,12,'iconSheet',0,0,'spicySheet'],
		cost:{'influence':0},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['hot pepper'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['hot pepper'],parent:''},
		],
		category:'food',
	});

	new G.Policy({
		name:'eat hot sauce',
		desc:'[hot sauce] is now a food item.',
		icon:[6,12,'iconSheet',1,0,'spicySheet'],
		cost:{'influence':0},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['hot sauce'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['hot sauce'],parent:''},
		],
		category:'food',
	});
}
});
