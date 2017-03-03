function Produto(descricao, valorCompra, valorVenda, estoqueInicial) {
    this.descricao = descricao;
    this.valorCompra = valorCompra;
    this.valorVenda = valorVenda;
    this.estoque = estoqueInicial;
}

/**
 *
 * @param searchValue
 * @returns {object} {Produto}
 */
Array.prototype.buscarProduto = function (searchValue) {
    var produtoRetorno = null;

    this.forEach(function (produto) {
        if (produto.descricao === searchValue)
            produtoRetorno = produto;
    });

    return produtoRetorno;
}
