var day, h, m, s, time;
function clocky(){
    day=new Date();
    h=day.getHours();
    m=day.getMinutes();
    s=day.getSeconds();



    if (h<=9){
        h="0"+ h;
    }
    if(m<=9){
        m="0"+ m;
    }
    if(s<=9){
        s="0"+ s;
    }
    
    color= "#"+h+m+s;
    time=h+":"+m+":"+s;
    document.getElementById("clock").innerHTML=time;
    document.body.style.background=color;


    setTimeout(clocky,1000);
}

clocky();