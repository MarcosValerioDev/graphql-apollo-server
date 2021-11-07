module.exports = {
    precoCDesconto(produto) {
        if (produto.desconto > 0) return produto.preco * produto.desconto;
        else return produto.preco
    }
}