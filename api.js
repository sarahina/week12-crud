DATA = [];

function convertRecord(record) {
  newFormat = {};
  for (let i = 0; i < record.length; i++) {
    newFormat[record[i].name] = record[i].value;
  }
  return newFormat;
}

function getDate() {
  let createdDate = new Date();
  let year = createdDate.getFullYear();
  let month = createdDate.getMonth() + 1;
  let day = createdDate.getDate();
  let date = `${year}-${month}-${day}`;
  return date;
}

// Create
function createRecord(item) {
  item = convertRecord(item);
  item["created"] = getDate();
  item["id"] = DATA.length;
  DATA.push(item);
}

// READ - One by ID
function getRecord(id) {
  id = Number(id);

  return DATA[id];
}

// READ - List all
function listRecord() {
  return DATA;
}

// Updates
function updateRecord(id, item) {
  item = convertRecord(item);
  id = Number(id);

  item["created"] = DATA[id].created;

  DATA[id] = item;

}

//Deletes
function deleteRecord(id) {
  id = Number(id);
  DATA.splice(id, 1);
}
