//PART1

var a = {
    a: 1,
    b: 2
}
var b = {
    b: 2,
    a: 1
}

var c = {
    a:1,
    b: 2,
    c: 3
}
 var d = {}

 var e = {}
console.log(Object.keys(a))
function shallowCompare(a,b){
    var keys = Object.keys(a)
    var keys1 = Object.keys(b)
    console.log(keys.length)
    if( keys.length != keys1.length){
        return false;
    }
    else if(keys.length==0 && keys1.length==0){
        return true
    }
    for(key in a){
        if(a[key] = b[key]){
            return true;
        }
        
        else{
            return false;
        }
    }
}

console.log(shallowCompare(a,b))

// PART2  isogram
function isIsogram(word){

    var splitted = word.split('')
    for(var i=0; i<splitted.length;i++){
        // console.log(splitted[i])
        for(var j = i+1; j<splitted.length; j++){
            
            if(splitted[i] == splitted[j]){
                console.log(splitted[j] + ' this is not an isogram');
            } 
        }
    }
}
isIsogram('hakobh'.toLowerCase());

// PART3

function fibonacci(num){
    var n=0;
    var n1 = 1;
    var result;
    for (var i=1; i<num; i++){
        result = n + n1;
        n = n1;
        n1 = result
    }
        console.log(result)
}

fibonacci(10)


//PART4

function hashv(num){
    var sum = num + ''
    var sumSt = sum.split('') 
    var finalSum = 0;
    var finalProd = 1;
    for(var i=0; i<sumSt.length; i++){
        finalSum += sumSt[i]/1
        finalProd *= sumSt[i]/1
    }
    if(finalProd%finalSum == 0){
        console.log(`Quotient is ${finalProd/finalSum}`)
    }else if(finalProd == 0 || finalSum == 0){
        console.log(`we cant do the calculation`)
    }
    else{
        console.log(`Remainder is ${finalProd%finalSum}`)
    }

}
hashv(455)

//PART5


function matrix (x){
    let result = ''
    var blanks= 0;
    for (var i=0; i<x; i++){
        let row = ''
        for (let j=0; j<x; j++){
            if(j == blanks || j == x - 1 - blanks){
                row += ' '
            }else{
            row += '*'     
            
        }
        
        }
        blanks++
        result += row + '\n'
    }
    console.log(result)
}

matrix(11)
