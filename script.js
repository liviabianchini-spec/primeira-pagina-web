const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {
  let curtiu = false;
  botao.addEventListener("click", botaoClicado);

  function botaoClicado() {
    let texto = botao.querySelector("span");
    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  }
});

const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");

  if (document.body.classList.contains("tema-escuro")) {
    botaoTema.textContent = "☀️ Modo Claro";
  } else {
    botaoTema.textContent = "🌙 Modo Escuro";
  }
});
