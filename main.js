var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;

var lastpostion_ofx, lastpostion_ofy;


canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

color = "black";
widthofline = 1;

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e) {
    color = document.getElementById("color").value;
    widthofline = document.getElementById("width_of_line").value;
    console.log(my_touchstart);
    lastpostion_ofx=e.touches[0].clientX- canvas.offsetLeft;
    lastpostion_ofy=e.touches[0].clientY- canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e) {
    var current_positionof_touchx = e.touches[0].clientX - canvas.offsetLeft;
    var current_positionof_touchy = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        console.log("last postion of x and y coordinates= ")
        console.log("x= " + lastpostion_ofx + " y= " + lastpostion_ofy)
        ctx.moveTo(lastpostion_ofx, lastpostion_ofy);

        console.log("current postion of x and y coordinates= ")
        console.log("x= " + current_positionof_touchx + " y= " + current_positionof_touchy)
        ctx.lineTo(current_positionof_touchx, current_positionof_touchy);
        ctx.stroke();

    lastpostion_ofx = current_positionof_touchx;
    lastpostion_ofy = current_positionof_touchy;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}