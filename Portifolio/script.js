document.querySelector(".hanburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sin").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semanas`
    atualizarPreco()
})


function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluilayout = document.querySelector("#layout-sin").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if(incluilayout) preco += 500
    let taxaurgencia = 1 - prazo*0.1;
    preco *= 1 + taxaurgencia
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
