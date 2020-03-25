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
    data: { name, userEmail, body }
  });
});

$(".btn").click(function(e) {
  e.preventDefault();

  const state = $(this)
    .attr("data-type")
    .split("-")[0];
  const buttonId = $(this)
    .attr("data-type")
    .split("-")[1];

  let quantity;
  if (state === "plus") {
    quantity = parseInt($(`#quantity-${buttonId}`).val());
    if (!quantity) {
      quantity = 0;
    }
    $(`#quantity-${buttonId}`).val(quantity + 1);
  } else if (state === "minus") {
    quantity = parseInt($(`#quantity-${buttonId}`).val());

    if (!quantity) {
      $(`#quantity-${buttonId}`).val(0);
    }
    if (quantity > 0) {
      $(`#quantity-${buttonId}`).val(quantity - 1);
    }
  }
});
