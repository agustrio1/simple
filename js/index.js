const menu = document.querySelector("#menu-button input");
const navbar = document.querySelector("nav .nav");
menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});


let options = {
        startAngle: -1.55,
        size: 150,
        value: 0.90,
        fill: {gradient: ['#a445b2', '#fa4299']}
      }
      $(".circle .bar").circleProgress(options).on('circle-animation-progress',
      function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
      $(".js .bar").circleProgress({
        value: 0.70
      });
      $(".php .bar").circleProgress({
        value: 0.40
      });      
	  $(".mysql .bar").circleProgress({
        value: 0.25
      });
      
      /* cta wa */
      let nomor = ["+6285648741082"];
      let curIndex = 0;
      
      document.querySelector("#whatsapp-cta").addEventListener("click", () => {
        let nomer = nomor[curIndex];
       let url = "https://api.whatsapp.com/send?phone=" + nomer;
    window.open(url, "_blank");
    curIndex = (curIndex + 1) % nomor.length;
      });
      