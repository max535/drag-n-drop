const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    console.log('drag start', event.target);
    event.target.classList.add('hold');
}

function dragend() {
    console.log('drag end');
}