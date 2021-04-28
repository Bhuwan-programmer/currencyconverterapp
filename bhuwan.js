var form=document.getElementById("app");
form.onsubmit=function(e){
    e.preventDefault();
   // var result=document.getElementById("result");
 var number=document.getElementById("num").value;
 var number1=document.getElementById("num1");
 
var country=document.getElementById("country");
var country1=document.getElementById("country1");
// nepal to all country
if(country.value=="nepal" && country1.value=="india"  )
{
number1.value=number*0.63;
}
if(country.value=="nepal" && country1.value=="aus"  )
{
number1.value=number*0.011;
}
if(country.value=="nepal" && country1.value=="canada"  )
{
number1.value=number*0.010;
}
if(country.value=="nepal" && country1.value=="us"  )
{
number1.value=number*0.0084;
}
if(country.value=="nepal" && country1.value=="chin"  )
{
number1.value=number*0.054;
}
if(country.value=="nepal" && country1.value=="hk"  )
{
number1.value=number*0.065;
}
if(country.value=="nepal" && country1.value=="jp"  )
{
number1.value=number*0.91;
}
if(country.value=="nepal" && country1.value=="kw"  )
{
number1.value=number*0.0025;
}
if(country.value=="nepal" && country1.value=="uae"  )
{
number1.value=number*0.031;
}
if(country.value=="nepal" && country1.value=="qt"  )
{
number1.value=number*0.031;
}
if(country.value=="nepal" && country1.value=="nepal"  )
{
number1.value=number*1;
}


// canada to all country
if(country.value=="canada" && country1.value=="india"  )
{
number1.value=number*60.02;
}
if(country.value=="canada" && country1.value=="aus"  )
{
number1.value=number*1.04;
}
if(country.value=="canada" && country1.value=="nepal"  )
{
number1.value=number*96.13;
}
if(country.value=="canada" && country1.value=="us"  )
{
number1.value=number*0.81;
}
if(country.value=="canada" && country1.value=="chin"  )
{
number1.value=number*5.23;
}
if(country.value=="canada" && country1.value=="hk"  )
{
number1.value=number*6.26;
}
if(country.value=="canada" && country1.value=="jp"  )
{
number1.value=number*87.76;
}
if(country.value=="canada" && country1.value=="kw"  )
{
number1.value=number*0.24;
}
if(country.value=="canada" && country1.value=="uae"  )
{
number1.value=number*2.96;
}
if(country.value=="canada" && country1.value=="qt"  )
{
number1.value=number*2.94;
}
if(country.value=="canada" && country1.value=="canada"  )
{
number1.value=number*1;
}
// indian to all country
if(country.value=="india" && country1.value=="nepal"  )
{
number1.value=number*1.60;
}
if(country.value=="india" && country1.value=="aus"  )
{
number1.value=number*0.017;
}
if(country.value=="india" && country1.value=="canada"  )
{
number1.value=number*0.017;
}
if(country.value=="india" && country1.value=="us"  )
{
number1.value=number*0.013;
}
if(country.value=="india" && country1.value=="chin"  )
{
number1.value=number*0.087;
}
if(country.value=="india" && country1.value=="hk"  )
{
number1.value=number*0.10;
}
if(country.value=="india" && country1.value=="jp"  )
{
number1.value=number*1.46;
}
if(country.value=="india" && country1.value=="kw"  )
{
number1.value=number*0.0040;
}
if(country.value=="india" && country1.value=="uae"  )
{
number1.value=number*0.049;
}
if(country.value=="india" && country1.value=="qt"  )
{
number1.value=number*0.049;
}
if(country.value=="india" && country1.value=="india"  )
{
number1.value=number*1;
}
//australia to all country

if(country.value=="aus" && country1.value=="nepal"  )
{
number1.value=number*92.31;
}
if(country.value=="aus" && country1.value=="aus"  )
{
number1.value=number*1;
}
if(country.value=="aus" && country1.value=="canada"  )
{
number1.value=number*0.96;
}
if(country.value=="aus" && country1.value=="us"  )
{
number1.value=number*0.77;
}
if(country.value=="aus" && country1.value=="chin"  )
{
number1.value=number*5.02;
}
if(country.value=="aus" && country1.value=="hk"  )
{
number1.value=number*6.01;
}
if(country.value=="aus" && country1.value=="jp"  )
{
number1.value=number*84.31;
}
if(country.value=="aus" && country1.value=="kw"  )
{
number1.value=number*0.23;
}
if(country.value=="aus" && country1.value=="uae"  )
{
number1.value=number*2.84;
}
if(country.value=="aus" && country1.value=="qt"  )
{
number1.value=number*2.82;
}
if(country.value=="aus" && country1.value=="india"  )
{
number1.value=number*57.66;
}
//us to all country
if(country.value=="us" && country1.value=="india"  )
{
number1.value=number*74.41;
}
if(country.value=="us" && country1.value=="aus"  )
{
number1.value=number*1.29;
}
if(country.value=="us" && country1.value=="nepal"  )
{
number1.value=number*119.22;
}
if(country.value=="us" && country1.value=="us"  )
{
number1.value=number*1;
}
if(country.value=="us" && country1.value=="chin"  )
{
number1.value=number*6.49;
}
if(country.value=="us" && country1.value=="hk"  )
{
number1.value=number*7.76;
}
if(country.value=="us" && country1.value=="jp"  )
{
number1.value=number*108.87;
}
if(country.value=="us" && country1.value=="kw"  )
{
number1.value=number*0.30;
}
if(country.value=="us" && country1.value=="uae"  )
{
number1.value=number*3.67;
}
if(country.value=="us" && country1.value=="qt"  )
{
number1.value=number*3.67;
}
if(country.value=="us" && country1.value=="canada"  )
{
number1.value=number*1.24;
}

//china to all country
if(country.value=="chin" && country1.value=="india"  )
{
number1.value=number*11.48;
}
if(country.value=="chin" && country1.value=="aus"  )
{
number1.value=number*0.20;
}
if(country.value=="chin" && country1.value=="nepal"  )
{
number1.value=number*18.38;
}
if(country.value=="chin" && country1.value=="us"  )
{
number1.value=number*0.15;
}
if(country.value=="chin" && country1.value=="chin"  )
{
number1.value=number*1;
}
if(country.value=="chin" && country1.value=="hk"  )
{
number1.value=number*1.20;
}
if(country.value=="chin" && country1.value=="jp"  )
{
number1.value=number*16.79;
}
if(country.value=="chin" && country1.value=="kw"  )
{
number1.value=number*0.046;
}
if(country.value=="chin" && country1.value=="uae"  )
{
number1.value=number*0.57;
}
if(country.value=="chin" && country1.value=="qt"  )
{
number1.value=number*0.56;
}
if(country.value=="chin" && country1.value=="canada"  )
{
number1.value=number*0.19;
}

//honkong to all country 
if(country.value=="hk" && country1.value=="india"  )
{
number1.value=number*9.59;
}
if(country.value=="hk" && country1.value=="aus"  )
{
number1.value=number*0.17;
}
if(country.value=="hk" && country1.value=="nepal"  )
{
number1.value=number*15.36;
}
if(country.value=="hk" && country1.value=="us"  )
{
number1.value=number*0.13;
}
if(country.value=="hk" && country1.value=="chin"  )
{
number1.value=number*0.84;
}
if(country.value=="hk" && country1.value=="hk"  )
{
number1.value=number*1;
}
if(country.value=="hk" && country1.value=="jp"  )
{
number1.value=number*14.03;
}
if(country.value=="hk" && country1.value=="kw"  )
{
number1.value=number*0.039;
}
if(country.value=="hk" && country1.value=="uae"  )
{
number1.value=number*0.47;
}
if(country.value=="hk" && country1.value=="qt"  )
{
number1.value=number*0.47;
}
if(country.value=="hk" && country1.value=="canada"  )
{
number1.value=number*0.16;
}
//japan to all country
if(country.value=="jp" && country1.value=="india"  )
{
number1.value=number*0.68;
}
if(country.value=="jp" && country1.value=="aus"  )
{
number1.value=number*0.012;
}
if(country.value=="jp" && country1.value=="nepal"  )
{
number1.value=number*1.09;
}
if(country.value=="jp" && country1.value=="us"  )
{
number1.value=number*0.0092;
}
if(country.value=="jp" && country1.value=="chin"  )
{
number1.value=number*0.060;
}
if(country.value=="jp" && country1.value=="hk"  )
{
number1.value=number*0.071;
}
if(country.value=="jp" && country1.value=="jp"  )
{
number1.value=number*1;
}
if(country.value=="jp" && country1.value=="kw"  )
{
number1.value=number*0.0028;
}
if(country.value=="jp" && country1.value=="uae"  )
{
number1.value=number*0.034;
}
if(country.value=="jp" && country1.value=="qt"  )
{
number1.value=number*0.033;
}
if(country.value=="jp" && country1.value=="canada"  )
{
number1.value=number*0.011;
}
//kuwait to all country
if(country.value=="kw" && country1.value=="india"  )
{
number1.value=number*246.96;
}
if(country.value=="kw" && country1.value=="aus"  )
{
number1.value=number*4.29;
}
if(country.value=="kw" && country1.value=="nepal"  )
{
number1.value=number*395.76;
}
if(country.value=="kw" && country1.value=="us"  )
{
number1.value=number*3.32;
}
if(country.value=="kw" && country1.value=="chin"  )
{
number1.value=number*21.53;
}
if(country.value=="kw" && country1.value=="hk"  )
{
number1.value=number*25.77;
}
if(country.value=="kw" && country1.value=="jp"  )
{
number1.value=number*361.69;
}
if(country.value=="kw" && country1.value=="kw"  )
{
number1.value=number*1;
}
if(country.value=="kw" && country1.value=="uae"  )
{
number1.value=number*12.19;
}
if(country.value=="kw" && country1.value=="qt"  )
{
number1.value=number*12.09;
}
if(country.value=="kw" && country1.value=="canada"  )
{
number1.value=number*4.12;
}
//uae to all country
if(country.value=="uae" && country1.value=="india"  )
{
number1.value=number*20.25;
}
if(country.value=="uae" && country1.value=="aus"  )
{
number1.value=number*0.35;
}
if(country.value=="uae" && country1.value=="nepal"  )
{
number1.value=number*32.46;
}
if(country.value=="uae" && country1.value=="us"  )
{
number1.value=number*0.27;
}
if(country.value=="uae" && country1.value=="chin"  )
{
number1.value=number*1.77;
}
if(country.value=="uae" && country1.value=="hk"  )
{
number1.value=number*2.11;
}
if(country.value=="uae" && country1.value=="jp"  )
{
number1.value=number*29.67;
}
if(country.value=="uae" && country1.value=="kw"  )
{
number1.value=number*0.082;
}
if(country.value=="uae" && country1.value=="uae"  )
{
number1.value=number*1;
}
if(country.value=="uae" && country1.value=="qt"  )
{
number1.value=number*0.99;
}
if(country.value=="uae" && country1.value=="canada"  )
{
number1.value=number*0.34;
}
//qatar to all country
if(country.value=="qt" && country1.value=="india"  )
{
number1.value=number*20.44;
}
if(country.value=="qt" && country1.value=="aus"  )
{
number1.value=number*0.35;
}
if(country.value=="qt" && country1.value=="nepal"  )
{
number1.value=number*32.74;
}
if(country.value=="qt" && country1.value=="us"  )
{
number1.value=number*0.27;
}
if(country.value=="qt" && country1.value=="chin"  )
{
number1.value=number*1.78;
}
if(country.value=="qt" && country1.value=="hk"  )
{
number1.value=number*2.13;
}
if(country.value=="qt" && country1.value=="jp"  )
{
number1.value=number*29.93;
}
if(country.value=="qt" && country1.value=="kw"  )
{
number1.value=number*0.083;
}
if(country.value=="qt" && country1.value=="uae"  )
{
number1.value=number*1.01;
}
if(country.value=="qt" && country1.value=="qt"  )
{
number1.value=number*1;
}
if(country.value=="qt" && country1.value=="canada"  )
{
number1.value=number*0.34;
}










var bhuwan=document.getElementById("clr");
bhuwan.onclick=function(e){
    e.preventDefault();
    var number=document.getElementById("num");
    var number1=document.getElementById("num1");
    number.value="";
    number1.value="";
    
}
}
var dev=document.getElementById("developer");
dev.onclick=function(e){
    e.preventDefault();
   var result=document.getElementById("result");
    swal("Bhuwan Prasad Prasai ");
   
  
   }
   
  
    


//Coder Bhuwan prasad prasai......................