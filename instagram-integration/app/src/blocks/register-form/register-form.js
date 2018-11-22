/* register-form.js*/
(function($) {
  var CONST = {
    url: {
      base: 'http://104.248.46.68:8080/api/v1',
      registration: '/registration/basic/',
      login: '/registration/basic/login'
    }  
  };
  var regUrl = CONST.url.base + CONST.url.registration;
  var loginUrl = CONST.url.base + CONST.url.login;

  var $form = $('#js_form'),				
    $email = $form.find('#email'),
    $btn = $('#js_feedback_btn'),
    cssValidationClass = 'form-validation';

  function showMsgError(id, charCount) {
    console.log(id, charCount);
  }

  function saveToken(token) {
    CONST.user = {'email': email, 'password': password, 'token': token};
  }

  function submitForm(e, formDataObj, url) {
    var $textAreaDescription = $('#description'),
      email = $form.find("input[name='mail']").val(),
      password = $form.find("input[name='pass']").val(),
      formData = formDataObj || {'email': email, 'password': password};
          
    var sendRequest = function (formData) {
      console.log('sending', regUrl, formData);

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((result) => result.json())
        .then((result) => {
          console.log(result);
          $textAreaDescription.text('succsess, status' + result.status.state);
          $('.login-box').show();

          // todo: delete me
          if (!formDataObj) {
            showMsgError(result.data);
            formData.token = token;
            saveToken(formData);
          }
        });
    };

    e.preventDefault();

    $email.val($email.val().toLocaleLowerCase());

    sendRequest(formData);
  }

  // EVENTS
  $('.login').on('click', function(e) {
    submitForm(e, CONST.user, loginUrl);
  });
  $btn.on('click', function(e) {
    var form = $form.get(0);

    if(!$btn.is(':disabled')) {
      if(form.checkValidity()) {
        // $btn.attr('disabled', true);
        submitForm(e, null, regUrl);
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
