const userEvenOrOdd = process.argv[2].toLowerCase()
const userChooseANumber = Number(process.argv[3])
let computerEvenOrOdd = ""
let gameEvenOrOdd = ""

if (!userEvenOrOdd || !userChooseANumber) {
    console.log("Digite o número e/ou se queres par ou ímpar")
} else {
    if (userEvenOrOdd === "par") {
        computerEvenOrOdd = "ímpar"
    } else { computerEvenOrOdd = "par" }
    console.log(`você escolheu ${userEvenOrOdd} e o número lançado foi ${userChooseANumber}`)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const computerNumberChoose = getRndInteger(0, 10)
    console.log(`O computador ficou com ${computerEvenOrOdd} e lançou o número ${computerNumberChoose}`)

    const finalSum = userChooseANumber + computerNumberChoose
    console.log(`O resultado deu ${finalSum}`)

    if (finalSum % 2 === 0) {
        gameEvenOrOdd = 'par'
    } else {
        gameEvenOrOdd = 'ímpar'

    }
    if ((gameEvenOrOdd === "par" && userEvenOrOdd === "par") || (gameEvenOrOdd === "ímpar" && userEvenOrOdd === "ímpar") ){
        console.log(`Você escolheu ${userEvenOrOdd} e digitou ${userChooseANumber}, já o computador ficou com ${computerEvenOrOdd} e digitou ${computerNumberChoose}.
        A soma dos números deu ${finalSum}. O resultado final é ${gameEvenOrOdd}. Você ganhou!
        `)
    } else if ((gameEvenOrOdd === "par" && userEvenOrOdd === "ímpar") || (gameEvenOrOdd === "ímpar" && userEvenOrOdd === "par")){
        console.log(`Você escolheu ${userEvenOrOdd} e digitou ${userChooseANumber}, já o computador ficou com ${computerEvenOrOdd} e digitou ${computerNumberChoose}.
        A soma dos números deu ${finalSum}. O resultado final é ${gameEvenOrOdd}. Você perdeu!
        `)
}}
