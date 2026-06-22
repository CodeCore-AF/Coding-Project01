//create objects for each of the input fields
const form = document.querySelector("form");
const inputUN = document.getElementById("userName");
const inputEM = document.getElementById("userEmail");
const inputC = document.getElementById("comments");
const counter = document.querySelector("p");
const submit = document.getElementById("submit");
const body = document.querySelector("body");

//Add event listeners to DOM objects
//Count user character inputs
let charSum = 0;
form.addEventListener("input", (event) => {
    if (event.inputType == "deleteContentBackward" || event.inputType == "deleteContentForward"){
        charSum -= 1;
    }else{
        charSum += 1;
    }
    //console.log(event.inputType);
    console.log(charSum);
    counter.innerHTML = `Character count: ${charSum}`
});

//Function to create tooltips for all elements.
const createTip = function(container, text){
    container.addEventListener("mouseover", (event)=>{
        event.stopPropagation();
        toolTip = document.createElement('span');
        toolTip.classList.add('tool-tip');
        toolTip.innerHTML = text;
        console.log(event.target);
        body.appendChild(toolTip);
        console.log('Mouseover');
    });
    container.addEventListener("mouseout", (event)=>{
        event.stopPropagation();
        body.removeChild(body.lastElementChild);
        console.log('Mouseout');
    });
}

createTip(inputUN, 'This is the input field where you type your username.');
createTip(inputEM, "This is the input field wher you type your email.");
createTip(inputC, "This is where you type your comments and thoughts on our project.");
createTip(counter, "This is where the number of characters typed are counted and displayed.")
createTip(submit, "This button submits your user feedback!")

//Event listener for submit button