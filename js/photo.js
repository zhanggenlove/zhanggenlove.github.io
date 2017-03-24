//car 的弹出层
$(document).ready(function () {
	var zhezhao=function(){
	var car_container=$("#car_container");
	var carphoto_face=$("#photobox3");
	carphoto_face.click(function(){
		car_container.show(300);
	});
	
	}
	var all;
	var photoInfo=function(){
		var allImg=all=11;
		var car_image=$("#car_image");
		var win=$(window);
		var winWidth=win.width();
		var zhezhaoW=winWidth*0.7;
		var padding=p=5;
		var imgW=Math.floor((zhezhaoW-2*padding)/3);
		var imgH=imgW/2;
		var temp="";
		for (var i = 1; i <= allImg; i++) {
			temp+='<li id-data="'+i+'" class="animated zoomInRight" style="width:'+imgW+'px;cursor:pointer;height:'+imgH+'px;margin-top:2px;padding-left:'+padding+'px;display:inline-block"><canvas id="cvs_'+i+'"></canvas></li>';
			var imgObj=new Image();
			var imgSrc='../img/car'+i+'.png';
			imgObj.index=i;
			imgObj.onload=function(){
				var cvs=$("#cvs_"+this.index)[0].getContext('2d');
				cvs.width=this.width;
			    cvs.height=this.height;
				cvs.drawImage(this,0,0)
			}
			imgObj.src=imgSrc;
			car_image.html(temp);
	}
}
 var closeBtn=function(){
 	var car_container=$("#car_container");
 	var largeimg_container=$("#largeimg_container");
 	var largebtn=$("#largebtn");
 	var carBtn=$("#carbtn");
 	carBtn.click(function(){
 	car_container.hide(1000);	
 	});
 	largebtn.click(function(){
 		largeimg_container.hide(500);
 	})
 }
 //小图查看大图
 var cid;
 var largeImg=function(){
 		$("#car_image").delegate("li","click",function(){
 			$("#largeimg_container").show(300);
 			var _id=cid=$(this).attr("id-data");
 			loadImg(_id);
 			
 		})
 }
 var loadImg=function(id){
 	var win=$(window);
 	var imgSrc='../img/car'+id+'-large.jpg';
 	var imgObj=new Image();
 	imgObj.onload=function(){
 			var w=this.width;
 			var h=this.height;
 			var largeW=win.width()*0.7;
 			var largeH=win.height()*0.7;
 			var largebox=$("#largebox");
 			var largeTop=(win.height()-largeH)/2;
 			var largeLeft=(win.width()-largeW)/2;
 			var prev=$("#prev");
 			var next=$("#next");
 			var prevT=largeTop+largeH*0.5;
 			var prevL=largeLeft+largeW*0.05;
 			var largebtn=$("#largebtn");
largebox.attr("src",imgSrc).css("width",largeW).css("height",largeH).css("margin-left",largeLeft).css("margin-top",largeTop);
prev.css("left",prevL).css("top",prevT);
next.css("right",prevL).css("top",prevT);
largebtn.css("right",largeLeft).css("top",largeTop).css("position","absolute");
 	}

 	imgObj.src=imgSrc;
 }
 var sliderL=function(){
 	var prev=$("#prev");
 	var largebox=$("#largebox");
 	var largeboxDom=largebox[0];
 	prev.click(function(){
 		cid--;
 		if (cid<1) {
 			cid=all;
 		}else{
 				loadImg(cid);
 				largeboxDom.addEventListener("webkitAnimationEnd",function(){
					largebox.removeClass('animated fadeInRight');
					largeboxDom.removeEventListener('webkitAnimationEnd');
				})
 				largebox.addClass("animated fadeInRight")
 		}
 	})

 	// 	$("#largeimg_container").click(function(){
 	// 	$(this).hide(300);
 	// })
 }
 var sliderR=function(){
 	var largebox=$("#largebox");
 	var largeboxDom=largebox[0];
 	var next=$("#next");
 	next.click(function(){
 		cid++;
 		if (cid>all) {
 			cid=1;
 		}else{
 				loadImg(cid);
 				largeboxDom.addEventListener("webkitAnimationEnd",function(){
					largebox.removeClass('animated pulse');
					largeboxDom.removeEventListener('webkitAnimationEnd');
				})
 				largebox.addClass("animated pulse")
 		}
 	})
 }
 // 大图自动播放
 
 	
 	sliderR();
 	sliderL();
 	closeBtn();
	zhezhao();
	photoInfo();	
	largeImg();
})