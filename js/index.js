const dados = [
    {
        descricao: "Como aprender JavaScript do zero",
        navegador: "Google Chrome",
        dataConsulta: "2025-03-15",
        autor: "Pedro Martins"
    },
    {
        descricao: "Melhores lugares para viajar em 2025",
        navegador: "Brave",
        dataConsulta: "2025-03-18",
        autor: "Carla Ribeiro"
    },
    {
        descricao: "Como investir na bolsa de valores",
        navegador: "Mozilla Firefox",
        dataConsulta: "2025-03-10",
        autor: "Renato Silveira"
    },
    {
        descricao: "Qual o melhor framework CSS em 2025?",
        navegador: "Microsoft Edge",
        dataConsulta: "2025-02-28",
        autor: "Luiza Fernandes"
    },
    {
        descricao: "Dicas de produtividade para home office",
        navegador: "Opera GX",
        dataConsulta: "2025-04-02",
        autor: "Thiago Gomes"
    }
];

document.getElementById("buscarBotao").addEventListener("click", function () {
    const busca = document.getElementById("busca");
    busca.innerHTML = "";

    dados.forEach((elementos) => {
        const div = document.createElement("div");
        div.className = "col-12 dados";


        const descricao = document.createElement("p");
        descricao.innerHTML = `<strong>Descrição:</strong> ${elementos.descricao}`;

        const navegador = document.createElement("p");
        navegador.innerHTML = `<strong>Navegador:</strong> ${elementos.navegador}`;

        const data = document.createElement("p");
        data.innerHTML = `<strong>Data da consulta:</strong> ${elementos.dataConsulta}`;

        const autor = document.createElement("p");
        autor.innerHTML = `<strong>Autor:</strong> ${elementos.autor}`;

        div.appendChild(descricao);
        div.appendChild(navegador);
        div.appendChild(data);
        div.appendChild(autor);

        busca.appendChild(div);
    });
});

document.getElementById("limparBotao").addEventListener("click", function () {
    const busca = document.getElementById("busca");
    busca.innerHTML = "";
});