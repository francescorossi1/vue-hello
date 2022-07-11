/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

console.log('vue ok',Vue);

const root = new Vue({
    el: '#display',
    data: {
        firstName: 'Francesco',
        lastName: 'Rossi',
        age: '25',
    }
});