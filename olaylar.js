var deger=0;
function sag() {
    deger++;
    if (deger == 5) {
        deger = 0;
    }
    if (deger == 0) {
        document.getElementById("ekranresmi").src = "indir/kod.png";
    }
    if (deger == 1) {
        document.getElementById("ekranresmi").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Arduino_IDE_-_Blink.png/450px-Arduino_IDE_-_Blink.png";
    }
    if (deger == 2) {
        document.getElementById("ekranresmi").src = "https://learn.microsoft.com/tr-tr/azure/mysql/flexible-server/media/connect-workbench/3-workbench-sql-tab.png";

    }
    if (deger == 3) {
        document.getElementById("ekranresmi").src = "https://ismetalaluminyum.com.tr/tema/genel/uploads/urunler/maxresdefault.jpg";
    }
    if (deger == 4) {
        document.getElementById("ekranresmi").src = "csharpnet/tr.jpg";
    }
}


function sol() {
    deger--;
    if (deger == -1) {
        deger =4;
    }
    if (deger == 0) {
        document.getElementById("ekranresmi").src = "indir/kod.png";
    }
    if (deger == 1) {
        document.getElementById("ekranresmi").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Arduino_IDE_-_Blink.png/450px-Arduino_IDE_-_Blink.png";
    }
    if (deger == 2) {
        document.getElementById("ekranresmi").src = "https://learn.microsoft.com/tr-tr/azure/mysql/flexible-server/media/connect-workbench/3-workbench-sql-tab.png";

    }
    if (deger == 3) {
        document.getElementById("ekranresmi").src = "https://ismetalaluminyum.com.tr/tema/genel/uploads/urunler/maxresdefault.jpg";
    }
    if (deger == 4) {
        document.getElementById("ekranresmi").src = "csharpnet/tr.jpg";
    }
}

