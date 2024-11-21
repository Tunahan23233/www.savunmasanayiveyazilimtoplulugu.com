var k = document.getElementById('yazı1');
function fonk1() {

    k.innerHTML = "Yazılım"
}
function fonk2() {

    k.innerHTML = "Savunma Sanayi";
}
function fonksiyon(x) {
    var sonuc = 0;
    for (var j = 0; j <= x; j++) {
        sonuc = sonuc + j;
    }
    document.getElementById("m").innerHTML = x + " sayısına kadar olan sayıların toplamı : " + sonuc;
}