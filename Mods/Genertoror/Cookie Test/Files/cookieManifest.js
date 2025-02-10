G.DeclareManifest({
name:'test mod manifest',
updates:{
	'Example mod*':'mod.js',//we're updating any mod with a name that begins with "Example mod"
	'Test mod*':'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/Genertoror/Cookie%20Test/Files/cookieLegacy.js',//we're updating any mod with a name that begins with "Example mod"
	//you could declare other mod updates here if you wanted
}
});
