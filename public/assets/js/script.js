function addWishlist(){
    let counter= Number(localStorage.getItem("favorite"));
    $("#favorite").text(++counter);
    localStorage.setItem("favorite",counter);
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
};
  
function topFunction() {
    document.documentElement.scrollTop = 0; 
};

$(document).ready(function () {  

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $("#addFavorite").click(addWishlist);
    $(".addFavorite").click(addWishlist);
    $(".delFavorite").click(
        function () {
            let counter= Number(localStorage.getItem("favorite"));
            if (counter > 0) {
                $("#favorite").text(--counter);
                localStorage.setItem("favorite",counter);
                $(this).closest(".product").hide();
            }
        }
    );

    let counter= localStorage.getItem("favorite");
    if (counter === 'undefined') {
        counter = 0;
        localStorage.setItem("favorite",counter)
    };
    $("#favorite").text(counter);


    /////////////////  items carousel. /plugins/owlcarousel/
    if ($('.owl-init').length > 0) { // check if element exists

        $(".owl-init").each(function () {
            let myOwl = $(this);
            let data_items = myOwl.data('items');
            let data_nav = myOwl.data('nav');
            let data_dots = myOwl.data('dots');
            let data_margin = myOwl.data('margin');
            let data_custom_nav = myOwl.data('custom-nav');
            let id_owl = myOwl.attr('id');

            myOwl.owlCarousel({
                loop: true,
                margin: data_margin,
                nav: eval(data_nav),
                dots: eval(data_dots),
                autoplay: true,
                items: data_items,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: data_items
                    },
                    1000: {
                        items: data_items
                    }
                }
            });

            // for custom navigation
            $('.' + data_custom_nav + '.owl-custom-next').click(function () {
                $('#' + id_owl).trigger('next.owl.carousel');
            });

            $('.' + data_custom_nav + '.owl-custom-prev').click(function () {
                $('#' + id_owl).trigger('prev.owl.carousel');
            });

        }); // each end //
    } // end if
    
    mybutton = document.getElementById("back-to-top");
    window.onscroll = function() {scrollFunction()};
});


