//CREAMOS LAS ETIQUETAS DONDE SE VAN A UBICAR LOS DIFERENTES VALORES 
const balance = document.querySelector("#totalBalance")
const totalIncome = document.querySelector('#totalIncome')
const totalExpense = document.querySelector('#totalExpense')
const transactionHistorial= document.querySelector('#transactionHistorial')
const transactionForm = document.querySelector('#formTransaction')
const transactionConcept = document.querySelector('#conceptTransaction')
const transactionAmount = document.querySelector('#amountTransaction')


const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

let transacations = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

//NEW TRANSACTIONS

function newTransaction(event){
    event.preventDefault();

    if (transactionConcept.value === "" || transactionAmount.value ===""){
        document.getElementById("error").innerHTML = "<span> Debe introducir una descripción y una cantidad , gracias! </span>";
        setTimeout( ()=> (document.getElementById("error").innerHTML = ""), 3000);
    } else {
        const transaction = {
            id: generateIdTransaction(),
            concept: transactionConcept.value, 
            amount: + transactionAmount.value,
        };

    transacations.push(transaction);

    drawTransactions(transaction)

    updateValues();

    updateLocalStorage();

    transactionAmount.value = "";
    transactionConcept.value = "";
        
    }
}

// FUNCION PARA CREAR UN ID RANDOM

function generateIdTransaction(){
    return Math.floor(Math.random()*100000);
}

// MOSTRAR EN PANTALLA EL HISTORIAL DE TRANSACCIONES

function drawTransactions(transaction){
    const sign = transaction.amount < 0 ? "-" :"+";

    const movement = document.createElement("li");

    movement.classList.add( transaction.amount < 0 ? "minus" : "plus");

    movement.innerHTML = `
    ${transaction.concept} ${sign}${Math.abs(
    transaction.amount
  )} <button class="delete-buttton" onclick="removeTransaction(${
    transaction.id
  })">X</button>
  `;

  
  transactionHistorial.appendChild(movement);

}

//FUNCION PARA ACTUALIZAR VALORES

function updateValues(){
    //creamos el array con los valores de las transacciones
    const totalAmounts = transacations.map((transaction)=> transaction.amount);

    //con un reduce sumamos al total el valor de las transacciones
    const totalMoney = totalAmounts
    .reduce((acc,value)=>(acc +=value),0)
    .toFixed(2)

    //con un filtro, filtramos las transacciones positivas y con un reduce las sumamos para dar el total de ingresos
    const income = totalAmounts
    .filter((value)=> value >0)
    .reduce((acc,value)=>(acc +=value),0)
    .toFixed(2);

    //con un filtro, filtramos las transacciones negativas y con un reduce las sumamos para dar el total de gastos
    const expense = totalAmounts
    .filter((value)=> value < 0)
    .reduce((acc,value)=>(acc +=value),0)
    .toFixed(2);

    //con inner HTML lo mostramos en la pantalla
    balance.innerHTML =`€${totalMoney}`;
    totalIncome.innerHTML =`€${income}`;
    totalExpense.innerHTML = `€${expense}`;

}


//FUNCION PARA BORRAR TRANSACCION CON EL ID CREADO

function removeTransaction(id){
    transacations = transacations.filter((transaction)=> transaction.id !== id);

    updateLocalStorage();
    start();

}

//ACTUALIZAR LOCAL STORAGE

function updateLocalStorage(){
    localStorage.setItem("transactions", JSON.stringify(transacations));
}

//EMPEZAR DE NUEVO

function start(){
    transactionHistorial.innerHTML = "";
    transacations.forEach(drawTransactions);
    updateValues();
}

start();

//EVENTO AL ENVIAR "AÑADIR TRANSACCIÓN"

transactionForm.addEventListener("submit", newTransaction);