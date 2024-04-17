const helloWorld = () => {
    const h1 = document.getElementById("helloWorldText");
    h1.innerText = "Olá Mundo!";
}

const sum = () => {
    let number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const sumMessage = document.getElementById("sumMessage");
    const sumResult = document.getElementById("sumResult");

    const sum = Number(number1) + Number(number2);

    if (!number1 || !number2) {
        sumMessage.innerText = "Digite dois números para somar!";
        sumResult.innerText = "";
    } else {
        sumMessage.innerText = "";
        sumResult.innerText = `A soma é: ${sum}`;
    }

    // Zerando os valores dos campos de entrada
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

const colorById = () => {
    const div = document.getElementById("changeById");
    div.style.background = "yellow";
}


const colorByName = () => {
    const div = document.querySelector('[name="changeByName"]');
    div.style.background = "black";
}

const colorByClass = () => {
    const div = document.querySelector(".changeByClass");
    div.style.background = "orange";
}
