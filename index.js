const adviceIdElement = document.querySelector(".advice-id");
const adviceTextElement = document.querySelector(".advice");
const randomAdviceButton = document.querySelector(".random-advice-btn");

let loading = false;

function getAdvice() {
  if (!loading) {
    loading = true;

    fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
      referrerPolicy: "no-referrer",
    })
      .then((res) => res.json())
      .then(
        (data) => {
          updateAdvice(data);
        },
        (err) => {
          console.log(err);
          getAdvice();
        }
      );
  }
}

function updateAdvice(data) {
  const { id, advice } = data.slip;

  setTimeout(() => {
    adviceIdElement.innerHTML = `ADVICE # ${id}`;
    adviceTextElement.innerHTML = advice;
    loading = false;
  }, 1500);
}

randomAdviceButton.addEventListener("click", () => {
  getAdvice();
});
