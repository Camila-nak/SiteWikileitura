async function atualizarCabecalho() {
  const acoes = document.querySelector('.acoes');
  if (!acoes) return;

  try {
    const resposta = await fetch('../php/sessao.php');
    const dados = await resposta.json();

    if (!dados.logado) return;

    const perfil = document.createElement('a');
    perfil.href = '../html/perfil.html';
    perfil.className = 'entrar';
    perfil.textContent = 'Olá, ' + dados.nome.split(' ')[0];

    const sair = document.createElement('a');
    sair.href = '../php/logout.php';
    sair.className = 'cadastrar';
    sair.textContent = 'Sair';

    acoes.replaceChildren(perfil, sair);
  } catch (erro) {
    // Mantém Entrar e Cadastre-se
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', atualizarCabecalho);
} else {
  atualizarCabecalho();
}