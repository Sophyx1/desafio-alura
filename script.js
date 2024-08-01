function codificarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decodificarTexto(textoCodificado) {
    return textoCodificado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function codificar() {
    let inputTexto = document.getElementById('inputTexto').value;
    let resultado = codificarTexto(inputTexto);
    
    document.getElementById('resultadoTexto').textContent = resultado;
    document.getElementById('mensagemSubtexto').style.display = 'none';
    document.getElementById('mensagemTexto').style.display = 'none';
    document.querySelector('.apresentacao__conteudo2__img').style.display = 'none';
    document.getElementById('copiarbotao').style.display = 'block';
}

function decodificar() {
    let inputTexto = document.getElementById('inputTexto').value;
    let resultado = decodificarTexto(inputTexto);
    
    document.getElementById('resultadoTexto').textContent = resultado;
    document.getElementById('mensagemSubtexto').style.display = 'none';
    document.getElementById('mensagemTexto').style.display = 'none';
    document.querySelector('.apresentacao__conteudo2__img').style.display = 'none';
    document.getElementById('copiarbotao').style.display = 'block';

}

// Adiciona os eventos aos botões quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('criptografabotao').addEventListener('click', codificar);
    document.getElementById('descriptografabotao').addEventListener('click', decodificar);
});
