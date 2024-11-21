//var deger = 0;
//console.log(deger);
//var degercpp = 0;
//var degerhtml = 0;
//var degersql = 0;
//var degersiper = 0;
//var degerkaan = 0;
//var degersüvari = 0;
//var degertb2 = 0;
//var degeranadolu = 0;
//var degerknt = 0;
//var res = 0;
//$(document).ready(function () {
//    var csharp = document.getElementById("#Csharp");
//    var cplusplus = document.getElementById("#Cpp");
//    var JTML = document.getElementById("#HTML");
//    var mysql = document.getElementById("#MySql");
//    $("#Csharp").mouseenter(function () {
//        if (deger === 0) {

//            deger = 1;
//            console.log(deger);
//            /*   $("body").hide();*/
//            $("#Cpp").hide();
//            $("#HTML").hide();
//            $("#MySql").hide();
//            $(this).css("width", "1200");
//            $(this).css("height", "1000");

//        }
//    });


//    $("#Csharp").mouseleave(function () {
//        if (deger === 1) {

//            deger = 2;
//            console.log(deger);
//            //$("body").show(3000);

//            $("#Cpp").show(5000);
//            $("#HTML").show(5000);
//            $("#MySql").show(5000);
//            $(this).css("width", "600");
//            $(this).css("height", "400");
//        }
//    });


//    $("#Cpp").mouseenter(function () {
//        if (degercpp === 0) {
//            degercpp = 1;
//            $("#Csharp").hide(5000);
//            $("#HTML").hide(5000);
//            $("#MySql").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");
//        }

//    });

//    $("#Cpp").mouseleave(function () {
//        if (degercpp === 1) {
//            degercpp = 2;
//            $("#Csharp").show(5000);
//            $("#HTML").show(5000);
//            $("#MySql").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "400");
//        }

//    });



//    $("#HTML").mouseenter(function () {
//        if (degerhtml === 0) {
//            degerhtml = 1;
//            $("#HTML").css("width", "1200");
//            $("#Cpp").hide(5000);
//            $("#Csharp").hide(5000);
//            $("#MySql").hide(5000);
//            $(this).css("height", "1200");
//        }

//    });
//    $("#HTML").mouseleave(function () {
//        if (degerhtml === 1) {
//            degerhtml = 2;
//            $("#Cpp").show(5000);
//            $("#Csharp").show(5000);
//            $("#MySql").show(5000);
//            $("#HTML").css("width", "500");
//            $(this).css("height", "400");
//        }

//    });



//    $("#MySql").mouseenter(function () {
//        if (degersql === 0) {
//            degersql = 1;
//            $("#Cpp").hide(5000);
//            $("#Csharp").hide(5000);
//            $("#HTML").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");
//        }

//    });
//    $("#MySql").mouseleave(function () {

//        if (degersql === 1) {
//            degersql = 2;
//            $("#Cpp").show(5000);
//            $("#Csharp").show(5000);
//            $("#HTML").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "400");
//        }
//    });

//    $("#siper").mouseenter(function () {
//        if (degersiper === 0) {
//            degersiper = 1;
//            $("#kaan").hide(5000);
//            $("#suvari").hide(5000);
//            $("#anadolu").hide(5000);
//            $("#knt").hide(5000);
//            $("#tb2").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");

//        }

//    });
//    $("#siper").mouseleave(function () {
//        if (degersiper === 1) {

//            degersiper = 2;
//            $("#kaan").show(5000);
//            $("#suvari").show(5000);
//            $("#anadolu").show(5000);
//            $("#knt").show(5000);
//            $("#tb2").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "1500");
//        }
//    });


//    $("#kaan").mouseenter(function () {
//        if (degerkaan === 0) {
//            degerkaan = 1;
//            $("#siper").hide(5000);
//            $("#suvari").hide(5000);
//            $("#anadolu").hide(5000);
//            $("#knt").hide(5000);
//            $("#tb2").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");
//        }


//    });
//    $("#kaan").mouseleave(function () {
//        if (degerkaan === 1) {
//            degerkaan = 2;
//            $("#siper").show(5000);
//            $("#suvari").show(5000);
//            $("#anadolu").show(5000);
//            $("#knt").show(5000);
//            $("#tb2").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "1500");

//        }

//    });


//    $("#suvari").mouseenter(function () {
//        if (degersüvari === 0) {
//            degersüvari = 1;
//            $("#siper").hide(5000);
//            $("#kaan").hide(5000);
//            $("#anadolu").hide(5000);
//            $("#knt").hide(5000);
//            $("#tb2").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");
//        }


//    });
//    $("#suvari").mouseleave(function () {
//        if (degersüvari === 1) {
//            degersüvari = 2;
//            $("#siper").show(5000);
//            $("#kaan").show(5000);
//            $("#anadolu").show(5000);
//            $("#knt").show(5000);
//            $("#tb2").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "1500");

//        }
//    });


//    $("#anadolu").mouseenter(function () {
//        if (degeranadolu === 0) {
//            degeranadolu = 1;
//            $("#siper").hide(5000);
//            $("#suvari").hide(5000);
//            $("#kaan").hide(5000);
//            $("#knt").hide(5000);
//            $("#tb2").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");

//        }

//    });
//    $("#anadolu").mouseleave(function () {
//        if (degeranadolu === 1) {
//            degeranadolu = 2;
//            $("#siper").show(5000);
//            $("#suvari").show(5000);
//            $("#kaan").show(5000);
//            $("#knt").show(5000);
//            $("#tb2").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "1500");

//        }
//    });

//    $("#knt").mouseenter(function () {
//        if (degerknt === 0) {
//            degerknt = 1;
//            $("#siper").hide(5000);
//            $("#suvari").hide(5000);
//            $("#kaan").hide(5000);
//            $("#anadolu").hide(5000);
//            $("#tb2").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");
//        }


//    });
//    $("#knt").mouseleave(function () {
//        if (degerknt === 1) {
//            degerknt = 2;
//            $("#siper").show(5000);
//            $("#suvari").show(5000);
//            $("#kaan").show(5000);
//            $("#anadolu").show(5000);
//            $("#tb2").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "1500");
//        }

//    });


//    $("#tb2").mouseenter(function () {
//        if (degertb2 === 0) {
//            degertb2 = 1;
//            $("#siper").hide(5000);
//            $("#suvari").hide(5000);
//            $("#kaan").hide(5000);
//            $("#knt").hide(5000);
//            $("#anadolu").hide(5000);
//            $(this).css("width", "1200");
//            $(this).css("height", "1200");


//        }
//    });
//    $("#tb2").mouseleave(function () {
//        if (degertb2 === 1) {
//            degertb2 = 2;
//            $("#siper").show(5000);
//            $("#suvari").show(5000);
//            $("#kaan").show(5000);
//            $("#knt").show(5000);
//            $("#anadolu").show(5000);
//            $(this).css("width", "500");
//            $(this).css("height", "1500");
//        }

//    });
//    $("#treew").mouseenter(function () {
//        if (res == 0) {
//            res = 1;
//            $("body").hide(1000);

//        }


//    });
//    $("#treew").mouseleave(function () {
//        if (res == 1) {
//            res = 2;
//            $("body").show(1000);
//        }

//    });
//});
//$("#treew").fadeOut();
//$("#tb2").fadeOut();
//$("#knt").fadeOut();
//$("#anadolu").fadeOut();
//$("#suvari").fadeOut();
//$("#kaan").fadeOut();
//$("#siper").fadeOut();
//$("#MySql").fadeOut();
//$("#HTML").fadeOut();
//$("#Cpp").fadeOut();
//$("#Csharp").fadeOut();
$(document).ready(function () {
    /*$("div").fadeIn(2000);*/
    $("h2").fadeIn(2000);
    $("h3").fadeIn(2000);
    $("h4").fadeIn(2000);
    $("h5").fadeIn(2000);
    $("h6").fadeIn(2000);
    $("br").fadeIn(2000);
    $("hr").fadeIn(2000);
    $("button").fadeIn(2000);
   /* $("nav").fadeIn(2000);*/
    //$("li").fadeIn(2000);
    $("a").fadeIn(2000);
    $("img").fadeIn(2000);
    $("p").fadeIn(2000);
    $("h7").fadeIn(2000);
    $("#ekranresmi").fadeIn(2000);
    $("#sag").fadeIn(2000);
    $("#sol").fadeIn(2000);
    $("#navdir").fadeIn(2000);
    $("#treew").fadeIn(2000);


    $("#tb2").fadeIn(4000);
    $("#knt").fadeIn(4000);
    $("#anadolu").fadeIn(4000);
    $("#suvari").fadeIn(4000);
    $("#kaan").fadeIn(4000);
    $("#siper").fadeIn(4000);
    $("#MySql").fadeIn(4000);
    $("#HTML").fadeIn(4000);
    $("#Cpp").fadeIn(4000);
    $("#Csharp").fadeIn(4000);
    $("#tb2resmi").fadeIn(4000);
    $("#kntresmi").fadeIn(4000);
    $("#anadoluresmi").fadeIn(4000);
    $("#suvariresmi").fadeIn(4000);
    $("#kaanresmi").fadeIn(4000);
    $("#siperresmi").fadeIn(4000);
    $("#MySqlresmi").fadeIn(4000);
    $("#HTMLresmi").fadeIn(4000);
    $("#Cppresmi").fadeIn(4000);
    $("#Csharpresmi").fadeIn(4000);
    $("#sorun").fadeIn(4000);
});