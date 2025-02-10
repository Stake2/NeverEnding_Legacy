G.AddData({
    name:'Thot Mod',
    author:'fancy and torcado fixed by pelletsstarPL',
    desc:'This mod makes it possible to create thots. Thots are an improved version of Dreamers. Fixed by pelletsstarPL(I made it playable)',
    engineVersion:1,
    manifest:0,
    sheets:{'thotSheet':'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/Rubic%20(Paradoxrevolver)/Thot/Files/thotModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
    func:function()
    {
		new G.Unit({
		name:'thot',
		desc:'@generates [insight] more frequently than a [dreamer]<>A [thot] spends their time observing, thinking, and wondering why things are the way they are.',
		icon:[0,0,'thotSheet'],
		cost:{'food':50},
		use:{'worker':1},
		effects:[
			{type:'gather',what:{'insight':0.3}},
			{type:'gather',what:{'insight':0.15},req:{'symbolism':true}},
			{type:'mult',value:1.2,req:{'wisdom rituals':'on'}}
		],
		category:'discovery',
		req:{'construction':true},
		limitPer:{'population':200},
		});
		
		//If you would like me to add some more compat related to your own NEL mod dm me on discord and we will think abt it.
		if(G.modsByName['MagixUtils']){ //it is for compat
		if(G.modsByName['Elves']){ //as we are trying to launch Philosopher actually mod for Elf race.
			G.unitByName['thot'].icon=[28,4,'c2'];
			G.unitByName['thot'].req={'philosophy':true};
			G.unitByName['thot'].displayName="Philosopher";
			G.unitByName['thot'].effects[0]={type:'gather',what:{'discernment':0.2,'creativity':0.05},req:{'philosophy':true}};
			G.unitByName['thot'].effects[1]={type:'gather',what:{'discernment':0.1,'creativity':0.00625},req:{'symbolism':true,'philosophy':true}};
			G.unitByName['thot'].limitPer={'population':350};
			G.unitByName['thot'].desc='@generates [discernment] & [creativity] more frequently than a [dreamer]<>A [thot] spends their time observing, thinking, and wondering why things are the way they are.';
			}else if(G.modsByName['Default dataset']){ //as we are trying to launch Philosopher actually mod Human race.
			G.unitByName['thot'].req={'philosophy':true};
			G.unitByName['thot'].effects[0]={type:'gather',what:{'insight':0.3},req:{'philosophy':true}},
			G.unitByName['thot'].effects[1]={type:'gather',what:{'insight':0.15},req:{'philosophy':true,'symbolism':true}},
			G.unitByName['thot'].displayName="Philosopher";
			};
		}
	}
});