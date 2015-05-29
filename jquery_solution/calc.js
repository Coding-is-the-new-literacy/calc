
var Calculator = {
    init: function() {
        this.bind();
    },

    // event binding here
    bind: function() {
        $('.digit').on('click', this.addDigitToView.bind(this));
        $('#backspace').on('click', this.deleteDigitFromView.bind(this));
        $('#sin').on('click', this.calculateSin.bind(this));        
    },

    addDigitToView: function(e) {
        console.log(this);
        var display = $('#display');
        display.val(display.val() + e.currentTarget.value);
    },

    deleteDigitFromView: function(e) {
        var display = $('#display');
        display.val(display.val().slice(0,-1));
    },

    calculateSin: function(e) {
        var display = $('#display');
        display.val(Math.sin(display.val()));
    }

    


}

$(document).ready(function(){
    Calculator.init();
});