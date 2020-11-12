window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-3K60QQ3HJ6');
var Grid = {
  setColor:function(color){
    document.querySelector('#grid').style.color=color;
  },
  setBgColor:function(color){
    document.querySelector('#grid').style.backgroundColor=color;
  }
}
var Links = {
  setColor:function(color){
    var links = document.querySelectorAll('a');
    var i=0;
    while(i<links.length){
      links[i].style.color = color;
      i=i+1;
    }
  }
}
function darkmodeHandler(self){
  if(self.value==='다크모드ON'){
    Grid.setBgColor('white');
    Grid.setColor('black');
    self.value='다크모드OFF';
    Links.setColor('black');
  }else{
    Grid.setBgColor('black');
    Grid.setColor('white');
    self.value='다크모드ON';
    Links.setColor('white');
  }
}
