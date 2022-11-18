document.querySelectorAll("input[type='radio']").forEach((input) => {
  input.onclick = function () {
    document.documentElement.classList.add(input.id)
  }
});