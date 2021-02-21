function compute()
{
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * rate / 100 ;
   var futureyear = parseInt(years) + 2021;
   
   document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>. <br> at an interest rate of <mark>${rate}</mark>.<br> You will receive an amount of <mark>${interest}</mark>,<br> in the year <mark>${futureyear}</mark>`;

   if(principal == 0 || ""){
     alert("enter valid number");
   }
  
    
}
   var slider = document.getElementById("inter");
   var output = document.getElementById("demo");
   slider.oninput = function() {
   output.innerHTML = this.value;
}
         