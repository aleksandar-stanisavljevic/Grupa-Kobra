var people = [
    {
      "name": "Milan Stojiljković",
      "image": "images/milan.jpg",
      "position": "Predsednik",
      "phone": "+381 604601645",
      "email": "milangrupakobra@gmail.com"
    },
    {
      "name": "Milena Milošević",
      "image": "images/Zuca.jpg",
      "position": "Koordinator programa za ruralni razvoj",
      "phone": "+381 621200455",
      "email": "milenagrupakobra@gmail.com"
    },
    {
      "name": "Milan Jovanović",
      "image": "images/Pajca.jpg",
      "position": "Koordinator programa za ekologiju",
      "phone": "+381 62610502",
      "email": "milanjgrupakobra@gmail.com"
    },
    {
      "name": "Ivana Blagojević",
      "image": "images/Ivana.jpg",
      "position": "Koordinator programa za decu, social media marketing",
      "phone": "+381 648596076",
      "email": "iblagojevicgrupakobra@gmail.com"
    },
    {
      "name": "Slobodan Dimitrijević",
      "image": "images/Boda.jpg",
      "position": "Finansijski i administrativni menadžer",
      "phone": "+381 601624153",
      "email": "slobodangrupakobra@gmail.com"
    }
];

var we = people.length;

function showPeople(we){
  var peopleOfCobra = people[people.length - we];

  if (we > 0) {
    getPeople.bind(peopleOfCobra)();
    return showPeople(we - 1);
  }
  else {
    return we;
  }
};

function getPeople(){
  var imageAlt = (this.image.split("/")[1]).split(".")[0];
  document.getElementById('people_data').innerHTML += "<div><img src='" + this.image + "' alt='" + imageAlt + "'></div><div><div>" + this.name + "</div><div><p>" + this.position + "</p><p><a href='tel:" + this.phone + "'>" + this.phone + "</a></p><p><a href='mailto:" + this.email + "'>" + this.email + "</a></p></div></div><br>";
}
