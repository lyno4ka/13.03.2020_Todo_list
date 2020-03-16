function addTask(id, task) {
    const $btnEdit = $('<button>')
            .addClass('btn btn-warning btn-xs btn-edit pull-right')
            .html('<i class="glyphicon glyphicon-pencil"></i>');

    const $taskItem = $('<li>')
            .addClass('list-group-item')
            .text(task.title)
            .attr('data-id', id)
            .append($btnEdit);

    $tasksList
        .find(`[data-status="${task.status}"]`)
        .append($taskItem);
}