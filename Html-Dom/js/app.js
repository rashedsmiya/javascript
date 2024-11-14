document.getElementById('title').innerHTML = 'Hello World';
document.getElementById('title').style.color= 'white';
document.getElementById('title').style.backgroundColor= 'black';
document.getElementById('title').style.fontSize = '70px';

document.getElementsByClassName('author')[0].style.color = 'blue'
document.getElementsByClassName('author')[1].style.backgroundColor = 'yellow'
document.getElementsByClassName('author')[1].style.fontWeight = '700'
document.getElementsByClassName('author')[2].innerHTML = 'Poet - 3'
document.getElementsByClassName('description')[2].style.backgroundColor = 'purple'
document.getElementsByClassName('description')[2].style.color = 'white'


var author = document.querySelectorAll('.special h2');
for(var i = 0; i < author.length; i++){
    author[i].innerHTML = 'JavaScript Title';
    author[i].style.backgroundColor = 'pink';
    author[i].style.color = 'green';
    author[i].style.margin = '100px';
}

document.querySelector('.special h2').style.backgroundColor = 'black';


var article = document.getElementById('first-article');
const newHeading = document.createElement('h1');
newHeading.innerHTML = 'This is a new Paragraph created by JavaScript';
article.appendChild(newHeading);

const ul = document.getElementById('list');
const newListItem = document.createElement('li');
newListItem.innerHTML = 'This is a new list item created by JavaScript';
ul.appendChild(newListItem);

// document.getElementById('list').appendChild(document.createElement('li')).innerHTML = 'This is a new list item created by Javascript';

var element = document.querySelector('#list');
// element.style.display = 'none';
// element.parentNode.removeChild(element);