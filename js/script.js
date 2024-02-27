var viewfloor = 1;
var UPfloor = true;
var ChangeV = false;


function moveFloor(UPfloor){
    if (UPfloor){
        if (viewfloor >= 6){viewfloor = 0}
        viewfloor ++}
    else {
        if (viewfloor <= 1){viewfloor = 7}
        viewfloor --}
    document.getElementById('one').src = './map/XXX.jpg'.replace('XXX',viewfloor)}


document.addEventListener('touchstart', (e)=>{
    touchstart_x = e.touches[0].clientX
    touchstart_y = e.touches[0].clientY})

document.addEventListener('touchend',(e)=>{
    e.preventDefault()
    touchend_x = e.changedTouches[0].clientX
    touchend_y = e.changedTouches[0].clientY
    finger_no_move = (touchend_x == touchstart_x) && (touchend_y == touchstart_y)

    if (window.innerWidth>window.innerHeight){quadrant_3_height = 0.75} else {quadrant_3_height = 0} //方便打橫時使用
    quadrant_3 = (touchend_x<0.5*window.innerWidth && touchend_y>quadrant_3_height*window.innerHeight) //為方便單手使用，只有點觸控象限3時才是落樓
    if (finger_no_move && !quadrant_3){moveFloor(true)}
    else if (finger_no_move && quadrant_3){moveFloor(false)}},
    {passive: false})

// 用鍵盤
document.addEventListener('keypress', (e)=>{
    if(e.key==='2'){moveFloor(true)}
    if(e.key==='1'){moveFloor(false)}
})
