// Chiedere il suo Nome.

let nome = prompt("Qual è il tuo nome");

console.log(nome);

// Chiedere il suo Cognome.

let cognome = prompt("Qual è il tuo cognome");

console.log(cognome);

// Chiedere il suo colore preferito.

let colore = prompt("Qual è il tuo colore preferito");

console.log(colore);


// creo una variabile di numero 21.
let numero = 21;

console.log(numero);


//Uitima cosa scrivere sulla pagina nome + cognome + colore + 21.

document.getElementById ("title").innerHTML = `Ecco la tua nuova password: ${nome}${cognome}${colore}${numero}.`;

