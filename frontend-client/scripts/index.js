// function to fetch all data from the api
function getTasks() {

    const demoData = [
        {id: 1, name: "task1", desc: "desc1"},
        {id: 2, name: "task2", desc: "desc2"},
        {id: 3, name: "task3", desc: "desc3"},
    ]

    fetch("http://127.0.0.1:8000/api/v1/tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(res => {
        const { data } = res;
        const elementContainerId = "#view_task_tbody";

        const taskElements = demoData.length > 0 && demoData.map((task, index) => {
            document.getElementById(`action_edit_btn_${task.id}`).onclick = alert('hnvhv')
            index++
            return (
                `<tr class="view-task-tr-body">
                    <form class="view-task-form" id="view_task_form_${task.id}" action="" method="post">
                        <th class="view-task-td" scope="row">${index}</th>
                        <td class="view-task-td"><input class="task-input" id="task_name_${task.id}" type="text" name="taskName" value="${task.name}" readonly /></td>
                        <td class="view-task-td"><input class="task-input" id="task_desc_${task.id}" type="text" name="taskDesc" value="${task.desc}" readonly /></td>
                        <td class="view-task-td">
                            <div class="action-cover">
                                <div class="action-cover-flex row">
                                    <div class="action-cover-item"><button class="action-btn btn btn-primary col" id="action_edit_btn_${task.id}" type="button">Edit <i class="fa fa-edit"></i></button></div>
                                    <div class="action-cover-item"><button class="action-btn btn btn-danger col" id="action_delete_btn_${task.id}" type="button">Delete <i class="fa fa-trash"></i></button></div>
                                </div>
                            </div>
                        </td>
                    </form>
                </tr>`
            )
        })
        
        $(elementContainerId).html(taskElements);
    })
}

getTasks();