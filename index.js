window.onload = rotate;


function showNewDivs() {
    var tb1 = document.getElementById('topBox1');
    var tb2 = document.getElementById('topBox2');
    var bb1 = document.getElementById('botBox1');
    var bb2 = document.getElementById('botBox2');

    tb1.style.visibility = 'visible';
    tb2.style.visibility = 'visible';
    bb1.style.visibility = 'visible';
    bb2.style.visibility = 'visible';

    document.querySelector('h1').style.visibility = 'hidden';
    document.querySelector('h2').style.visibility = 'hidden';

    tb1.style.animation = 'pop-up_1 500ms reverse';
    bb1.style.animation = 'pop-up_2 500ms reverse';
    tb2.style.animation = 'pop-up_3 500ms reverse';
    bb2.style.animation = 'pop-up_4 500ms reverse';
}

var bg = document.getElementById('bg');

var bg_src = ['Background1.jpg','Background2.jpg','Background3.jpg'];
var i = 0;

function rotate() {
    if (i == bg_src.length) i = 0;
    document.body.style.backgroundImage = "url(./"+bg_src[i]+")";
    i++;
    setTimeout(rotate, 5 * 1000);
}
