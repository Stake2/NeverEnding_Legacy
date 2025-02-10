G.DeclareManifest({
name:'test mod manifest',
updates:{
	'Example mod*':'mod.js',//we're updating any mod with a name that begins with "Example mod"
	'Test mod*':'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/Genertoror/Cookie%20Test/Files/cookieLegacy.js',
	'Thot mod*':'https://raw.githubusercontent.com/Stake2/NeverEnding_Legacy/refs/heads/main/Mods/Rubic%20(Paradoxrevolver)/Thot/Files/thotFixed.js'
}
});
