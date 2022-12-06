
const createTransactionForm = document.querySelector('#formTransaction')
const historialOfTransactions = document.querySelector('#transactionHistorial')
const totalSavesLocation = document.querySelector('#totalSaves')

createTransactionForm.addEventListener("submit", async(event) => {
    event.preventDefault();

    const inputConceptTransacation = document.querySelector('#conceptTransacation')
    const inputAmonuntTransaction = document.querySelector('#amonuntTransaction')

    let transaction = {
        concept:inputConceptTransacation.value, amount:inputAmonuntTransaction.value,
    };

    console.log(transaction);

    inputConceptTransacation.value ="";
    inputAmonuntTransaction.value = "";

    drawTransaction(transaction)
    insertTotalSaves(transaction)

});

function drawTransaction(transaction){
    const transactionElement = document.createElement("transaction");

    let transactionContent = `
    <p>${transaction.concept}</p>
    <p>${transaction.value}</p>`

    transactionElement.innerHTML=transactionContent;
    historialOfTransactions.prepend(transactionElement)

}

function insertTotalSaves(transaction){   
    const totalSaves = document.createElement("totalSaves");
    
   

    totalSavesAmount = `
    <p>~${transaction.amount}</p>`

    totalSaves.innerHTML=totalSavesAmount;
    totalSavesLocation(totalSaves)
}

function insertIncomeOrWaste(transactionAmount){
    const incomeElement = documento.createElement("income")
    const wasteElement = document.createElement("waste")

    if (transactionAmount >0 );


}
// }

// function insertRowInHistorialTable(transactionFormData){
//     const conceptTransacation = document.querySelector("#conceptTransacation")
//     const amonuntTransaction = document.querySelector("#amonuntTransaction")

//     let transactionConceptRef = conceptTransacation.insertRow(-1);
//     newTransactionConceptRed = transactionConceptRef.insertRow(-1);



// //     let transactionTableRef = document.getElementById("transactionTable")
// //     let newTransactionRowRef = transactionTableRef.insertRow(-1);

// //     let newTransactionCellRef = newTransactionRowRef.insertCell(0);
// //     newTransactionCellRef.textContent = transactionFormData.get("conceptTransacation")

// //     newTransactionCellRef = newTransactionRowRef.insertCell(1);
// //     newTransactionCellRef.textContent = transactionFormData.get("amonuntTransaction")

// //     transactionFormData.get("conceptTransacation")
// //     transactionFormData.get("amonuntTransaction")
// // }
// }