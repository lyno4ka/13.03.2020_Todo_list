const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');

$formAddTask.on('submit', function(event) {
    event.preventDefault();

    let task = {
        id: new Date().getTime(), 
        title: $('[name="title"]', this).val(),
        status: 2 //1 - todo, 2 - in progress, 3 - done
    };

    addTask(task.id, task);
   
    localStorage.setItem(task.id, JSON.stringify(task));

    $modalAddTask.modal('hide');

    this.reset(); //метод у формы, чтобы сбросить все значения полей по умолчанию
});

console.log(localStorage);

for (let key in localStorage) {
   
    if(!localStorage.hasOwnProperty(key)) continue;
    console.log(key);

    const task = JSON.parse(localStorage[key]);

    addTask(task.id, task);
}

$('body').on('click', '.btn-edit', function() {
    const $parent = $(this).parents('[data-id]');

    const taskId = $parent.data('id');
    console.log(taskId);
});