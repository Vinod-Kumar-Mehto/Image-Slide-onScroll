
function debounce( func, wait = 10, immediate ){

    let timeout;
    return function(){
        let context = this, args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args)

    };

};



const sliderImg = document.querySelectorAll("img")
console.log(sliderImg.height)
function checkSlide(){

sliderImg.forEach(sliderImage => {
    console.log(sliderImage.height)
    const slideNt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
     const imgBottom = sliderImage.offsetTop + sliderImage.height; 
     const isHalfShown = slideNt > sliderImage.offsetTop;
     const isNotScrolledPast = window.scrollY < imgBottom;
     if(isHalfShown && isNotScrolledPast){
         sliderImage.classList.add("active");
     }else{
        sliderImage.classList.remove("active");

     }
})

}

window.addEventListener("scroll", debounce(checkSlide));



