G.AddData({
name:'Laws Of Food',
author:'Adr',
desc:'A mod that increases the amount of choices in rules of food.',
engineVersion:1,
requires:['Default dataset*'],
sheets:{'iconSheet':'img/iconSheet.png'},// custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{

	new G.Policy({
		name:'eat herbs',
		desc:'[herb,Herbs] are now food items.',
		icon:[6,12,4,6,'iconSheet'],
		cost:{'influence':1},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['herb'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['herb'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat raw meat',
		desc:'[meat,Raw Meat] is now a food item.',
		icon:[6,12,5,7,'iconSheet'],
		cost:{'influence':0.5},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['meat'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['meat'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat cooked meat',
		desc:'[cooked meat] is now a food item.',
		icon:[6,12,6,7,'iconSheet'],
		cost:{'influence':0.5},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['cooked meat'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['cooked meat'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat cured meat',
		desc:'[cured meat] is now a food item.',
		icon:[6,12,11,6,'iconSheet'],
		cost:{'influence':0.5},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['cured meat'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['cured meat'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat raw seafood',
		desc:'[seafood,Raw Seafood] is now a food item.',
		icon:[6,12,5,6,'iconSheet'],
		cost:{'influence':0.5},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['seafood'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['seafood'],parent:''},
		],
		category:'food',
	});

	new G.Policy({
		name:'eat cooked seafood',
		desc:'[cooked seafood] is now a food item.',
		icon:[6,12,6,6,'iconSheet'],
		cost:{'influence':0.5},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['cooked seafood'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['cooked seafood'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat cured seafood',
		desc:'[cured seafood] is now a food item.',
		icon:[6,12,12,6,'iconSheet'],
		cost:{'influence':0.5},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['cured seafood'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['cured seafood'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat cooked meat and cooked seafood',
		desc:'[cooked meat] and [cooked seafood] are now food items.',
		icon:[6,12,6,7],
		cost:{'influence':1},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['cooked meat','cooked seafood'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['cooked meat','cooked seafood'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat cured meat and cured seafood',
		desc:'[cured meat] and [cured seafood] are now food items.',
		icon:[6,12,11,6],
		cost:{'influence':1},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['cured meat','cured seafood'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['cured meat','cured seafood'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat fruit',
		desc:'[fruit,Fruits] are now food items.',
		icon:[6,12,4,7,'iconSheet'],
		cost:{'influence':1},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['fruit'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['fruit'],parent:''},
		],
		category:'food',
	});
	new G.Policy({
		name:'eat bread',
		desc:'[bread] is now a food item.',
		icon:[6,12,7,7,'iconSheet'],
		cost:{'influence':1},
		startMode:'on',
		req:{'rules of food':true},
		effects:[
			{type:'make part of',what:['bread'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['bread'],parent:''},
		],
		category:'food',
	});
 
}
});
