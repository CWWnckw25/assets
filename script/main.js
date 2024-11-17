//画面幅が768px以上の時、.header__hamburger-menuを表示にする
$(window).on('load resize', function () {
    var w = $(window).width();
    var x = 768;
    if (w >= x) {
        $('.header__hamburger-menu').show();
    } else {
        $('.header__hamburger-menu').hide();
    }
});
//#hamburger-buttonがクリックされたら.header__hamburger-menuをゆっくり表示
$('#hamburger-button').on('click', function () {
    $('.header__hamburger-menu').fadeToggle('slow');
});
//画面幅768px以下、スクロール時.header__hamburger-menuをゆっくり非表示にする
$(window).scroll(function () {
    var w = $(window).width();
    var x = 768;
    if (w <= x) {
        $('.header__hamburger-menu').fadeOut('slow');
    }
});
//slick
$('.gallery__inner-img-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
});
// アコーディオンのタイトルがクリックされたら
$('.faq__q-list').on('click', function (e) {
    // クリックされたタイトルの次の要素を取得
    var content = $(this).next();
    // クリックされたタイトル以外の全てのコンテンツを閉じる
    content.slideToggle();
});
//.faq__flexの初期状態は.faq__minusは非表示
$(function () {
    $('.faq__minus').hide();
});
//.faq__q-listがクリックされたら.faq__minusを表示、.faq__plusを非表示
$('.faq__q-list').on('click', function () {
    $(this).find('.faq__plus').toggle();
    $(this).find('.faq__minus').toggle();
});