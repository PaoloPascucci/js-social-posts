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
        image: 'https://picsum.photos/601/350',
        date: '2 mesi fa',
        Nlikes: 100,
        name: 'Sofia Perlari',
        avatar: 'https://picsum.photos/51'
    }
];

const PostLiked = [];

for (let i = 0; i < Object.length; i++) {
    const Post = Object[i];

    document.querySelector('.container').innerHTML += `
    <div class="card">
    <div class="container">
    <div class="row">
        <div class="col-1 py-3"><img class="rounded-circle " src="${Post.avatar}" alt=""></div>
        <div class="col-11">
            <h1 class="fs-3 px-1">${Post.name}</h1>
            <span class="px-1">${Post.date}</span>
        </div>
        <div class="col-12">${Post.content}</div>
                        </div>
    <div class="card-img"><img src="${Post.image}" alt=""></div>
    <div class="row card_text gx-0">
        <div class="col fw-bold"><i class="fas fa-thumbs-up"></i>Mi Piace</div>
        <div class="col fw-bold">Piace a ${Post.Nlikes} persone</div>
    </div>
    </div>
    </div>
`
}



