let array = [[1,2], [3,4]];

function logAll(arr){
    for (var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

logAll(array);


function largest(param1, param2){
    if(param1 > param2){
        return param1;
    } else if (param1 == param2){
        return "equal";
    } else{
        return param2;
    }
}

console.log(largest(3, 6));
console.log(largest(3, 3));
console.log(largest(4, 3));

function equal(num1, num2){
    if(num1 === num2){
        return "equal in value and type";
    } else {
        return "not equal in value or type";
    }
}

console.log(equal(5, 5));
console.log(equal(5, '5'));