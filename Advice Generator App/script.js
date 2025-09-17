const adviceBtn = document.getElementById("adviceBtn");
const adviceText = document.getElementById("advice");
adviceBtn.addEventListener("click", async function() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    adviceText.textContent = "Sorry, could not fetch advice. Try again!";
  }
});
