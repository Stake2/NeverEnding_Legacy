let modLinks = document.getElementsByClassName('mod-link');
for (let i = 0; i < modLinks.length; i++) {
    modTag = modLinks[i];
    modTag.innerHTML = modTag.href;
}