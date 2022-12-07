
const transactionForm = document.querySelector('#formTransaction')
const conceptSpace = document.querySelector('#conceptTransaction')
const amountSpace = document.querySelector('#amountTransaction')
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
        concept: conceptSpace.value, 
        amount: amountSpace.value,
    };
    
    transactions.push(transaction);
    
    drawTransaction(transaction);
    
    // updateIncome(transaction);
    // updateExpense(transaction);
    updateTotaltransactions(transaction);
    updateLocalStorage(transaction);
    
    
    
    conceptSpace.value ="";
    amountSpace.value = "";
    
});

function drawTransaction(transaction){
    
    const transactionSign = transaction.amount <0 ? "-" : "+";
    
    const transactionElement = document.createElement("list");

    transactionElement.classList.add(transaction.amount <0 ? "minus":"plus");
   
    let transactionContent = `${transaction.concept}:${transactionSign}${Math.abs(transaction.amount)}€<button class="delete-button" onclick="deleteTransaction(${
        transaction.id
    })">X</button>
    `
    transactionElement.innerHTML=transactionContent;
    
    historialOfTransactions.appendChild(transactionElement)  
}

function generateIdTransaction(){
    return Math.floor(Math.random() *100000000);
}



function updateIncome(transaction){ 
      
let newTransaction = [parseFloat(transaction.amount)]
let income = 0;
{for (let i = 0; i < newTransaction.length; i++) {
    if ((parseFloat(newTransaction)) > 0 ) {    
    income = + parseFloat(newTransaction)    
    } else {income = income}}

totalIncome.innerHTML =  `${(parseInt(totalIncome.innerHTML)) + (parseInt(income))}€`
return income
}}
    
function updateExpense(transaction){
    
    let newTransaction = [parseFloat(transaction.amount)]

    let expense = 0;
    {for (let i = 0; i < newTransaction.length; i++) {
        if ((parseFloat(newTransaction)) < 0 ) {    
        expense =  (parseFloat(newTransaction) )   
        } else {expense = expense}}
    
        totalExpense.innerHTML = `${(parseInt(totalExpense.innerHTML)) + (parseInt(expense))}€`
        return expense
    }}




function updateTotaltransactions(transaction){
    updateExpense(transaction)
    updateIncome(transaction)
    balance.innerHTML = `${(parseInt(expense) + (parseInt(income)) )}€`

}




    



// let total = 0


//     if ((newTransaction) > 0 ){
//         income =  (income + newTransaction)
//         expense = (0) 
//         total = (income + expense)
//     } else {
//         expense = expense + newTransaction
//         income = 0         
//         total = expense + income 
//     }
   

   
   


// //     const amounts = transactions.map((newTransaction)=> newTransaction.amount)
    
// //     total = amounts
// //     .reduce((bal, value) => (bal += value),0)
    
// //     ;
    
    
// //    income = amounts
// //     .filter((value)=> value >0)
// //     .reduce((bal,value)=> (bal +=value),0)
// //     ;
    
// //     expense =  amounts
// //     .filter((value)=> value <0)
// //     .reduce((bal,value)=> (bal+=value),0 )*-(1)
    
    
    
//     // totalJson = JSON.stringify(total)
//     // incomeJson = JSON.stringify(income)
//     // expenseJson = JSON.stringify(expense)
    
//     console.log((total))
//     console.log(income)
//     console.log(expense)

//     // balance.textContent =`${total}€`;
//     // totalIncome.textContent = `${income}€`;
//     // totalExpense.textContent = `${expense}€`;




function deleteTransaction(id){
    transactions = transactions.filter((transaction) => transaction.id !== id);
    updateLocalStorage();
    start()
}


function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function start(){
    historialOfTransactions.innerHTML = "";
    transactions.forEach(drawTransaction);
    updateIncome(transaction);
}
