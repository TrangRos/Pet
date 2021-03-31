//Tạo bảng cửu chương
//for(let i = 1; i<10; i++){
    //console.log(3*i)
//}
//Bảng cửu chương nhưng thể hiện ra 3x1 = 3 luôn (ko phải chỉ kết quả)
//for(let i = 1; i < 10; i++){
   //console.log(`3 x ${i}= ${3*i}`)
//} 
//Phần tạo slider

let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
let current = 0;

function reset(){
    for(let i=0; i<sliderImages.length; i++){
        sliderImages[i].style.display='none'
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block'
}
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block'
    current --;
}
arrowLeft.addEventListener('click', function(){
    if(current===0){
        current = sliderImages.length
    }
    slideLeft()
})
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block'
    current ++; // current = current + 1
}
arrowRight.addEventListener('click', function(){
    if(current===sliderImages.length-1){
        current = -1
    }
    slideRight()
})
startSlide()
