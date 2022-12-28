// coding implementation
const submitBtn = document.querySelector("#submit");

submitBtn.onclick = () => {
  const textValue = document.querySelector("#key").value;
  const fromValue = document.querySelector("#from").value;
  const toValue = document.querySelector("#to").value;
  var checkB = new Boolean(true);

  if (!textValue) {
    alert("Input keyword");
    checkB = false;
  } else {
    for (var i in textValue) {
      if (textValue[i] === " ") {
        alert("Keyword must have not space");
        checkB = false;
        break;
      }
    }
  }

  if (isNaN(fromValue) || !fromValue) {
    alert("Price from must is number");
    checkB = false;
  }

  if (isNaN(toValue) || !toValue) {
    alert("Price to must is number");
    checkB = false;
  }

  if (checkB) {
    alert("Search success");
  }
};
// end coding implementation
