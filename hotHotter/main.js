$(document).ready(function(){
var c = -1;
//Just for debug purposes
    function reload() {
    c = c+1;
    $('#counter').text(c)
    if (c == 50){
        var p1 = {'Summer Ray': 'https://i.redd.it/il5rxl288e6y.jpg'};
        var p2 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)];
        $('#p1').text(p1);
        $('#img1').attr("src", p1);
        $('#img1').attr("alt", p1);
        $('#p2').text(p2);
        $('#img2').attr("src", log[p2]);
        $('#img2').attr("alt", p2);
    } else if (c == 100) {
        var p1 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)];
        var p2 = {'Gigi Hadid': 'https://i.pinimg.com/originals/bb/91/07/bb9107ea936d0402ae8eb7d26e1d0bcd.jpg'};
        $('#p1').text(p1);
        $('#img1').attr("src", log[p1]);
        $('#img1').attr("alt", p1);
        $('#p2').text(p2);
        $('#img2').attr("src", p2);
        $('#img2').attr("alt", p2);
    } else {
        var p1 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)];
        var p2 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)];
        $('#p1').text(p1);
        $('#img1').attr("src", log[p1]);
        $('#img1').attr("alt", p1);
        $('#p2').text(p2);
        $('#img2').attr("src", log[p2]);
        $('#img2').attr("alt", p2);
    }
}
    $("#c1").click(function() {
        reload();
    })
    $("#c2").click(function() {
        reload();
    })
reload()
});