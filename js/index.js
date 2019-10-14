/*Ideas:
- Concept of wrap all inputs by array.from and just reference to the place in the array in functions.
*/
// ***functions to enable and disable inputs in html***
document.getElementById("box").onchange=function(){
  document.getElementById("form").disabled = !this.checked};
document.getElementById("box2").onchange=function(){
  document.getElementById("form2").disabled = !this.checked}
  //function to disable and enable inputs based on button mode(druk/wycena)
  function mode (select){
    var selection = select
    var arryMode = document.getElementsByClassName("mode");
    var arryRadio = document.getElementsByName('repetition');
    if(selection==='wycena'){
      Array.from(arryMode).forEach(function(item){item.setAttribute("disabled","disabled")});
      Array.from(arryRadio).forEach(function(item){item.checked=false})
    }else if(selection==="druk"){
      Array.from(arryMode).forEach(function(item){item.removeAttribute("disabled")});
    }
    }
//***function to allow enter to forms only numbers*** TO DO-add exception ,, and change on . try use KeyboardEvent()
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
      return false;
  return true;
}
//***function triggered by button apply to change dimensions*** TO DO- see if can do it with Array from
function resizeAply(){
  var  IWidth = document.getElementById("inputWidth").value;
  var  IHeight = document.getElementById("inputHeight").value;
  var  IDpi = document.getElementById("inputDPI").value;
  var sizeButtonSender = 'resizAply ={reWidth:"'+IWidth+'",reHeight:"'+IHeight+'",reDpi:"'+IDpi+'"};'
  alert(sizeButtonSender );
  csInterface.evalScript(sizeButtonSender + "resizeButton()",);
}
//***functions to calculate other values in inputs in resize***
  function widthF(){
    let inputWidth = document.getElementById("inputWidth").value;
    document.getElementById("inputDPI").value = (parseFloat(pixelW)/(inputWidth/2.54)).toFixed(3);
    document.getElementById("inputHeight").value =(parseFloat(pixelH)/((parseFloat(pixelW)/(inputWidth/2.54))/2.54)).toFixed(2);
  }
  function heightF(){
    let inputHeight = document.getElementById("inputHeight").value;
    document.getElementById("inputDPI").value = (parseFloat(pixelH)/(inputHeight/2.54)).toFixed(3);
    document.getElementById("inputWidth").value = (parseFloat(pixelW)/((parseFloat(pixelH)/(inputHeight/2.54))/2.54)).toFixed(2);
  }
  function dpiF(){
    let inputDPI = document.getElementById("inputDPI").value;
    document.getElementById("inputHeight").value = (parseFloat(pixelH)/(inputDPI/2.54)).toFixed(2);
    document.getElementById("inputWidth").value = (parseFloat(pixelW)/(inputDPI/2.54)).toFixed(2);
  }
var csInterface = new CSInterface();
//***main function triggered by fabric buttons*** TODO:shorten sender if needed
function directory(x){
  var fabric = x;//type of fabric
  var printingItem = document.getElementById("druk").checked?true:false;//true DRUK false WYCENA
  alert(printingItem)
  
  var  IWidth = document.getElementById("inputWidth").value;
  var  IHeight = document.getElementById("inputHeight").value;
  var  IDpi = document.getElementById("inputDPI").value;
  if(printingItem===true){
    var arr = Array.from(document.getElementsByName("repetition"));//array from radio buttons
    var selectRepeta = arr.find(function(ele){return ele.checked===true});//finds which repetition is selected
    if(selectRepeta===undefined){
      return alert('set repetition')//when nothing is selected
    }else{
      var repeti=selectRepeta.value
    }
  }
  var sender = ('var fabric={fabric:"'+fabric+'",printingItem:"'+printingItem+'",reDpi:"'+IDpi+'",repetition:"'+repeti+'"};');
  alert(sender)
  csInterface.evalScript(sender + "saveDocument()",);
  
  //***addition features for the main function***
  /*
  //old sender
  var sender = ('var fabric={fabric:"'+fabric+'",newName:"'+newName+'",newPath:"'+newPath+'",closeFile:"'+closeFile+'",printingItem:"'+printingItem+'",reDpi:"'+IDpi+'",repetition:"'+repeti+'"};');
  //for new subfolder
  var newPath = "";
  if(document.getElementById("box2").checked && document.getElementById("form2").value.length <= 0){
    return alert('enter the subfolder')
  }else{document.getElementById("box2").checked && document.getElementById("form2").value.length > 0? 
  newPath = document.getElementById("form2").value : newPath = ""};
  //for new file name
  var newName = "";
  if(document.getElementById("box").checked && document.getElementById("form").value.length <= 0){
    return alert('enter the name')
  }else{document.getElementById("box").checked && document.getElementById("form").value.length > 0? 
  newName = document.getElementById("form").value : newName = ""};
  //close the file
  var closeFile = document.getElementById("closeFile").checked?true:false;
  */
}
//***data to insert in header and in placeholder in resize, collaborate with getDocData function from jsx*** TODO: pick ones that should be in the header
function inner(){
  csInterface.evalScript('getDocData()', function(res){
    var infoArr = res.split('§');
    document.getElementById("width").innerHTML=infoArr[0];
    document.getElementById("inputWidth").value=(parseFloat(infoArr[8])).toFixed(2);
    document.getElementById('height').innerHTML=infoArr[1];
    document.getElementById("inputHeight").value=(parseFloat(infoArr[9])).toFixed(2);
    document.getElementById('reso').innerHTML=infoArr[2];
    document.getElementById('inputDPI').value=infoArr[2];
    document.getElementById('colorType').innerHTML=infoArr[3];
    document.getElementById('printingProfile').innerHTML=infoArr[4];
    document.getElementById('pathnon').innerHTML=infoArr[5];
    document.getElementById("toCopy").innerHTML=infoArr[7]

    return cmW = infoArr[8],
    pixelW = infoArr[0],
    pixelH = infoArr[1]
  })
};
//***events trigger inner function***
csInterface.addEventListener('documentEdited',inner);
csInterface.addEventListener('documentAfterActivate',inner);
/*
***function to copy the path of the file***
function copyElementText(id) {
  var text = document.getElementById(id).innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}*/