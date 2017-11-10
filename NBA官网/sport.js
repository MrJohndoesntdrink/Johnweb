			//----------运动函数
			function myMove(obj,attr,target,speed,fn){
				var speed = (parseInt(getStyle(obj,attr))<target)?speed:-speed;	
				clearInterval(obj.timer);
				obj.timer = setInterval(function(){
					var nowpis = parseInt(getStyle(obj,attr)) + speed;
					//if( (speed > 0 && (target-nowpis)<speed) || (speed < 0 && (target-nowpis) > speed) ){
					//if ( (nowpis-target>=0 && speed > 0) || (nowpis-target<=0 && speed > 0) ){
						if( Math.abs( target-nowpis ) <= Math.abs(speed)){
							obj.style[attr] = target + "px";
							clearInterval(obj.timer);	
						if(fn){
							fn();
						}
						}else{
							obj.style[attr] =  nowpis + "px";
						}
				},100)
			}
			function getStyle( obj, attr){
							return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
						}

			//------------面向对象的运动函数			
			function objMove(obj,attr,target,speed){
				var _this = this;
				this.obj = obj;
				this.attr = attr;
				this.target =target;
				this.speed = speed;

				this.speed = (parseInt(getStyle(this.obj,this.attr))<this.target)?this.speed:-this.speed;
				clearInterval(this.obj.timer);
				this.obj.timer = setInterval(function(){
					_this.tab(_this);
				},100)
			}
			myMove.prototype.tab = function(_v){
				var nowpis = parseInt(getStyle(_v.obj,_v.attr)) + _v.speed;
				if( Math.abs( _v.target-nowpis ) <= Math.abs(_v.speed)){
							_v.obj.style[_v.attr] = _v.target + "px";
							clearInterval(_v.obj.timer);
						}else{
							_v.obj.style[_v.attr] =   nowpis + "px";
						}
			}
			
			

			//--------------给div进行两个方向的运动操作
			var speed1;
			var speed2;
			function allMove(obj,attr1,attr2,target1,target2,speed1,speed2,fn){
				speed1 = (parseInt(getStyle(obj,attr1))<target1)?speed1:-speed1;
				speed2 = (parseInt(getStyle(obj,attr2))<target2)?speed2:-speed2;
				clearInterval(obj.timer);
				obj.timer = setInterval(function(){
					var nowpis1 = parseInt(getStyle(obj,attr1)) + speed1;
					var nowpis2 = parseInt(getStyle(obj,attr2)) + speed2;
					//if( (speed > 0 && (target-nowpis)<speed) || (speed < 0 && (target-nowpis) > speed) ){
					//if ( (nowpis-target>=0 && speed > 0) || (nowpis-target<=0 && speed > 0) ){
						if( Math.abs( target1-nowpis1 ) <= Math.abs(speed1)){
							obj.style[attr1] = target1 + "px";
							clearInterval(obj.timer);	
						if(fn){
							fn();
						}
						}else{
							obj.style[attr1] =  nowpis1 + "px";
						}

						if( Math.abs( target2-nowpis2 ) <= Math.abs(speed2)){
							obj.style[attr2] = target2 + "px";
							clearInterval(obj.timer);	
						if(fn){
							fn();
						}
						}else{
							obj.style[attr2] =  nowpis2 + "px";
						}
				},100)
			}

			function getStyle( obj, attr){
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
			}