const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide');
}