
//banner轮播
var win=$(".banner_1")[0];
var imgs=$(".slider_pane");
var rans=$(".slider_item");
var haftL=$(".slider_prev")[0];
var haftR=$(".slider_next")[0];
var flag=true;
var num=0;
var t=setInterval(move,3000);
win.onmouseover=function(){
	clearInterval(t);
	haftL.style.display="block";
	haftR.style.display="block";
}
win.onmouseout=function(){
	clearInterval(t);
	t=setInterval(move,3000);
	haftL.style.display="none";
	haftR.style.display="none";
	
}
haftR.onclick=function(){
	move();
}
haftL.onclick=function(){
	moveL();
}
for(var i=0;i<rans.length;i++){
	rans[i].index=i;
    rans[i].onclick=function(){
    	num=this.index;
    	for(var j=0;j<rans.length;j++){
    	animate(imgs[j],{opacity:0},300);
		rans[j].style.background="#3e3e3e";
    	}
    animate(imgs[num],{opacity:1},300);
	rans[num].style.background="#b61b1f";
    }
	}
function move(){
	if(!flag){
		return;
	}
	flag=false;
	num++;
	if(num==imgs.length){
		num=0;
	}
	for(var i=0;i<imgs.length;i++){
		animate(imgs[i],{opacity:0},300,function(){flag=true});
		rans[i].style.background="#3e3e3e";
	}
	animate(imgs[num],{opacity:1},300,function(){flag=true});
	rans[num].style.background="#b61b1f";
}
function moveL(){
	if(!flag){
		return;
	}
	flag=false;
	num--;
	if(num<0){
		num=imgs.length-1;
	}
	for(var i=0;i<imgs.length;i++){
		animate(imgs[i],{opacity:0},300,function(){flag=true});
		rans[i].style.background="#3e3e3e";
	}
	animate(imgs[num],{opacity:1},300,function(){flag=true});
	rans[num].style.background="#b61b1f";
}

//////////////////////////////////////////////////


function carousel(win){
var imgs=$('.fn',win);
var rou=$(".f1_slider",win);
var harfL=$(".f1_harfL",win)[0];  
var harfR=$(".f1_harfR",win)[0];
var num=0;
var flag=true;   //解决轮播快速显示bug 
var index=0;
var imgsW=parseInt(getStyle(imgs[0],"width"));  //获取图片宽度   
for(var i=0; i<imgs.length;i++){  
	imgs[i].style.left=imgsW+"px";
}
imgs[0].style.left=0+"px"               //让第一张图片显示
rou[0].style.background='#b61b1f';    //第一个按钮显示

var t=setInterval(movef1R,3000);
win.onmouseover=function(){
	clearInterval(t);
	harfR.style.display="block";
	harfL.style.display="block";
}
win.onmouseout=function(){
	t=setInterval(movef1R,3000);
	harfR.style.display="none";
	harfL.style.display="none";
}
for(var i=0; i<rou.length;i++){     //for
  rou[i].index=i;              //用rou[i]的index来储存i的值
  rou[i].onclick=function(){
    for(var i=0; i<rou.length;i++){        //for让所有的rou圆变为灰色
    	rou[i].style.background='#3e3e3e'; 
    }
    rou[this.index].style.background='#b61b1f';    //让点击的圆（index）变为红色
    imgs[this.index].style.left=imgsW+"px";         //让点击要出现的图片准备好
    animate(imgs[index],{left:-imgsW},400,Tween.Quart.easeIn );       //让当前index图片移出
    animate(imgs[this.index],{left:0},400,Tween.Quart.easeIn);        //让num图片进入
    index=num=this.index;                    // 点击后num index 都为当前this.index
}
}

harfL.onclick=function(){
	movef1L();
}
harfR.onclick=function(){
	movef1R();
}

function movef1R(){
  if(!flag){    //  如果为假 证明门还是关的，直接返回 等执行完之后再处理
    return;     // 如果为真，证明函数已经执行完，可以进入
}
flag=false;       //进入后改为false 也就是把门关上
num++;    
if(num==imgs.length){    
	num=0;
}
  imgs[num].style.left=-imgsW+"px";  //让下一张图片到位准备轮播
  animate(imgs[index],{left:imgsW},400,Tween.Quart.easeIn,function(){  //让当前index图片移出
    flag=true;                  //利用回调函数返回true 证明门已开    
});
  animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   //让num图片进入
  	flag=true;
  });
  for(var i=0; i<imgs.length;i++){
      rou[i].style.background='#3e3e3e';   //for使圆都变灰
  }
    rou[num].style.background='#b61b1f';  //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}
function movef1L(){
	if(!flag){
		return;
	}
flag=false;       //解决轮播快速显示bug
num--;    
if(num<0){    
	num=imgs.length-1;
}
  imgs[num].style.left=imgsW+"px";  //让下一张图片到位准备轮播
  animate(imgs[index],{left:-imgsW},400,Tween.Quart.easeIn,function(){  //让当前index图片移出
  	flag=true;         
  });
  animate(imgs[num],{left:0},400,Tween.Quart.easeIn,function(){   //让num图片进入
  	flag=true;
  });
  for(var i=0; i<imgs.length;i++){
      rou[i].style.background='#3e3e3e';   //for使圆都变灰
  }
    rou[num].style.background='#b61b1f';  //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}

}
//楼层轮播
setTimeout(function  () {
	var wins=$('.carousel');
	for(var i=0 ;i<wins.length; i++){
		carousel(wins[i]);
	}
},1000);




//节点轮播
var wintt=$('.special_sd')[0];
var boxtt=$('.special_sdU')[0];
var imgstt=boxtt.children;
var imgsttH=imgstt[0].offsetHeight;
var time=setInterval(fn,5000);
function fn(){
	for(var i=0;i<2;i++){
		boxtt.insertBefore(boxtt.lastElementChild,boxtt.firstElementChild);
	}
	boxtt.style.top=-2*imgsttH+35+'px';
	animate(boxtt,{top:35},Tween.Linear);
}

//右浮动窗口


//tab 选项卡
var cl=$('.f1')[0];
var down=$('.dorpdown')[0];
var tab=function(obj,down){
	obj.onmouseover=function(){
		obj.id='f1b';
		down.style.display="block";
	}
	obj.onmouseout=function(){
		obj.id='';
		down.style.display='none';
	}
}
tab(cl,down);

var frw=$('.fr_wdjd')[0];
var downw=$('.fr_wdjd_down')[0];
tab(frw,downw);

var frs=$('.fr_sj')[0];
var downss=$('.dorpdown_sj')[0];
var gh=$('.fr_icons',frs)[0];
	frs.onmouseover=function(){
		frs.id='sj';
		gh.style.right='7px'
		downss.style.display="block";
		frs.style.padding="0 24px";
	}
	frs.onmouseout=function(){
		gh.style.right='8px'
		frs.id='';
		downss.style.display='none';
		frs.style.padding="0 25px";
	}


var frg=$('.fr_wdjd')[1];
var downg=$('.gz-dorpdown')[0];
tab(frg,downg);

var frk=$('.fr_wdjd')[2];
var downk=$('.dorpdown_kf')[0];
tab(frk,downk);
var frz=$('.fr_wdjd')[3];
var downz=$('.dorpdown_wz')[0];
tab(frz,downz);
//购物车
var cw=$('.cw_icon')[0];
var downc=$('.prompt')[0];
cw.onmouseover=function(){
		cw.className="cw_icon cw_iconi";
		downc.style.display="block";
	}
	cw.onmouseout=function(){

		cw.className="cw_icon";
		downc.style.display='none';
	}


//楼层跳转

var floor=$(".floor1")[0];
var lis=$("li",floor);
var fs=$('.floors');
var et=$('.etitle');
var st=$(".floor");
var fH=floor.offsetHeight;
var pH=document.documentElement.clientHeight;
floor.style.top=(pH-319)/2+"px";
var jdm=$('.jdm-toolbar-tabs')[0];
var jH=jdm.offsetHeight;
jdm.style.top=(pH-jH)/2+'px';
window.onresize=function(){
jH=jdm.offsetHeight;
jdm.style.top=(pH-jH)/2+'px';
fH=floor.offsetHeight;
pH=document.documentElement.clientHeight;
floor.style.top=(pH-fH)/2+"px";	
}
var floorarr=[];
for(var i=0;i<st.length;i++){
	floorarr.push(st[i].offsetTop);
}
var kaiguan=true;
for(var i=0; i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		kaiguan=false;
		animate(document.body,{scrollTop:floorarr[this.index]},function(){
			kaiguan=true;
		});
		animate(document.documentElement,{scrollTop:floorarr[this.index]},function(){
			kaiguan=true;
		});
	}
}
var kg=true;
window.onscroll=function(){
	if(!kaiguan){
          return;
	}
	var obj=document.body.scrollTop?document.body:document.documentElement //三元判断火狐和谷歌
    var tops=obj.scrollTop;  
	for(var i=0;i<st.length;i++){
		if(tops+pH>=floorarr[i]+100){
			for(var j=0;j<st.length;j++){
				fs[j].classList.add('show');
				et[j].classList.remove('show');
			}
			fs[i].classList.remove('show');
			et[i].classList.add('show');
		}
	}
	if(tops>floorarr[0]){
		floor.style.display='block';
		kg=false;
	}else{
		floor.style.display='none';
		kg=true;
	}
}


//左边导航栏

var dd=$('.dd')[0];
var dds=$('li',dd);
var downs=$('.je_dorpdown');
var itemas=$('.item-channels');
for(var i=0;i<dds.length;i++){
	dds[i].index=i;
	dds[i].onmouseover=function(){
		this.style.background='#f7f7f7';
		downs[this.index].style.display='block';
	}
	dds[i].onmouseout=function(){
		this.style.background='#C81623';
		downs[this.index].style.display='none';
	}
}

//右边导航栏
var rigJ=$('li',jdm);
var texts=$('.tab_text',jdm);
for(var i=0; i<rigJ.length;i++){
	rigJ[i].index=i;
	rigJ[i].onmouseover=function(){
		animate(texts[this.index],{left:-60},1);
	}
	rigJ[i].onmouseout=function(){
		animate(texts[this.index],{left:0},1);
	}
}
var jtf=$('.jdm-toolbar-footer')[0];
var jli=$('li',jtf);
var jtexts=$('.tab_text',jtf);
for(var i=0;i<jli.length;i++){
	jli[i].index=i;
	jli[i].onmouseover=function(){
		animate(jtexts[this.index],{left:-60},1);
	}
	jli[i].onmouseout=function(){
		animate(jtexts[this.index],{left:0},1);
	}
}
jli[0].onclick=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
       obj.scrollTop=0;
}
var close=$('.top_close')[0];
var topimg=$('.top_banner')[0];
close.onclick=function  () {
	topimg.parentElement.removeChild(topimg);
}

//猜你喜欢
var mc1=$('.mc1')[0];
var mc11=$('.mc11');
var extra=$('#extra2');
mc11[0].style.display='block';
extra.onclick=function  () {
	var num=Math.floor(Math.random()*mc11.length);
	for(var i =0 ;i<mc11.length;i++){
		mc11[i].style.display='none';
	}
	mc11[num].style.display='block';
}
//楼层选项卡
var floorOption=function  (obj) {
	var tab=$('.tab-item',obj);
	var main=$('.main',obj);
	main[0].style.display='block';
	for(var i =0; i < tab.length; i++){
		tab[i].index=i;
		tab[i].onmouseover=function () {
			for(var j =0; j<tab.length; j++){
				main[j].style.display='none';
				tab[j].classList.remove('tab-selected');
			}
			main[this.index].style.display='block';
			tab[this.index].classList.add('tab-selected');
		}
	}
}
var objs=$('.floor');
for(var i=0 ; i < objs.length-1; i++){
	floorOption(objs[i]);
}
