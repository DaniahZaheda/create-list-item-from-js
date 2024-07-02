var programmingLang =['c++', 'java','html'];
var data="";
for(var i=0;i<programmingLang.length;++i){
        data += `<li>${programmingLang[i]}</li>`;
}
document.querySelector(".lang").innerHTML=data;
 


var restaurants =['Snack corner', 'zuaar','Segafredo'];
var data="";
for(var i=0;i<restaurants.length;++i){
        data += `<li>${restaurants[i]}</li>`;
}
document.querySelector(".res").innerHTML=data;