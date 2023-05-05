// let num1 = Number(prompt("Введите первое число"))
// let operation = prompt("Выберите действие \n+\n-\n*\n/")
// let num2 = Number(prompt("Введите второе число"))
//
//
// const calculator = () => {
//     let result
//
//     (isNaN(num1) || isNaN(num2)) ?
//         alert("Введите только числа") :
//         true
//
//     switch (operation) {
//         case "+":
//             result = num1 + num2
//             break
//         case "-":
//             result = num1 - num2
//             break
//         case"*":
//             result = num1 * num2
//             break
//         case '/':
//             (num2 === 0) ? result= "На ноль делить нельзя" : result = num1 / num2
//             break
//         default:
//             alert("Выберите правильное действие")
//     }
//     console.log(result)
// }
//
//
// calculator()





const buttons= document.querySelectorAll('button')


for (let Ahmad = 0; Ahmad < buttons.length; Ahmad++) {
    buttons[Ahmad].onclick = ({target}) => {
        document.body.style.backgroundColor = target.innerText
    }
}






















