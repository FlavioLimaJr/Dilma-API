<?php
header('Content-Type: text/plain; charset=utf-8'); 

$json = file_get_contents('frases.json');
$frases = json_decode($json, true);

$fraseAleatoria = $frases[array_rand($frases)];

if (isset($_GET['json'])) {
    header('Content-Type: application/json'); 
    echo json_encode(['frase' => $fraseAleatoria], JSON_UNESCAPED_UNICODE);
} elseif (isset($_GET['texto'])) {
    echo $fraseAleatoria;
} else {
    echo "Parâmetro inválido. Use ?json para JSON ou ?texto para texto.";
}
?>
