function Produto(codigo, descricao, valorCompra, valorVenda, estoqueInicial) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.valorCompra = valorCompra;
    this.valorVenda = valorVenda;
    this.estoqueInicial = estoqueInicial;
    this.estoque = estoqueInicial;
}

/**
 * Retorna um objeto de produto a partir de um valor de busca
 * @param searchValue - Código ou descrição do produto
 * @returns {object} {Produto}
 */
Array.prototype.buscarProduto = function (searchValue) {
    var produtoRetorno = null;

    this.forEach(function (produto) {
        if (produto.descricao === searchValue || produto.codigo === searchValue)
            produtoRetorno = produto;
    });

    return produtoRetorno;
}
