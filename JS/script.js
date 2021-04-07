// - Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
// - In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
// - La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//INIZIO

var numeroMax = 100;
var numeroBombe = 16;
var possibilita = numeroMax - numeroBombe;
var lista = [];
var numeriConsentiti = [];
var utente = 0;

//GENERAZIONE BOMBE
while (lista.length < numeroBombe){
    var bomba = numeroRandom(numeroMax);
    if(! lista.includes(bomba)){    //SE NON C'E' PUSHA DENTRO i NUMERI CHE NON CI SONO
        lista.push(bomba);
    }
}
console.log("Lista Bombe" , lista);

//CONDIZIONE PER VERIFICARE SE SI PRENDE LA BOMBA
while( (numeriConsentiti.length < possibilita) && (! lista.includes(utente)  )){
    utente = parseInt(prompt("Inserisci un numero da 1 a ", + numeroMax + "\nTentatovi riusciti:" + numeriConsentiti.length + "di" + possibilita))
}

while(isNaN(utente) || utente < 1 || utente > numeroMax){
    utente = parseInt(prompt ("Valore non valido, inserisci un numero da 1 a ") + numeroMax)
}
console.log(utente);

//NUMERO LISTA BOMBA
if(lista.includes(utente) ){
    alert("Hai perso :(" + numeriConsentiti.length + " volte prima di trovare la bomba");
}else if(numeriConsentiti.includes(utente)){
    alert("Numero già inserito, inseriscine un altro " )
}else if(! numeriConsentiti.includes(utente)){
    numeriConsentiti.push(utente);
}




//FUNZIONI
function numeroRandom(max){
    return Math.floor( Math.random() * max) + 1;
}