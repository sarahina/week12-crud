let table = document.getElementById("list");
let tbody = table.createTBody();

// Events to listen to
$("#todo").on("submit", function (event) {
  event.preventDefault();

  let data = $(this).serializeArray();
  createRecord(data);

  updateTable();

  $("#record-id").val("")

  $("#new-task").val("")
});

// Functions to execute
function updateTable() {
  tbody.innerHTML = "";
  for (let i = 0; i < DATA.length; i++) {
    createRow(i, DATA[i]);
  }
}

function createRow(id, record) {
 
  let row = tbody.insertRow();
  row.innerHTML = `
  <tr class="task" id="${id}">
    <td>${record.task}</td>
    <td>${record.created}</td>
    <td>${record.start}</td>
    <td>${record.end}</td>
    <td>
      <button class="btn btn-dark"  id="edit-${id}"> <i class="fa-regular fa-pen-to-square"></i> </button>
    </td>
    <td>
      <button class="btn btn-dark" id="del-${id}"> <i class="fa-solid fa-trash-can"></i></button>
    </td>
  </tr>
  `;

  $(`#del-${id}`).on("click", function (event) {
    deleteRecord(id);
    updateTable();
  });



  $(`#edit-${id}`).on("click", function (event) {
    // get record from database
    let record = getRecord(id);


    // set record values of todo form input fields
    $("#record-id").val(record.id)
    $("#new-task").val(record.task)
    $("#new-start-date").val(record.start)
    $("#new-end-date").val(record.end)
   

    $("#update").removeClass("disabled")
    $("#add").addClass("disabled")

  });
  // END of createRow()
}




$("#update").on("click", function (event) {

  let data = $("#todo").serializeArray();
  let id = $("#record-id").val()

  updateRecord(id, data);

  updateTable();

  $("#update").addClass("disabled")
  $("#add").removeClass("disabled")
});


