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

    var i = 0;
    while (i < this.length && !produtoRetorno) {
        var produto = this[i];
        if (produto.descricao === searchValue || produto.codigo === searchValue) {
            produtoRetorno = produto;
            break;
        }
        i++;
    }

    return produtoRetorno;
}

/**
 * Retorna a posição do produto a partir de um valor de busca
 * @param searchValue - Código ou descrição do produto
 * @returns {number}
 */
Array.prototype.buscarIndiceProduto = function (searchValue) {
    var indice = -1;

    var i = 0;
    while(i< this.length && indice < 0){
        var produto = this[i];
        if (produto.descricao === searchValue || produto.codigo === searchValue)
            indice = i;
    }

    return indice;
}