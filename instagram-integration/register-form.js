/*register-form.js*/
(function($){
  var CONST = {
    url: {
      base:'https://104.248.46.68:8080/api/v1',
      registration: '/registration/basic/'
    },  
  };
var regUrl = CONST.url.base + CONST.url.registration

  var $form = $('#js_form'),				
      $email = $form.find('#email'),
      $btn = $('#js_feedback_btn'),
      errorDescriptionID = 'some-error',
      cssValidationClass = 'form-validation';

  function resetForm(){
      $btn.removeAttr('disabled');
      $form.find('textarea').val('');
      $form.find('input').each(function(){
          var $self = $(this);
          if($self.attr('name')){
              $self.val('');
          }
      });

      // Clear highlight
      $form.removeClass(cssValidationClass);
  }
  function showMsgError(id, charCount){
      console.log(id, charCount);
  }

  function submitForm(){
      var $textAreaDescription = $('#description'),
        // formData = $form.serialize(),
          email = $form.find( "input[name='mail']" ).val(),
          password = $form.find( "input[name='pass']" ).val(),
          formData = {'email': email, 'password': password};
          
        sendRequest = function (formData) {
          console.log('sending', regUrl , formData);
          
          var posting = $.post( regUrl, formData  );

          // Put the results in a div
          posting.done(function( data ) {
            console.log('succsess');
          });
          // $.ajax({
          // 	// dataType: 'jsonp',
          // type: "POST",
          // 	url: regUrl,
          // 	data: {formData}
          // }).done(function() {
          // console.log('succsess');
          // 	// Show message
          // });
        };

      $email.val($email.val().toLocaleLowerCase());

      sendRequest(formData);
  }

  // EVENTS
  $btn.on('click', function(){
      var form = $form.get(0);
      if(!$btn.is(':disabled')){
          if(form.checkValidity()) {
              $btn.attr('disabled', true);
              submitForm();
          }else{
              // Highlight errors
              if(form.reportValidity) form.reportValidity();
              $form.addClass(cssValidationClass);
          }
      }
  });

  function clearBody(delay) {
      setTimeout(function(){
          $('body').removeAttr('style');
          $("#"+errorDescriptionID).remove();
      },delay);
  }

})(jQuery);