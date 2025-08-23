const botao = document.getElementById('tema')
const icone = document.getElementById('TemaBotao')
const body = document.querySelector('body')
const header = document.querySelector('header')
const temaSalvo = localStorage.getItem("tema")

botao.addEventListener("click", (e) => {
  e.preventDefault()
  body.classList.toggle("escuro")
  if (icone.classList.contains("fa-moon")) {
    icone.classList.remove("fa-moon")
    icone.classList.add("fa-sun")
    localStorage.setItem("tema", "escuro")
  } else {
    icone.classList.remove("fa-sun")
    icone.classList.add("fa-moon")
    localStorage.setItem("tema", "claro")
  }
})

window.addEventListener("DOMContentLoaded", () => {

  if (temaSalvo === "escuro") {
    body.classList.add("escuro")
    icone.classList.remove("fa-moon")
    icone.classList.add("fa-sun")
  } else {
    body.classList.remove("escuro")
    icone.classList.remove("fa-sun")
    icone.classList.add("fa-moon")
  }
})