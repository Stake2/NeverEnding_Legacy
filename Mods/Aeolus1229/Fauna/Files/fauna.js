// https://opengameart.org/content/16x16-fantasy-pixel-art-vehicles for horse texture
// https://opengameart.org/content/lpc-style-farm-animals for cow, sheep, pig, chicken textures

// General to-do list
// TODO: Replace cows with bison, pigs with boars (augment from in base game), sheep with goats etc. (NONCONVENTIONAL ANIMALS)
// TODO: Overhaul food to be split into meat and veg
// TODO: Overhaul data.js so corpse flavour text says produced by people AND animals
// TODO: Animals require food (herb/fruit/ could add grain or smth like that?)

G.AddData({
    name: 'Fauna',
    author: 'JakeSESaunders',
    desc: 'You\'ve seen the beasts of the wild. Perhaps instead of slaughtering them, you could use them to your advantage?',
    engineVersion: 1,
    manifest: '',
    requires: ['Default dataset*'],
    sheets: {
        'faunaSheet' : 'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/Aeolus1229/Fauna/Files/img/faunaSheet.png'
    },

    func: function() {
        // Adds animal category to left panel
        G.resCategories['animals'] = {
            name: 'Animals',
            base: [],
            side: ['stable room']
        };

        // Adds animal resources
        new G.Res({
            name: 'horse',
            desc: 'Neighhhhh!',
            icon: [0, 0, 'faunaSheet'],
            partOf: '',
            category: 'animals',
            displayUsed: true,
            turnToByContext:{'decay':{'corpse':1}},
            tick: function(me, tick) {
                // Make this function kill horses
            }
        });
        
        new G.Res({
            name: 'cow',
            desc: 'Mooooo!',
            icon: [1, 0, 'faunaSheet'],
            partOf: '',
            category: 'animals'
        });

        new G.Res({
            name: 'chicken',
            desc: 'Cluck!',
            icon: [2, 0, 'faunaSheet'],
            partOf: '',
            category: 'animals'
        });

        new G.Res({
            name: 'sheep',
            desc: 'Baaaaaaa!',
            icon: [3, 0, 'faunaSheet'],
            partOf: '',
            category: 'animals'
        });

        // Adds resource corresponding to 'room across all stables'
        new G.Res({
            name: 'stable room',
            desc: 'Stables keep animals happy and healthy.//The number on the left is the amount of animals currently a stable, while the number on the right is the amount of stable room you have in total.',
            icon: [],
            partOf: '',
            getDisplayAmount: function() {
                return '0/0'
            },
            displayUsed: true
        });

        // Adds goods so animals can be found in the wild
        G.contextNames['livestock']="Taming";

        new G.Goods({
            name: 'horses',
            desc: 'horses!',
            icon: [],
            res: {
                'livestock': {'horse': 1}
            },
            affectedBy: [],
            mult: 5
        });

        new G.Goods({
            name: 'cows',
            desc: 'horses!',
            icon: [],
            res: {
                'livestock': {'cow': 1}
            },
            affectedBy: [],
            mult: 5
        });

        // Attaches goods to biome types
        G.land[0].goods.push({type:['horses'], amount:1});
        G.land[0].goods.push({type:['cows'], amount:1});

        // Adds units to obtain, keep and use animals
        // TODO: Add Tamer to tame wild horses, cows, sheep etc
        // TODO: Add abattoir for livestock
        // TODO: Add dairy for cows, wool thing for sheep, egg thing for chickens etc.
        new G.Unit({
            name: 'stable',
            desc: '@increases the lifespan of animals<>The [stable] provides a home for animals, where workers keep them happy and healthy',
            icon: [],
            cost: {},
            use:  {'land': 2, 'worker': 3},
            modes: {'off': G.MODE_OFF},
            effects: [
                {type:'show res',what:['stable room']}
            ],
            gizmos: true,
            req: {'taming': true},
            category: 'storage'
        });

        // Adds techs allowing animals to be obtained, kept and used
        new G.Tech({
            name: 'taming',
            desc: '@unlocks tamers which wander explored land searching for animals to domesticate@unlocks stables, a place to keep your animals<>You\'ve seen the beasts of the wild. Perhaps instead of slaughtering them, you could use them to your advantage?',
            icon: [],
            cost: {'insight':25},
            req: {'hunting':true},
            effects: [],
            chance: 3
        });

        new G.Tech({
            name: 'ranching',
            desc: '@unlocks the dairy for milk to be produced from [cow]s@unlocks coops for chickens to lay eggs@unlocks something for sheep?<>DO FLAVOUR TEXT',
            icon: [],
            cost: {},
            req: {},
            effects: [],
            chance: 0
        });

        new G.Tech({
            name: 'butchery',
            desc: '@unlocks the abattoir for animals to be turned into meat, hide and bones<>DO FLAVOUR TEXT',
            icon: [],
            cost: {},
            req: {},
            effects: [],
            chance: 0
        });

        // Adds traits 'a balanced diet', vegetarianism, veganism and carnivorism
        // TODO Give the traits effects
        // TODO Add love, respect and fear of animals as traits
        new G.Trait({
            name: 'a balanced diet',
            desc: '@your people are happier when multiple types of food are in supply (veggies and meat)',
            icon: '',
            chance: '',
            req: {'carnivorism':false, 'vegetarianism':false, 'veganism':false}
        });

        new G.Trait({
            name: 'vegetarianism',
            desc: '@happiness from eating [herb]s and [fruit] is doubled@unhappiness from eating [meat] and [seafood] is doubled',
            icon: '',
            chance: '',
            req: {'a balanced diet':false, 'carnivorism':false}
        });

        new G.Trait({
            name: 'veganism',
            desc: '@happiness from eating [herb]s and [fruit] is doubled@people will not eat [meat], [seafood] or [bugs]',
            icon: '',
            chance: '',
            req: {'a balanced diet':false, 'vegetarianism':true, 'carnivorism':false}
        });

        new G.Trait({
            name: 'carnivorism',
            desc: '@happiness from eating [meat] is doubled@people will not eat [herb]s or [fruit]',
            icon: '',
            chance: '',
            req: {'a balanced diet':false, 'vegetarianism':false, 'veganism':false}
        });
    }
});