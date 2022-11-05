var canMove = true

$(window).scroll(function() {
    scroll(0,0);
});

envf.setBg({image:"graphics/villagebg.png",position:"50% 0%"})

envf.addSprite("middle","noticeboardDesc","graphics/noticeboardDesc.png",{x:6,y:60,width:80,height:71.25})
envf.addSprite("middle","midArrowLeft","graphics/arrowLeft.png",{x:5,y:0,width:60,height:50})
envf.addSprite("middle","midArrowRight","graphics/arrowRight.png",{x:35,y:-10,width:60,height:50})
$('#midArrowLeft').on("click",(()=>{
    if(canMove){
        canMove = false
        envf.moveAll("left",1000)
        setTimeout(()=>{canMove=true},2500)
    }
}))
$('#midArrowLeft').html("Twoja lista")

$('#midArrowRight').on("click",(()=>{
    if(canMove){
        canMove = right
        envf.moveAll("right",1000)
        setTimeout(()=>{canMove=true},2500)
    }
}))
$('#midArrowRight').html("Zadania")

envf.addSprite("left","lArrowRight","graphics/arrowRight.png",{x:-65,y:0,width:60,height:50})
envf.addSprite("left","scrollPedestal","graphics/scrollPedestal.png",{x:-84,y:27.5,width:60,height:147.7})
document.querySelector("#scrollPedestal").style.backgroundPosition="center bottom"
$('#lArrowRight').on("click",(()=>{
    if(canMove){
        canMove = false
        envf.moveAll("right",1000)
        setTimeout(()=>{canMove=true},2500)
    }
}))
$('#lArrowRight').html("Ogłoszenia")


envf.addSprite("right","rArrowLeft","graphics/arrowleft.png",{x:105,y:0,width:60,height:50})
envf.addSprite("left","taskboardDesc","graphics/taskboardDesc.png",{x:96,y:35,width:80,height:150.2})
$('#rArrowLeft').on("click",(()=>{
    if(canMove){
        canMove = false
        envf.moveAll("left",1000)
        setTimeout(()=>{canMove=true},2500)
    }
}))
$('#rArrowLeft').html("Ogłoszenia")

envf.addSprite("middle","noticeboard","graphics/noticeboard.png",{x:-60.5,y:125,width:193.6,height:172.425,z:10})
$('#noticeboard').html("<table id='ogloszeniaTable'><tr><th><input readonly id='ogloszenieTitle' placeholder='Tytuł'></th></tr><tr><td><textarea readonly id='ogloszenieDesc' placeholder='Opis'></textarea></td></tr><table>")
envf.addSprite("midControls","noticeboardR","graphics/paperScrapD.png",{x:74,y:168,width:16.65,height:16.03,z:20})
$("#noticeboardR").html("&#8620;")
envf.addSprite("midControls","noticeboardL","graphics/paperScrapD.png",{x:12,y:168,width:16.65,height:16.03,z:20})
$("#noticeboardL").html("&#8619;")
envf.addSprite("midControls","noticeboardEdit","graphics/paperScrapDY.png",{x:82,y:136,width:16.65,height:16.03,z:20})
$("#noticeboardEdit").html("&#9999;")
$("#noticeboardEdit").css('padding-top','0.5%')
$("#noticeboardEdit").css('padding-left','3%')
envf.addSprite("midControls","noticeboardAdd","graphics/paperScrapDG.png",{x:65,y:136,width:16.65,height:16.03,z:20})
$("#noticeboardAdd").html("+")
envf.addSprite("midControls","noticeboardConfirm","graphics/paperScrapDG.png",{x:48,y:136,width:16.65,height:16.03,z:20})
$("#noticeboardConfirm").html("&#128190;")
$("#noticeboardConfirm").css('padding-top','0.5%')
$("#noticeboardConfirm").css('padding-left','3%')
envf.addSprite("midControls","noticeboardCancel","graphics/paperScrapDY.png",{x:65,y:136,width:16.65,height:16.03,z:20})
$("#noticeboardCancel").html("&#10008;")
envf.addSprite("midControls","noticeboardRemove","graphics/paperScrapDR.png",{x:82,y:136,width:16.65,height:16.03,z:20})
$("#noticeboardRemove").html("&#128465;")
envf.addSprite("midControls","noticeboardClose","graphics/paperScrapD.png",{x:2,y:125,width:16.65,height:16.03,z:20})
$("#noticeboardClose").html("-")
$("#noticeboardClose").css('padding-top','0')


var noticeEdit = false, oldDesc, oldTitle
$('#noticeboardDesc').on("click",(()=>{
    $('#vignette').css('display', 'block')
    envf.moveSprite("noticeboardDesc","down")
    envf.moveSprite("noticeboard","up")
    envf.moveSprite("noticeboardR","up")
    envf.moveSprite("noticeboardL","up")

    envf.moveSprite("noticeboardAdd","up")
    envf.moveSprite("noticeboardEdit","up")
    
    envf.moveSprite("noticeboardClose","up")
}))


$('#noticeboardClose').on("click",(()=>{
    $('#vignette').css('display', 'none')
    envf.moveSprite("noticeboardDesc","up")
    envf.moveSprite("noticeboard","down")
    envf.moveSprite("noticeboardR","down")
    envf.moveSprite("noticeboardL","down")
    if(noticeEdit){
        envf.moveSprite("noticeboardRemove","down")
        envf.moveSprite("noticeboardConfirm","down")
        envf.moveSprite("noticeboardCancel","down")
        
    }else{
        envf.moveSprite("noticeboardAdd","down")
        envf.moveSprite("noticeboardEdit","down")
    }
    envf.moveSprite("noticeboardClose","down")
    document.querySelector('#ogloszenieTitle').readOnly = true
    document.querySelector('#ogloszenieDesc').readOnly = true


}))
$('#noticeboardEdit, #noticeboardAdd').on("click",(()=>{
    noticeEdit = true
    oldTitle = document.querySelector("#ogloszenieTitle").value
    oldDesc = document.querySelector("#ogloszenieDesc").value
    envf.moveSprite("noticeboardAdd","down")
    envf.moveSprite("noticeboardEdit","down")
    envf.moveSprite("noticeboardRemove","up")
    envf.moveSprite("noticeboardConfirm","up")
    envf.moveSprite("noticeboardCancel","up")
    document.querySelector('#ogloszenieTitle').readOnly = false
    document.querySelector('#ogloszenieDesc').readOnly = false
}))

$('#noticeboardCancel').on("click",(()=>{
    noticeEdit = false
    envf.moveSprite("noticeboardAdd","up")
    envf.moveSprite("noticeboardEdit","up")
    envf.moveSprite("noticeboardRemove","down")
    envf.moveSprite("noticeboardConfirm","down")
    envf.moveSprite("noticeboardCancel","down")
    document.querySelector('#ogloszenieTitle').readOnly = true
    document.querySelector('#ogloszenieDesc').readOnly = true
    document.querySelector("#ogloszenieTitle").value = oldTitle
    document.querySelector("#ogloszenieDesc").value = oldDesc
    
}))

$('#ogloszenieTitle, #ogloszenieDesc').on('focus',()=>{
    if(noticeEdit){
        $('#noticeboardL,#noticeboardR').each(function(){
            $(this).css('display','none')
        })
    }
})
$('#ogloszenieTitle, #ogloszenieDesc').on('focusout',()=>{
    if(noticeEdit){
        $('#noticeboardL,#noticeboardR').each(function(){
            $(this).css('display','block')
        })
    }
})


envf.addSprite("right","taskboard","graphics/taskboard.png",{x:45.5,y:105,width:240,height:315.6,z:10})
$('#taskboard').html("<table id='taskTable'><tr><td id='task1'></td></tr><tr><td id='task2'></td></tr><tr><td id='task3'></td></tr><table>")
envf.addSprite("lControls","taskboardU","graphics/paperScrapD.png",{x:180,y:140,width:16.65,height:16.03,z:20})
$("#taskboardU").html("&uArr;")
envf.addSprite("lControls","taskboardD","graphics/paperScrapD.png",{x:180,y:156,width:16.65,height:16.03,z:20})
$("#taskboardD").html("&dArr;")
envf.addSprite("lControls","taskboardAdd","graphics/paperScrapDG.png",{x:180,y:186,width:16.65,height:16.03,z:20})
$("#taskboardAdd").html("+")
envf.addSprite("lControls","taskboardClose","graphics/paperScrapD.png",{x:102,y:112.5,width:16.65,height:16.03,z:20})
$("#taskboardClose").html("-")
$("#taskboardClose").css('padding-top','0')
envf.addSprite("task1","taskA","graphics/paperScrapB.png",{x:180,y:120,width:50.375,height:35,z:20})
envf.addSprite("task2","taskB","graphics/paperScrapB.png",{x:180,y:140,width:50.375,height:35,z:20})
envf.addSprite("task3","taskC","graphics/paperScrapB.png",{x:180,y:160,width:50.375,height:35,z:20})

$('#taskboardDesc').on("click",(()=>{
        $('#vignette').css('display', 'block')
        envf.moveSprite("taskboardDesc","down")
        envf.moveSprite("taskboard","up")
        envf.moveSprite("taskboardU","up")
        envf.moveSprite("taskboardD","up")
        envf.moveSprite("taskboardAdd","up")
        envf.moveSprite("taskboardClose","up")
        envf.moveSprite("taskA","up")
        envf.moveSprite("taskB","up")
        envf.moveSprite("taskC","up")
    })
)

$('#taskboardClose').on("click",(()=>{
    $('#vignette').css('display', 'none')
    envf.moveSprite("taskboardDesc","up")
    envf.moveSprite("taskboard","down")
    envf.moveSprite("taskboardU","down")
    envf.moveSprite("taskboardD","down")
    envf.moveSprite("taskboardAdd","down")
    envf.moveSprite("taskboardClose","down")
    envf.moveSprite("taskA","down")
    envf.moveSprite("taskB","down")
    envf.moveSprite("taskC","down")
})
)

envf.addSprite("right","task","graphics/paperScrapB.png",{x:105,y:135,width:90,height:62.53,z:30})
$("#task").html(`
    <table><tr><th>
        <input readonly id='taskTitle' placeholder='Tytuł'>
    </th><td>Trudność:<input readonly id='taskDifficulty' min='1' max='5' value='1'></td></tr><tr><td colspan="2">
        <textarea readonly id='taskDesc' placeholder='Opis'></textarea>
    </td></tr><tr><td id='taskUsers'>
        <img class='user' src='https://cetcc.com.br/giga_site_git/public/cetcc/img/user/user.png'> 
    </td><td>
        <input type='date' readonly id='taskDue'>
    </td></tr></table>
`)

envf.addSprite("lControls","taskClose","graphics/paperScrapD.png",{x:102,y:130,width:16.65,height:16.03,z:35})
$("#taskClose").html("-")
$("#taskClose").css('padding-top','0')


envf.addSprite("lControls","taskEdit","graphics/paperScrapDY.png",{x:182,y:130,width:16.65,height:16.03,z:35})
$("#taskEdit").html("&#9999;")
$("#taskEdit").css('padding-top','0.5%')
$("#taskEdit").css('padding-left','3%')
envf.addSprite("lControls","taskConfirm","graphics/paperScrapDG.png",{x:148,y:130,width:16.65,height:16.03,z:35})
$("#taskConfirm").html("&#128190;")
$("#taskConfirm").css('padding-top','0.5%')
$("#taskConfirm").css('padding-left','3%')
envf.addSprite("lControls","taskCancel","graphics/paperScrapDY.png",{x:165,y:130,width:16.65,height:16.03,z:35})
$("#taskCancel").html("&#10008;")
envf.addSprite("lControls","taskRemove","graphics/paperScrapDR.png",{x:182,y:130,width:16.65,height:16.03,z:35})
$("#taskRemove").html("&#128465;")

envf.addSprite("lControls","taskTake","graphics/paperScrapDG.png",{x:142,y:160,width:16.65,height:16.03,z:35})
$("#taskTake").html("&#10003;")

var taskEdit = false, oldDesc, oldTitle, oldDue, oldDifficulty

$('#task1, #task2, #task3, #taskboardAdd').on("click",(()=>{
    $('#vignette').css('z-index', '25')
    envf.moveSprite("task","up")
    envf.moveSprite("taskClose","up")
    envf.moveSprite("taskEdit","up")
    envf.moveSprite("taskTake","up")

})
)
$('#taskEdit').on("click",(()=>{
    taskEdit = true
    oldDesc = document.querySelector("#taskDesc").value
    oldTitle = document.querySelector("#taskTitle").value
    oldDue = document.querySelector("#taskDue").value
    oldDifficulty = document.querySelector("#taskDifficulty").value
    document.querySelector("#taskDesc").readOnly = false
    document.querySelector("#taskTitle").readOnly = false
    document.querySelector("#taskDue").readOnly = false
    document.querySelector("#taskDifficulty").readOnly = false
    envf.moveSprite("taskEdit","down")
    envf.moveSprite("taskTake","down")

    envf.moveSprite("taskCancel","up")
    envf.moveSprite("taskConfirm","up")
    envf.moveSprite("taskRemove","up")
}))

$('#taskCancel').on("click",(()=>{
    taskEdit = false
    document.querySelector("#taskDesc").readOnly = true
    document.querySelector("#taskTitle").readOnly = true
    document.querySelector("#taskDue").readOnly = true
    document.querySelector("#taskDifficulty").readOnly = true
    document.querySelector("#taskDesc").value = oldDesc
    document.querySelector("#taskTitle").value = oldTitle 
    document.querySelector("#taskDue").value = oldDue
    document.querySelector("#taskDifficulty").value = oldDifficulty
    envf.moveSprite("taskEdit","up")
    envf.moveSprite("taskTake","up")

    envf.moveSprite("taskCancel","down")
    envf.moveSprite("taskConfirm","down")
    envf.moveSprite("taskRemove","down")
}))

$('#taskClose').on("click",(()=>{
    $('#vignette').css('z-index', '5')
    envf.moveSprite("task","down")
    envf.moveSprite("taskClose","down")
    if(taskEdit){
        envf.moveSprite("taskCancel","down")
        envf.moveSprite("taskConfirm","down")
        envf.moveSprite("taskRemove","down")            
        taskEdit = false
        document.querySelector("#taskDesc").readOnly = true
        document.querySelector("#taskTitle").readOnly = true
        document.querySelector("#taskDue").readOnly = true
        document.querySelector("#taskDifficulty").readOnly = true
        document.querySelector("#taskDesc").value = oldDesc
        document.querySelector("#taskTitle").value = oldTitle 
        document.querySelector("#taskDue").value = oldDue
        document.querySelector("#taskDifficulty").value = oldDifficulty
    }else{
        envf.moveSprite("taskEdit","down")
        envf.moveSprite("taskTake","down")
    }
})
)










envf.addSprite("left","mytasks","graphics/scrollRozwiniety.png",{x:-90,y:102.5,width:80,height:201.135,z:10})
$('#mytasks').html("<table id='mytasksTable'><tr><td id='mytask1'></td></tr><tr><td id='mytask2'></td></tr><tr><td id='mytask3'></td></tr><table>")
envf.addSprite("lControls","mytasksU","graphics/paperScrapC.png",{x:-70,y:110,width:40,height:14.23,z:15})
$("#mytasksU").html("&uArr;")
envf.addSprite("lControls","mytasksD","graphics/paperScrapC.png",{x:-70,y:187.5,width:40,height:14.23,z:15})
$("#mytasksD").html("&dArr;")
envf.addSprite("lControls","mytasksClose","graphics/paperScrapD.png",{x:-92.5,y:105,width:16.65,height:16.03,z:20})
$("#mytasksClose").css('padding-top','0')
$("#mytasksClose").html("-")

$("#scrollPedestal").on("click",()=>{
    $('#vignette').css('display', 'block')
    envf.moveSprite("mytasks","up")
    envf.moveSprite("mytasksU","up")
    envf.moveSprite("mytasksD","up")
    envf.moveSprite("mytasksClose","up")
})

envf.addSprite("right","mytask","graphics/paperScrapB.png",{x:5-100,y:135,width:90,height:62.53,z:30})
$("#mytask").html(`
    <table><tr><th>
        <input readonly id='mytaskTitle' placeholder='Tytuł'>
    </th><td>Trudność:<input readonly id='mytaskDifficulty' min='1' max='5' value='1'></td></tr><tr><td colspan="2">
        <textarea readonly id='mytaskDesc' placeholder='Opis'></textarea>
    </td></tr><tr><td id='mytaskUsers'>
        <img class='user' src='https://cetcc.com.br/giga_site_git/public/cetcc/img/user/user.png'> 
    </td><td>
        <input type='date' readonly id='mytaskDue'>
    </td></tr></table>
`)

envf.addSprite("lControls","mytaskClose","graphics/paperScrapD.png",{x:2-100,y:130,width:16.65,height:16.03,z:35})
$("#mytaskClose").html("-")
$("#mytaskClose").css('padding-top','0')


envf.addSprite("lControls","mytaskEdit","graphics/paperScrapDY.png",{x:82-100,y:130,width:16.65,height:16.03,z:35})
$("#mytaskEdit").html("&#9999;")
$("#mytaskEdit").css('padding-top','0.5%')
$("#mytaskEdit").css('padding-left','3%')
envf.addSprite("lControls","mytaskConfirm","graphics/paperScrapDG.png",{x:48-100,y:130,width:16.65,height:16.03,z:35})
$("#mytaskConfirm").html("&#128190;")
$("#mytaskConfirm").css('padding-top','0.5%')
$("#mytaskConfirm").css('padding-left','3%')
envf.addSprite("lControls","mytaskCancel","graphics/paperScrapDY.png",{x:65-100,y:130,width:16.65,height:16.03,z:35})
$("#mytaskCancel").html("&#10008;")
envf.addSprite("lControls","mytaskRemove","graphics/paperScrapDR.png",{x:82-100,y:130,width:16.65,height:16.03,z:35})
$("#mytaskRemove").html("&#128465;")

envf.addSprite("lControls","mytaskDone","graphics/paperScrapDG.png",{x:42-100,y:160,width:16.65,height:16.03,z:35})
$("#mytaskDone").html("&#10003;")

$('#mytask1, #mytask2, #mytask3').on("click",(()=>{
    $('#vignette').css('z-index', '25')
    envf.moveSprite("mytask","up")
    envf.moveSprite("mytaskClose","up")
    envf.moveSprite("mytaskEdit","up")
    envf.moveSprite("mytaskDone","up")

}))

$('#mytaskClose').on("click",(()=>{
    $('#vignette').css('z-index', '5')
    envf.moveSprite("mytask","down")
    envf.moveSprite("mytaskClose","down")
    if(mytaskEdit){
        envf.moveSprite("mytaskCancel","down")
        envf.moveSprite("mytaskConfirm","down")
        envf.moveSprite("mytaskRemove","down")            
        mytaskEdit = false
        document.querySelector("#mytaskDesc").readOnly = true
        document.querySelector("#mytaskTitle").readOnly = true
        document.querySelector("#mytaskDue").readOnly = true
        document.querySelector("#mytaskDifficulty").readOnly = true
        document.querySelector("#mytaskDesc").value = oldDesc
        document.querySelector("#mytaskTitle").value = oldTitle 
        document.querySelector("#mytaskDue").value = oldDue
        document.querySelector("#mytaskDifficulty").value = oldDifficulty
    }else{
        envf.moveSprite("mytaskDone","down")
        envf.moveSprite("mytaskDone","down")
    }
})
)
$('#mytaskEdit').on("click",(()=>{
    mytaskEdit = true
    oldDesc = document.querySelector("#mytaskDesc").value
    oldTitle = document.querySelector("#mytaskTitle").value
    oldDue = document.querySelector("#mytaskDue").value
    oldDifficulty = document.querySelector("#mytaskDifficulty").value
    document.querySelector("#mytaskDesc").readOnly = false
    document.querySelector("#mytaskTitle").readOnly = false
    document.querySelector("#mytaskDue").readOnly = false
    document.querySelector("#mytaskDifficulty").readOnly = false
    envf.moveSprite("mytaskEdit","down")
    envf.moveSprite("mytaskDone","down")

    envf.moveSprite("mytaskCancel","up")
    envf.moveSprite("mytaskConfirm","up")
    envf.moveSprite("mytaskRemove","up")
}))

$('#mytaskCancel').on("click",(()=>{
    mytaskEdit = false
    document.querySelector("#mytaskDesc").readOnly = true
    document.querySelector("#mytaskTitle").readOnly = true
    document.querySelector("#mytaskDue").readOnly = true
    document.querySelector("#mytaskDifficulty").readOnly = true
    document.querySelector("#mytaskDesc").value = oldDesc
    document.querySelector("#mytaskTitle").value = oldTitle 
    document.querySelector("#mytaskDue").value = oldDue
    document.querySelector("#mytaskDifficulty").value = oldDifficulty
    envf.moveSprite("mytaskEdit","up")
    envf.moveSprite("mytaskDone","up")

    envf.moveSprite("mytaskCancel","down")
    envf.moveSprite("mytaskConfirm","down")
    envf.moveSprite("mytaskRemove","down")
}))