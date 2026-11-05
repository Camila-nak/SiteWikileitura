<?php
session_start();
header('Content-Type: application/json; charset=utf-8');

// USUÁRIO DE TESTE - trocar pelo banco quando ele estiver pronto
$email_teste = 'teste@wikileitura.com';
$senha_teste = '12345678';
$nome_teste  = 'Leitora Teste';

$email = trim($_POST['email'] ?? '');
$senha = $_POST['senha'] ?? '';

if ($email === $email_teste && $senha === $senha_teste) {
    $_SESSION['usuario_id']   = 1;
    $_SESSION['usuario_nome'] = $nome_teste;
    echo json_encode(['ok' => true, 'nome' => $nome_teste]);
} else {
    echo json_encode(['ok' => false, 'erro' => 'E-mail ou senha incorretos.']);
}