
    const userCardTemplate = document.querySelector("[data-user-template]")
    const userCardContainer = document.querySelector("[data-user-cards-container]")
    const searchInput = document.querySelector("[data-search]")
    
    let users = []
    
    searchInput.addEventListener("input", e => {
      const value = e.target.value.toLowerCase()
      users.forEach(user => {
        const isVisible =
          user.name.toLowerCase().includes(value) ||
          user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
      })
    })
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        users = data.map(user => {
          const card = userCardTemplate.content.cloneNode(true).children[0]
          const header = card.querySelector("[data-header]")
          const body = card.querySelector("[data-body]")
          header.textContent = user.name
          body.textContent = user.email
          userCardContainer.append(card)
          return { name: user.name, email: user.email, element: card }
        })
      })
      
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    
    function validation(){
    var user = document.getElementById('user').value;
    var emails = document.getElementById('emails').value;
    var mobilenumber = document.getElementById('mobilenumber').value;
    var pass = document.getElementById('pass').value;
    var confirmpass = document.getElementById('conpass').value;

    if(user==""){
        document.getElementById('username').innerHTML="Enter Full Name";
        return false;
    }
    if(emails==""){
        document.getElementById('emailids').innerHTML="Enter your email address";
        return false;
    }
    if(mobilenumber==""){
        document.getElementById('mobileno').innerHTML="Enter a phone number";
        return false;
    }
    if(mobilenumber.length!=10){
        document.getElementById('mobileno').innerHTML="User must enter 10 digits";
        return false;
    }
    if(pass<10){
        document.getElementById('passwords').innerHTML="Password is weak";
        return false;
    }
    if(confirmpass==""){
        document.getElementById('confirmpass').innerHTML="Enter password confirmation";
        return false;
    }
}
$(document).ready(function(){
    $(".reviews").each(function(){
      var This = $(this) ;
      var Nums = This.find(".panel").size() ;
      This.find(".panel:first").addClass("PanelAct");
      This.append("<div class='control'></div>") ;
      This.find(".panel").not(".PanelAct")
        .css("left","100%")
      for ( i=0 ; i<Nums ; i++) {
        This.find(".control").append("<span></span>") ;
      }
      This.find(".control span:eq(0)").addClass("ContActive");
      
      This.find(".control span").click(Reviews);
      
      function Reviews(){
        var loc = $(this).index();
        var ActivLoc = This.find(".ContActive").index();
  
        $(this).addClass("ContActive")
          .siblings().removeAttr("class");
        
        if ( loc > ActivLoc ) {
          var Dire = '100%'
          var IDire = '-100%'
        }
        if ( loc < ActivLoc ) {
          var Dire = '-100%'
          var IDire = '100%'
        }
  
        This.find(".panel").not(".PanelAct")
        .css("left",Dire) ;
        This.find(".panel:eq("+loc+")")
        .animate({'left':'0'},speed)
        .addClass("PanelAct")
        .siblings(".PanelAct")
        .removeClass("PanelAct")
        .animate({'left':IDire},speed);
      }
    });
  });
    $(document).ready(function(){
  $(".reviews").each(function(){
    var This = $(this) ;
    var Nums = This.find(".panel").size() ;
    This.find(".panel:first").addClass("PanelAct");
    This.append("<div class='control'></div>") ;
    This.find(".panel").not(".PanelAct")
      .css("left","100%")
    for ( i=0 ; i<Nums ; i++) {
      This.find(".control").append("<span></span>") ;
    }
    This.find(".control span:eq(0)").addClass("ContActive");
    
    This.find(".control span").click(Reviews);
    
    function Reviews(){
      var loc = $(this).index();
      var ActivLoc = This.find(".ContActive").index();

      $(this).addClass("ContActive")
        .siblings().removeAttr("class");
      
      if ( loc > ActivLoc ) {
        var Dire = '100%'
        var IDire = '-100%'
      }
      if ( loc < ActivLoc ) {
        var Dire = '-100%'
        var IDire = '100%'
      }

      This.find(".panel").not(".PanelAct")
      .css("left",Dire) ;
      This.find(".panel:eq("+loc+")")
      .animate({'left':'0'},speed)
      .addClass("PanelAct")
      .siblings(".PanelAct")
      .removeClass("PanelAct")
      .animate({'left':IDire},speed);
    }
  });
});
  