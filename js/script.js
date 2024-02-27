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
        if (viewfloor >= 5){viewfloor = 0}
        viewfloor ++}
    else {
        if (viewfloor <= 1){viewfloor = 6}
        viewfloor --}
    document.getElementById('one').src = './map/'+viewfloor+'.jpg'}


document.addEventListener('touchstart', (e)=>{
    touchstart_x = e.touches[0].clientX
    touchstart_y = e.touches[0].clientY})

document.addEventListener('touchend',(e)=>{
    touchend_x = e.changedTouches[0].clientX
    touchend_y = e.changedTouches[0].clientY
    scroll_X = window.scrollX
    scroll_Y = window.scrollY
    window_innerWidth = window.innerWidth
    window_innerHeight = window.innerHeight
    finger_no_move = (Math.abs(touchstart_x-touchend_x)+Math.abs(touchstart_y-touchend_y)) == 0

    // document.getElementById('y').innerHTML= 'touchstart_x = ' + touchstart_x
    //                                         +'<br>touchstart_y = ' + touchstart_y
    //                                         +'<br>touchend_x = '+touchend_x
    //                                         +'<br>touchend_y = '+touchend_y
    //                                         +'<br>scrollX = '+scroll_X
    //                                         +'<br>scrollY = '+scroll_Y
    //                                         +'<br>window_innerWidth ='+window_innerWidth
    //                                         +'<br>finger_no_move = '+(Math.abs(touchstart_x-touchend_x)+Math.abs(touchstart_y-touchend_y))

    quadrant_3 = (touchend_x<0.5*window_innerWidth && touchend_y>0.5*window_innerHeight) //為方便單手使用，只有點觸控象限3時才是落樓
    if (finger_no_move && !quadrant_3){moveFloor(true)}
    else if (finger_no_move && quadrant_3){moveFloor(false)}})

// 用鍵盤
document.addEventListener('keypress', (e)=>{
    if(e.key==='2'){moveFloor(true)}
    if(e.key==='1'){moveFloor(false)}
})
