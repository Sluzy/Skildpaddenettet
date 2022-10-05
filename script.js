//variable

var day = document.getElementById("dag");
var month = document.getElementById("måned");
var knap = document.getElementById("knap");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");

//function

function stjernetegn() {

    var dag = day.value;
    var måned = month.value;
    var resultat1;
    var resultat2;
    var resultat3;


    if ((dag >= 21 && måned == "marts") || (dag <= 19 && måned == "april")) {
        resultat1 = "Du er Vædder";
        resultat2 = "<img src='Billeder/Aries.png'>";
        resultat3 = "<p>Vædderen (Aries) er det første stjernetegn i dyrekredsen. Det ligger mellem Fiskene og Tyren. Solen bevæger sig siderisk igennem Vædderen fra omkring d. 21 marts til og med d. 20 april.</p>";

    } else if ((dag >= 20 && måned == "april") || (dag <= 21 && måned == "maj")) {
        resultat1 = "Du er Tyr";
        resultat2 = "<img src='Billeder/Taurus.png'>";
        resultat3 = "Tyren (Taurus) er det andet stjernetegn i dyrekredsen og ligger mellem Vædderen og Tvillingerne. Solen bevæger sig siderisk igennem Tyren fra midten/sidst i april til midten/sidst i maj.";

    } else if ((dag >= 22 && måned == "maj") || (dag <= 21 && måned == "juni")) {
        resultat1 = "Du er Tvilling";
        resultat2 = "<img src='Billeder/Gemini.png'>";
        resultat3 = "Tvillingerne (Gemini) er det tredje stjernetegn i dyrekredsen.Tegnet ligger mellem Tyren og Krebsen. Solen bevæger sig siderisk igennem Tvillingerne fra midten af maj til midten af juni.";

    } else if ((dag >= 22 && måned == "juni") || (dag <= 22 && måned == "juli")) {
        resultat1 = "Du er Krebsen";
        resultat2 = "<img src='Billeder/Cancer.png'>";
        resultat3 = "Krebsen (Cancer) er det fjerde stjernetegn i dyrekredsen. Tegnet ligger mellem Tvillingerne og Løven. Solen bevæger sig siderisk igennem Krebsen fra sidste del af juni til første del af juli.";

    } else if ((dag >= 23 && måned == "juli") || (dag <= 22 && måned == "august")) {
        resultat1 = "Du er Løven";
        resultat2 = "<img src='Billeder/Leo.png'>";
        resultat3 = "Løven (Leo) er det femte stjernetegn i dyrekredsen. Tegnet ligger mellem Krebsen og Jomfruen Solen bevæger sig siderisk igennem Løven fra sidste første del af august til midten af september.";

    } else if ((dag >= 23 && måned == "august") || (dag <= 22 && måned == "september")) {
        resultat1 = "Du er Jomfruen";
        resultat2 = "<img src='Billeder/Virgo.png'>";
        resultat3 = "Jomfruen (Virgo) er det sjette stjernetegn i dyrekredsen. Tegnet ligger mellem Løven og Vægten Solen bevæger sig siderisk igennem Jomfruen fra den 24. august til 23. september.";

    } else if ((dag >= 23 && måned == "september") || (dag <= 22 && måned == "oktober")) {
        resultat1 = "Du er Vægten";
        resultat2 = "<img src='Billeder/Libra.png'>";
        resultat3 = "Vægten (Libra) er det syvende stjernetegn i dyrekredsen. Tegnet ligger mellem Jomfruen og Skorpionen Solen bevæger sig siderisk igennem Vægten fra først i midten af september til midten af oktober.";

    } else if ((dag >= 23 && måned == "oktober") || (dag <= 22 && måned == "november")) {
        resultat1 = "Du er Scorpionen";
        resultat2 = "<img src='Billeder/Scorpio.png'>";
        resultat3 = "Skorpionen (Scorpio) er det ottende stjernetegn i dyrekredsen. Tegnet ligger mellem Vægten og Skytten. Solen bevæger sig siderisk igennem Skorpionen fra 24. oktober til 22. november.";

    } else if ((dag >= 23 && måned == "november") || (dag <= 21 && måned == "december")) {
        resultat1 = "Du er Skytten";
        resultat2 = "<img src='Billeder/Sagittarius.png'>";
        resultat3 = "Skytten (Sagittarius) er det niende stjernetegn i dyrekredsen. Tegnet ligger mellem Skorpionen og Stenbukken. Solen bevæger sig siderisk igennem Skytten fra 22. november til 21. december";

    } else if ((dag >= 22 && måned == "december") || (dag <= 20 && måned == "januar")) {
        resultat1 = "Du er Stenbukken";
        resultat2 = "<img src='Billeder/Capricorn.png'>";
        resultat3 = "Stenbukken (Capricorn) er det tiende stjernetegn i dyrekredsen. Tegnet ligger mellem Skytten og Vandmanden. Solen bevæger sig siderisk igennem Stenbukken fra slutningen af december til midt/slut af januar.";

    } else if ((dag >= 21 && måned == "januar") || (dag <= 20 && måned == "februar")) {
        resultat1 = "Du er Vandmanden";
        resultat2 = "<img src='Billeder/Aquarius.png'>";
        resultat3 = "Vandmanden (Aquarius) er det elvte stjernetegn i dyrekredsen. Tegnet ligger mellem Stenbukken og Fiskene. Solen bevæger sig siderisk igennem Vandmanden fra midten af februar til først i marts.";

    } else if ((dag >= 19 && måned == "februar") || (dag <= 22 && måned == "marts")) {
        resultat1 = "Du er Fisken";
        resultat2 = "<img src='Billeder/Pisces.png'>";
        resultat3 = "Fiskene (Pisces) er det tolvte og sidste stjernetegn i dyrekredsen. Tegnet ligger mellem Vandmanden og Vædderen. Solen bevæger sig siderisk igennem Fiskene fra midten af marts til midten af april.";

    } else {
        resultat1 = "forkert";
    }

    output1.innerHTML = resultat1;
    output2.innerHTML = resultat2;
    output3.innerHTML = resultat3;



}

//zodiac finder


knap.addEventListener("click", stjernetegn);

day.addEventListener("blur", stjernetegn);

month.addEventListener("change", stjernetegn);
