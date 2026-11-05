async function carregarUsuario() {
  try {
    const resposta = await fetch('../php/sessao.php');
    const dados = await resposta.json();

    if (!dados.logado) return;

    const partes = dados.nome.split(' ').filter(Boolean);
    const iniciais = partes.slice(0, 2).map((p) => p[0].toUpperCase()).join('');

    const hora = new Date().getHours();
    const saudacao = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';

    document.getElementById('nome-usuario').textContent = dados.nome;
    document.getElementById('nome-curto').textContent = partes[0];
    document.getElementById('avatar').textContent = iniciais;
    document.getElementById('saudacao').textContent = saudacao;
    document.getElementById('dado-nome').textContent = dados.nome;
  } catch (erro) {
    // Se der erro, a página continua com os textos padrão
  }
}

carregarUsuario();