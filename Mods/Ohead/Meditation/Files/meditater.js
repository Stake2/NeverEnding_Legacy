G.AddData({
	name:'Meditaters',
	author:'Owen "Ohead" Parker',
	desc:'Adds a meditater unit, who generates fast ticks.',
	engineVersion:1,
	func:function()
	{   
        new G.Unit({
            name:'meditater',
            desc:'@generates fast ticks every now and then<>A [meditater] is one with the land and the natural energy of the universe.',
            icon:[7,5],
            cost:{},
            use:{'worker':1},
            upkeep:{'coin':0.2},
            effects:[
                {type:'function',func:(me)=>{
                    let amount = me.amount - me.idle;
                    // Limit of 25% chance per day, logarithmic
                    if (.5 * (-1*((.875) ** amount) + 1) > Math.random()) {
                        G.fastTicks++;
                    };
                }}
            ],
            req:{'ritualism':true},
            category:'spiritual',
        });
	}
});