(function (){

// #navBar Animi
    let navAnimi = document.getElementById('row-1');
    function navAni(){
        navAnimi.style.transform = 'translateY(0px)';
    }setTimeout(navAni,400);



// Mobile Menu Box
    let sideBarHover = document.getElementById('sidebar-bth');
    let triggerdHover = document.getElementById('mobile-menu');

    sideBarHover.onclick=function(){
        triggerdHover.style.display = 'block';
        
        setTimeout(
            function(){
                triggerdHover.style.top = '0px';
            },100
        );
    };

    let clsMobBox = document.getElementById('close-mobile-box');

    clsMobBox.onclick=function(){

        triggerdHover.style.top = '-100%';
        setTimeout(
            function(){
                triggerdHover.style.display = 'none';
            },500
        );
    };

    
})();