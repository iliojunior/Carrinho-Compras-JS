function Compra(produto, quantidade, saldoAtual) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.saldoAtual = saldoAtual;
}

function Venda(produto, quantidade, saldoAtual, valorTotal) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.saldoAtual = saldoAtual;
    this.valorTotal = valorTotal;
}
