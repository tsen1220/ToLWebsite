function getdata(faction,index){



fetch('./tof/'+faction+'.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    let hh=data.class;
    console.log(hh);
    BDDATA(hh);
  
})
const BDDATA= hh =>{
    let aaaHTML=``;
    hh.forEach(classs => {
        console.log(classs)
        if(classs.index == index){
            aaaHTML=`<div class="position">`+
            `<div>職業名稱:${classs.classname}</div><br/>`+
            `<div>職業類別:${classs.classtype}</div><br/>`+
            `<div>轉化後(前)職業(類別):${classs.convertclass}</div><br/>`+
            `<div>勝利條件:${classs.victory}</div><br/>`+
            `</div>`+
            `<div class='posit'>`+
            `<div class='contain'><b>被動</b></div>`+
            `<div><b><img src="${classs.passive[0].p1img}" width="50px" height="50px">${classs.passive[0].p1}</b></div>`+
            `<div>${classs.passive[0].p1description}</div><br/>`+
            `<div><b><img src="${classs.passive[1].p2img}" width="50px" height="50px">${classs.passive[1].p2}</b></div><br/>`+
            `<div>${classs.passive[1].p2description}</div><br/>`+
            `</div>`+
            `<div class='dposition'>`+
            `<div class='contain'><b>白天技能</b></div>`+
            `<div><img src="${classs.day[0].d1img}" width="50px" height="50px">${classs.day[0].d1}</div><br/>`+
            `<div>${classs.day[0].d1description}</div><br/>`+
            `<div>${classs.day[0].d1times}</div><br/>`+
            `<div><b><img src="${classs.day[1].d2img}" width="50px" height="50px">${classs.day[1].d2}</b></div><br/>`+
            `<div>${classs.day[1].d2description}</div><br/>`+
            `<div>${classs.day[1].d2times}</div><br/>`+
            `</div>`+
            `<div class="nposition">`+
            `<div class='contain'><b>晚上技能</b></div>` +
            `<div><b><img src="${classs.night[0].n1img}" width="50px" height="50px">${classs.night[0].n1}</b></div><br/>`+
            `<div>${classs.night[0].n1description}</div><br/>`+
            `<div>${classs.night[0].n1times}</div><br/>`+
            `<div><b><img src="${classs.night[1].n2img}" width="50px" height="50px">${classs.night[1].n2}</b></div><br/>`+
            `<div>${classs.night[1].n2description}</div><br/>`+
            `<div>${classs.night[1].n2times}</div><br/>`+
            `</div>`
     }
    })
    var a=document.getElementById('description')
    a.innerHTML=aaaHTML
    
}

}

function hide(num){
    for(var i=1;i<17;i++){
        if(i==num ){
            document.getElementById("bd"+i).style.width="362px";
            document.getElementById("bd"+i).style.height="486px";
            continue
        }
     document.getElementById("bd"+i).style.display="none";
    }
}

function show(){
    for(var j=1;j<17;j++){
    document.getElementById("bd"+j).style.width="184px";
    document.getElementById("bd"+j).style.height="244px";
    document.getElementById("bd"+j).style.display="inline";
    }
    var b=document.getElementById('description')
    b.innerHTML=''
 }


 function show1(){
    for(var j=1;j<13;j++){
    document.getElementById("bd"+j).style.width="184px";
    document.getElementById("bd"+j).style.height="244px";
    document.getElementById("bd"+j).style.display="inline";
    }
    var b=document.getElementById('description')
    b.innerHTML=''
 }

 function show2(){
    for(var j=1;j<7;j++){
    document.getElementById("bd"+j).style.width="184px";
    document.getElementById("bd"+j).style.height="244px";
    document.getElementById("bd"+j).style.display="inline";
    }
    var b=document.getElementById('description')
    b.innerHTML=''
 }



