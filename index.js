// let Number = [1,2,3,2,4,5,11,5,4,]

// let duplicat = Number.filter(())



// let number = [1,2,3,4,5,66,4,3,2,1]

// let dduplicat = number.filter((intm, index)=> number.indexOf(intm) !==index )
// console.log(dduplicat);


// let firstName = "GAGAN"
// let revesName = firstName.split("").reverse().join("")
// console.log(revesName);



// Array.prototype.extrapropty ="charn"
//  console.log( Array.prototype.extrapropty );
//  let Newname = [1,2,3,4,5]
//  for (let n in  Newname) {
//     // console.log(n);
//     if(Newname.hasOwnProperty(n)){
//         console.log(n);
        
//     }
    
    
//  }

//  Array.prototype.extrapro ='ramsingh'

//  const NewArray = [5,4,3,2,1,]
//  for(let s in NewArray){
//     if(NewArray.hasOwnProperty(s)){

//         console.log(s);
//     }
        
//  }




 let MyNumber = 33
 console.log(typeof MyNumber);
 
 let numberin_tring = String(MyNumber)
console.log(typeof  numberin_tring);


let Number = [1,2,3,4,5,6,7,8,9]
let sliceNumber = Number.splice(-8,3)

console.log(sliceNumber);
console.log(Number);


function addTwoNumbers (number1, number2){     
    number1 + number2   //or
    console.log(number1 + number2)   // for print the value 
    }

    addTwoNumbers(25,20)



    let Myname = "Vikas"
    let ReversNmae =  Myname.split("").reverse().join("")
    
    console.log(ReversNmae);

    for (let j = 0; j < 10; j++) {
        let element = j;
        if(element === 5){
            console.log('5 is a best number');
            
        }
        
        console.log(element);
        
    }
      let i = 25
    while(i < 30 ){
        console.log("its  a while loop");

        i++
    }


    let score = 1
    do{
        console.log(`${score}`);
         score++
    }
    while(score < 10);
    


    const abc = [1,2,3,4,5,6];

let abcd = abc.map( (num) => num - 1);
console.log(abcd,"abcd");

    