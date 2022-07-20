var a='1888-8884-8818-2888';

//To chcek the position of minus
function positionofminus(card){
    var par=String(card);
    var samp=/[-]/g;
    var alpha1=card.match(samp)
     //var spe=(card.match(specialChars))
     var pos=0;
     var pos2=0;
     var pos3=0;
     if(alpha1!=null){
  //      console.log(alpha1);
        pos=par.indexOf("-");
        pos2=par.indexOf("-",5);
        pos3=par.indexOf("-",10);
        console.log(pos2)
        if(pos===4 && pos2===9 && pos3===14){
            console.log('Minus is entered correctly')
            return true;
        }  else{
            console.log('Enter Minus at proper place');
            return false;
        }  
        
     }
     
 }

 var posret=positionofminus(a)
 //End of the position check

function minuscheck(card){

 // console.log(card.split(""));
 card.split("");
let b=[];
for(c=0;c<card.length;c++){
    if(card[c]!='-'){
      //  console.log(a[c]);
        b.push(card[c])
    }
}

if(b.length>16) {
    console.log('Your Card Contains more then 16 Digits'+" "+b.length)
    return false
}

//console.log(b);
return b;
}

var h=minuscheck(a);
//console.log(h);

//To Check the duplicate Number

function duplicatecheck(card){

    
    var str=card;
    let big=0;
    let strcopy=0;
    let strcopy2=0;
    const len=(str.length)
    if(len>16){
        console.log('One digit can not be repeated');
            return false
        }
    for(i=0;i<=len;i++){
        strcopy=str[i];
        strcopy2=str[(i+1)]
       if(strcopy===strcopy2){
         big=big+1;
       }
       
        
    }
    if(big===16){
        console.log('Dont Enter Duplicate and more than 16')
        return false;
    }
    else{
        return true

    }
    
    }
    
  var ch= duplicatecheck(h)
  //console.log(ch)

  //to check all the values are numbers
 
function cardalpha(card){

    var str=card;
    var samp=/[a-z]/g;
    var alpha=str.match(samp)

    if(alpha===null)
    {
        0
        return true;
    }
    else{

        if(alpha.length>0){
            console.log('Enter Only Digitis')
            return false;
            
           }

    }
     
    return true;
}

var alphareturn='';
if(ch===true){
 alphareturn= cardalpha(h.toString(' '))
}

//Card Even
//The final digit must be even

function cardeven(card){
    if((card[(card.length-1)] )%2===0)
    {
        console.log('Even Number ')
        return true;
    }
}

console.log(alphareturn)
var eve='';
if(alphareturn===true){
   eve= cardeven(h);
}

//sum of digitis/*

function sumofdigitis(card){
    var str=card;
    var samp=/[0-9]/g;
    var alpha1=str.match(samp)
    //console.log(alpha1)
   var alpha2=alpha1.toString();
   //console.log(alpha2)
   var total=0;
   for(c=0;c<alpha2.length;c++){
      // console.log(alpha2[c])
       if(Number(alpha2[c])){
           total=Number(total)+Number(alpha2[c])
       }
       
       
   
   }
   console.log(total)

}


if(eve===true){
    sumofdigitis(a)
}


