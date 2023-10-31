const caixaResposta = document.querySelector('.caixaResposta');
const btn = document.querySelector('.btnGerar');

function gerarSenha() {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const caracteresEspeciais = '!@#$%&*';

    const todosCaracteres = letrasMinusculas + letrasMaiusculas + numeros + caracteresEspeciais;

    let senha = '';

    for (let i = 0; i < 10; i++) {
        const indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length);
        senha += todosCaracteres.charAt(indiceAleatorio);
    }

    caixaResposta.value = senha;
}

btn.addEventListener('click', gerarSenha);

function copy(){
    navigator.clipboard.writeText(caixaResposta.value);
}
