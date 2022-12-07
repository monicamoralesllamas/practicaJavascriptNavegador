
const transactionForm = document.querySelector('#formTransaction')
const concept = document.querySelector('#conceptTransaction')
const amount = document.querySelector('#amountTransaction')
const historialOfTransactions = document.querySelector('#transactionHistorial')
const balance = document.querySelector('#totalBalance')
const totalIncome = document.querySelector('#totalIncome')
const totalExpense = document.querySelector('#totalExpense')

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));
let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const transaction = {
            id: generateIdTransaction(),
            concept: concept.value, 
            amount: amount.value,
        };
    
    transactions.push(transaction);

    drawTransaction(transaction);

    updateValues();

    updateLocalStorage();
    
    concept.value ="";
    amount.value = "";
    
    });

function drawTransaction(transaction){


    const transactionElement = document.createElement("transaction");

    let transactionContent = `
    <p>${transaction.concept}:           ${transaction.amount}</p>`

    transactionElement.innerHTML=transactionContent;
    historialOfTransactions.appendChild(transactionElement)

}

function updateValues(){ 
 
    const amounts = transactions.map((transaction)=> transaction.amount)

    const total = amounts
    .reduce((bal, value) => (bal += value),0);
    
    
    const income = amounts
    .filter((value)=> value >0)
    .reduce((bal,value)=> (bal +=value),0);
   

    const expense =  amounts
    .filter((value)=> value <0)
    .reduce((bal,value)=> (bal+=value),0 )* (-1);


    // totalJson = JSON.stringify(total)
    // incomeJson = JSON.stringify(income)
    // expenseJson = JSON.stringify(expense)

    balance.innerText = `${total}€`;
    totalIncome.innerText = `${income}€`
    totalExpense.innerText = `${expense}€`;
}

function generateIdTransaction(){
    return Math.floor(Math.random() *100000000);
}

function deleteTransaction(id){
transactions = transactions.filter((transaction) => transaction.id !== id);
updateLocalStorage();

start();

}


function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

function start(){
    historialOfTransactions.innerHTML = "";
    transactions.forEach(drawTransaction);
    upDateValues();
}

start();

