function veranderKleur(kleur) {
    console.log("De kleur veranderen.");
    if (kleur === undefined || kleur === null || kleur === '') {
        kleur = prompt("Geef kleurnaam in het engels", "");
    }
    document.getElementById("kop1").style.color = kleur;
}

function veranderTekst() {
    document.getElementById("kop1").innerHTML = "Hello world!";
}
