function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // trocar a imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Tayna de jaleco usando um instrumento para avaliar o olho de um cachorro preto.")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "Foto de Tayna segurando seus dois cachorros: um poodle e um cachorro preto.")
  }
}