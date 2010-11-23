window.contextTimeout = null;

function fade(ctx) {
    var alpha = ctx.style.opacity;
    var new_alpha = alpha - 0.1;
    ctx.style.opacity = new_alpha;
    if (new_alpha){
        window.contextTimeout = setTimeout(function(){fade(ctx);}, 50);
    } else {
        this.browserbot.getUserWindow().document.body.removeChild(ctx);
    }
}

Selenium.prototype.doSetContext = function(context) {
   var ctx = this.browserbot.getUserWindow().document.getElementById("selenium-context");
   if (ctx) {
       clearTimeout(window.contextTimeout);
   } else {
       ctx = this.browserbot.getUserWindow().document.createElement("div");
   }
   ctx.setAttribute('id', "selenium-context");
   ctx.style.zIndex = "500";
   ctx.style.position = "fixed";
   ctx.style.left = "50%";
   ctx.style.top = "10px";
   ctx.style.width = "500px";
   ctx.style.maxHeight = "100px";
   ctx.style.overflow = "hidden";
   ctx.style.margin = "0 0 0 -250px";
   ctx.style.padding = "5px";
   ctx.style.MozBorderRadius = "8px";
   ctx.style.borderRadius = "8px";
   ctx.style.textAlign = "center";
   ctx.style.font = "normal normal 20px/25px Arial,sans-serif";
   ctx.style.background = "#000";
   ctx.style.border = "1px solid #CCC";
   ctx.style.color = "#EEE";
   ctx.style.opacity = 0.8;
   ctx.innerHTML = context;   
   this.browserbot.getUserWindow().document.body.appendChild(ctx);
   window.contextTimeout = setTimeout(function(){fade(ctx);}, 3000);
}
