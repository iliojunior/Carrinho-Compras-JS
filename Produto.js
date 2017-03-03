function Produto(descricao, valorCompra, valorVenda, estoqueInicial) {
    this.descricao = descricao;
    this.valorCompra = valorCompra;
    this.valorVenda = valorVenda;
    this.estoque = estoqueInicial;
}


Array.prototype.find = function (searchValue) {
    if (typeof this === Produto && this.length > 0) {
        for (var i = 0; i < this.length; i++) {
            if (this[i].descricao === searchValue)
                return this[i];
        }
    }
}
