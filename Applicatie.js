alert("Welkom bij Bosrun, speel voorzichtig en denk goed na over je keuzes.");
Main();
function Main(){
    console.log("Main"); 
    let keuze = prompt("Je loopt door een bos en bent opzoek naar het huis van je opa. Het bos bevat vele paden waar je overheen kan gaan lopen, op dit moment sta je voor een belangrijke keuze. Het pad wat jij al die tijd hebt gevolgd loopt uit op een tweedsplitsing, rechts zie je een groot pad met veel licht aan het einde en links ziet het er donker uit met veel angstaanjagende geluiden", "Rechts of Links");
    if(keuze.trim() == "Rechts"){
        LightRechts();
    }
    else if(keuze.trim() == "Links"){
        DarkLinks();
    }
    else{
      Main();
    }
}

function DarkLinks(){
    console.log("Darklinks"); 
     keuze = prompt("Na een tijdje lopen heb je voor je gevoel al best wat vooruitgang gemaakt. Je hoort de rare geluiden steeds harder worden, je kan omkeren om terug te gaan naar het lichte pad of je kan doorgaan om te ontdekken wat de geluiden inhouden.", "Doorgaan of Terug");
    if(keuze.trim() == "Doorgaan"){
        DarkLinksDoorgaan();
    }
    else if(keuze.trim() == "Terug"){
        Main();
    }
    else{
        DarkLinks();
    }
}

function LightRechts() {
    console.log("LightRechts"); 
     keuze = prompt("Je volgt het pad voor ongeveer 15 minuten, je ziet dat het einde niet dichter lijkt te komen wat doe je? ga je terug om het linker pad te volgen of ga je door met het volgen van het pad.", "Terug of Doorgaan");
    if(keuze.trim() == "Terug"){
        Main();
    }
    else if(keuze.trim() == "Doorgaan"){
        LightRechtsDoorgaan();
    }
    else{
      LightRechts();
    }
}

function DarkLinksDoorgaan(){
    console.log("DarkLinksDoorgaan"); 
     keuze = prompt("Je loopt nogsteeds achter het geluid aan wat je hoorde, maar het geluid lijkt zich te verspreiden en je ziet tot je verbazing een splitsing waar uit beide paden hetzelfde geluid klinkt, waar ga je heen? Je kan Rechts  of Links.", "Links of Rechts");
    if(keuze.trim() == "Rechts"){
        DarkLinksDoorgaanRechts();
        
    }
    else if(keuze.trim() == "Links"){
        DarkLinksDoorgaanLinks();
    }
    else{
      DarkLinksDoorgaan();
    }
}

function LightRechtsDoorgaan(){
    console.log("LightRechtsDoorgaan"); 
     keuze = prompt("Nadat je weer een tijdje hebt gelopen hoor je ineens een harde knal, je kijkt om je heen en ziet dat achter je het pad verwoest is door omgevallen bomen, de optie om terug te gaan is nu verdwenen en kan niet meer, je kan uit paniek gaan roepen om hulp of vol zelfvertrouwen doorlopen.", "Hulp of Doorlopen");
    if(keuze.trim() == "Hulp"){
        LightRechtsDoorgaanHulp();
    }
    else if(keuze.trim() == "Doorlopen"){
        LightRechtsDoorgaanDoorlopen();
    }
    else{
        LightRechtsDoorgaan();
    }
}
function LightRechtsDoorgaanHulp(){
    console.log(" LightRechtsDoorgaanHulp"); 
     keuze = prompt(" Na een tijdje geschreewt te hebben hoor je ineens het geluid van vleugels, elke seconde hoor je het geklap harder worden tot op een gegeven moment een schaduw over je heen beweegt, je kijkt naar boven en ziet een groot gevogelte waarvan jij de oorsprong niet kan herkennen, je kan heel hard wegrennen of afwachten wat er gaat gebeuren.", "Afwachten of Wegrennen");
    if(keuze.trim() == "Afwachten"){
        LightRechtsDoorgaanHulpAfwachten();
    }
    else if(keuze.trim() == "Wegrennen"){
        LightRechtsDoorgaanHulpWegrennen();
    }
    else{
        LightRechtsDoorgaanHulp();
    }
} 
function LightRechtsDoorgaanDoorlopen(){
    console.log("LightRechtsDoorgaanDoorlopen"); 
     keuze = prompt(" Na weer wat lopen verder zie je dat het langzaam al nacht word, ook verandert het licht aan het eind van het pad van kleur van wit fel licht naar een wat doffer rood licht. Je kan een rustig plekje zoeken om door de nacht te komen of doorlopen.", "Overnachten of Doorlopen");
    if(keuze.trim() == "Overnachten"){
        LightRechtsDoorgaanDoorlopenOvernachten();
    }
    else if(keuze.trim() == "Doorlopen"){
        LightRechtsDoorgaanDoorlopenDoorlopen();
    }
    else{
      LightRechtsDoorgaanDoorlopen();
    }
}
function DarkLinksDoorgaanLinks(){
    console.log("DarkLinksDoorgaanLinks"); 
     keuze = prompt("Het pad vervolgt zich tot je uitkomt om een open veld, hier zie je een raar beest staan midden op het veld het geluid lijkt daar vanaf te komen, je kan erheen gaan om het aan te spreken of je sluipt er langs.", "Sluipen of Aanspreken");
    if(keuze.trim() == "Sluipen"){
        DarkLinksDoorgaanLinksSluipen();
    }
    else if(keuze.trim() == "Aanspreken"){
        DarkLinksDoorgaanLinksAanspreken();
    }
    else{
        DarkLinksDoorgaanLinks();
    }
}
function DarkLinksDoorgaanRechts(){
    console.log("DarkLinksDoorgaanRechts"); 
     keuze = prompt("Je loopt door totdat je twee portalen ziet staan, je kijkt door het 1e portaal en ziet dat je het pad zich daar vervolgt, als je naar het 2e portaal kijkt zie je het huis van je opa waar je al die tijd heen wou, in welk portaal ga je het 1e of 2e portaal?", "1e of 2e");
    if(keuze.trim() == "1e"){
        DarkLinksDoorgaanRechtsEerste();
    }
    else if(keuze.trim() == "2e"){
        DarkLinksDoorgaanRechtsTweede();
    }
    else{
        DarkLinksDoorgaanRechts();
    }
}
function LightRechtsDoorgaanHulpAfwachten(){
    console.log("LightRechtsDoorgaanHulpAfwachten"); 
    alert("DEATH..... het gevogelte stortte zich naar beneden en brak elk bot in je lichaam.")
}
function LightRechtsDoorgaanHulpWegrennen(){
    console.log("LightRechtsDoorgaanHulpWegrennen"); 
     keuze = prompt("Je rent weg en het gevogelte vliegt gelukkig door , je vervolgt je weg maar het word al wel donker, je kan gaan rusten of doorlopen.", "Rusten of Doorlopen");
    if(keuze.trim() == "Rusten"){
        LightRechtsDoorgaanHulpWegrennenRusten();
    }
    else if(keuze.trim() == "Doorlopen"){
        LightRechtsDoorgaanHulpWegrennenDoorlopen();
    }
    else{
        LightRechtsDoorgaanHulpWegrennen();
    }
}
function LightRechtsDoorgaanDoorlopenOvernachten(){
    console.log("LightRechtsDoorgaanDoorlopenOvernachten"); 
     keuze = prompt("Je zoekt een rustigge plek waar je kan gaan slapen zal je een kampvuur maken om jezelf warm te houden ja of nee?", "Ja of Nee");
    if(keuze.trim() == "Ja"){
        LightRechtsDoorgaanDoorlopenOvernachtenJa();
    }
    else if(keuze.trim() == "Nee"){
        LightRechtsDoorgaanDoorlopenOvernachtenNee();
    }
    else{
        LightRechtsDoorgaanDoorlopenOvernachten();
    }
}
function LightRechtsDoorgaanDoorlopenDoorlopen(){
    console.log("LightRechtsDoorgaanDoorlopenDoorlopen"); 
    alert("DEATH.... Je liep door maar uit vermoeidheid viel je in een gat en overleefde je het niet.")
}
function DarkLinksDoorgaanLinksSluipen(){
    console.log("DarkLinksDoorgaanLinksSluipen"); 
     keuze = prompt("Je sluipt er langs en het beest ziet jouw niet, vol opluchting vervolg je je wet. Het word wel donker je kan gaan rusten of doorlopen.", "Rusten of Doorlopen");
    if(keuze == "Rusten"){
        DarkLinksDoorgaanLinksSluipenRusten();
    }
    else if(keuze == "Doorlopen"){
        DarkLinksDoorgaanLinksSluipenDoorlopen();
    }
    else{
        DarkLinksDoorgaanLinksSluipen();
    }
}
function DarkLinksDoorgaanLinksAanspreken(){
    console.log("DarkLinksDoorgaanLinksAanspreken"); 
     keuze = prompt("je loopt erheen en probeert het beest aan te spreken, zodra je het beest aanspreekt praat het terug en legt je uit dat er een ondergronds tunnel systeem loopt dat langs het huis van je opa loopt. het beest vraagt je of hij mee zou mogen reizen door het tunnel systeem, wat zeg je mag hij mee of laat je hem achter.", "Meelaten of Achterlaten");
    if(keuze.trim() == "Meelaten"){
        DarkLinksDoorgaanLinksAansprekenMeelaten();
    }
    else if(keuze.trim() == "Achterlaten"){
        DarkLinksDoorgaanLinksAansprekenAchterlaten();
    }
    else{
        DarkLinksDoorgaanLinksAanspreken();
    }
}
function DarkLinksDoorgaanRechtsEerste(){
    console.log("DarkLinksDoorgaanRechtsEerste"); 
     keuze = prompt("Het portaal is uitgekomen bij het pad wat je zag door het portaal, het portaal sluit zich achter je en je vervolgt je weg, het word al wel langzaam nacht, ga je rusten of loop je door?", "Rusten of Doorlopen");
    if(keuze.trim() == "Rusten"){
        DarkLinksDoorgaanRechtsEersteRusten();
    }
    else if(keuze.trim() == "Doorlopen"){
        DarkLinksDoorgaanRechtsEersteDoorlopen();
    }
    else{
        DarkLinksDoorgaanRechtsEerste();
    }
}
function DarkLinksDoorgaanRechtsTweede(){
    console.log("DarkLinksDoorgaanRechtsTweede"); 
    alert("DEATH........ het portaal was een illusie en het bracht je helemaal niet naar het huis van je opa maar het was een val en je bent gestorven doordat de wereld vol met vleesetende planten je heeft opgegeten.");
}
function LightRechtsDoorgaanHulpWegrennenRusten(){
    console.log("LightRechtsDoorgaanHulpWegrennenRusten"); 
    alert("Death..... in je slaap ben je aangevallen en heb je de nacht niet overleeft");
}
function LightRechtsDoorgaanHulpWegrennenDoorlopen(){
    console.log("LightRechtsDoorgaanHulpWegrennenDoorlopen"); 
    alert("Death.... uit uitputting loop je tegen een muur en ben je gestorven");
}
function LightRechtsDoorgaanDoorlopenOvernachtenNee(){
    console.log("LightRechtsDoorgaanDoorlopenOvernachtenNee"); 
     keuze = prompt(" je bent doorgelopen en hebt nog vele kilometers afgelegd bij zonsopgang zie je in de verte het huis van je opa maar het ziet er niet zo uit als je herinnert, ook is er een weg de andere kant op maar je weet niet zeker of je daar wel heen moet wat doe je ga je naar het huis of volg je het pad.", "Huis of Pad");
    if(keuze.trim() == "Huis"){
        LightRechtsDoorgaanDoorlopenOvernachtenNeeHuis();
    }
    else if(keuze.trim() == "Pad"){
        LightRechtsDoorgaanDoorlopenOvernachtenNeePad();
    }
    else{LightRechtsDoorgaanDoorlopenOvernachtenNee();
    }
}
function LightRechtsDoorgaanDoorlopenOvernachtenJa(){
    console.log("LightRechtsDoorgaanDoorlopenOvernachtenJa"); 
     keuze = prompt("je hebt de nacht doorgebracht en vertrekt in de ochtend weer in alle rust in de richting van je opa's huis, alleen is er weer een splitsing waar ga je heen rechts of links?", "Links of Rechts");
    if(keuze.trim() == "Links"){
        LightRechtsDoorgaanDoorlopenOvernachtenJaLinks();
    }
    else if(keuze.trim() == "Rechts"){
        LightRechtsDoorgaanDoorlopenOvernachtenJaRechts();
    }
    else{
        LightRechtsDoorgaanDoorlopenOvernachtenJa();
    }
}
function DarkLinksDoorgaanLinksSluipenRusten(){
    console.log("DarkLinksDoorgaanLinksSluipenRusten"); 
     keuze = prompt(" je hebt hebt een goede nachtrust gehad en je vervolgt je weg richting het huis van je opa, er lijkt een splitsing te zijn met twee opties links of rechts wat doe je?", "Links of Rechts");
    if(keuze.trim() == "Rechts"){
        DarkLinksDoorgaanLinksSluipenRustenRechts();
    }
    else if(keuze.trim() == "Links"){
        DarkLinksDoorgaanLinksSluipenRustenLinks();
    }
    else{
        DarkLinksDoorgaanLinksSluipenRusten();
    }
}
function DarkLinksDoorgaanLinksSluipenDoorlopen(){
    console.log("DarkLinksDoorgaanLinksSluipenDoorlopen"); 
    alert("Death...... je hebt vanacht hard doorgelopen en zodra het laat werd hoorde je harde geluiden, dat zijn je laatste herindering");
}
function DarkLinksDoorgaanLinksAansprekenMeelaten(){
    console.log("DarkLinksDoorgaanLinksAansprekenMeelaten"); 
    alert("Death.... Het beest bleek toch niet zo betrouwbaar te zijn en heeft je opgegeten");
}
function DarkLinksDoorgaanLinksAansprekenAchterlaten(){
    console.log("DarkLinksDoorgaanLinksAansprekenAchterlatens"); 
    alert("Death.... na een tijdje door de tunnels te hebben gelopen ben je verdwaald geraakt en gestorven aan een tekort aan eten");
}
function DarkLinksDoorgaanRechtsEersteRusten(){
    console.log("DarkLinksDoorgaanRechtsEersteRusten"); 
     keuze = prompt("je hebt vanacht goed gerust en je loopt in de ochtend verder, je komt tot een splitsing waar je rechts of links kan, wat doe je?", "Links of Rechts");
    if(keuze.trim() == "Links"){
        DarkLinksDoorgaanRechtsEersteRustenLinks();
    }
    else if(keuze.trim() == "Rechts"){
        DarkLinksDoorgaanRechtsEersteRustenRechts();
    }
    else{
        DarkLinksDoorgaanRechtsEersteRusten();
    }
}
function DarkLinksDoorgaanRechtsEersteDoorlopen(){
    console.log("DarkLinksDoorgaanRechtsEersteDoorlopen"); 
    alert("Death...... je hebt vanacht hard doorgelopen en zodra het laat werd hoorde je harde geluiden, dat zijn je laatste herindering");
}
function LightRechtsDoorgaanDoorlopenOvernachtenNeeHuis(){
    console.log("LightRechtsDoorgaanDoorlopenOvernachtenNeeHuis"); 
    alert("Death.... het bleek inderdaad niet het huis te zijn van je opa en je bent tot in de oneindigheid doorgelopen");
}
function LightRechtsDoorgaanDoorlopenOvernachtenNeePad(){
    console.log("LightRechtsDoorgaanDoorlopenOvernachtenNeePad"); 
    alert("Death.... het pad heeft je alleen maar naar meer  duisterheden gebracht en heeft je je dood gebracht");
}
function LightRechtsDoorgaanDoorlopenOvernachtenJaLinks(){
    console.log("LightRechtsDoorgaanDoorlopenOvernachtenJaLinks"); 
    alert("Death...het pad was geen goede keuze geweest en heeft je tot je dood geleid");
}
function LightRechtsDoorgaanDoorlopenOvernachtenJaRechts(){
    console.log("LightRechts"); 
    alert("Death...het pad was geen goede keuze geweest en heeft je tot je dood geleid");
}
function DarkLinksDoorgaanLinksSluipenRustenLinks(){
    console.log("DarkLinksDoorgaanLinksSluipenRustenLinks"); 
    alert("Death...het pad was geen goede keuze geweest en heeft je tot je dood geleid");
}
function DarkLinksDoorgaanLinksSluipenRustenRechts(){
    console.log("DarkLinksDoorgaanLinksSluipenRustenRechts"); 
    alert(" Death...het pad was geen goede keuze geweest en heeft je tot je dood geleid");
}
function DarkLinksDoorgaanRechtsEersteRustenLinks(){
    console.log("DarkLinksDoorgaanRechtsEersteRustenLinks"); 
    alert(" Death...het pad was geen goede keuze geweest en heeft je tot je dood geleid,");
}
function DarkLinksDoorgaanRechtsEersteRustenRechts(){
    console.log("DarkLinksDoorgaanRechtsEersteRustenRechts"); 
    
    if(1 > 0){
        alert("Win.... het was een goede keuze je kwam in de voortuin  van het huis van je opa uit.");
    }

}