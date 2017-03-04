var listaProdutos = [];
var listaCompras = [];
var listaVendas = [];

/**
 *Faz uma busca na lista de produtos.
 *@param listaProdutos
 *@return dedscricaoProduto
 */
function solicitarProduto() {
    if (listaProdutos.isEmpty())
        return null;

    var descricaoProduto = prompt("Informe o Produto: ", "");

    return listaProdutos.buscarProduto(descricaoProduto);
}

/**
 * Realiza o cadastro de um novo descricaoProduto
 * @param {string} descricao - Descrição do descricaoProduto a ser cadastrado
 * @param {double} valorCompra - Valor de compra do descricaoProduto a ser cadastrado
 * @param {double} valorVenda - Valor de Venda do descricaoProduto a ser cadastrado
 * @param {double} estoqueInicial - Estoque inicial do descricaoProduto a ser cadastrado
 * @returns {void}
 */
function cadastrarProduto(produto) {
    if (!produto) {
        alert("Produto invalido!!!");
        return;
    }

    listaProdutos.push(produto);
}

/**
 * Realiza o cadastro de uma nova compra
 */
function cadastrarCompra(produto) {
    if (!produto) {
        alert("Produto inválido");
        return false;
    }

    var quantidadeCompra = prompt("Informe a quantidade comprada do produto \"" + produto.descricao + "\": ", "");
    var novoSaldoProduto = produto.estoque + quantidadeCompra;
    var novaCompra = new Compra(produto.codigo, quantidadeCompra, novoSaldoProduto);

    produto.estoque = novoSaldoProduto;

    listaCompras.push(novaCompra);

    return true;
}

/**
 * Realiza o uma nova venda
 * @returns {Boolean}
 */
function realizarVenda() {
    produto = solicitarProduto();
    if (produto == null) {
        alert("Produto não cadastrado");
        return false;
    }
    quantidadeVenda = prompt("Informe a quantidade a ser vendida do produto \"" + produto.descricao + "\": ");
    quantidadeVenda = parseFloat(quantidadeVenda);

    if (quantidadeVenda > produto.estoque) {
        alert("Não possui essa quantidade em estoque");
        return false;
    }

    produto.estoque -= quantidadeVenda;
    preco = quantidadeVenda * produto.valorVenda;
    listaVendas.push(realizarVenda);
    alert("Venda efetuada com sucesso");
}

/**
 * Gera o relatório dos produtos cadastrados
 */
function gerarRelatorioProdutos() {
    var mensagemSaida = "Lista de Produtos \n";

    listaProdutos.forEach(function (item) {
        mensagemSaida += "Descrição: " + item.descricao;
        mensagemSaida += " | Compra R$: " + item.valorCompra;
        mensagemSaida += " | Venda R$: " + item.valorVenda;
        mensagemSaida += " | Estoque: " + item.estoque;
        mensagemSaida += " | Estoque Inicial: " + item.estoqueInicial;
        mensagemSaida += "\n";
    });

    alert(mensagemSaida);
}

/**
 * Gera o relatório das compras realizadas
 */
function gerarRelatorioCompras(produto) {
    if (listaCompras.isEmpty()) {
        alert("A lista de compras está vazia!");
        return;
    }

    var mensagemSaida = "Lista de Compras \n";

    var comprasByProduto = listaCompras.buscarComprasPeloCodigoProduto(produto.codigo);

    comprasByProduto.forEach(function (item) {
        mensagemSaida += "Quantidade de comprada: " + item.quantidade;
        mensagemSaida += "\n";
    });

    alert(mensagemSaida);
}

/**
 * Gera o relatório das vendas realizadas
 */
function gerarRelatorioVendas() {
    listaVendas.forEach(function (item) {
        mensagemSaida += "Quantidade de vendas: " + item.quantidadeVenda;
        mensagemSaida += "\n";
    });
    alert(mensagemSaida);
}

/**
 * Remove um produto de acordo com o produto passado como parametro
 * @param produto
 */
function removerProduto(produto) {
    if (!produto) {
        alert("Produto inválido!");
        return false;
    }

    var indiceProduto = listaProdutos.buscarIndiceProduto(produto.codigo);
    listaProdutos.splice(indiceProduto, 1);
    return true;
}

/**
 * Função principal de todo meu carrinho de compras
 */
function aplicacao() {
    do {

        var mensage = "1 - Produto   \n" +
            "2 - compra    \n" +
            "3 - venda     \n" +
            "4 - relatorio \n" +
            "0 - sair      \n" +
            "Selecione uma opcao";

        opcao = prompt(mensage, "");

        opcao = parseInt(opcao);
        switch (opcao) {
            case 1:
                var opcaoProduto = prompt("1 - Novo \n" +
                    "2 - Excluir \n" +
                    "3 - Sair");

                opcaoProduto = parseInt(opcaoProduto);

                switch (opcaoProduto) {
                    case 1:
                        var codigoProduto = prompt("Informe o código do Produto: ", "");
                        var descricaoProduto = prompt("Informe a descricao do Produto: ", "");
                        var valorCompra = prompt("Informe o valor de compra: ", "");
                        var valorVenda = prompt("Informe o valor de venda: ", "");
                        var estoque = prompt("Informe o estoque inicial: ");

                        var novoProduto = new Produto(codigoProduto, descricaoProduto, valorCompra, valorVenda, estoque);

                        cadastrarProduto(novoProduto);
                        break;

                    case 2:
                        var produto = solicitarProduto();

                        removerProduto(produto);
                        break;
                }

                break;
            case 2:
                var produto = solicitarProduto();
                cadastrarCompra(produto);
                break;
            case 3:
                realizarVenda();
                break;

            case 4:
                var opcaoRelatorio = prompt("1 - produtos  \n" +
                    "2 - compras   \n" +
                    "3 - vendas    \n");

                switch (parseInt(opcaoRelatorio)) {
                    case 1:
                        gerarRelatorioProdutos();
                        break;

                    case 2:
                        var produto = solicitarProduto();
                        gerarRelatorioCompras(produto);
                        break;

                    case 3:
                        gerarRelatorioVendas();
                        break;
                }

            default:

                break;

        }

    } while (opcao !== 0);
}

aplicacao();
