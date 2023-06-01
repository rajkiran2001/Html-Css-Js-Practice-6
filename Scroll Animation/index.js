const boxes=document.querySelectorAll('.box')
window.addEventListener('scroll',chechboxes)
chechboxes();
function chechboxes() {
    const bottom=window.innerHeight/5*4
    boxes.forEach(box =>{
        const boxtop = box.getBoundingClientRect().top

        if(boxtop<bottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}