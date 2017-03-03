var listaProdutos = [];
var listaCompras = [];
var listaVendas = [];

/**
 * Realiza o cadastro de um novo produto
 */
function cadastrarProduto() {

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
                cadastrarProduto();
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