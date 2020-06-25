
function getNumber(num){
  
    var result =document.getElementById("result")
    result.value +=num;  // for + concatenate warne ek he value rahe ge purane wale bhi rakah raha hai  

}

function clearR(){

    var result =document.getElementById("result");
    result.value = "";
    var result1 =document.getElementById("result1");
    result1.value="";

    
}

function getresult(){

    var result =document.getElementById("result");
   

    var result1 =document.getElementById("result1");
    result1.value=result.value;
    console.log(result1.value)
    
    result.value=eval(result.value);

    // eval is the function to calculte the value pre define function of JS (6+9+0*9)=answer



}