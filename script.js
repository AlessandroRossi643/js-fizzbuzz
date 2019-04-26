// stampare tutti i numeri da 1 a 100
var numeri=0;
for (var i = 0; i < 100; i++) {
  numeri++;

// condizione per i multipli di 5
  if (numeri%5==0) {
    console.log("Buzz");
  }

// condizione per i multipli di 3
  if (numeri%3==0) {
    console.log("Fizz");
  }
  console.log(numeri)

// condizione per i multipli di 3 e 5
  if (numeri%3==0 && numeri%5==0) {
    console.log("FizzBuzz");
  }
}





// stampa finale
