function ucapan() {
  const text = $("#urWish").val();
  const tampilan = $("#body-2");
  const tampilan1 = $("#body-2-1");
  const tampilan2 = $("#body-2-2");
  const tampilan3 = $("#body-2-3");
  const tampilan4 = $("#body-3");
  const tampilan5 = $("footer");
  const hasilText = $("#urWish1");

  tampilan.css("display", "none");
  tampilan1.attr("style", "display: inherit; visibility: visible;");
  tampilan2.attr("style", "display: inherit; visibility: visible;");
  tampilan3.attr("style", "display: inherit; visibility: visible;");
  tampilan4.attr("style", "display: inherit; visibility: visible;");
  tampilan5.attr("style", "display: inherit; visibility: visible;");

  tampilan3.show(4000);

  hasilText.html(
    `${text}  <br> ___ <br> semoga harapanmu yang di atas ini satu persatu di kabulkan oleh Tuhan Yang Maha Esa`
  );

  typewriter();
}

//Animation Scroll reveral
var animation = {
  distance: "100%",
  origin: "left",
  opacity: 0.5,
  delay: 700,
  reset: true,
};
var animation1 = {
  distance: "100%",
  origin: "right",
  delay: 900,
  opacity: 0.5,
  reset: true,
};
var animation2 = {
  distance: "250px",
  origin: "bottom",
  delay: 1100,
  opacity: 0.5,
  reset: false,
};

let animation3 = {
  distance: "250px",
  origin: "bottom",
  delay: 600,
  opacity: 0,
  reset: true,
};

ScrollReveal().reveal(".ucapan", animation);
ScrollReveal().reveal(".name-user", animation1);
ScrollReveal().reveal(".deco-kue", animation2);
ScrollReveal().reveal(".text-ke-1", animation3);
ScrollReveal().reveal(".text-ke-2", animation3);
ScrollReveal().reveal(".text-ke-3", animation3);
ScrollReveal().reveal(".text-ke-4", animation3);
ScrollReveal().reveal(".text-ke-5", animation3);
ScrollReveal().reveal(".text-ke-6", animation3);

var aText = new Array(
  "<em>Selamat Ulang Tahun Sayang. Semoga apa yang kamu Tulis tadi segera terwujud,", 
  "dan juga sehat selalu. ibadahnya ditingkatkan lagi, sayangnya ditambah terutama kepada", 
  "keluarga. baru habis itu aku hahaha </em> &#128516",
  "<em>pokoknya yang terpenting bahagia selalu </em> &#128151",
  "<em>hanya itu yang bisa aku ucapkan, Maaf kalo aku masih belum bisa menjadi",
  "seperti apa yang kamu mau, dan juga belum bisa membahagiakanmu </em> &#128511",
  "<em>Semoga bertambahnya umurmu ini aku berharap semua masalahmu dapat terselesaikan semuanya </em> &#128151 <em>,",
  "dan aku Ucapkan </em><strong><em>Happy BirthDay Sayang</em></strong>&#127881&#127873",
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("harapanku");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  

