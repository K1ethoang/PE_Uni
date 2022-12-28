// coding implementation
const submitBtn = document.querySelector("#submit");

submitBtn.onclick = () => {
  const emailValue = document.querySelector("#email").value;
  const comValue = document.querySelector("#com").value;
  const rateValue = document.querySelector("#rate").value;
  let check = new Boolean(true);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailValue) {
    alert("Input email");
    check = false;
  } else if (!emailValue.match(mailformat)) {
    alert("Email is invalid");
    check = false;
  }

  if (!comValue) {
    alert("Input comment");
    check = false;
  } else if (comValue.length < 30) {
    alert("Comment must have to greater 30 character");
    check = false;
  }

  if (!rateValue) {
    alert("Input rating");
    check = false;
  } else if (isNaN(rateValue)) {
    alert("Rating must have is number");
    check = false;
  }

  if (check) {
    alert("Submit ok");
  }
};
// end coding implementation
