$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Nos informe seu nome",
                    minlength: "Este campo precisa ter pelo menos 4 caracteres"
                },
                subject: {
                    required: "Informe sobre qual assunto você gostaria de conversar conosco",
                    minlength: "Este campo precisa ter pelo menos 4 caracteres"
                },
                number: {
                    required: "Nos informe seu telefone para que possamos entrar em contato com você",
                    minlength: "O telefone precisa ter 9 dígitos"
                },
                email: {
                    required: "Nos informe seu email para que possamos manter o contato com você"
                },
                message: {
                    required: "Você esqueceu de escrever sua mensagem",
                    minlength: "A mensagem precisa ter pelo menos 20 caracteres"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})