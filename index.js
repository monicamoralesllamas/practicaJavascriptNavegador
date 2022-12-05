// const createTransaction = document.querySelector("#createTransaction")
// const transactionConcept = document.querySelector("#conceptTransacation")
// const trancsactionAmount = document.querySelector("#amountTransaction")
// console.log(trancsactionAmount,transactionConcept)

// createTransaction.addEventListener("submit", async(event)=> {
//     let transactionFormData = new FormData(createTransaction)

// // let transaction = {
// // }
// })

// function drawTransactions(transaction) {
//     const transactionConcept = document.querySelector("#conceptTransacation")
//     const trancsactionAmount = document.querySelector("#amountTransaction")

// }

const form = document.getElementById("formTransaction")
console.log(form)

form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event)
    let transactionFormData = new FormData(form);
    insertRowInTransactionTable(transactionFormData)

})


function insertRowInTransactionTable(transactionFormData){
    let transactionTableRef = document.getElementById("transactionTable")
    let newTransactionRowRef = transactionTableRef.insertRow(-1);

    let newTransactionCellRef = newTransactionRowRef.insertCell(0);
    newTransactionCellRef.textContent = transactionFormData.get("conceptTransacation")

    newTransactionCellRef = newTransactionRowRef.insertCell(1);
    newTransactionCellRef.textContent = transactionFormData.get("amonuntTransaction")

    transactionFormData.get("conceptTransacation")
    transactionFormData.get("amonuntTransaction")
}

