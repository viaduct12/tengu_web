$("#submit-email-form").on("click", () => {
  const name = $("#name-email-form")
    .val()
    .trim();
  const userEmail = $("#userEmail-email-form")
    .val()
    .trim();
  const body = $("textarea#body-email-form").val();

  $.ajax({
    url: "http://localhost:3000/sendData",
    type: "POST",
    data: {name,userEmail,body}
  });
});