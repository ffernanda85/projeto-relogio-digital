//criando a função
const currentDate = () => {
    //capturando o elemento H1 do html
    const element = document.querySelector("h1")

    //capturando os dados correntes da data atual e colocando na variável
    let date = new Date();

    //capturando as propriedades horas, minutos e segundos do objeto date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    //verificando e inserindo o zero na frente dos valores menores que 10
    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds
    
    //criando a estrutura final em uma variável
    let time = `${hours}:${minutes}:${seconds}`

    //inserindo a estrutura em nossa tag h1 (HTML)
    element.innerText = time
};

//chamando a função
currentDate();

//executa a função a cada 1 segundo
setInterval(currentDate, 1000);
