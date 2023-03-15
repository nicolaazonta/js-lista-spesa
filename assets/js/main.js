/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */


/* const foodList = [
    'legumi',
    'ceci',
    'polenta',
    'porri',
    'avena',
    'biscotti',
    'avena'
] 

let k = 0;
while (k < foodList.length) {
    let productEl = foodList[k];
    console.log(productEl);

    let itemList=document.querySelector('ul');
    itemList.insertAdjacentHTML('afterbegin' , `<li>${productEl}</li>`)

    k++
} */



/* Consegna:
Bonus chiedi all'utente di creare la lista della spesa (dieci prodotti) e fai visualizzare in pagina solo i prodotti più corti di 8 lettere */

const foodList = [] ;

let k = 0;
while (k < 10) {
    let productEl = foodList[k];

    productEl = prompt('inserisci un prodotto');

    
    if(productEl.length <= 8){
        let itemList=document.querySelector('ul');
        itemList.insertAdjacentHTML('afterbegin' , `<li>${productEl}</li>`) 
    }


    

    k++
}
