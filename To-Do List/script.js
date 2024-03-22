// Code for Add-Task
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        // createElement = create HTML element, li = will have the html element
        let li = document.createElement("li");
        // innerHtml = add content in "li" element
        li.innerHTML = inputBox.value;
        // "li" should be displayed under "list-container"
        // "appendChild()" method to add a node to the end of the list of child nodes of a specified parent node.
        listContainer.appendChild(li);
        // create "span" tag
        let span = document.createElement("span");
        // put "cross-icon" in "Span" tag
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    // clear input field once "content" is added in your "list-container"
    inputBox.value = "";
    // whenever we will add data we will call the function "saveData()" to save it in "Browser"
    saveData();
}

// Code for Click function

listContainer.addEventListener("click", function(e){
    
    // Simply put, 'e' stands for event object. It's a convention to use 'e', but you can name it whatever you want.
    // This 'e' is often passed as an argument in a function

    if(e.target.tagName === "LI"){
        // For DOM trees which represent HTML documents, the returned tag name is always in the canonical upper-case form. For  example, tagName called on a <div> element returns "DIV" 
        // "target" means if "targetElement" is "LI"
        // "tagName" read-only property of the Element interface returns the tag name of the element on which it's called.
        // if "checked" is already there in "classList" it will remove that else will add it
        // "Element.classList" is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // it will delete parent element which is "LI"
        //  read-only "parentElement" property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Code for storing records in "Browser" [local storage]

function saveData(){
    // takes arguments = name, value we want to save in our browser
    // "localStorage" object allows you to save key/value pairs in the browser.
    // localStorage.setItem(key, value);
    // both arguments are mandatory
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display saved data whenever browser is "refreshed" or "reopened"

function showTask(){
    // localStorage.getItem(key);
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
