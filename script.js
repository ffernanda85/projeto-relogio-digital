const currentDate = () => {
    const element = document.querySelector("h1")

    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    let time = `${hours}:${minutes}:${seconds}`
    element.innerText = time
};

currentDate();
setInterval(currentDate, 1000);

