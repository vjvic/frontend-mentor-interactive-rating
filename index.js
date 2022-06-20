const ratingNumberContainer = document.querySelector(
  ".rating-number-container"
);
const ratingNumber = document.querySelectorAll(".rating-number");
const submit = document.querySelector(".submit");
const thankyou = document.querySelector(".thankyou");
const rating = document.querySelector(".rating");
const selectedRatingTxt = document.querySelector(".selected-rating");

let selectedRating;

ratingNumberContainer.addEventListener("click", (e) => {
  if (e.target.className !== "rating-number-container") {
    ratingNumber.forEach((rating) => {
      rating.classList.remove("active");
    });
    selectedRating = e.target.getAttribute("value");
    e.target.classList.add("active");
  }
});

submit.addEventListener("click", () => {
  if (selectedRating) {
    thankyou.classList.remove("d-none");
    rating.classList.add("d-none");

    selectedRatingTxt.textContent = `You selected ${selectedRating} out of 5`;
  }
});
