// Função para codificar o texto
function codificar() {
    let texto = document.getElementById("entradaTexto").value.toLowerCase();
    let textoCodificado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("resultado").innerText = textoCodificado;
    document.querySelector('.highQualityProducts').style.display = 'none'; // Oculta a imagem
}

// Função para decodificar o texto
function decodificar() {
    let texto = document.getElementById("entradaTexto").value.toLowerCase();
    let textoDecodificado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").innerText = textoDecodificado;
    document.querySelector('.highQualityProducts').style.display = 'none'; // Oculta a imagem
}

// Função para copiar o texto
function copiarTexto() {
    const texto = document.getElementById('resultado').innerText;
    if (texto) {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            alert('Erro ao copiar o texto: ', err);
        });
    } else {
        alert('Nenhum texto para copiar.');
    }
}