var envf = {}

envf.imagesToPreload = [];

envf.addImage = function(url){
	if($.inArray(url, envf.imagesToPreload) < 0){
		envf.imagesToPreload.push();
	}
	envf.imagesToPreload.push(url);
}

envf.startPreloading = function(endCallback, progressCallBack){
	var images = [];
	var total = envf.imagesToPreload.length;
	for(var i=0; i<total; i++){
		var image = new Image();
		images.push(image);
		image.src = this.imagesToPreload[i];
	}
	var preloadingPoller = setInterval(function(){
		var counter = 0;
		var total = envf.imagesToPreload.length;
		for(var i=0;i<total;i++){
			if(images[i].complete){
				counter++
			}
			if(counter>=total){
				if(progressCallBack){
					progressCallBack((counter/total)*100);
				}
				clearInterval(preloadingPoller);
				endCallback();
			} else {
				if(progressCallBack){
					progressCallBack((counter/total)*100);
				}
			}
		}
	}, 1000);
}

envf.setBg = function(options){
    var options = $.extend(
    {
        color: "transparent",
        image: "",
        position: "center",
        size: "cover",
        repeat: "no-repeat",
        origin: "padding-box",
        clip: "padding-box",
        attachment: "fixed",
    },options)
    for(let k in options){
        if(k=="image"){
            $('body').css(`background-${k}`, `url('${options[k]}')`)
        }else{
            $('body').css(`background-${k}`, `${options[k]}`)
        }
    }
};

envf.moveAll = function(direction,milisecs){
    switch(direction){
        case "right":
            $('body').animate({backgroundPosition: `${parseFloat(document.querySelector('body').style.backgroundPositionX)+50}% 0%`},milisecs)
            $('.sprite').each(function(){
                $(this).css("left",(parseFloat(this.style.left)-100)+"vw")
            })
            break;        
        case "left":
            $('body').animate({backgroundPosition: `${parseFloat(document.querySelector('body').style.backgroundPositionX)-50}% 0%`},milisecs)
            $('.sprite').each(function(){
                $(this).css("left",(parseFloat(this.style.left)+100)+"vw")
            })
            break
        case "up":
            $('.sprite').each(function(){
                $(this).css("top",(parseFloat(this.style.top)-100)+"vh")
            })
            break;  
        case "down":
            $('.sprite').each(function(){
                $(this).css("top",(parseFloat(this.style.top)+100)+"vh")
            })
            break;  


    }
};


envf.addSprite = function(parentId, divId, texture, options) {
    
    var options = $.extend({
        x: 0,
        y: 0,
        z: 0,
        width: 64,
        height: 64
    }, options);
    $("#"+parentId).append("<div id='"+divId+"' style='position: absolute; left:"+options.x+"vw; top:"+options.y+"vh; width:"+options.width+"vw; height:"+options.height+"vw; z-index:"+options.z+"; background-size:contain; background-repeat: no-repeat;' class='sprite'></div>")
    if(texture){
        $('#'+divId).css("background-image", "url('"+texture+"')");
    }
};




envf.moveSprite = function(divId, way){
    switch(way){
        case "down":
            $("#"+divId).css("top",(parseFloat(document.querySelector("#"+divId).style.top)+100)+"vh");
            break;
        case "up":
            $("#"+divId).css("top",(parseFloat(document.querySelector("#"+divId).style.top)-100)+"vh")
            break;
    }
}