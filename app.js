console.log("Javascript is alive!");
// change greeting
document.getElementById('greeting').innerText = "Hello World!"

//Change background of li
document.getElementById('essentials').children[0].style.backgroundColor = "yellow"

//Add GIF to title
let newVarName = document.createElement('img')
newVarName.setAttribute('src', 'http:')
document.getElementByID('greeting').appendChild(newVarName)

//add new UL
let newUl document.createElement('ul')
    newUl.setAttribute('class', 'todo-items');
    document.getElementById(newUl)
    document.querySelector('body').appendChild(newUl)

// 
let items = ['array of text', 'more text', 'lots more text']

for(const newText of items)
let newLi document.createElement('li')
    newLi.innerText = newText
    document.querySelector('.todo-items').appendChild(newLi)