
const createTransactionForm = document.querySelector('#formTransaction')


// const totalIncome = document.querySelector("#transactionTable")
// const totalWaste = document.querySelector("#transactionTable")
// const totalSaves = document.querySelector("#totalSaves")

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



});

function drawTransaction(transaction){
    const transactionElement = document.createElement("transaction");

    
}

// function insertTotalSaves(transactionFormData){   
// }


// function insertIncomeOrWaste(transactionFormData){

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