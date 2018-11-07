$(document).ready(function(){
var cT = 0;
var cR = 0;
var truth = {};
var wrong1 = {};
var wrong2 = {};
var t = Math.floor(Math.random()*3);

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
        if (t == 0) {
            $("#btn1").click(function() {
                rmAC();
                $('#btn1').addClass('btn btn-success');
                $('#btn2').addClass('btn btn-danger');
                $('#btn3').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
            $("#btn2").click(function() {
                rmAC();
                $('#btn1').addClass('btn btn-success');
                $('#btn2').addClass('btn btn-danger');
                $('#btn3').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
            $("#btn3").click(function() {
                rmAC();
                $('#btn1').addClass('btn btn-success');
                $('#btn2').addClass('btn btn-danger');
                $('#btn3').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
        } else if (t == 1) {
            $("#btn1").click(function() {
                rmAC();
                $('#btn2').addClass('btn btn-success');
                $('#btn1').addClass('btn btn-danger');
                $('#btn3').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
            $("#btn2").click(function() {
                rmAC();
                $('#btn2').addClass('btn btn-success');
                $('#btn1').addClass('btn btn-danger');
                $('#btn3').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
            $("#btn3").click(function() {
                rmAC();
                $('#btn2').addClass('btn btn-success');
                $('#btn1').addClass('btn btn-danger');
                $('#btn3').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
        } else if (t == 2) {
            $("#btn1").click(function() {
                rmAC();
                $('#btn3').addClass('btn btn-success');
                $('#btn1').addClass('btn btn-danger');
                $('#btn2').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
            $("#btn2").click(function() {
                rmAC();
                $('#btn3').addClass('btn btn-success');
                $('#btn1').addClass('btn btn-danger');
                $('#btn2').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
            $("#btn3").click(function() {
                rmAC();
                $('#btn3').addClass('btn btn-success');
                $('#btn1').addClass('btn btn-danger');
                $('#btn2').addClass('btn btn-danger');
                setTimeout(reload, 1500);
            });
        }
    }
reload();
});