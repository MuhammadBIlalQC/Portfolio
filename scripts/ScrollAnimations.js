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

