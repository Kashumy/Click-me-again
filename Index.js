let a =0;
let d =0;
let n =0;
       function click1(){
         if(d===0){
         a+=1;
         } 
         if(a==1){
         var audioFile = new Audio('LIMBO.mp3');
         audioFile.play()
         } 
         if(a==1){
           b();
         }
  document.getElementById("c").innerHTML = a+"/236"+"   " +n+"/t =201 end";
  document.getElementById("click").innerHTML = a;
       } 
        
  function b() {
	setTimeout(doSomething, 1000);
	
	function doSomething() {
	  n += 1;
	  console.log(n);
	if (n>200){
	    document.getElementById("c").innerHTML = a+"   "+"This is end you need 236pt";
	    d=1;
	    if (n>210) {
	      if (a>236) {
	        document.getElementById("c").innerHTML = a+"   "+"You win the code :013220Asu56h";
	      }
	      if (a < 199) {
	        document.getElementById("c").innerHTML = a + "   " + "You Lose return game again tow win! :(";
	      }
	    }
	} 
	setTimeout(1000);
	return b();
}}
