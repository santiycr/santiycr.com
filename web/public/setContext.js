window.contextTimeout = null;

function fade(div) {
    var alpha = div.style.opacity;
    var new_alpha = alpha - 0.1;
    div.style.opacity = new_alpha;
    if (new_alpha){
        window.contextTimeout = setTimeout(function(){fade(div);}, 50);
    } else {
        this.browserbot.getUserWindow().document.body.removeChild(div);
    }
}

Selenium.prototype.doSetContext = function(context) {
   var ctx = this.browserbot.getUserWindow().document.getElementById("context");
   var newdiv;
   if (ctx) {
       newdiv = ctx;
       clearTimeout(window.contextTimeout);
   } else {
       newdiv = this.browserbot.getUserWindow().document.createElement("div");
   }
   newdiv.setAttribute('id', "context");
   newdiv.style.zIndex = "500";
   newdiv.style.position = "fixed";
   newdiv.style.left = "50%";
   newdiv.style.top = "10px";
   newdiv.style.width = "500px";
   newdiv.style.maxHeight = "100px";
   newdiv.style.overflow = "hidden";
   newdiv.style.margin = "0 0 0 -250px";
   newdiv.style.padding = "5px";
   newdiv.style.MozBorderRadius = "5px";
   newdiv.style.borderRadius = "5px";
   newdiv.style.textAlign = "center";
   newdiv.style.font = "normal bold 20px/25px Arial,sans-serif";
   newdiv.style.background = "#333";
   newdiv.style.color = "#EEE";
   newdiv.style.opacity = 0.8;
   newdiv.innerHTML = context;   
   this.browserbot.getUserWindow().document.body.appendChild(newdiv);
   window.contextTimeout = setTimeout(function(){fade(newdiv);}, 3000);
}
