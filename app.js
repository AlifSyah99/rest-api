const cards = (data) =>{
  card = ` 
    <div class="col-md-3">
    <div class=" card mb-3">
    <img src="img/pizza/`+ data.gambar +`"class="card-img-top" alt="` + data.nama + `">
    <div class="card-body d-flex flex-column justify-content-center">
    <h5 class="card-title text-capitalize" >` + data.kategori + `</h5>
    <h5 class="card-title">` + data.nama + `</h5>
    <p class="card-text">` + data.deskripsi + `</p>
    <p class="text-harga badge text-wrap bg-danger fw-semibold py-2 mt-auto" style="width: 7rem;cursor: context-menu;"> ` + `Harga : ` + data.harga + `</p>
    </div>
    </div>
  </div>`; 

  return card;
}

const showLoading = ()=>{
    $('#loading').show();
    $('.container-loading').attr('style', 'height:70vh;');
  };
const hideLoading = ()=>{
    $('#loading').hide();
    $('.container-loading').attr('style', 'height:0;');
  };


function tampilData(kategori){
  var kategori = kategori.toLowerCase();
  $('#content').html('');
  $.ajax({
      url :'API/pizza.json',
      type :'get',
      dataType : 'json',
      success: function (response) {
        showLoading();
        $.each(response, function(i,data){
          
          if(kategori == data.kategori){
            setTimeout(function(){
              $('#content').append(cards(data));
              hideLoading();
            },1000);
            
          }else if( kategori == 'all'){
            setTimeout(function(){
              $('#content').append(cards(data));
              hideLoading();
            },1000);
        
          } 
          
      });
      
    }
  });
}

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('#kategori').html(kategori);
    tampilData(kategori);
});

tampilData('all');