function add(x, y){
    console.log(x+y)
}

add(10, 67);

function soma(x, y){
    return x+y
}

console.log(soma(10, 5));

function red(){
    document.getElementById("header").innerHTML = "red"
}

function green(){
    document.getElementById("header").style.backgroundColor = "green"
}

function pressed(){
    var text = document.getElementById("inp").value;
    if (text == "red"){
        document.getElementById("header").style.color = "red";
    }else if(text == "green"){
        document.getElementById("header").style.color="green"
    }else{
        document.getElementById("header").style.color = "black"
    }
}

function change_color(){
    var text = document.getElementById("inp").value;
    switch (text){
        case "red":
            document.getElementById("header").style.color = "red";
            break;
        case "green":
            document.getElementById("header").style.color = "green";
            break;
        case "blue":
            document.getElementById("header").style.color = "blue";
            break;
        default:
            document.getElementById("header").style.color = "black";
            break;
    }
}

function get_age(){
    var age = document.getElementById("input_age").value;
    if (age >= 18){
        document.getElementById("result").innerHTML =  "You are an adult";
    }else if (12 <= age && age < 18){
        document.getElementById("result").innerHTML = "you are an adolescent";
    }else{
        document.getElementById("result").innerHTML = "you are a kid";
    }
}