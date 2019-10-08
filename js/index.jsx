/*var json2 = File($.fileName).path + "/" + "json2.js";
$.evalFile(json2); I can't include json to jsx */
function currentDate(){
    var date = new Date()
    var year = date.getFullYear().toString();
    var month = (date.getMonth() +1).toString();
    var day = date.getDate().toString();
    if (month.length == 1){ month = '0' + month}
    if (day.length == 1){ day = '0' + day}
    return year + month + day
};
function resizeButton(){
  preferences.rulerUnits = Units.CM;
  var doc = app.activeDocument;
  doc.resizeImage(undefined, undefined, resizAply.reDpi, ResampleMethod.NONE)
}

  function saveDocument(){
//var docCopy = app.activeDocument.duplicate();
//var doc = docCopy;
var orginalRulerUnits = preferences.rulerUnits; // has to be in the function
//preferences.rulerUnits = Units.PIXELS;
preferences.rulerUnits = Units.CM;
var doc = app.activeDocument;
var name = doc.name
/***if statement new Name input */
/*if(fabric.newName.length>0){
var name = fabric.newName;
}else{
var name = doc.name
};*/
var r = fabric.repetition
doc.flatten(); //flats whole file 
doc.changeMode(ChangeMode.CMYK); //converts to cmyk 
doc.colorProfileName='U.S. Web Coated (SWOP) v2';

if(fabric.printingItem === "true"){
doc.resizeImage(undefined, undefined, fabric.reDpi, ResampleMethod.NONE)
var res = doc.resolution.toFixed(0)
var fileNameItem = 'DRUK-' + currentDate() + '-' + name +'-'+res+'-'+r ;
if (fabric.fabric == 'kreton') {var path = "Y:\\_pliki-zamowienia\\!KRETON"; 
} else if(fabric.fabric == 'satyna') {var path = "Y:\\_pliki-zamowienia\\!SATYNA";
} else if(fabric.fabric == 'woal') {var path = "Y:\\_pliki-zamowienia\\!WOAL";
} else if(fabric.fabric == 'płótno') {var path = "Y:\\_pliki-zamowienia\\!PŁÓTNO-LEN";
} else if(fabric.fabric == 'sofia') {var path = "Y:\\_pliki-zamowienia\\!SOFIA";
} else if(fabric.fabric == 'panama') {var path = "Y:\\_pliki-zamowienia\\!PANAMA";
} else if(fabric.fabric == 'gabardyna') {var path = "Y:\\_pliki-zamowienia\\!GABARDYNA";
} else if(fabric.fabric == 'jersey 180') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 180";
} else if(fabric.fabric == 'jersey 200') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 200";
} else if(fabric.fabric == 'jersey 230') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 230";
} else if(fabric.fabric == 'interlock') {var path = "Y:\\_pliki-zamowienia\\!INTERLOCK";
} else if(fabric.fabric == 'pętelka 250') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 250";
} else if(fabric.fabric == 'pętelka 330') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 330";
}
alert("true" + path + fileNameItem);
var file = new File(path + '/' + fileNameItem);
                opts = new TiffSaveOptions();
                opts.imageCompression = TIFFEncoding.TIFFLZW; 
                doc.saveAs(file, opts, true);
} else{
var fileName = 'WYCENA-' + currentDate() + '-' + name;

if (fabric.fabric == 'kreton') {var path = "Y:\\_pliki-zamowienia\\!KRETON\\wycena"; 
} else if(fabric.fabric == 'satyna') {var path = "Y:\\_pliki-zamowienia\\!SATYNA\\wycena";
} else if(fabric.fabric == 'woal') {var path = "Y:\\_pliki-zamowienia\\!WOAL\\wycena";
} else if(fabric.fabric == 'płótno') {var path = "Y:\\_pliki-zamowienia\\!PŁÓTNO-LEN\\wycena";
} else if(fabric.fabric == 'sofia') {var path = "Y:\\_pliki-zamowienia\\!SOFIA\\wycena";
} else if(fabric.fabric == 'panama') {var path = "Y:\\_pliki-zamowienia\\!PANAMA\\wycena";
} else if(fabric.fabric == 'gabardyna') {var path = "Y:\\_pliki-zamowienia\\!GABARDYNA\\wycena";
} else if(fabric.fabric == 'jersey 180') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 180\\wycena";
} else if(fabric.fabric == 'jersey 200') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 200\\wycena";
} else if(fabric.fabric == 'jersey 230') {var path = "Y:\\_pliki-zamowienia\\!JERSEY 230\\wycena";
} else if(fabric.fabric == 'interlock') {var path = "Y:\\_pliki-zamowienia\\!INTERLOCK\\wycena";
} else if(fabric.fabric == 'pętelka 250') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 250\\wycena";
} else if(fabric.fabric == 'pętelka 330') {var path = "Y:\\_pliki-zamowienia\\!PĘTELKA 330\\wycena";
}
var f = new Folder( path + '/'+currentDate()+ '/');//+ fabric.newPath ); ***needed for subfolder name
if (!f.exists) { f.create()};
var file = new File(f + '/' + fileName);
                opts = new TiffSaveOptions();
                opts.imageCompression = TIFFEncoding.TIFFLZW; 
                doc.saveAs(file, opts, true);}
//if(!file.exists){file.create()};
//references.rulerUnits = Units.PIXELS
alert('The file has been saved.' + 
'\n name: '+ fileName + 
'\n dpi: '+doc.resolution.toFixed(0) + 
'\n size: '+ Number(doc.width).toFixed(2)+' cm' +' x '+ Number(doc.height).toFixed(2)+' cm'+
'\n path: '+app.activeDocument.path);
//var doc = docCopy;

//if(fabric.closeFile === "true"){doc.close(SaveOptions.DONOTSAVECHANGES)}; ***needed for closeFile
  }
  function getDocData(){
    preferences.rulerUnits = Units.PIXELS;
    var width = app.activeDocument.width;
    var height = app.activeDocument.height;
    preferences.rulerUnits = Units.CM;
    var widthCM = app.activeDocument.width;
    var heightCM = app.activeDocument.height;
    var name = app.activeDocument.name;
    try{
      if (fabric.fabric == 'kreton') {var mat= "Y:\\_pliki-zamowienia\\!KRETON\\wycena"; 
} else if(fabric.fabric == 'satyna') {var mat= "Y:\\_pliki-zamowienia\\!SATYNA\\wycena";
} else if(fabric.fabric == 'woal') {var mat= "Y:\\_pliki-zamowienia\\!WOAL\\wycena";
} else if(fabric.fabric == 'płótno') {var mat= "Y:\\_pliki-zamowienia\\!PŁÓTNO-LEN\\wycena";
} else if(fabric.fabric == 'sofia') {var mat= "Y:\\_pliki-zamowienia\\!SOFIA\\wycena";
} else if(fabric.fabric == 'panama') {var mat= "Y:\\_pliki-zamowienia\\!PANAMA\\wycena";
} else if(fabric.fabric == 'gabardyna') {var mat= "Y:\\_pliki-zamowienia\\!GABARDYNA\\wycena";
} else if(fabric.fabric == 'jersey 180') {var mat= "Y:\\_pliki-zamowienia\\!JERSEY 180\\wycena";
} else if(fabric.fabric == 'jersey 200') {var mat= "Y:\\_pliki-zamowienia\\!JERSEY 200\\wycena";
} else if(fabric.fabric == 'jersey 230') {var mat= "Y:\\_pliki-zamowienia\\!JERSEY 230\\wycena";
} else if(fabric.fabric == 'interlock') {var mat= "Y:\\_pliki-zamowienia\\!INTERLOCK\\wycena";
} else if(fabric.fabric == 'pętelka 250') {var mat= "Y:\\_pliki-zamowienia\\!PĘTELKA 250\\wycena";
} else if(fabric.fabric == 'pętelka 330') {var mat= "Y:\\_pliki-zamowienia\\!PĘTELKA 330\\wycena";
};
  } catch(e) {
    var mat = 'first save the world';
  };
    try{  
      var printingProfile = app.activeDocument.colorProfileName;  
  } catch(e) {  
      var printingProfile = "not embedded";  
  };
    var colorType = app.activeDocument.mode;
    var reso= app.activeDocument.resolution;
    var sender= (''+width+'§'+height+'§'+reso+'§'+printingProfile+'§'+colorType+'§'+name+'§'+currentDate()+'§'+mat+'§'+widthCM+'§'+heightCM+'');
    return sender
    };
  //alert('The file has been saved.' + 
//'\n name: '+ fileName + 
//'\n dpi: '+doc.resolution.toFixed(0) + 
//'\n size: '+ Number(doc.width).toFixed(2)+' cm' +' x '+ Number(doc.height).toFixed(2)+' cm'+
//'\n path: '+app.activeDocument.path);

  
            /*function saveTiff(name) {
                if (insertData.typeOfFabric === 'satyna'){var myFolder = "C:\\Users\\AdminX\\Desktop\\Bart\\smart Saver\\DEMO\\satyna"} 
                else if(insertData.typeOfFabric === 'kreton'){var myFolder = "C:\\Users\\AdminX\\Desktop\\Bart\\smart Saver\\DEMO\\kreton"}
                var file = new File(myFolder + '/' + name + '.tiff');
                var opts = new TiffSaveOptions();
                opts.imageCompression.TIFFLZW;
                doc.saveAs(file, opts, false);
            }saveTiff(fileName)
        }
};
preferences.rulerUnits = Units.CM
alert('The file has been saved.\n name: '+insertData.name+
'\n dpi: '+parseFloat((doc.resolution).toFixed(3))+
'\n size: '+ Number(doc.width).toFixed(2)+' cm' +' x '+ Number(doc.height).toFixed(2)+' cm'+
'\n orderID: '+insertData.order+
'\n repetition: '+insertData.repetition[0]+
'\n path: '+app.activeDocument.path
);*/