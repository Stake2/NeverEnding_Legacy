G.AddData({
	name:'Custom Map Size',
	author:'Owen "Ohead" Parker',
	desc:'Customize the size of the map',
	engineVersion:1,
	func:function()
	{
		// Only do all this bullshit if we haven't before
		if (owensSexyMapFlag) return;

		let oldCreateMaps = G.createMaps.bind({});
		var owensSexyMapFlag = true;
		G.createMaps=function()//when creating a new game
		{
			// Temporary map
			oldCreateMaps();

			function makeMap() {
				widthMultiplier = Math.max(24,Math.floor(widthMultiplier * 24));
				heightMultiplier = Math.max(24,Math.floor(heightMultiplier * 24));
				G.currentMap=new G.Map(0,widthMultiplier,heightMultiplier);//main world map

				//set starting tile by ranking all land tiles by score and picking one
				var goodTiles=[];
				for (var x=1;x<G.currentMap.w-1;x++)
				{
					for (var y=1;y<G.currentMap.h-1;y++)
					{
						var land=G.currentMap.tiles[x][y].land;
						if (!land.ocean) goodTiles.push([x,y,(land.score||0)+Math.random()*2]);
					}
				}
				goodTiles.sort(function(a,b){return b[2]-a[2]});
				var tile=0;
				if (G.startingType==2) tile=choose(goodTiles);//just drop me wherever
				else
				{
					var ind=0;
					if (G.startingType==1) ind=Math.floor((0.85+Math.random()*0.15)*goodTiles.length);//15% worst
					//ind=Math.floor((0.3+Math.random()*0.4)*goodTiles.length);//30% to 70% average
					else ind=Math.floor((Math.random()*0.15)*goodTiles.length);//15% nicest
					tile=goodTiles[ind];
				}
				tile=G.currentMap.tiles[tile[0]][tile[1]];
				tile.owner=1;
				tile.explored=10/100;//create one tile, a tenth of it explored

				G.updateMapForOwners(G.currentMap);

				G.updateMapDisplay();
				G.centerMap(G.currentMap);


				
				G.setSetting('paused',0);
				G.dialogue.forceClose();
			}

			let widthMultiplier = 1;
			let heightMultiplier = 1;
			G.setSetting('paused',1);
			G.dialogue.popup(function(div){
				var str=
				`<div class="fancyText title">World Bounds</div><div class="bitBiggerText underTitle">
				<div class="fancyText par">Width: ${G.field({text:'1',tooltip:'How wide the world should be.',oninput:function(val){widthMultiplier=val}})} times bigger than default</div>
				<div class="fancyText par">Height: ${G.field({text:'1',tooltip:'How tall the world should be.',oninput:function(val){heightMultiplier=val}})} times bigger than default</div>
				${G.button({text:'Generate',onclick:makeMap})}`;
				return str;
			},'wideDialogue')
			
			
		}
	}
});
