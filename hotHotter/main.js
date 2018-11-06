$(document).ready(function(){
var c = -1;
    function reload() {
    c = c+1;
    $('#counter').text(c)
    var p1 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)] || Object.keys(models)[Math.floor(Math.random()*Object.keys(models).length)];
    var p2 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)] || Object.keys(models)[Math.floor(Math.random()*Object.keys(models).length)];
    $('#p1').text(p1);
    $('#img1').attr("src", log[p1]);
    $('#img1').attr("alt", p1);
    $('#p2').text(p2);
    $('#img2').attr("src", log[p2]);
    $('#img2').attr("alt", p2);
}
    $("#c1").click(function() {
        reload();
    })
    $("#c2").click(function() {
        reload();
    })
reload()
});