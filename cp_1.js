//create objects for each of the input fields
const form = document.querySelector("form");
const inputUN = document.getElementById("userName");
const inputEM = document.getElementById("userEmail");
const inputC = document.getElementById("comments");
const submit = document.getElementById("submit");

//objects to specify location for dynamic content.
const counter = document.querySelector("p");
const body = document.querySelector("body");
const feedback = document.getElementById("feedback-display");

//objects for static content
const title = document.querySelector('h1');
const labelUN = document.getElementById('username-label');
const labelEM = document.getElementById('user-email-label');
const labelC = document.getElementById('comments-label');


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
    //console.log(charSum);
    counter.innerHTML = `Character count: ${charSum}`
});

//Function to create tooltips for all elements. WITHOUT DELEGATION
//const createTip = function(container, text){
//    container.addEventListener("mouseover", (event)=>{
//        event.stopPropagation();
//        toolTip = document.createElement('span');
//        toolTip.classList.add('tool-tip');
//        toolTip.innerHTML = text;
//        console.log(event.target);
//        body.appendChild(toolTip);
//        //console.log('Mouseover');
//    });
//    container.addEventListener("mouseout", (event)=>{
//        event.stopPropagation();
//        body.removeChild(body.lastElementChild);
//        //console.log('Mouseout');
//    });
//}

///createTip(inputUN, 'This is the input field where you type your username.');
//createTip(inputEM, "This is the input field wher you type your email.");
//createTip(inputC, "This is where you type your comments and thoughts on our project.");
//createTip(counter, "This is where the number of characters typed are counted and displayed.")
//createTip(submit, "This button submits your user feedback!")

//Function to determine the tooltip text depending on HTML element.
const tipText = function(element){
    //console.log(element);
    if (element == inputUN){
        return 'This is the input field where you type your username.';
    }else if (element == inputEM) {
        return "This is the input field wher you type your email.";
    }else if (element == inputC) {
        return "This is where you type your comments and thoughts on our project.";
    }else if (element == submit){
        return "This button submits your user feedback!";
    }else if (element == title){
        return "This is the page title.";
    }else if (element == labelUN){
        return "This is a descriptor label for the username input field.";
    }else if (element == labelEM){
        return "This is a descriptor label for the email user input field.";
    }else if (element == labelC){
        return "This is a descriptor label for the comments text area.";
    }else if (element == counter){
        return "This is the count of characters typed by the user.";
    }else if (element == feedback){
        return "This is the user feedback display to see your submitted answers.";
    }else{
        return '';
    }
}

//Function to create tooltips for all elements. WITH DELEGATION
body.addEventListener("mouseover", (event)=>{
    event.stopPropagation();
    //console.log(event.target);
    toolTip = document.createElement('span');
    toolTip.classList.add('tool-tip');
    let text = tipText(event.target);
    console.log(event.target.parentElement);
    if (text === ''){
        toolTip.innerHTML = tipText(event.target.parentElement);
    }else{
        toolTip.innerHTML = tipText(event.target);
    }
    body.appendChild(toolTip);
})
body.addEventListener("mouseout", (event)=>{
    event.stopPropagation();
    body.removeChild(body.lastElementChild);

})

//Event listener for submit button
submit.addEventListener("click", (event)=>{
    event.preventDefault();
    //get data from input fields.
    const userName = inputUN.value;
    const userEmail = inputEM.value;
    const userComments = inputC.value;
    //console.log(userName);
    //check if any fields are empty, validate input.
    if ((userName || userEmail || userComments) === ''){
        alert('Error: Please fill all input fields.');
    }else{
        //append valid entries to user feedback display.
        feedbackHeader = document.createElement('h2');
        feedbackHeader.innerHTML = "User Feedback Submitted: ";
        feedback.appendChild(feedbackHeader);
        feedbackContent = document.createElement('p');
        feedbackContent.innerHTML = `Username: ${userName}<br>Email: ${userEmail}<br>Comments: ${userComments}`;
        feedback.appendChild(feedbackContent);
    }
})