// function to fetch all data from the api
function getTasks() {

    const demoData = [
        {id: 1, name: "task1", desc: "desc1"},
        {id: 2, name: "task2", desc: "desc2"},
        {id: 3, name: "task3", desc: "desc3"},
    ];

    const btnData = [
        // {id: `action_save_btn_${task.id}`}
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

            $(document).ready(function(e) {

                $(`#action_edit_btn_${task.id}`).click((e) => {
                    $(`#task_name_${task.id}`).attr("readonly", false);
                    $(`#task_desc_${task.id}`).attr("readonly", false);
                    $(`#action_cover_edit_item_${task.id}`).html(`<button class="action-btn btn btn-success col" id="action_save_btn_${task.id}" type="button">Save <i class="fa fa-check"></i></button>`);
                });
            })
            
            index++
            return (
                `<tr class="view-task-tr-body">
                    <th class="view-task-td" scope="row">${index}</th>
                    <td class="view-task-td">${task.name}</td>
                    <td class="view-task-td">${task.desc}</td>
                    <td class="view-task-td">
                        <div class="action-cover">
                            <div class="action-cover-flex row">
                                <div class="action-cover-item" id="action_cover_edit_item_${task.id}"><button class="action-btn btn btn-primary col" id="action_edit_btn_${task.id}" type="button">Edit <i class="fa fa-edit"></i></button></div>
                                <div class="action-cover-item"><button class="action-btn btn btn-danger col" id="action_delete_btn_${task.id}" type="button">Delete <i class="fa fa-trash"></i></button></div>
                            </div>
                        </div>
                    </td>
                </tr>`
            )
        })

        $(elementContainerId).html(taskElements);
    })
}

getTasks();



<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="edit-form-cover-flex">
            <div class="edit-form-cover-item">
                <form class="view-task-form" id="view_task_form_${task.id}" action="" method="post">
                    <div class="edit-input-cover-flex">
                        <div class="edit-input-cover-item">
                            <div class="input-cover-flex">
                                <div class="input-cover-item">
                                    <input class="task-input" id="task_name_${task.id}" type="text" name="taskName" value="${task.name}" />
                                </div>
                                <div class="input-cover-item">
                                    <input class="task-input" id="task_desc_${task.id}" type="text" name="taskDesc" value="${task.desc}" />
                                </div>
                            </div>
                            <div class="btn-cover-flex">
                                <div class="btn-cover-item">
                                    <button class="save-btn btn btn-priamry">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
          </div>
      </div>
    </div>
  </div>
</div> 