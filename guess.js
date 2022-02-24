const numElm = document.getElementById("number");
const btnElm = document.getElementById("guess-btn");
const correctNum = 12;


btnElm.addEventListener("click", () => {
    console.log("clicked", numElm.value);

    // if(correctNum == numElm.value){
    //     alert(`You are correct! The correct is ${correctNum}` );
    // }
    // else{
    //     alert(`Incorrect!`);
    // };
});