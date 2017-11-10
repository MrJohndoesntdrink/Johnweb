window.onload = function(){
	//轮播图效果
	var oBox = document.getElementById("banner"); 
	var oUl = document.getElementById("baner");
	var oTabs = document.getElementById("tabs");
	var oli = oTabs.getElementsByTagName("li");
	var btn1 = document.getElementById("left");
	var btn2 = document.getElementById("right");
	var bLi = document.getElementById("btom").getElementsByTagName("li");
 	var num = 0;
	var imgNum;
	var timer;


			play();
			function stop(){clearInterval(timer);}
			function play(){timer = setInterval(autoPlay,3000)}

			oBox.onmouseover = function(){stop();}
			oBox.onmouseout = function(){play();}

			function autoPlay(){
				if(num<oli.length-1){
					num++;
					for(var i =0;i<oli.length;i++){
						oli[i].className = '';
						bLi[i].className = '';
					}
						oli[num].className = 'color';
						bLi[num].className = 'bk';
					imgNum = 510 * num;
					oUl.style.left = -imgNum + "px";
				}
				else{
					num = 0;
					for(var i =0;i<oli.length;i++){
						oli[i].className = '';
						bLi[i].className = '';
					}
					oli[num].className = 'color';
					bLi[num].className = 'bk';
					oUl.style.left = 0 + "px";
				}
			}


			btn1.onclick = function(){
				//stop();
				if(num > 0){
					num--;
					for(var i =0;i<oli.length;i++){
						oli[i].className = '';
						bLi[i].className = '';
					}
						oli[num].className = 'color';
						bLi[num].className = 'bk';
					imgNum = 510 * num;
					oUl.style.left = -imgNum + "px";
					//play();
				}
				else{
					num = 4;
					for(var i =0;i<oli.length;i++){
						oli[i].className = '';
						bLi[i].className = '';
					}
					oli[num].className = 'color';
					bLi[num].className = 'bk';
					oUl.style.left = -2040 + "px";

				}
			}

			btn2.onclick = function(){
				//stop();
				autoPlay();
				//play();
			}


			for(var j=0;j<oli.length;j++){
				oli[j].index = j;
				oli[j].onmouseover = function(){ 
					//stop();//----清除轮播
					var v = this.index;
					imgNum = v * 510;
					oUl.style.left = -imgNum + "px";
					for(var k = 0;k<oli.length;k++){
						oli[k].className = '';
						bLi[k].className = '';
					}
					oli[v].className = 'color';
					bLi[v].className = 'bk';
					//play();//----开始轮播
				}
			}

			//-----NBAsport下拉菜单
			var slid = document.getElementById("slide");
			var slibox = document.getElementById("box");
			slid.onmouseover = function(){
				myMove(slibox,'top',19,50)
			}
			slid.onmouseout = function(){
				myMove(slibox,'top',-180,50)
			}
			//-----导航栏字体颜色变化
			var na = document.getElementById("top_box").getElementsByTagName("li");
			
			for(var k=0;k<na.length;k++){
			na[k].index = k;
			na[k].onmouseover = function(){
				for(var j=0;j<na.length;j++){
						na[j].className = "";
						//oul[j].className = "";
					}
				na[this.index].className = "color1";
				//oul[this.index].className = "bok";
			}
			}
			//------导航栏下拉菜单
			var oTag =document.getElementById("top_box").getElementsByClassName("tag");
			var oul = document.getElementById("ee").getElementsByTagName("ul");
			for(var k1=0;k1<oTag.length;k1++){
			oTag[k1].index = k1;
			oTag[k1].onmouseover = function(){
				for(var j1=0;j1<oTag.length;j1++){
					oTag[j1].className = "tag";
					oul[j1].className = "";
				}
				//oTag[this.index].className = "color1 tag";
				this.className = "tag color1";
				oul[this.index].className = "bok";	
				
			}
			oTag[k1].onmouseout = function(){
				for(var j1=0;j1<oTag.length;j1++){
					oTag[j1].className = "tag";
					oul[j1].className = "";
				}
				//oTag[this.index].className = "color1 tag";
				this.className = "tag color1";
				oul[this.index].className = "";	
				
			}
			}

			//-------tab切换
			var oLi = document.getElementById("content_tab").getElementsByTagName("li");
			var oDiv = document.getElementById("video_list").getElementsByTagName("div");
			for(var i=0;i<oLi.length;i++){
				oLi[i].index = i;
				oLi[i].onmouseover = function(){
					for(var j=0;j<oLi.length;j++){
						oLi[j].className = '';
						oDiv[j].className = '';
						oDiv[j].style.opacity = "0";	
					}
					this.className = 'line';
					oDiv[this.index].className = 'change';
     				ab(this.index);
				}
			}

			function ab(v){
						var opty = 0;
						var _this = v;
						clearInterval(timer);
						var timer = setInterval(function(){
							opty += 5;
							if(opty<=100){
								oDiv[_this].style.opacity = opty / 100;
							}
							else{
								opty == 100;
								clearInterval(timer);
							}
							//opty > 100 && (opty == 100);
							//oDiv[_this].style.opacity = opty / 100;
							//opty == 100 && clearInterval(timer);
						},10)
					}


					//----换一换
					var onew = document.getElementById("new");
					var obgimg = document.getElementById("bg").getElementsByTagName("img");
					var imgarr = ["images/NBA_01_03.jpg","images/new1_03.jpg","images/new2_03.jpg"] 
					var num = 0;
					onew.onclick = function(){
						if(num<imgarr.length-1){
							num++;
							obgimg[0].src = imgarr[num]; 
						}
						else{
							num=0;
							obgimg[0].src = imgarr[num]; 
						}
					}
					//----
					var cDiv = document.getElementById("content3").getElementsByTagName("div");
					var obb =  document.getElementById("content3").getElementsByClassName("bb");
					for(var i=0;i<cDiv.length;i++){
						cDiv[i].index = i;
						cDiv[i].onmouseover = function(){
						allMove(obb[this.index],'height','top',138,-139,10,25);
						} 
						cDiv[i].onmouseout = function(){
						allMove(obb[this.index],'height','top',78,0,10,25);
						} 
					}

			//覆盖图片宽高变大
			var oigs = document.getElementById("num1").getElementsByTagName("img");
			for(var n=0;n<oigs.length;n++){
				oigs[n].index = n;
				oigs[n].onmouseover = function(){
					allMove(this,'width','height',295,213.5,3);
				}	
				oigs[n].onmouseout = function(){
					allMove(this,'width','height',285,203.5,3);
				}
			}
				











	


	/*for(var k1=0;k1<sLi.length;k1++){
		sLi[k1].index = k1;
		sLi[k1].onmouseover = function(){
			for(var j1=0;j1<sLi.length;j1++){
				sLi[j1].className = "";
				olip[j1].className = "";
			}
			sLi[this.index].className = "bgimg";
			olip[this.index].className = "blok";
		}
	}*/

	







	function getStyle( obj, attr){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
	}
}