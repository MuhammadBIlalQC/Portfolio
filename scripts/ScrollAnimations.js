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
    if (inWindowView('cat'))
    {
        $(window).off('scroll', showCat);
        $('#cat').slideToggle(2000);
    }
}

$(document).ready(function(){
    $(window).on('scroll', showAboutMe);
    //$(window).on('scroll', showCat);
});

