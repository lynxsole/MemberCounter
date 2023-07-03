let Membercounter = 13008;
let Member = document.getElementById('mc').innerHTML = Membercounter;
const convert = new Intl.NumberFormat('eu-FR').format(Membercounter)


if (Membercounter > 1000) {
    
    document.getElementById('mc').innerHTML = convert;
}
