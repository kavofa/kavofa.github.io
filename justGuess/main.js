$(document).ready(function(){
var cT = 0;
var cR = 0;
var truth = {};
var wrong1 = {};
var wrong2 = {};
var t = Math.floor(Math.random()*3);
// debug
function set(id, data) {
    $(id).html(data);
}

function rmAC() {
    $('#btn1').removeClass();
    $('#btn2').removeClass();
    $('#btn3').removeClass();
}
function beLight() {
    rmAC();
    $('#btn1').addClass('btn btn-light');
    $('#btn2').addClass('btn btn-light');
    $('#btn3').addClass('btn btn-light');
}

    function reload() {
        beLight();
        t = Math.floor(Math.random()*3);
        $('#counter').text(cR+'/'+cT)
        truth = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)];
        wrong1 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)];
        wrong2 = Object.keys(log)[Math.floor(Math.random()*Object.keys(log).length)];
        $('#img1').attr("src", log[truth]);
        $('#img1').attr("alt", truth);

        switch(t) {
            case 0:
                set('#btn1', truth);
                set('#btn2', wrong1);
                set('#btn3', wrong2);
                break;
            case 1:
                set('#btn2', truth);
                set('#btn1', wrong1);
                set('#btn3', wrong2);
                break;
            case 2:
                set('#btn3', truth);
                set('#btn2', wrong1);
                set('#btn1', wrong2);
                break;
        }
    }
reload();

$('#btn1').click(function() {
    if(t == 0) {
        $('#btn1').removeClass();
        $('#btn1').addClass('btn btn-success');
        cR = cR+1;
    } else {
        $('#btn1').removeClass();
        $('#btn1').addClass('btn btn-wrong');
    }
    cT = cT+1;
    setTimeout(reload, 1500);
});
$('#btn2').click(function() {
    if(t == 1) {
        $('#btn2').removeClass();
        $('#btn2').addClass('btn btn-success');
        cR = cR+1;
    } else {
        $('#btn2').removeClass();
        $('#btn2').addClass('btn btn-wrong');
    }
    cT = cT+1;
    setTimeout(reload, 1500);
});
$('#btn3').click(function() {
    if(t == 2) {
        $('#btn3').removeClass();
        $('#btn3').addClass('btn btn-success');
        cR = cR+1;
    } else {
        $('#btn3').removeClass();
        $('#btn3').addClass('btn btn-wrong');
    }
    cT = cT+1;
    setTimeout(reload, 1500);
});

});