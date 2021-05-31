//scrol up

document.getElementById("button-up").addEventListener("click",scrollup);

function scrollup(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.scrollTo(0,0);
    }
}

buttonUp= document.getElementById("button-up");

window.onScroll = function(){
    var scroll= document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if (sroll < 500){
        buttonup.style.transform="scale(0)";
    }
}