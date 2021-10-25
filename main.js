/*Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
    autore(nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.*/

const Object = [

    {
        id: '1',
        content: 'Placeat libero ipsa quibusdam quas harum ut. Distictio minima iusto. Ad ad maiores et sint voluptate reusandae architrcto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/600/350',
        date: '4 mesi fa',
        Nlikes: 80,
        name: 'Phil Mangione',
        avatar: 'https://picsum.photos/50'
    },
    {
        id: '2',
        content: 'Placeat libero ipsa quibusdam quas harum ut. Distictio minima iusto. Ad ad maiores et sint voluptate reusandae architrcto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/600/350',
        date: '2 mesi fa',
        Nlikes: 100,
        name: 'Sofia Perlari',
        avatar: 'https://picsum.photos/50'
    }
];

const PostLiked = [];

