//window.onload = rotate;

var bg = document.getElementById('bg');

var bg_src = ['Background1.jpg','Background2.jpg','Background3.jpg'];
var i = 0;

function rotate() {
    if (i == bg_src.length) i = 0;
    document.body.style.backgroundImage = "url(./"+bg_src[i]+")";
    i++;
    setTimeout(rotate, 5 * 1000);
}

var tb1 = document.getElementById('topBox1');
var tb2 = document.getElementById('topBox2');
var bb1 = document.getElementById('botBox1');
var bb2 = document.getElementById('botBox2');

var bBox1 = document.getElementById('bBox_1');
var bBox2 = document.getElementById('bBox_2');
var bBox3 = document.getElementById('bBox_3');
var bBox4 = document.getElementById('bBox_4');

var logo = document.getElementById('logo');

logo.addEventListener("click",function() {

    /* Usar botão para voltar à pagina dos paineis */

    //Caso estejamos na página inicial
    if(1) {

    }
    //Caso contrário
    else {

    }

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

});

tb1.addEventListener("click", function () {
    bBox1.style.visibility = 'visible';
    /* Criar animação para aparecer */
});

bb1.addEventListener("click", function () {
    bBox2.style.visibility = 'visible';
    /* Criar animação para aparecer */
});

tb2.addEventListener("click", function () {
    bBox3.style.visibility = 'visible';
    /* Criar animação para aparecer */
});

bb2.addEventListener("click", function () {
    bBox4.style.visibility = 'visible';
    /* Criar animação para aparecer */
});

/* Quando um painel tem um click mover o botão para baixo - maybe*/