$(function() {
  
  const labelText = $('#label-text');
  const labelValue = labelText.text();
  const inputText = $('.input_text');

  labelText.hide();
  inputText.val(labelValue);
  
  inputText.focus(function(){  
    inputText.val('');
    inputText.removeClass('hint');
  });

  inputText.blur(function(){
    if(inputText.val() === ''){
      inputText.val(labelValue);
      inputText.addClass('hint')
    }
  })
});