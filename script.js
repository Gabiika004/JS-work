var slider_content = document.getElementById('IMG');
img1=document.getElementById("img").src = "CSS3.png";
img2=document.getElementById("img").src = "HTML5.png";
imgs=[img1,img2];
i=1;

function Switch(){
    i++;
    if (i%2==0){
        slider_content.innerHTML = "<img src="+imgs[0]+' alt='+"CSS"+' title='+"CSS"+'>';
    }
    else{
        slider_content.innerHTML = '<img src='+imgs[1]+' alt='+"HTML"+' title='+"HTML"+'>';
    }
    
}

function Count(){
    var a = document.getElementById('hossz').value;
    var eredmeny = document.getElementById('eredmeny');
    terfogat = Math.pow(parseInt(a),3);
    felszin = 6 * terfogat;
    eredmeny.innerHTML="A kocka térfogata: " + terfogat + "<br>A kocka felszíne: " + felszin;

}