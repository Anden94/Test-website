(function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
  
      doToggle: function(e) {
        
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
        var body = document.getElementById("body");
        if(hamburger.nav.classList.contains('expanded')){
            body.classList.add("fixed-position");
        }
        else{
            body.classList.remove("fixed-position");
        }
        

      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) {
         hamburger.doToggle(e);
         });
    hamburger.nav.addEventListener('click', function(e) { 
        hamburger.doToggle(e); 
    });
    document.addEventListener('click', function (e) {
               if (e.path.indexOf(hamburger.navToggle) < 0 && e.path.indexOf(hamburger.nav) < 0 && hamburger.nav.classList.contains('expanded')) {
                hamburger.doToggle(e);
                }
    });
  
  }());

  
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


