var listaProdutos = [];
var listaCompras = [];
var listaVendas = [];

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

                break;
            case 2:

                break;

            case 3:

                break;

            case 4:
                var opcaoRelatorio = prompt("1 - produtos  \n" +
                    "2 - compras   \n" +
                    "3 - vendas    \n");

                switch (parseInt(opcaoRelatorio)) {
                    case 1:

                        break;

                    case 2:

                        break;

                    case 3:

                        break;
                }
            default:

                break;

        }

    } while (opcao !== 0);
}

aplicacao();