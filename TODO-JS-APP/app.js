$(document).ready(function () {
    "use strict";
    var totalNumOfTodos = 1;
    const todo_list = document.getElementById("todo_list");
    function addItem(todo) {
        totalNumOfTodos = totalNumOfTodos + 1;
        const todo_item = `<li class="mdl-list__item">
<span class="mdl-list__item-secondary-action"><button type="button" class="mdl-button mdl-js-button remove-todo mdl-button--icon"><i class="material-icons">cancel</i></button></span>
<span class="mdl-list__item-primary-content">
${todo}    </span>
    <span class="mdl-list__item-secondary-action">
      <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox"  id="checkbox-${totalNumOfTodos}" class="mdl-checkbox__input"  />
      </label>
    </span></li>`;
        $(todo_item).hide().appendTo(todo_list).fadeIn();
        componentHandler.upgradeDom();

    }
    //"load from database"
    addItem("שלמה");
    addItem("זכרון יעקב");
    addItem("טסים לחול טסים לחול");
    addItem("חזי לפלסיאן");
    addItem("רחוב הארגמן");
    var input = document.getElementById("input");
    console.log(input.value);
    // Execute a function when the user releases a key on the keyboard
    $('#input').keypress(function (event) {
        if (event.which == 13) {
            $('#add_todo_btn').click();
            return false;
        }
    });
    $("#todo_list").on('click', 'li', function () {
        var todo_text = this.querySelector('.mdl-list__item-primary-content');
        $(todo_text).toggleClass('striked');
        var checkbox = this.querySelector('.mdl-js-checkbox')
            if ($(checkbox).find("input").is(':checked')) {
                checkbox.MaterialCheckbox.uncheck();
            } else {
                checkbox.MaterialCheckbox.check();
            }

    });
    $("#todo_list").on('click', '.remove-todo', function () {
        //"send to data base"
        console.log($(this).closest('li').find('input').attr("id").split('-')[1]);
        $(this).closest("li").hide('slow', function () {
            $this.closest("li").remove();
        });

    });
    $("#add_todo_btn").click(function () {
        var input_text = document.getElementById("input");
        if (input_text.value !== "") {
            addItem(input_text.value);
            input_text.value = "";
        }
        console.log('Empty String');

    });
    $('.mdl-js-checkbox').change(function () {
        $(this).closest('li').find('.mdl-list__item-primary-content').toggleClass('striked');
    });

});
