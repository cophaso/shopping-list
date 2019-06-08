$( function() {
    $('form').submit(function(event){
        event.preventDefault();
        let entry = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${entry}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
            </li>`
        )
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event){ 
        $(this).closest('li').remove();
    });
})