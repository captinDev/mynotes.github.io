const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const todos = document.querySelector('.todos');
const todo = document.querySelectorAll('.todo');
const feedback = document.querySelector('.feedback');

input.addEventListener('focus',() => {
    input.setAttribute('placeholder','');
});

input.addEventListener('blur',() => {
    input.setAttribute('placeholder','Add New Note');
});

submitBtn.addEventListener('click', e => {
    if(input.value.trim().length <= 2) {
        e.preventDefault();
        feedback.classList.replace('d-none','d-block');
        console.log('invalid note');
     } else {
    e.preventDefault();
    let tod = document.createElement('div');
    tod.setAttribute('class', 'todo');
    todos.append(tod);

    let todContent = document.createElement('p');
    todContent.textContent = input.value.trim();
    todContent.setAttribute('class', 'todo_Content');
    // todContent.setAttribute('contenteditable','true');
    tod.append(todContent);

    let dlt = document.createElement('i');
    dlt.setAttribute('class', 'fas fa-trash-alt');
    dlt.setAttribute('title','delete');
    tod.append(dlt);
    dlt.addEventListener('click', () => {
        dlt.parentElement.remove();
        console.log('note has been deleted successfully');
    });

    console.log('note has been added successfully');
    feedback.classList.replace('d-block','d-none');
    input.value = '';
    }
});

