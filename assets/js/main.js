let yourBirthYear = prompt("tug'ilgan yilingizni kiriting")
let now = new Date
const yourAge = () => {
    yourBirthYear <= 0 ? alert('0 dan katta qiymat kiriting') : alert(now.getFullYear() - yourBirthYear) 
}
yourAge()


let dollarCurrency = 10900
let currentCount = prompt("sonni kiriting")
const calculateCurrency = () => {
    const result = currentCount * dollarCurrency + " so'm"
    alert(result)
}
calculateCurrency()