document.documentElement.style.visibility = 'hidden';

async function verificarLogin() {
  try {
    const resposta = await fetch('../php/sessao.php');
    const dados = await resposta.json();

    if (dados.logado) {
      document.documentElement.style.visibility = 'visible';
    } else {
      window.location.href = '../html/login.html';
    }
  } catch (erro) {
    window.location.href = '../html/login.html';
  }
}

verificarLogin();