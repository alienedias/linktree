function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains('Light')) {
  //html.classList.remove("Light")
  //} else {
  //html.classList.add("Light")
  //}

  //tudo isso pode ser feito numa unica função
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //pegar os icones de redes sociais
  const github = document.querySelector("#github")
  const facebook = document.querySelector("#facebook")
  const instagram = document.querySelector("#instagram")
  const linkedin = document.querySelector("#linkedin")

  //substituir a imagem do perfil e os icones de redes sociais
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/images/avatar-lia-light.png")
    github.setAttribute("src", "./assets/icons/logo-github-light.svg")
    facebook.setAttribute("src", "./assets/icons/logo-facebook-light.svg")
    instagram.setAttribute("src", "./assets/icons/logo-instagram-light.svg")
    linkedin.setAttribute("src", "./assets/icons/logo-linkedin-light.svg")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/images/avatar-lia.png")
    github.setAttribute("src", "./assets/icons/logo-github.svg")
    facebook.setAttribute("src", "./assets/icons/logo-facebook.svg")
    instagram.setAttribute("src", "./assets/icons/logo-instagram.svg")
    linkedin.setAttribute("src", "./assets/icons/logo-linkedin.svg")
  }
}
