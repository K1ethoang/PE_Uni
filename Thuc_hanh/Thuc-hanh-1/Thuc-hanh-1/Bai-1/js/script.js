// coding implementation
const submitBtn = document.querySelector("#submit");

submitBtn.onclick = () => {
  const textValue = document.querySelector("#key").value;
  var catELe = document.querySelector("#cat");
  var cat = catELe.options[catELe.selectedIndex].text;
  const fromValue = document.querySelector("#from").value;
  const toValue = document.querySelector("#to").value;
  var checkB = new Boolean();
  checkB = true;

  if (!textValue) {
    alert("Input keyword");
    checkB = false;
  }

  if (cat === "--Select category--") {
    alert("Input select category");
    checkB = false;
  }

  if (isNaN(fromValue)) {
    alert("Price from must is number");
    checkB = false;
  } else if (!Number.isInteger(fromValue)) {
    alert("Price from is integer");
    checkB = false;
  } else if (!fromValue) {
    alert("Input price from");
    checkB = false;
  }

  if (isNaN(toValue)) {
    alert("Price to must is number");
    checkB = false;
  } else if (!Number.isInteger(toValue)) {
    alert("Price to is integer");
    checkB = false;
  } else if (!toValue) {
    alert("Input price to");
    checkB = false;
  }

  if (checkB) {
    alert("Search success");
  }
};
// end coding implementation
