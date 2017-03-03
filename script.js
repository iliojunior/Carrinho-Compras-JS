var listaProdutos = [];
var listaCompras = [];
var listaVendas = [];

/**
 *Faz uma busca na lista de produtos.
 *@param listaProdutos
 *@return descricaoProduto
 */
function solicitarProduto(listaProdutos) {
    descricaoProduto = prompt("Informe o descricaoProduto", "");

    listaProdutos.forEach(function (item) {
        if (item == descricaoProduto) {
            return descricaoProduto;
        } else {
            alert("Produto não cadastrado");
        }
    });
}
/**
 * Realiza o cadastro de um novo descricaoProduto
 * @param {string} descricao - Descrição do descricaoProduto a ser cadastrado
 * @param {double} valorCompra - Valor de compra do descricaoProduto a ser cadastrado
 * @param {double} valorVenda - Valor de Venda do descricaoProduto a ser cadastrado
 * @param {double} estoqueInicial - Estoque inicial do descricaoProduto a ser cadastrado
 * @returns {void}
 */
function cadastrarProduto(descricao, valorCompra, valorVenda, estoqueInicial) {
    var novoProduto = new Produto(descricao, valorCompra, valorVenda, estoqueInicial);
    listaProdutos.push(novoProduto);
}

/**
 * Realiza o cadastro de uma nova compra
 */
function cadastrarCompra(produto) {
    quantidadeCompra = prompt("Informe a quantidade comprada do produto \"" + produto.descricao + "\": ", "");
    realizarCompra = descricaoProduto.estoque = parseInt(descricaoProduto.estoque) + parseInt(quantidadeCompra);

    produto.estoque += quantidadeCompra;
    listaCompras.push(realizarCompra);
}

/**
 * Realiza o uma nova venda
 * @returns {Boolean}
 */
function realizarVenda(produto) {
    quantidadeVenda = prompt("Informe a quantidade a ser vendida do produto \"" + produto.descricao + "\": ");

    quantidadeVenda = parseFloat(quantidadeVenda);

    if (quantidadeVenda > descricaoProduto.estoque) {
        alert("Não possui essa quantidade em estoque");
        return false;
    }

    produto.estoque -= quantidadeVenda;
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
        mensagemSaida += "\n";
    });

    alert(mensagemSaida);
}

/**
 * Gera o relatório das compras realizadas
 */
function gerarRelatorioCompras() {
    var mensagemSaida = "Lista de Compras \n";

    listaCompras.forEach(function (item) {
        mensagemSaida += "Quantidade de comprada: " + item.quantidadeCompra;
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
 * Função principal de todo meu carrinho de compras
 */
function aplicacao() {
    do {

        var mensage = "1 - descricaoProduto   \n" +
            "2 - compra    \n" +
            "3 - venda     \n" +
            "4 - relatorio \n" +
            "0 - sair      \n" +
            "Selecione uma opcao";

        opcao = prompt(mensage, "");

        opcao = parseInt(opcao);
        switch (opcao) {
            case 1:
                var descricaoProduto = prompt("Informe a descricao do descricaoProduto: ", "");
                var valorCompra = prompt("Informe o valor de compra: ", "");
                var valorVenda = prompt("Informe o valor de venda: ", "");
                var estoque = prompt("Informe o estoque inicial: ");
                cadastrarProduto(descricaoProduto, valorCompra, valorVenda, estoque);
                break;
            case 2:
                cadastrarCompra(solicitarProduto(listaProdutos));
                break;
            case 3:
                realizarVenda(solicitarProduto(listaProdutos));
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
                        gerarRelatorioCompras();
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
