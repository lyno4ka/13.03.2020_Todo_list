function addTask(id, task) {
    const $btnEdit = $('<button>')
            .addClass('btn btn-warning btn-xs btn-edit pull-right')
            .html('<i class="glyphicon glyphicon-pencil"></i>');

    const $btnDelete = $('<button>')
            .addClass('btn btn-danger btn-xs pull-right btn-delete')
            .html('<i class="glyphicon glyphicon-trash"></i>')
            .css('margin-left', '10px');

    const $taskItem = $('<li>')
            .addClass('list-group-item')
            .text(task.title)
            .attr('data-id', id)
            .append($btnDelete)
            .append($btnEdit);

    $tasksList
        .find(`[data-status="${task.status}"]`)
        .append($taskItem);
}