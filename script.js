let time = $(".data"),
data = $(".data2");

setInterval(() => {
    let wd = new Date();
   
    let h = wd.getHours();
    let m = wd.getMinutes();
    let s = wd.getSeconds();

    let day = wd.getDay();
    let wdate = wd.getDate();
    let month = wd.getMonth();
    let y = wd.getFullYear();

    time.text(`${h}:${zero(m)}:${zero(s)}`);
    data.text(`${dni[day]}, ${zero(wdate)} ${months[month]}, ${y}`);

}, 1000);

function zero(x) {
    if (x < 10) {
        return `0${x}`;
    } else {
        return x;
    }
}

let dni = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];