//function pesquisar() {
    //console.log("clicou");}
//console.log(dados); //caso queira exibir um dados especifico dentro dos dados inseridos ponha entre colchetes[] o numero referente ao dado lembrando que o índice começa sempre em 0 zero                 ex.console.log(dados[3]);
//console.log(poderosoChefao);

let resultados = "";



let section = document.getElementById("resultados-pesquisa");
console.log(section);

//para cada dado dentro da lista de dados
for (let dado of dados)
//section.innerHTML tag usada para por uma informação na tela 
section.innerHTML = `
<div class="item-resultado">

    <h2>Quem Sou EU 
    </h2>
            
        <p class="descricao-meta">Aos 20 anos, a programação se tornou um dos meus maiores interesses. A cada dia, mergulho mais fundo nesse universo, buscando aprimorar minhas habilidades e expandir meus conhecimentos. A jornada até aqui tem sido desafiadora, mas também muito gratificante. Acredito que a programação é mais do que apenas escrever código; é uma forma de expressão e de criar algo do zero.</p>
</div>`