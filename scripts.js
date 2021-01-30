const Modal={
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        //fechar o modal
        //remover a class active do modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

const transactions =[
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 50000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]


const Transaction = {
    incomes(){
        //somar entradas
    },
    expense(){
        //somar as saídas
    },
    total(){

    }
}

const DOM ={
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    },
    innerHTMLTransaction(transaction) { 
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="remover transação">
            </td>
        `
        return html
    }
}

DOM.addTransaction(transactions[0])