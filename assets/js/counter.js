let plus = document.querySelector(".counter").firstElementChild;
let minus = document.querySelector(".counter").lastElementChild;
let result = document.querySelector("span");

function increaseValue(){
    let finalValue = Number(result.textContent) + 1;
    showResult(finalValue);
}

function decreaseValue(){
    let finalValue = Number(result.textContent) - 1;
    showResult(finalValue);
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
            increaseValue();
            break;

        case "NumpadSubtract":
            decreaseValue();
            break;
    }
});

//* additional features: increment with +/- keys of the numpad