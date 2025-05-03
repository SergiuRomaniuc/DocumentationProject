document.querySelectorAll(".button-clip-board").forEach( (element) => {
  element.addEventListener("click", () => {
    const targetElement = document.querySelector(element.dataset.copy)
    const textToCopy = targetElement.textContent
    navigator.clipboard.writeText(textToCopy);
  })
})
