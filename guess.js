const numElm = document.getElementById("number");
const btnElm = document.getElementById("guess-btn");
const displayElm = document.getElementById("display-graphic");
const lowerElm = document.getElementById("lower-display");
const higherElm = document.getElementById("higher-display");
const correctNum = 12;


const handleOnClick = () => { btnElm.addEventListener("click", () => {
    console.log("clicked", numElm.value);
    let str = "";

    if(correctNum == numElm.value){
        // alert(`You are correct! The correct is ${correctNum}` );
        str += `
        <img src="correct.jpg" alt="correct" height="300" width="300">
        <div class="d-flex justify-content-center">
            CORRECT
        </div>
        `;
    }
    else if (numElm.value > correctNum){
        str += `
        <img src="down.jpg" alt="lower" height="300">
        <div class="d-flex justify-content-center">
            LOWER
        </div>
        `;
    } else if (numElm.value < correctNum){
        str += `
        <img src="up.jpg" alt="higher" height="300" width="300">
        <div class="d-flex justify-content-center">
            HIGHER
        </div>
        `;
    }
    
    displayElm.innerHTML = str;
});

};