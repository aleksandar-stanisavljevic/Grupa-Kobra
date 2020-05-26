for(i = 0; i < document.querySelectorAll('.navbar').length; i++){
  var paddingNavText = document.getElementsByClassName('navbar')[i].getElementsByTagName('a')[0].text;
  var paddingLink = document.getElementsByClassName('navbar')[i].getElementsByTagName('a')[0].getAttribute("href");
  document.getElementById('newNav').innerHTML += "<a href='" + paddingLink + "'><p>" + paddingNavText + "</p></a>";
  document.getElementById('newNav').style.display = 'none';
}

function collapseMenu(){
  if (document.getElementById('newNav').style.display == 'block'){
    document.getElementById('newNav').style.display = 'none';
  }
  else{
    document.getElementById('newNav').style.display = 'block';
  }
}

function collapseMenuHidden(){
  if(window.matchMedia("(min-width: 1200px)").matches){
    document.getElementById('newNav').style.display = 'none';
  }
}
