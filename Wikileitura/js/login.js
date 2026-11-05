const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const dados = new FormData(form);

  try {
    const resposta = await fetch('../php/login.php', {
      method: 'POST',
      body: dados,
    });
    const resultado = await resposta.json();

    if (resultado.ok) {
      window.location.href = '../html/index.html';
    } else {
      alert(resultado.erro);
    }
  } catch (erro) {
    alert('Não foi possível falar com o servidor.');
  }
});