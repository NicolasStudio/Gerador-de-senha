const resposta = document.querySelector('caixaResposta');
const btn = document.querySelector('btnGerar');

let caractere = ["!" , '?', '@', '#', '$'];

function generator(){
    // Transforma os numeros aleatorios em string, de 26 caractere, mas vai pegar apenas 8.
       
    let valor1 = Math.random().toString(26).slice(-9)
    let valor2 = caractere.sort(() => Math.random() - 0.5)

    const teste = [...valor1, ...valor2];

    const randomizar = teste.sort(() => Math.random() - 0.5)

    caixaResposta.value = randomizar.join('').slice(-10);

/// aqui



}

function copy(){
    navigator.clipboard.writeText(caixaResposta.value);
}