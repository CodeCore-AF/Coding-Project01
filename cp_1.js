//create objects for each of the input fields
const form = document.querySelector("form");
const inputUN = document.getElementById("userName");
const inputEM = document.getElementById("userEmail");
const inputC = document.getElementById("comments");
const counter = document.querySelector("p");

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
const createTipSpan = function(container, text){
    toolTip = document.createElement('span');
    toolTip.classList.add('tool-tip');
    toolTip.innerHTML = text;
    container.appendChild(toolTip);
    container.addEventListener("mouseout", (event)=>{
        toolTip0 = container.lastElementChild;
        toolTip0.style.display = 'none';
        console.log('MouseOut');
    });
    container.addEventListener("mouseover", (event)=>{
        toolTip0 = container.lastElementChild;
        toolTip0.style.display = 'block';    
    });
    
}

createTipSpan(form, "Hey, Listen!")

