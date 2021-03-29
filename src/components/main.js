const SkewOne = document.querySelector('.SkewOne');
const Skewtwo = document.querySelector('.SkewTwo');

window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/45;
    const value2 = 15 + window.scrollY/-45;
    SkewOne.style.transform = "skewY(" + value1 + "deg)";
    Skewtwo.style.transform = "skewY(" + value2 + "deg)";
})