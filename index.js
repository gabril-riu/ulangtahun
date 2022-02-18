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

  hasilText.html(
    `${text}  <br> ___ <br> semoga harapanmu yang di atas ini satu persatu di kabulkan oleh Tuhan Yang Maha Esa`
  );
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
