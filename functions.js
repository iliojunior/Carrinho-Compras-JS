Array.prototype.isEmpty = function () {
    return !(this.length > 0);
}

Array.prototype.buscarMovimentoPeloCodigoProduto = function (codigoProduto) {
    var listaMovimentos = [];

    this.forEach(function(compra){
        if(compra.produto === codigoProduto)
            listaMovimentos.push(compra);
    });

    return listaMovimentos;
}
