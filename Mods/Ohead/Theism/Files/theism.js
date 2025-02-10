G.AddData({
	name:'Theism',
	author:'Owen "Ohead" Parker',
	desc:'Adds Polytheism, Monotheism, and Atheism. They all have different perks',
	engineVersion:1,
	requires:['Default dataset*'],
	func:function()
	{


        // Give everyone a bonus for polytheism
        for (let unit of G.unitByName) {
            if (G.dict[unit].effects)
                G.dict[unit].effects.push({type:'mult',value:1.01,req:{'polytheism':true}});
        }


        // Give political units a bonus for monotheism
        for (let unit of G.unitByName) {
            if (G.dict[unit].effects && G.dict[unit].category == 'political')
                G.dict[unit].effects.push({type:'mult',value:1.5,req:{'monotheism':true}});
        }

        new G.Trait({
            name:'monotheism',
            desc:'@[clan leader]s and [chieftain]s generate 50% more [influence]',
            icon:[9,5,24,1],
            chance:1,
            cost:{'faith':2},
            req:{'polytheism':false,'atheism':false,"belief in the afterlife":true},
        });

        new G.Trait({
            name:'polytheism',
            desc:'@all [worker]s have a very slight production boost',
            icon:[7,5,24,1],
            chance:1,
            cost:{'faith':2},
            req:{'monotheism':false,'atheism':false,"belief in the afterlife":true},
        });

        new G.Trait({
            name:'atheism',
            desc:'@Faith-based policies no longer cost [faith] to toggle, but still consume 1 [faith] every 20 days',
            icon:[6,4,24,1],
            chance:1,
            cost:{'culture':2},
            req:{'monotheism':false,'polytheism':false,"belief in the afterlife":true},
            effects:[
                {type:'function',func:function(){
                    for (let policy of G.policy) {
                        console.log(policy);
                        delete policy.cost.faith;
                    }
                }},
            ],
        });

	}
});