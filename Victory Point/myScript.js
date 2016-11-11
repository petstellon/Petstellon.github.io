var imgList = ["1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png","a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png", "1.png", "2.png", "1.png", "2.png", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "1.png", "2.png"];
var myCount = 0;
var myVar = setInterval(function(){changeImage()},1000);
function changeImage() {
    var getClass, datee, sec;
    datee = new Date();
    sec = datee.getSeconds();
    getClass = document.getElementById("imgdis");
    getClass.src = imgList[sec];
}

function test() {
    var row, textnod1, textnod2, textnod3, textnod4, getTable, a, b, c, d;
    var canopy = document.getElementById("canopyType").value;
    getTable = document.getElementById("displayTable");
    row = document.createElement("TR");
    getTable.appendChild(row);
    a = document.createElement("TD");
    textnod1 = document.createTextNode(canopy);
    a.appendChild(textnod1);
    row.appendChild(a);
    b = document.createElement("TD");
    textnod2 = document.createTextNode("2 Pieces");
    b.appendChild(textnod2);
    row.appendChild(b);
    c = document.createElement("TD");
    textnod3 = document.createTextNode("N 4000");
    c.appendChild(textnod3);
    row.appendChild(c);
    d = document.createElement("TD");
    textnod4 = document.createTextNode("N 8000");
    d.appendChild(textnod4);
    row.appendChild(d);
    
    //alert(canopy);
}

function goBack() {
    window.history.back()
}