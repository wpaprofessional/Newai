function abrirPesquisa() {
    // Esconde o ícone de pesquisa
    document.getElementById('icone-pesquisa').style.display = 'none';

    // Mostra o campo de pesquisa
    document.getElementById('campo-pesquisa').style.display = 'inline-block';

    // Foca no campo de pesquisa
    document.getElementById('campo-pesquisa').focus();
}

// Função já existente que verifica a sugestão e redireciona
function verificarSugestao() {
    const campoPesquisa = document.getElementById('campo-pesquisa').value;

    // Lista de páginas e URLs
    const paginas = {
        "Início": "index.html",
        "Produto": "produto.html",
        "Planos": "planos.html",
        "Parceiros": "parceiros.html",
        "Equipe": "leadership.html",
        "Suporte": "suporte.html",
        "Sobre": "sobre.html"
    };

    // Se a pesquisa corresponder a uma das páginas, redireciona automaticamente
    if (paginas[campoPesquisa]) {
        window.location.href = paginas[campoPesquisa];
    }
}

function fecharPesquisa() {
    // Esconde o campo de pesquisa
    document.getElementById('campo-pesquisa').style.display = 'none';

    // Mostra o ícone de pesquisa
    document.getElementById('icone-pesquisa').style.display = 'inline-block';
}
