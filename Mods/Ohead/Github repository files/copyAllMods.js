function copyAllMods() {
    let modLinks = document.getElementsByClassName('mod-link');
    let result = '';

    for (let i = 0; i < modLinks.length; i++) {
        modTag = modLinks[i];
        result += modTag.href + '\n';
    }
    
    navigator.clipboard.writeText(result);

    document.getElementById('copied-text').style.display = 'inline';

    setTimeout(()=>{
        document.getElementById('copied-text').style.display = 'none';
    },1000)
}