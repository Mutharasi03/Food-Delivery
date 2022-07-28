const toggleButton=document.getElementsByClassName('menuline')[0];
const navitem=document.getElementsByClassName('navitem');
toggleButton.addEventListener('click',function(){
    for(let i=0;i<navitem.length;i++)
    { 
        navitem[i].classList.toggle('active')
    }
    
})