var i = 0
while(i < 10){
    console.log(i);
    i++;
    if (i==4){
        break;
    }
};

var arr = [];

var i = 1
while (i<=100){
    arr.push(i)
    i++
};
console.log(arr);

var condition = false
do{
    console.log("run!!")
} while (condition);


for (var i = 0; i < 10 ; i+=2){
    console.log(i)
}


function findInArray(arr, value){
    for (var i = 0; i< arr.length; i++){
        if (arr[i] == value){
            return true;
        }
    }
    return false;
}

console.log(findInArray([1,2,3,4,4,56,6576,314,5456], 314))

function naquared(n){
    var count = 0
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            count++
        }
    }
    return count
}
console.log(naquared(5));


var nomes = ["pedro", "felipe", "sousa", "garcia"]
for (let element of nomes){
    console.log(element)
}