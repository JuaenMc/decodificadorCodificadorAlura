# decodificadorCodificadorAlura
decodificador e decodificador de texto sem acento e sem carateres especiais
# Codificador e Decodificador

Este é um projeto simples de codificador e decodificador de texto, desenvolvido em HTML, CSS e JavaScript. O objetivo do projeto é permitir que os usuários codifiquem e decodifiquem mensagens de texto, utilizando uma interface web amigável.

## Funcionalidades

- **Codificar Texto**: Permite ao usuário codificar uma mensagem de texto.
- **Decodificar Texto**: Permite ao usuário decodificar uma mensagem de texto previamente codificada.
- **Copiar Texto**: Permite ao usuário copiar o texto codificado ou decodificado para a área de transferência.
- **Ocultar Imagem**: A imagem de resultado é ocultada quando o texto codificado ou decodificado é exibido.

## Estrutura do Projeto

- `index.html`: Contém a estrutura HTML da aplicação.
- `styles.css`: Contém os estilos CSS para a aplicação.
- `scripts.js`: Contém o código JavaScript para a funcionalidade de codificação, decodificação e cópia de texto.

## Como Usar

1. **Codificar uma Mensagem**:
    - Digite a mensagem que deseja codificar na área de texto.
    - Clique no botão "Codificar".
    - A mensagem codificada será exibida na área de resultado e a imagem será ocultada.

2. **Decodificar uma Mensagem**:
    - Digite a mensagem codificada na área de texto.
    - Clique no botão "Decodificar".
    - A mensagem decodificada será exibida na área de resultado e a imagem será ocultada.

3. **Copiar o Texto**:
    - Após codificar ou decodificar uma mensagem, clique no botão "Copiar" para copiar o texto para a área de transferência.

## Estrutura do Código

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codificador e Decodificador</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <img src="Vector.svg" alt="Vector Image" class="vector">
    <div class="container">
        <!-- Área de entrada -->
        <div class="box">
            <h2>Codificador e Decodificador</h2>
            <h5>Apenas letras minúsculas e sem acento.</h5>
            <textarea id="entradaTexto" rows="5" placeholder="Digite seu texto aqui..."></textarea>
            <div class="button-group">
                <button onclick="codificar()">Codificar</button>
                <button onclick="decodificar()">Decodificar</button>
            </div>
        </div>
        
        <!-- Área de saída -->
        <div class="box">
            <img src="High quality products 1 1.svg" alt="High quality products" class="highQualityProducts">
            <h2>Resultado</h2>
            <div id="resultado">
                <h2>Nenhuma mensagem encontrada</h2>
                <h6>Digite o texto que você deseja criptografar ou descriptografar</h6>
            </div>
            <button onclick="copiarTexto()">Copiar</button>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>/

CSS (styles.css)

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f9;
    margin: 0;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
}
.vector {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: auto;
}
.container {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.box {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.box h2 {
    font-size: 20px;
    margin-bottom: 10px;
}
.box h5, .box h6 {
    font-size: 14px;
    margin-bottom: 10px;
    color: #666;
}
.box input, .box textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.button-group {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
}
.box button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    flex: 1;
    min-width: 120px;
}
.box button:hover {
    background-color: #0056b3;
}
#resultado {
    min-height: 100px;
    max-height: 200px;
    overflow-y: auto;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    white-space: pre-wrap;
    box-sizing: border-box;
}
.highQualityProducts {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}

JavaScript (scripts.js)


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


Como Executar
Clone o repositório para sua máquina local.
Abra o arquivo index.html em um navegador web.
Utilize as funcionalidades de codificação, decodificação e cópia conforme descrito acima.
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
