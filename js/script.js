var map = document.getElementById('map')
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');

var viewfloor = 1;
var UPfloor = true;
var ChangeV = false;


function moveFloor(UPfloor){
    if (UPfloor){
        if (viewfloor >= 5){
            viewfloor = 0
        }
        viewfloor ++
    }
    if (!UPfloor){
        if (viewfloor <= 1){
            viewfloor = 6
        }
        viewfloor --
    }
    document.getElementById('one').src = './map/'+viewfloor+'.jpg'
}

// on9方法
// function moveFloor(UPfloor){
//     // 上樓或落樓
//     if(UPfloor) {
//         // 則上樓
//         if (viewfloor == 1) {
//             two.style.opacity = 1;
//             three.style.opacity = 0;
//             four.style.opacity = 0;
//             five.style.opacity = 0;
//             viewfloor ++
//         } else if (viewfloor == 2) {
//             two.style.opacity = 0;
//             three.style.opacity = 1;
//             four.style.opacity = 0;
//             five.style.opacity = 0;
//             viewfloor ++
//         } else if (viewfloor == 3) {
//             two.style.opacity = 0;
//             three.style.opacity = 0;
//             four.style.opacity = 1;
//             five.style.opacity = 0;
//             viewfloor ++
//         } else if (viewfloor == 4) {
//             two.style.opacity = 0;
//             three.style.opacity = 0;
//             four.style.opacity = 0;
//             five.style.opacity = 1;
//             viewfloor ++
//         } else if (viewfloor == 5) {
//             two.style.opacity = 0;
//             three.style.opacity = 0;
//             four.style.opacity = 0;
//             five.style.opacity = 0;
//             viewfloor = 1
//         }
//     } else {
//         // 則落樓
//         if (viewfloor == 5) {
//             two.style.opacity = 0;
//             three.style.opacity = 0;
//             four.style.opacity = 1;
//             five.style.opacity = 0;
//             viewfloor --
//         } else if (viewfloor == 4) {
//             two.style.opacity = 0;
//             three.style.opacity = 1;
//             four.style.opacity = 0;
//             five.style.opacity = 0;
//             viewfloor --
//         } else if (viewfloor == 3) {
//             two.style.opacity = 1;
//             three.style.opacity = 0;
//             four.style.opacity = 0;
//             five.style.opacity = 0;
//             viewfloor --
//         } else if (viewfloor == 2) {
//             two.style.opacity = 0;
//             three.style.opacity = 0;
//             four.style.opacity = 0;
//             five.style.opacity = 0;
//             viewfloor --
//         } else if (viewfloor == 1) {
//             two.style.opacity = 0;
//             three.style.opacity = 0;
//             four.style.opacity = 0;
//             five.style.opacity = 1;
//             viewfloor = 5
//         }
//     }
// }



document.addEventListener('touchstart', (e)=>{
    touchstart_x = e.touches[0].clientX;
    touchstart_y = e.touches[0].clientY;
})

document.addEventListener('touchend',(e)=>{
    touchend_x = e.changedTouches[0].clientX;
    touchend_y = e.changedTouches[0].clientY;
    scroll_X = window.scrollX;
    scroll_Y = window.scrollY;
    window_innerWidth = window.innerWidth;
    window_innerHeight = window.innerHeight;
    movelen = Math.abs(touchstart_x-touchend_x)+Math.abs(touchstart_y-touchend_y);

    // document.getElementById('y').innerHTML= 'touchstart_x = ' + touchstart_x
    //                                         +'<br>touchstart_y = ' + touchstart_y
    //                                         +'<br>touchend_x = '+touchend_x
    //                                         +'<br>touchend_y = '+touchend_y
    //                                         +'<br>scrollX = '+scroll_X
    //                                         +'<br>scrollY = '+scroll_Y
    //                                         +'<br>window_innerWidth ='+window_innerWidth
    //                                         +'<br>movelen = '+(Math.abs(touchstart_x-touchend_x)+Math.abs(touchstart_y-touchend_y))

    quadrant_3 = (touchend_x<0.5*window_innerWidth && touchend_y>0.5*window_innerHeight) //為方便單手使用，只有點觸控象限3時才是落樓
    if(movelen == 0 && quadrant_3 == false){
        moveFloor(true)
    } else if (movelen == 0 && quadrant_3){
        moveFloor(false)
}})

// 用鍵盤
document.addEventListener('keypress', (e)=>{
    if(e.key==='2'){
        moveFloor(true);
    }
    if(e.key==='1'){
        moveFloor(false);
    }
})