
try
{
    let main = document.getElementById('main');
    let menu = document.getElementById('aside');

    var active = true;
    
    function menu_open(){
        menu.style.display = "block";
        main.style.gridTemplateColumns = "3fr 1fr";
        active = true;
    }
    function menu_close(){
        menu.style.display = "none";
        main.style.gridTemplateColumns = "1fr";
        active = false;
    }

    document.getElementById('menu_button').onclick = () => (active)? menu_close() : menu_open();
}
catch(e)
{
    console.log(e);
}