// Creazione array vuoto
var lista_numeri=[];

//inserimento numeri nell'array
for (var i = 1; i <= 100; i++) {

  var li=document.createElement("LI");

//condizione per i multipli di 3 e 5
  if (i % 3 == 0 && i % 5 == 0) {
    lista_numeri[i] = "FizzBuzz";

//condizione per i multipli di 3
  }
  else if (i % 3 == 0) {
    lista_numeri[i] = "Fizz";

  }

//condizione per i multipli di 5
  else if (i % 5 == 0) {
    lista_numeri[i] = "Buzz";
  }

  else {
    lista_numeri[i] = i;
  }

  var numeri = document.createTextNode(lista_numeri[i]);
   li.appendChild(numeri);


//stampa finale
  document.getElementById("listanumerihtml").appendChild(li);
}
