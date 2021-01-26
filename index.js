// login Event handelar

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display = "block";
})


// deposite button Event handelar

const depositeBtn = document.getElementById("addDeposite");
depositeBtn.addEventListener("click", function(){
    const depositeAmount = document.getElementById("depositeAmount").value;
    const depositNumber = parseFloat("depositeAmount");
})
