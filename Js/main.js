$('.btn').on('click', () => {
    let li = $('<li></li>');
    let text = $('<span></span>');
    let value = $('#input').val();


    text.append(value);
    li.append(text);


    if (value === '') {
        $('.warning').removeClass('hidden');
    } else {
        $('.warning').addClass('hidden');
        $('.list').append(li);
    }

    text.on('dblclick', () => text.toggleClass('strike'));

    let cross = $('<div>X</div>');
    li.append(cross);

    cross.on('click', () => li.remove());

    $('.list').sortable();
})