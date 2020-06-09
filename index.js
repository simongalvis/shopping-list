function shoppingList() {

    $('.shopping-item-toggle').on('click', event => {


    });
};

$('#js-shopping-list-form').on('submit', function(event) {

    var text = $('#shopping-list-entry').val();
    var checkedText = text.strike();
    var itemClass = $(event.currentTarget).find('span').attr('class');

    $('.shopping-list').append('<li>' +
        '<span class="shopping-item">' + text + '</span>' +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">' + "check" + '</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">' + "delete" + '</span>' +
        '</button>' +
        '</div>' +
        '</li>');


    $('#shopping-list-entry').val(' ');

    event.preventDefault();
});

$('.shopping-item-toggle').on('click', function(event) {
    $(this).closest('li').css('text-decoration', 'line-through');
});

$('.shopping-item-delete').on('click', function(event) {
    $(this).closest('li').remove();
});
