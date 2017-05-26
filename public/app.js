//alert('Good bey');
document.getElementById("button").addEventListener('click', function () {
    $.ajax({
        method: 'GET',
        url: '/scream',
        success: function (response) {
            $('#highlight').text(response);
        }
    });
});

setInterval(function(){
    $.ajax({
        method: 'GET',
        url: '/now',
        success: function(response){
            $('#id').text(response);
        }
    });
}, 1000);
