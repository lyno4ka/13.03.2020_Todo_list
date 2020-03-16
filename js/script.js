const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');

$formAddTask.on('submit', function(event) {
    event.preventDefault();

    let task = {
        id: new Date().getTime(), 
        title: $('[name="title"]', this).val(),
        status: 1 //1 - todo, 2 - in progress, 3 - done
    };

    addTask(task.id, task);
   
    localStorage.setItem(task.id, JSON.stringify(task));

    $modalAddTask.modal('hide');

    this.reset(); //метод у формы, чтобы сбросить все значения полей по умолчанию
});

console.log(localStorage);

for (let key in localStorage) {
   
    if(!localStorage.hasOwnProperty(key)) continue;

    const task = JSON.parse(localStorage[key]);

    addTask(task.id, task);
    console.log(key);
}

$('body').on('click', '.btn-delete', function(event) {
    console.log(this);

    const $parent = $(this).parents('[data-id]')

    // console.log($parent.attr('data-id'));
    const taskId = $parent.data('id');
    $parent.remove();

    localStorage.removeItem(taskId);
});