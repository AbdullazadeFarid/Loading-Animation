var overlay = document.querySelector(".overlay")



var small_around = document.querySelector(".small_around");




    setTimeout(function() {
        small_around.style.display="none";    //burda diyirki 5000 millisaniyeden (yeni 5 saniyeden sora) yox olsun
        overlay.style.display="none";        // burda deyirki 5 saniyeden sora overlayda silinsin
    }, 5000);

