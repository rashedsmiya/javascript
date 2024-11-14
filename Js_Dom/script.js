document.getElementById('title').innerHTML = 'Hello World';
document.getElementById('title').style.color="red";
document.getElementById('title').style.backgroundColor = 'cyan';
document.getElementById('title').style.fontSize = '30px';

document.getElementsByClassName('author')[0].style.color = 'blue';
document.getElementsByClassName('author')[1].style.backgroundColor = 'yellow';
document.getElementsByClassName('author')[1].style.fontWeight = '700';
document.getElementsByClassName('author')[2].innerHTML = 'Poet - 3'
document.getElementsByClassName('description')[2].style.backgroundColor = 'purple'
document.getElementsByClassName('description')[2].style.color = 'white'


var authors = document.querySelectorAll('.special h2');
 for(var i = 0; i < authors.length; i++){
    authors[i].innerHTML = 'JavaScript Title';
    authors[i].style.backgroundColor = 'pink';
    authors[i].style.margin = '100px';
}
 
document.querySelector('.special h2').style.backgroundColor = 'yellow';

// 1. id 
// 2. class 
// 3. querySelector 
// 4. querySelectorAll

var article = document.getElementById('first-article');
const newHading = document.createElement('h1');
newHading.innerHTML = 'This is a new paragraph created by JavaScript';
article.appendChild(newHading);

const ul = document.getElementById('list');
const newListItem = document.createElement('li');
newListItem.innerHTML = 'This is a new list item created by javascript';
ul.appendChild(newListItem);

// document.getElementById('list').appendChild(document.createElement('li')).innerHTML = 'This is a new list item created by Javascript';

var element = document.querySelector('#list');
// element.style.display = 'none';
// element.parentNode.removeChild(element);