
const transactionForm = document.querySelector('#formTransaction')
const concept = document.querySelector('#conceptTransaction')
const amount = document.querySelector('#amountTransaction')
const historialOfTransactions = document.querySelector('#transactionHistorial')
const balance = document.querySelector('#totalBalance')
const totalIncome = document.querySelector('#totalIncome')
const totalExpense = document.querySelector('#totalExpense')


transactionForm.addEventListener("submit", async(event) => {
    event.preventDefault();
    //INTETO DE SALTAR ERROR EN CASO DE VACIO
    // if (inputConceptTransacation.value.thrim() === "" || inputAmonuntTransaction.value.thrim() === ""){
    //     document.querySelector('#error').innerHTML = 
    //     "<span> Debes introducir una descripción y una cantidad. <span>";
    // } else {
    
    const transaction = {
            concept: concept.value, 
            amount: amount.value,
        };
    
    drawTransaction(transaction);
    upDateValues(transaction);
    
    concept.value ="";
    amount.value = "";
    
    });

function drawTransaction(transaction){


    const transactionElement = document.createElement("transaction");

    let transactionContent = `
    <p>${transaction.concept} : ${transaction.amount}</p>`

    transactionElement.innerHTML=transactionContent;
    historialOfTransactions.prepend(transactionElement)

}

function upDateValues(transaction){  
    let newTransaction = transaction.amount
    let amounts = amount + (newTransaction)
    let income
    let expense
    let total

    if (newTransaction>0){
        income = newTransaction
        total = amounts + income
    }else{
        expense = newTransaction 
        total = amounts + expense
    }
    
    
   

    totalJson = JSON.stringify(total)
    incomeJson = JSON.stringify(income)
    expenseJson = JSON.stringify(expense)

    balance.innerText = `${totalJson}€`;
    totalIncome.innerText = `${incomeJson}€`
    totalExpense.innerText = `${expenseJson}€`;
}

// function insertIncomeOrWaste(transactionAmount){
//     const incomeElement = documento.createElement("income")
//     const wasteElement = document.createElement("waste")

//     if (transactionAmount >0 );


// }