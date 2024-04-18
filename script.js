let participantesLista = [
    {
        nome: 'Diego Fernandes',
        email: 'diego@gmail.com',
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0) 
    },
    {
        nome: 'Mayk Brito',
        email: 'mayk@gmail.com',
        dataInscricao: new Date(2024, 1, 2, 19, 23),
        dataCheckIn: new Date(2024, 1, 5, 20, 20) 
    },
    {
        nome: 'Ana Souza',
        email: 'ana@gmail.com',
        dataInscricao: new Date(2024, 0, 12, 14, 45),
        dataCheckIn: new Date(2024, 0, 15, 18, 10) 
    },
    {
        nome: 'Pedro Lima',
        email: 'pedro@gmail.com',
        dataInscricao: new Date(2024, 2, 4, 10, 30),
        dataCheckIn: null
    },
    {
        nome: 'Camila Oliveira',
        email: 'camila@gmail.com',
        dataInscricao: new Date(2024, 3, 1, 16, 55),
        dataCheckIn: new Date(2024, 3, 5, 19, 30) 
    },
    {
        nome: 'Lucas Santos',
        email: 'lucas@gmail.com',
        dataInscricao: new Date(2024, 0, 28, 20, 10),
        dataCheckIn: new Date(2024, 1, 1, 22, 15) 
    },
    {
        nome: 'Carla Silva',
        email: 'carla@gmail.com',
        dataInscricao: new Date(2024, 1, 14, 11, 40),
        dataCheckIn: new Date(2024, 1, 17, 13, 55) 
    },
    {
        nome: 'Mariana Mendes',
        email: 'mariana@gmail.com',
        dataInscricao: new Date(2024, 2, 8, 9, 15),
        dataCheckIn: new Date(2024, 2, 11, 11, 20) 
    },
    {
        nome: 'Rafaela Costa',
        email: 'rafaela@gmail.com',
        dataInscricao: new Date(2024, 0, 5, 18, 30),
        dataCheckIn: null
    },
    {
        nome: 'Gustavo Oliveira',
        email: 'gustavo@gmail.com',
        dataInscricao: new Date(2024, 1, 20, 22, 5),
        dataCheckIn: null
    },
    {
        nome: 'Fernanda Lima',
        email: 'fernanda@gmail.com',
        dataInscricao: new Date(2024, 3, 10, 15, 30),
        dataCheckIn: new Date(2024, 3, 14, 18, 45) 
    },
    {
        nome: 'José Oliveira',
        email: 'jose@gmail.com',
        dataInscricao: new Date(2024, 2, 15, 9, 20),
        dataCheckIn: new Date(2024, 2, 18, 11, 35) 
    },
    {
        nome: 'Aline Rodrigues',
        email: 'aline@gmail.com',
        dataInscricao: new Date(2024, 1, 28, 13, 55),
        dataCheckIn: new Date(2024, 2, 2, 16, 20) 
    },
    {
        nome: 'Marcelo Silva',
        email: 'marcelo@gmail.com',
        dataInscricao: new Date(2024, 0, 20, 17, 10),
        dataCheckIn: null
    },
    {
        nome: 'Sandra Souza',
        email: 'sandra@gmail.com',
        dataInscricao: new Date(2024, 1, 10, 20, 45),
        dataCheckIn: new Date(2024, 1, 14, 22, 55) 
    },
    {
        nome: 'Paulo Santos',
        email: 'paulo@gmail.com',
        dataInscricao: new Date(2024, 2, 1, 11, 15),
        dataCheckIn: new Date(2024, 2, 4, 13, 20) 
    },
    {
        nome: 'Carolina Oliveira',
        email: 'carolina@gmail.com',
        dataInscricao: new Date(2024, 3, 2, 14, 30),
        dataCheckIn: new Date(2024, 3, 6, 17, 40) 
    },
    {
        nome: 'André Costa',
        email: 'andre@gmail.com',
        dataInscricao: new Date(2024, 0, 8, 18, 5),
        dataCheckIn: new Date(2024, 0, 12, 20, 15) 
    },
    {
        nome: 'Luana Ferreira',
        email: 'luana@gmail.com',
        dataInscricao: new Date(2024, 1, 25, 10, 40),
        dataCheckIn: null
    },
    {
        nome: 'Rodrigo Mendonça',
        email: 'rodrigo@gmail.com',
        dataInscricao: new Date(2024, 2, 18, 16, 20),
        dataCheckIn: new Date(2024, 2, 22, 19, 30) 
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    if(!participante.dataCheckIn){
        dataCheckIn = `
            <button
                data-email='${participante.email}'
                onclick='fazerCheckIn(event)'
            >
            Confirmar check-in
            </button>
        `
    }

    return `
    <tr>
        <td>
            <strong>${participante.nome}</strong>
            <br>
            <small>${participante.email}</small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `;
}

const atualizarLista = (participantes) => {
    let output = '';

    for(const participante of participantes){
        output = output + criarNovoParticipante(participante);
    }

    document.querySelector('tbody')
    .innerHTML = output;
}

const adicionarParticipante = (event) => {
    event.preventDefault();
    
    const dadosDoFormulário = new FormData(event.target)
    
    if(participantesLista.find((p) => dadosDoFormulário.get('email') === p.email)){
        alert('E-mail já cadastrado!');
        return;
    }

    const participante = {
        nome: dadosDoFormulário.get('nome'),
        email: dadosDoFormulário.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

    participantesLista = [participante, ...participantesLista];

    atualizarLista(participantesLista);

    event.target.querySelector('[name="nome"]').value = '';
    event.target.querySelector('[name="email"]').value = '';
}

const fazerCheckIn = (event) => {

    if(!confirm('Tem certeza que deseja fazer o check-in?')) return

    const participante = participantesLista.find((p) => p.email === event.target.dataset.email);

    participante.dataCheckIn = new Date();

    atualizarLista(participantesLista);
}

atualizarLista(participantesLista);