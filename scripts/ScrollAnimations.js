/* Setting Page to top on Reload */
//$(window).scrollTop(0);
/* */

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
    $(window).on('scroll', showProgressbars);
}

function showProgressbars()
{
    if (inWindowView('progress-bars'))
    {
        $(window).off('scroll', showProgressbars);
        $('#progress-bars').slideDown(500);
        setTimeout(() => animateProgressbars(), 500);
        setTimeout(() => show2ndPic(), 500);
        $(window).on('scroll', showExperience);
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

function show2ndPic()
{
    $(window).off('scroll', show2ndPic);
    $('#2nd-Pic').fadeIn(500);
}

function showExperience()
{
    if (inWindowView('experience'))
    {
        $('#experience').slideDown(1000);
    }
}
$(document).ready(function(){
    setTimeout( () => $('#footer').fadeIn(500), 1500);
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

