$('.btn').on('click', function () {
    let li = $('<li></li>');
    let value = $('#input').val();

    li.append(value);


    if (value === '') {
        $('.warning').removeClass('hidden');
    } else {
        $('.warning').addClass('hidden');
        $('.list').append(li);
    }
})