var description = document.getElementsByTagName('p')[1];
    description.innerText = 'Empregado e feliz';

var mainContent = document.getElementsByTagName('main')[0];
    mainContent.style.backgroundColor = 'green';

var centerContent = document.getElementsByTagName('section')[0];
    centerContent.style.backgroundColor = 'white';
    centerContent.style.textTransform = 'uppercase';

var title = document.getElementsByClassName('title')[0];
    title.innerText = "Exercício 5.1 - JavaScript";

var texts = document.getElementsByTagName('p');
    for (var i in texts) {
        console.log(texts[i]);
    };




