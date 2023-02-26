function btnYes(){
    alert("Vâng. Tôi cũng YÊU bạn!");
}
function btnNo(){
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('btnNo').style.left = x + 'px';
    document.getElementById('btnNo').style.top = y + 'px';
}