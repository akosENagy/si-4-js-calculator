function main() {
    var decimalAdded = false;

    $('.num-button').click(function() { addToDisplay(this); });

    $('.operator-button').click(function() {
        var displayValue = $('#display-scr').val();
        var last = displayValue[displayValue.length - 1];

        if (last === '+' || last === '-' || last === '*' || last === '/' || last === '.') {
            $('#display-scr').val(displayValue.substring(0, displayValue.length - 1));
        }
        addToDisplay(this);
        decimalAdded = false;
    });

    $('#eq-button').click(function () { 
        $('#display-scr').val(eval($('#display-scr').val()));
        if ($('#display-scr').val().indexOf('.') === -1) {
            decimalAdded = false;
        }
    });

    $('#clear-button').click(function() {
        $('#display-scr').val('0');
        decimalAdded = false;        
    });

    $('#float-button').click(function() {
        if (!decimalAdded) {
            addToDisplay(this);
            decimalAdded = true;
        }
    });

    $('#percent-button').click(function() {
        $('#display-scr').val(Number(eval($('#display-scr').val())) / 100);
        if ($('#display-scr').val().indexOf('.') === -1) {
            decimalAdded = false;
        }
    });
}


function addToDisplay(button) {
    if ($('#display-scr').val() === '0' && ($.inArray(button.value, ['+','-','*','/','.']) === -1)) {
        $('#display-scr').val(button.value);
    }
    else {
        $('#display-scr').val($('#display-scr').val() + button.value);
    }
}

$(document).ready(main);