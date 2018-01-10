/*(function () {
    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")
        
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    }
    
    
    LORSQU'ON scroll
        Si le menu sors de l'ecran 
        ALORS il devient fixe
    
    var element = document.querySelector("#menu")
    var top = element.getBoundingClientRect().top + scrollY()
    var width = element.getBoundingClientRect().width
    
    var onScroll = function () {
        var hasScrollClass = element.classList.contains('fixMenu')
        if(scrollY() > top && !hasScrollClass) {
            element.classList.add("fixMenu")
            element.style.width = width + 'px'
        } else if(scrollY() <= top && hasScrollClass){
            element.classList.remove('fixMenu')
        }
    }
    
    window.addEventListener('scroll', onScroll)
})()*/

$(window).on('scroll', function(){
    var scrollTop = $(this).scrollTop()
    $('.header-bg').css('top', -(scrollTop) + 'px')
    if($(window).scrollTop()){
        $('nav').addClass('noir')
        $('nav').removeClass('navbar')
    } else{
        $('nav').removeClass('noir')
        $('nav').addClass('navbar')
    }
})