function inWindowView(elementID)
{
    var elem = $('#' + elementID + '-container');
    var windowTop = window.pageYOffset;
    var windowBot = windowTop + window.innerHeight;
    var elemTop = elem.position().top;
    var elemBot = elem.height() + elemTop;
    if (elemTop > windowTop && elemTop < windowBot)
        return true;
    
    return false;
}

function showAboutMe()
{
    if(inWindowView('about-me'))
    {
        $(window).off('scroll', showAboutMe);
        $('#about-me').slideDown(1500);
    }
}

function showCat()
{
    $(window).off('scroll', showCat);
    $('#cat').fadeIn(1500);
    setTimeout(() => $(window).on('scroll', showProgressbars), 1500);
}

function showProgressbars()
{
    if (inWindowView('progress-bars'))
    {
        $(window).off('scroll', showProgressbars);
        $('#progress-bars').slideDown(500);
        setTimeout(() => animateProgressbars(), 500);
    }
}

function animateProgressbars()
{
    const animationTime = 1500;
    $('#Problem-Solving-Progress').animate({width: '80%'}, animationTime);
    $('#Programming-Progress').animate({width: '90%'}, animationTime);
    $('#Algorithms-Progress').animate({width: '60%'}, animationTime);
    $('#Web-Progress').animate({width: '75%'}, animationTime);
    $('#Hard-Work-Progress').animate({width: '100%'}, animationTime);
}

$(document).ready(function(){
    if (window.innerWidth >= 992) /* for devices such as laptops and desktops */
    {
        $(window).on('scroll', showAboutMe);
        $(window).on('scroll', showCat);
    }
    else /* for phones and tablets */
    {
        showAboutMe();
        setTimeout(() => showCat(), 1500);
    }
});

