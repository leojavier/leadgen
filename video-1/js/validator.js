var App = {
    Regex: {
        alphaNumeric: /^[A-Z,a-z,0-9, -_]+$/,
        string: /^[A-Z,a-z ,.'-]+$/,
        email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        phone: /^[0-9]{10,15}/,
        required: '',
        username: /^([a-zA-Z0-9_-]){6,20}/,
        password: /^([a-zA-Z0-9_!@#$%^&*-]){8,12}/
    },
    Validate: function (field,data,dataType) {
        switch (dataType) {
            case 'string':
                if (!data.match(App.Regex.string)) {

                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                break;
               
            case 'alpha':
                if (!data.match(App.Regex.alphaNumeric)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                break;
            case 'email':
                if (!data.match(App.Regex.email)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                break;
            case 'phone':
                 if(data.length > 0) {
                    if (!data.match(App.Regex.phone)) {
                        $(field).addClass('required');
                    } else {
                        $(field).removeClass('required');
                    }
                } else{
                    $(field).removeClass('required');
                }
                break;
            case 'username':
                if (!data.match(App.Regex.username)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                break;
            case 'password':
                if (!data.match(App.Regex.password)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                break;
            case 'passwordConfirmation':
                if (data != $('#RegisterPassword').val()) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                break;
                
        }
    }
}

$(document).ready(function () { 
    $('input[data-type]').keyup(function (e) {
        App.Validate($(e.target), $(e.target).val(), $(e.target).data('type'));
    });
    $('#mktoForm_1128').on('keypress', function (e) {
        if (e.which == 32)
            return false;
    });
});


