let plus = document.querySelector(".counter").firstElementChild;
let minus = document.querySelector(".counter").lastElementChild;
let result = document.querySelector("span");

function increaseValue(){
    let increasedValue = Number(result.textContent) + 1;
    showResult(increasedValue);
}

function decreaseValue(){
    let decreasedValue = Number(result.textContent) - 1;
    showResult(decreasedValue);
}

function showResult(value){
    result.textContent = value;
}

function resetCounter(){
    showResult(0);
}

plus.addEventListener("click", increaseValue);
minus.addEventListener("click", decreaseValue);
result.addEventListener("click", resetCounter);

document.addEventListener("keydown", function(event){
    switch(event.code){
        case "NumpadAdd":
        case "BracketRight":
            increaseValue();
            break;

        case "NumpadSubtract":
        case "Slash":
            decreaseValue();
            break;

        case "NumpadEnter":
        case "Enter":
            resetCounter();
            break;
    }
});