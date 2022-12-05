var room =[
    "carimage.jpg",
    "bikeimage1.jpg",
    "lionimage.jpg",
]
var image = 0;
var bulb = room.length-1;
var laptop = 0;

var button1 =document.getElementById("button1")
function Next(){
    tere =document. getElementById("car")
    laptop++;
    if(laptop >= bulb){
        laptop = 2
    }
    tere.src = room[laptop]
}

var button2 =document.getElementById("button2")
function Previous(){
    tere =document. getElementById("car")
    laptop--;
    if(laptop <= image){
        laptop = 0
    }
    tere.src = room[laptop]
}
setInterval(function(){
    Next()
},1000)
