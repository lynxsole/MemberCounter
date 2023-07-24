
var input = document.getElementById("enterId").value; 
const convert = new Intl.NumberFormat('eu-FR').format();

function getId()
{
    var discord_key = input;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "https://discord.com/api/guilds/" + discord_key + "/embed.json", true);
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var d = JSON.parse(this.responseText);
            document.getElementById("mc").innerHTML = convert(d.presence_count);
            document.getElementById('Warnig').style.color = "#1DC645";
            document.getElementById('Warnig').innerHTML = "Voila !";
        } 
        else
        {
            document.getElementById('Warnig').style.color = "#C40227";
            document.getElementById('Warnig').innerHTML = "Une erreur C'est produit";
        }
    };  

    xmlHttpRequest.send();
}
