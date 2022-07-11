/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const root = new Vue({
    el: '#display',
    data: {
        firstName: 'Francesco',
        lastName: 'Rossi',
        age: '25',
        url: 'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg'
    }
});