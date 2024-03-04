// console.log('connesso');


const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//   stampare su console le informazioni di nome, ruolo e la stringa della foto

// creo un ciclo for per iterare tra gli elementi(oggetti) dell'array

for (let i = 0; i < team.length; i++) {
    const teamMembers = team[i];

    // console.log(teamMembers);

    // creo un ciclo for in per iterare tra le caratteristiche del singolo oggetto

    for (const key in teamMembers) {

        // utilizzo console.log per stampare le caratteristiche dei vari oggetti
        // console.log(teamMembers[key]);

        // stampare le stesse informazioni su DOM sottoforma di stringhe
        // creo degli elementi nella DOM dentro i quali stamperò i dati degli oggetti tutto dentro al ciclo for in

        const container = document.querySelector('.container');

        // console.log(container);

        const markupMember = `<p>${teamMembers[key]}</p>`

        container.innerHTML += (markupMember);
    }
}





