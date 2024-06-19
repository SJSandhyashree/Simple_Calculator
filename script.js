let input=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button =>
{
    button.addEventListener('click',(e) =>{//if you click any button let me know
        if(e.target.innerHTML == '='){ // if click = button then eval function will perform
            string =eval(string);
            input.value=string;//-> screen alli barodhu

        }

        else if(e.target.innerHTML == 'AC')
            {
                string="";
                input.value=string;
            }
        else if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;


            }
            else{   
        string+=e.target.innerHTML;// 2.if he click any other button thn = the it will store in string and display in screen
        input.value = string;
    }
    })
})