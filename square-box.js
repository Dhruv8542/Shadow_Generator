let Width = document.getElementById("Width");
let Height = document.getElementById("Height");
let Radius = document.getElementById("Radius");
let Color = document.getElementById("Color");
let OX = document.getElementById("offsetX");
let OY = document.getElementById("offsetY");
let BR = document.getElementById("BlurR");
let SR = document.getElementById("SpreadR");
let SC = document.getElementById("SColor");

Width.addEventListener("mousemove", function () {
    target.style.width = Width.value + "px";
    code();
});
Height.addEventListener("mousemove", function () {
    target.style.height = Height.value + "px";
    code();
});
Radius.addEventListener("mousemove", function () {
    target.style.borderRadius = Radius.value + "px";
    code();
});
Color.addEventListener("mousemove", function () {
    target.style.backgroundColor = Color.value + "";
    code();
});

OX.addEventListener("mousemove", function () {
    let shadow = OX.value + "px " + OY.value + "px " + BR.value + "px " + SR.value + "px " + SC.value;
    target.style.boxShadow = shadow;
    code();
});

OY.addEventListener("mousemove", function(){
    let shadow = OX.value + "px " + OY.value + "px " + BR.value + "px " + SR.value + "px " + SC.value;
    target.style.boxShadow = shadow;
    code();
});

BR.addEventListener("mousemove", function(){
    let shadow = OX.value + "px " + OY.value + "px " + BR.value + "px " + SR.value + "px " + SC.value;
    target.style.boxShadow = shadow;
    code();
});

SR.addEventListener("mousemove", function(){
    let shadow = OX.value + "px " + OY.value + "px " + BR.value + "px " + SR.value + "px " + SC.value;
    target.style.boxShadow = shadow;
    code();
});

SC.addEventListener("mousemove", function(){
    let shadow = OX.value + "px " + OY.value + "px " + BR.value + "px " + SR.value + "px " + SC.value;
    target.style.boxShadow = shadow;
    code();
});

code();
function code() {
    let editor = document.getElementById("box3");
    let codes = "";
    codes = `<span>width:</span> <span class="number">${Width.value}</span>px;<br>
                <span>height:</span> <span class="number">${Height.value}</span>px;<br>
                <span>border-radius:</span> <span class="number">${Radius.value}</span>px;<br>
                <span>background-color:</span> <span class="number">${Color.value}</span>;<br>
                <span>box-shadow: </span><span class="number">${OX.value}</span>px
                <span class="number">${OY.value}</span>px <span class="number">${BR.value}</span>px
                    <span class="number">${SR.value}</span>px
                    <span class="number">${SC.value}</span>;`;
    editor.innerHTML = codes;
}