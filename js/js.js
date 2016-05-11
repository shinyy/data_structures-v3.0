$(function(){
	function stack(){
		this.datastore=[];
		this.top=0;
		this.push=function(ele){
			this.datastore[this.top++]=ele;
		};
		this.pop=function(ele){
			return this.datastore[--this.top];
		};
		this.peek=function(){
			return this.datastore[this.top-1];
		};
		this.length=function(){
			return this.top;
		};
		this.clear=function(){
			this.top=0;
		};
		this.tostring=function(){
			return this.datastore;
		};
	};
	
//	var s=new stack();
//	s.push("shin");
//	s.push("ruoyu");
//	s.push("baby");
//	console.log("length:"+s.length());
//	console.log(s.peek());
//	var poped=s.pop();
//	console.log(poped);
//	console.log(s.peek());
//	s.push("goku");
//	console.log(s.peek());
//	s.clear();
//	console.log(s.length());
//	console.log(s.peek());
		
		function mulbase(num,base){
			var s=new stack();
			do{
				s.push(num%base);
				num=Math.floor(num/=base);
			}while(num>0);
			var converted="";
			while(s.length()>0){
				converted+=s.pop();
			}
			return converted;
		};
		
//		console.log(mulbase(8,4));
		
		
		function ispalindrome(word){
			var s=new stack();
			for(var i=0;i<word.length;i++){
				s.push(word[i]);
			}
			var rword="";
			while(s.length()>0){
				rword+=s.pop();
			}
			
			if(word==rword){
				return true;
			}else{
				return false;
			}
		};
		var word="racecar";
		if(ispalindrome(word)){
			console.log("是回文");
		}else{
		    console.log("不是回文")	
		};
		
		//递归
		function digui(num){
			if(num===0){
				return 1;
			}else{
				return num*digui(num-1);
			}
		};
		console.log(digui(9));
		
		//使用栈模拟递归
		function digui2(n){
			var s=new stack();
			while (n>1){
				s.push(n--);
			};
			var product=1;
			while(s.length()>0){
				product*=s.pop();
			};
			return product;
		};
		console.log(digui2(10));
		
		
		//扩展练习
		//检查表达式的括号是否完整
		function kuohao(bds){
			var s=new stack();
			for(var i=0;i<bds.length;i++){
				s.push(bds[i]);
			};
			var sum=0;
			while(s.length()>0){
				s.pop();
				if(s.pop()=="("||s.pop()==")"){
					sum++;
				}
			};
			console.log(sum);
			if(sum%2==0){
				console.log("括号匹配");
			}else{
				console.log("括号不匹配");
			}
		};
		kuohao("2.3 + 23 / 12 + (3.14159× 0.24)")
		//不正确~~~~~~~~~~~~~~
		
		
		//现实生活中栈的一个例子是佩兹糖果盒。 想象一下你有一盒佩兹糖果， 里面塞满了红色、 黄色和白色的糖果， 但是你不喜欢黄色的糖果。 使用栈（有可能用到多个栈） 写一段程序， 在不改变盒内其他糖果叠放顺序的基础上， 将黄色糖果移出。
		function sugar(pz,color){
			var quchu=new stack();
			var fanghui=new stack();
			var singelsugar,singelsugar2;
			var zuihou=new stack();
			for(var i=0;i<pz.length;i++){
				quchu.push(pz[i]);
			};
			while(quchu.length()>0){
				singelsugar=quchu.pop();
				if(singelsugar!=color){
					fanghui.push(singelsugar);
				};
			};
			while(fanghui.length()>0){
				singelsugar2=fanghui.pop();
				zuihou.push(singelsugar2);
			};
			return zuihou.tostring();
		};
		
		var pz="yywwwryyyrrryyyywwww";
		console.log(sugar(pz,"y"));
})
