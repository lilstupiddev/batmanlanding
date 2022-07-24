$(document).ready(function () {
    let tabsItem = $('.menu-item');
    let activeContent = $(this).attr('href');

    tabsItem.on('click', function(event){
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.active').toggleClass('.active');
        $(this).toggleClass('.active');
    });
});