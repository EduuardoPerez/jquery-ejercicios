$(function() {
  
  const label = $('#label-text');
  const labelText = label.text();
  const inputText = $('.input_text');

  label.hide();
  inputText.val(labelText);
  
  inputText.focus(function(){  
    inputText.val('');
    inputText.removeClass('hint');
  });

  inputText.blur(function(){
    if(inputText.val() === ''){
      inputText.val(labelText);
      inputText.addClass('hint')
    }
  })
});