function Compra(produto, quantidade, saldoAtual) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.saldoAtual = saldoAtual;
}

Array.prototype.buscarMovimentoPeloCodigoProduto = function (codigoProduto) {
    var listaMovimentos = [];

    this.forEach(function(compra){
        if(compra.produto === codigoProduto)
            listaMovimentos.push(compra);
    });

    return listaMovimentos;
}