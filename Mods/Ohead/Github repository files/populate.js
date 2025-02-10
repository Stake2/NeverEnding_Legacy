let modListElement = document.getElementById('modlist');

class Mod {
    constructor(name,desc,link) {
        this.name = name;
        this.desc = desc;
        this.link = link;
    }
    build() {
        let nameElement = document.createElement('div');
        let descElement = document.createElement('div');
        let linkElement = document.createElement('a');
        let dividerElement = document.createElement('div');

        nameElement.classList = ("par fancyText bitBiggerText");
        descElement.classList = ("par fancyText");
        linkElement.classList = ("mod-link");
        dividerElement.classList = ("divider");

        nameElement.innerHTML = this.name;
        descElement.innerHTML = this.desc;
        linkElement.innerHTML = this.link;
        linkElement.href = this.link;


        modListElement.appendChild(nameElement);
        modListElement.appendChild(descElement);
        modListElement.appendChild(linkElement);
        modListElement.appendChild(dividerElement);
    }
}

let list = [
    new Mod('Cremation','During the endgame, people start dying faster than they can be buried.<br>Cremation is the solution! It\'s a mode for firekeepers, unlocked from ironworking.','https://therealohead.github.io/neverending-legacy-mods/mods/cremation.js'),
    new Mod('Custom Map Size','My good pal Damien was unhappy about the size of the map, so I went ahead and gave control of map size to the user.','https://therealohead.github.io/neverending-legacy-mods/mods/big-map.js'),
    new Mod('Meditation','During the endgame, it is literally not possible to generate fast ticks without pausing the game. Meditaters can help with that.','https://therealohead.github.io/neverending-legacy-mods/mods/meditater.js'),
    new Mod('Don\'t Eat Herbs','The only unavoidable way happiness can go down is eating herbs.<br>Why would people eat something they don\'t like when cured seafood and cooked meat exist?','https://therealohead.github.io/neverending-legacy-mods/mods/dont-eat-herbs.js'),
    new Mod('Agriculture','Adds various farming units.','https://therealohead.github.io/neverending-legacy-mods/mods/agriculture.js'),
    new Mod('Theism','Makes it possible for your people to become monotheistic, polytheistic, or atheistic.','https://therealohead.github.io/neverending-legacy-mods/mods/theism.js')
]

list.forEach(mod=>{
    mod.build();
});