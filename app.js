function tampilData(kategori){
  var kategori = kategori.toLowerCase();
  $('#content').html('');
  $.ajax({
      url :'API/pizza.json',
      type :'get',
      dataType : 'json',
      success: function (response) {

        $.each(response, function(i,data){

          if(kategori == data.kategori){
            
            $('#content').append(`
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
            </div>
            `);

          }else if( kategori == 'all'){

            $('#content').append(`
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
            </div>
            `);

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