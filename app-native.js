let nav = document.getElementsByClassName('nav-link');
let kategori = document.getElementById('kategori');

for(var i=0; i<nav.length; i++){

  nav[i].addEventListener('click', function(){
      for(var j=0; j<nav.length; j++){
        nav[j].classList.remove('active');
      }
      this.classList.add('active');
      kategori.innerHTML= this.innerHTML;
      tampilData(kategori.innerHTML.toLowerCase());
      
  });
}

function tampilData(params){
  let xhr = new XMLHttpRequest();
  var content = document.getElementById('content');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var respon = JSON.parse(this.responseText);
      var data = respon;
      var isi = "";
      for (var i in data) {
        if(params == data[i]['kategori']){
          isi += '<div class="col-md-auto card" style="width: 16rem; "><img src="img/pizza/' + data[i]["gambar"] + '"class="card-img-top" style="width:100%;" alt="' + data[i]["nama"] + '"><div class="card-body d-flex flex-column justify-content-center"><h5 class="card-title text-capitalize" >' + data[i]["kategori"] + '</h5><h5 class="card-title">' + data[i]["nama"] + '</h5><p class="card-text">' + data[i]['deskripsi'] + '</p><p class="text-harga badge text-wrap bg-danger fw-semibold py-2 mt-auto" style="width: 7rem;cursor: context-menu;"> ' + 'Harga : ' + data[i]["harga"] + '</p></div></div>';
        }else if(params=='all'){
          isi += '<div class="col-md-auto card" style="width: 16rem; "><img src="img/pizza/' + data[i]["gambar"] + '"class="card-img-top" style="width:100%;" alt="' + data[i]["nama"] + '"><div class="card-body d-flex flex-column justify-content-center"><h5 class="card-title text-capitalize" >' + data[i]["kategori"] + '</h5><h5 class="card-title">' + data[i]["nama"] + '</h5><p class="card-text">' + data[i]['deskripsi'] + '</p><p class="text-harga badge text-wrap bg-danger fw-semibold py-2 mt-auto" style="width: 7rem;cursor: context-menu;"> ' + 'Harga : ' + data[i]["harga"] + '</p></div></div>'; 
        }
      }
      content.innerHTML = isi;
  
    }
  }
  xhr.open('GET', 'API/pizza.json', true);
  xhr.send();

}
tampilData('all');


