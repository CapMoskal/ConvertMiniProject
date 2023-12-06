const inputBtn = document.getElementById("input-btn")
const inputNum = document.getElementById("input-number")


let outsList = [
    document.getElementById("output-len"),
    document.getElementById("output-vol"),
    document.getElementById("output-mass")
]

const metList = [
    ["meters", "feet"],
    ["liters", "gallons"],
    ["kilos", "pounds"]
]

const sizeList = [
    3.281,
    0.264,
    2.204
]

inputBtn.addEventListener("click", function() {
    const x = inputNum.value
    for (let i = 0; i < outsList.length; i++) 
    {
        outsList[i].innerHTML = 
            `
            ${x} ${metList[i][0]} = ${(x*sizeList[i]).toFixed(2)} ${metList[i][1]} 
            | 
            ${x} ${metList[i][1]} = ${(x/sizeList[i]).toFixed(2)} ${metList[i][0]}
            `
    }
})