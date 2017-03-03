var listaProdutos = [];
var listaCompras = [];
var listaVendas = [];

/**
 * Cria um novo Produto
 * @param descricao
 * @param valorCompra
 * @param valorVenda
 * @param estoqueInicial
 * @returns {{descricao: *, valorCompra: *, valorVenda: *, estoque: *}}
 */
function criarProduto(descricao, valorCompra, valorVenda, estoqueInicial) {
    return {
        descricao: descricao,
        valorCompra: valorCompra,
        valorVenda: valorVenda,
        estoque: estoqueInicial
    };
}
/**
 * Realiza o cadastro de um novo produto
 * @param {string} descricao - Descrição do produto a ser cadastrado
 * @param {double} valorCompra - Valor de compra do produto a ser cadastrado
 * @param {double} valorVenda - Valor de Venda do produto a ser cadastrado
 * @param {double} estoqueInicial - Estoque inicial do produto a ser cadastrado
 * @returns {void}
 */
function cadastrarProduto(descricao, valorCompra, valorVenda, estoqueInicial) {
    var novoProduto = criarProduto(descricao, valorCompra, valorVenda, estoqueInicial);
    listaProdutos.push(novoProduto);
}

/**
 * Realiza o cadastro de uma nova compra
 */
function cadastrarCompra() {

}

/**
 * Realiza o cadastro de uma nova venda
 */
function cadastrarVenda() {

}

/**
 * Gera o relatório dos produtos cadastrados
 */
function gerarRelatorioProdutos() {

}

/**
 * Gera o relatório das compras realizadas
 */
function gerarRelatorioCompras() {

}

/**
 * Gera o relatório das vendas realizadas
 */
function gerarRelatorioVendas() {

}

/**
 * Função principal de todo meu carrinho de compras
 */
function aplicacao() {
    do {

        var mensage = "1 - produto   \n" +
            "2 - compra    \n" +
            "3 - venda     \n" +
            "4 - relatorio \n" +
            "0 - sair      \n" +
            "Selecione uma opcao";

        opcao = prompt(mensage, "");

        opcao = parseInt(opcao);
        switch (opcao) {
            case 1:
                var descricaoProduto = prompt("Informe a descricao do produto: ", "");
                var valorCompra = prompt("Informe o valor de compra: ", "");
                var valorVenda = prompt("Informe o valor de venda: ", "");
                var estoque = prompt("Informe o estoque inicial: ");
                cadastrarProduto(descricaoProduto, valorCompra, valorVenda, estoque);
                break;
            case 2:
                cadastrarCompra();
                break;
            case 3:
                cadastrarVenda();
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
