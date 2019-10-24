/* Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. QUINDI OUTPUT sarà tipo:
1
2
“Fizz”
4
“Buzz”
“Fizz”
7
8
“Fizz”
“Buzz”
11
“Fizz”
13
14
“FizzBuzz”
16
……

BONUS:
- ci possono essere vari modi di affrontare e risolvere la cosa, nella cartella principale tengo quella che reputo la migliore, in una cartella bonus metto versione/i alternative;
- gli oputput hanno colore diverso a seconda di quello che sono: (“Fizz” colore diverso da “Buzz”, etc.)
- elaborazione di entrambi a livello di output e ottimizzazione codice (da ora sarà abbastanza una costante come bonus); */

document.getElementsByClassName("container")[0].innerHTML = 
    "<p><ul class=\"fizz-buzz-ul\"></ul></p>";
var fizzBuzzUl = document.getElementsByClassName("fizz-buzz-ul")[0];
for (var i = 1; i < 101; ++i)
{
    if (i % 3 === 0 && i % 5 === 0) fizzBuzzUl.innerHTML += "<li>FizzBuzz</li>";
    else if (i % 3 === 0) fizzBuzzUl.innerHTML += "<li>Fizz</li>";
    else if (i % 5 === 0) fizzBuzzUl.innerHTML += "<li>Buzz</li>";
    else fizzBuzzUl.innerHTML += "<li>" + i + "</li>";
}