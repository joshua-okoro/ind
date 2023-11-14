let display= document.getElementById("display");
let specialcharacter=["+","-","/","%","*"];
let output="";
function calculate(datavalue){
    if(datavalue==="="&&datavalue!==""){
        output=eval(output.replace("%","/100"))
    }
    else if(datavalue==="AC"){
        output===""
    }else if(datavalue==="DEL"){
        output=output.toString().slice(0,-1);

    }else{
     if(output===""&&specialcharacter.includes(datavalue))return;
     output+=datavalue
    }
    display.value=output
}
let buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        calculate(e.target.dataset.value)
    })
})