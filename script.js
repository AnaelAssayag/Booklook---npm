var fetch = function () {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + $('#isbn_n').val(),
      success: function(data) {
        console.log(data);
        console.log(data.items[0].volumeInfo.title);
        displayBook(data);
        console.log(geturl)
      

      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

  $('.search').on('click', fetch)

function displayBook(data) {
    //display title

    var source = $('#book-template').html();
    var template = Handlebars.compile(source);
    console.log(template)
    var newHTML = template({title: data.items[0].volumeInfo.title, 
                            description:data.items[0].volumeInfo.description, 
                            authors: data.items[0].volumeInfo.authors,
                            thumbnail: data.items[0].volumeInfo.imageLinks.thumbnail

                        });
    console.log(newHTML)
    $('.findTitle').append(newHTML);
    
    
}





