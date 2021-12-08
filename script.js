var slider_content = document.getElementById('IMG');
img1=document.getElementById("img").src = "CSS3.png";
img2=document.getElementById("img").src = "HTML5.png";
imgs=[img1,img2]
i=1

function Switch(){
    i=i+1
    if (i%2==0){
    slider_content.innerHTML = "<img src="+imgs[0]+' alt='+"CSS"+' title='+"CSS"+'>';
    }
    else{
        slider_content.innerHTML = '<img src='+imgs[1]+' alt='+"HTML"+' title='+"HTML"+'>';
    }
    
}

a=document.getElementById('hossz');
eredmeny=document.getElementById('eredmeny');
terfogat = parseInt(a) * parseInt(a) * parseInt(a);
felszin = 6 * parseInt(a) * parseInt(a) * parseInt(a);

function Count(){
    alert(terfogat)
    eredmeny.innerHTML="A kocka térfogata: " +  terfogat + "<br>" + "A kocka felszíne: " + felszin;

}