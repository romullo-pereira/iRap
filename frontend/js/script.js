$(window).scroll(() => { 
    var scroll = $(window).scrollTop();
 
    if (scroll > 70) {
        $('.header').addClass('header-aux2');
    } else {
        $('.header').removeClass('header-aux2');
    }
});

window.onload = getIndexPosts();

function plotarPostsIndex(posts) {
    console.log(posts);
    // cardTitle.innerHTML = posts[0].titulo;
    // cardDesc.innerHTML = posts[0].descricao;

    for (let i = 0; i < posts.length; i++) {
        cards.innerHTML += `<div class="card">
                                <img src="./img/bg.jpg" alt="">
                                <h3>${posts[i].titulo}</h3>
                                <p>${posts[i].descricao}</p>
                                <a href="cadastro.html">Veja Mais <i class="fas fa-arrow-right"></i></a>
                            </div>`; 
    }
}

function redirectCad() {
    
}

