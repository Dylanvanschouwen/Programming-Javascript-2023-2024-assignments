function veranderKleur(kleur) {
    console.log("De kleur veranderen.");
    if (kleur === undefined || kleur === null || kleur === '') {
        kleur = prompt("Geef kleurnaam in het engels", "");
    }
    document.getElementById("kop1").style.color = kleur;
}

function veranderTekst() {
    document.getElementById("kop1").innerHTML = "Een ID kan slechts één keer per pagina worden gebruikt omdat een ID uniek moet zijn binnen de HTML-pagina. Het wordt gebruikt om specifieke HTML-elementen te identificeren. Als je meerdere elementen met hetzelfde ID hebt, zou het niet meer uniek zijn, en dat kan leiden tot onverwacht gedrag in je code.";
}
