	var wint=$(".lb_today")[0];
	var box=$(".box_today")[0];
	var imgst=$(".lis_today");
	var imgstW=parseInt(getStyle(imgst[0],"width"));
	var harfLD=$(".harf_tL")[0];
	var harfRD=$(".harf_tR")[0];	
var lunbo=function(win,box,imgs,imgsX,harfL,harfR){
	var flagt=true;
	var len=imgs.length;
	box.style.width=len*imgsX+"px";
	win.onmouseover=function(){
		harfL.style.display="block";
		harfR.style.display="block";
	}
	win.onmouseout=function(){
		harfL.style.display="none";
		harfR.style.display="none";
	}

	harfL.onclick=function(){
		moveT();
	}
	harfR.onclick=function(){
		moveRT();
	}
	function moveT(){
		if(!flagt){
			return;
		}
		flagt=false;
	animate(box,{left:-imgsX},600,function(){   //运动完执行的事，放到回调函数里面		
		var first=getFirst(box); //用getFirst获取box里面的第一个元素即图片
		box.appendChild(first);   //将first插入到最后
		box.style.left=0+"px";      //first走后，第二张会代替它的位置，所以将box拉回到left=0px;
		flagt=true;
	})
}
function moveRT(){
	if(!flagt){
		return;
	}
	flagt=false;
	var first=getFirst(box);  //用getFirst获取box里面的第一个元素即图片
	var last=getLast(box);    //用getFirst获取box里面的第一个元素即图片  
	box.insertBefore(last,first); //将最后一个图片插入到fisrt之前
	box.style.left=-imgsX+"px";    //last到前后，会增加一个图片的距离，所以将box拉回到left=-imgsWpx;
	animate(box,{left:0},600,function(){
		flagt=true;
	})
}
}
lunbo(wint,box,imgst,imgstW,harfLD,harfRD);
