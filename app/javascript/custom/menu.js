// ロゴの表示
document.addEventListener('turbo:load', function(){
    const splash = document.getElementById('splash');


    setTimeout(function() {
        splash.style.animation = 'fadeOutAnimation 1.0s ease-out';
        splash.style.display = 'none'; //noneで非表示にしないと他要素を操作できない  
    }, 2500);
});

document.addEventListener('turbo:load', function(){
    const openbtn5 = document.querySelector(".openbtn5");
    const openbtn5menu = document.querySelector(".openbtn5-menu")

    openbtn5.addEventListener('click', function() {
        this.classList.toggle('active');
        openbtn5menu.classList.toggle('active');

    });
});





