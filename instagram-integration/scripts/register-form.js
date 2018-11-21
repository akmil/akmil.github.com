/* register-form.js*/
(function($) {
  var CONST = {
    url: {
      base: 'http://104.248.46.68:8080/api/v1',
      registration: '/registration/basic/'
    }  
  };
  var regUrl = CONST.url.base + CONST.url.registration;

  var $form = $('#js_form'),				
    $email = $form.find('#email'),
    $btn = $('#js_feedback_btn'),
    // errorDescriptionID = 'some-error',
    cssValidationClass = 'form-validation';

  // function resetForm() {
  //   $btn.removeAttr('disabled');
  //   $form.find('textarea').val('');
  //   $form.find('input').each(function() {
  //       var $self = $(this);

  //       if($self.attr('name')) {
  //           $self.val('');
  //         }
  //     });

  //     // Clear highlight
  //   $form.removeClass(cssValidationClass);
  // }
  function showMsgError(id, charCount) {
    console.log(id, charCount);
  }

  function submitForm(e) {
    var $textAreaDescription = $('#description'),
      email = $form.find("input[name='mail']").val(),
      password = $form.find("input[name='pass']").val(),
      formData = {'email': email, 'password': password};
          
    var sendRequest = function (formData) {
      console.log('sending', regUrl, formData);

      $.ajax({
        method: "POST",
        url: regUrl,
        data: {email: "pas@h.com", password: "pass"},
        contentType: 'application/json'
      })
        .done(function(data) {
          console.log('succsess', data);
          $textAreaDescription.text('succsess');
          showMsgError(data);
        }).fail(function(jqXHR, textStatus) {
          console.log("Request failed: " + textStatus);
        }).catch(function(jqXHR, textStatus) {
          console.log("catch Request failed: " + textStatus);
        });
    };

    $email.val($email.val().toLocaleLowerCase());

    sendRequest(formData);
  }

  // EVENTS
  $btn.on('click', function(e) {
    var form = $form.get(0);

    if(!$btn.is(':disabled')) {
      if(form.checkValidity()) {
        // $btn.attr('disabled', true);
        submitForm(e);
      }else{
              // Highlight errors
        if(form.reportValidity) form.reportValidity();
        $form.addClass(cssValidationClass);
      }
    }
  });

  // function clearBody(delay) {
  //   setTimeout(function() {
  //     $('body').removeAttr('style');
  //     $("#" + errorDescriptionID).remove();
  //   }, delay);
  // }

})(jQuery);
