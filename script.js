//Updating Size of password on screen
let scale = document.getElementById("scaleSize");
let size = document.getElementById("passSize");
size.innerHTML = scale.value;
scale.addEventListener('input',()=>
{
    size.innerHTML = scale.value;
})
//Logic of generate button
let uprcse = document.getElementById("uprcse");
let lwrcse = document.getElementById("lwrcse");
let num = document.getElementById("num");
let symbl = document.getElementById("symbl");
let btn = document.getElementById("btn");
let output = document.getElementById("password");
btn.addEventListener('click',()=>
{
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let symbols = '@#$%&*?/'
    let finalSpace = ''
    let password = ''
    if(uprcse.checked)
        {
        finalSpace+=uppercase;
        }
    if(lwrcse.checked)
        {
        finalSpace+=lowercase;
        }
    if(num.checked)
        {
        finalSpace+=numbers;
        }
    if(symbl.checked)
        {
        finalSpace+=symbols;
        }
    if(finalSpace.length==0)
    {
        output.innerHTML = "Select Any Field"
    }
    else
    {
        for(let i = 0;i<scale.value;i++)
        {
            let ran = Math.floor(Math.random() * finalSpace.length);
            password += finalSpace[ran];
        }
        output.innerHTML = password;
    }
})
//copying the password
let cpy = document.getElementById("cpy");
cpy.addEventListener('click',()=>
{
    navigator.clipboard.writeText(output.innerHTML);
})