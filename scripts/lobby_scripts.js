function openbox(id){
    display = document.getElementById('menu_list').style.display; 
    if(display=='none'){
       document.getElementById('menu_list').style.display='block';
    }else{
       document.getElementById('menu_list').style.display='none';
    }
}
function openMy_profile(id){
    display = document.getElementById('tab-my-profile').style.display; 
    if(display=='none'){       
       window.onload = window.location.assign("My_profile.html");
       document.getElementById('tab-my-profile').style.display='block';
    }else{
       document.getElementById('tab-my-profile').style.display='none';
    }
}
