var btnElement = document.getElementById("submitBtn");

btnElement.onclick = function () {
  var nameValue = document.querySelector("#name").value;
  var sexValue = document.querySelector('input[name="sex"]:checked').value;
  var eyeColorELe = document.querySelector("#selects");
  var eyeColor = eyeColorELe.options[eyeColorELe.selectedIndex].text;
  var check1 = document.querySelector(".checkBox1");
  var check2 = document.querySelector(".checkBox2");
  var checkV1, checkV2;

  if (check1.checked == true) {
    checkV1 = check1.value;
  }
  if (check2.checked == true) {
    checkV2 = check2.value;
  }

  var desc = document.querySelector("#input__desc").value;

  var resultElement = document.querySelector(".result");

  resultElement.outerHTML =
    "Name: " +
    nameValue +
    "<br />" +
    "Sex: " +
    sexValue +
    "<br />" +
    "Eye color: " +
    eyeColor +
    "<br />" +
    "Check: " +
    checkV1 +
    " & " +
    checkV2 +
    "<br />" +
    "Describe: " +
    desc +
    "<br />";
};
