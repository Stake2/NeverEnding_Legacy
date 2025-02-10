G.AddData({
	name:'Coal mod',
	author:'Bruno Mussoi Mendonça',
	desc:'Adds coal as a crafting option for firepits and a way to purify water using coal+sand',
	engineVersion:1,
	manifest:0,
	requires:['Default dataset*'],
	/*sheets:{
		'coal_images':'coal_images.png'
	},*/
	func:function() {
		G.getDict('firekeeper').modes['coal fire']={
			name:'Start fires from coal',
			icon:[12,8,13,7],
			desc:'Craft [fire pit]s from 5 [stick]s and 5 [coal]s.'
		};
		G.getDict('firekeeper').effects.push({
			type:'convert',
			from:{
				'stick':5,
				'coal':5
			},
			into:{
				'fire pit':1
			},
			every:5,
			mode:'coal fire'
		});
		G.getDict('firekeeper').modes['cremation']={
			name:'Cremation',
			icon:[8,3,13,7],
			desc:'Burn [corpse]s using [fire pit]s.',
		};
		G.getDict('firekeeper').effects.push({
			type:'convert',
			from:{
				'corpse':1,
				'fire pit': 1
			},
			into:{
				'bone':1
			},
			every:5,
			mode:'cremation'
		});

		G.getDict('artisan').modes['water filter']={
			name:'Filter water',
			icon:[7,6],
			desc:'Turn [muddy water] into [water] using [sand] and [coal] as filters.'
		};
		G.getDict('artisan').effects.push({
			type:'convert',
			from:{
				'muddy water':100,
				'sand':0.1,
				'coal':1
			},
			into:{
				'water':50
			},
			every:5,
			mode:'water filter'
		});
	}
});