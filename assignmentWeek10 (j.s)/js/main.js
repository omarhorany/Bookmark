var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkURLInput = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var closeBtn = document
  .getElementById("closeBtn")
  .addEventListener("click", closeAlert);
var websitesArr = [];
var divAlert = document.getElementById("divAlert");
var urlPattern =
  /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;

function newSubmit() {
  if (urlPattern.test(bookmarkURLInput.value)) {
    var websites = {
      name: bookmarkNameInput.value,
      url: bookmarkURLInput.value,
    };
    console.log(websites);
    websitesArr.push(websites);
    displayWeb();
    clearForm();
  }
  if (urlPattern.test(bookmarkURLInput.value)) {
    bookmarkURLInput.classList.add("is-valid");
    bookmarkURLInput.classList.remove("is-invalid");
    divAlert.classList.add("d-none");
  } else {
    bookmarkURLInput.classList.add("is-invalid");
    bookmarkURLInput.classList.remove("is-valid");
    divAlert.classList.remove("d-none");
  }
}

function displayWeb() {
  var Content = "";
  for (var i = 0; i < websitesArr.length; i++) {
    Content += `<tr>
  <td>${i + 1}</td>
  <td>${websitesArr[i].name}</td>

  <td>
      <a
        href="${websitesArr[i].url}"
        target="_blank"
        class="btn btn-outline-success"
        ><i class="fa-solid fa-eye pe-2"></i>Visit</a
      >
  </td>


  <td> <button onclick="deleteRow(${i})" class="btn btn-outline-danger pe-2 bg-danger text-white"data-index="0">
   <i class="fa-solid fa-trash-can mx-2"></i>Delete</button>
  </td>
  </tr>`;
  }
  document.getElementById("tableContent").innerHTML = Content;
}

function clearForm() {
  bookmarkNameInput.value = "";
  bookmarkURLInput.value = "";
}
function onDataChange() {
  localStorage.setItem("web", JSON.stringify(websitesArr));
  displayWeb();
}

function deleteRow(index) {
  websitesArr.splice(index, 1);
  console.log(websitesArr);
  onDataChange();
}

function closeAlert() {
  divAlert.classList.add("d-none");
}
