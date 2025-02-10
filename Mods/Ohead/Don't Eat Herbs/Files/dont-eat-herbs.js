G.AddData({
	name:'Don\'t Eat Herbs',
	author:'Owen "Ohead" Parker',
	desc:'Adds the ability to stop your citizens from eating herbs. If they don\'t like it, then why do they eat it?!',
	engineVersion:1,
	requires:['Default dataset*'],
	func:function()
	{
		new G.Policy({
            name:'eat herbs',
            desc:'[herb]s are eaten, which people don\'t tend to like.',
            icon:[6,12,4,6],
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

	}
});