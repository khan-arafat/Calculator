// javascript code goes here
const btns = document.querySelectorAll('button');
btns.forEach((bt)=>{
    bt.addEventListener('click', (e)=>{
        let inputValue= e.target.textContent;
        let screenCal= document.getElementById('input');
        if(e.target.id=='clr'){
            screenCal.value = "";
            return;
        }
        else if(e.target.id=='del'){
            screenCal.value = screenCal.value.slice(0, -1);
        }
        else if(e.target.id=='ans'){
            screenCal.value= eval(screenCal.value);
            return;
        }
        else if(e.target.id=='multiply'){
            screenCal.value += '*';
        }
        else {
            screenCal.value += inputValue;
        }
    })
})