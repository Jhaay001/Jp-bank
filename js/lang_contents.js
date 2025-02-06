var usrlang = (window.navigator.language) ? window.navigator.language : window.navigator.userLanguage;

if(usrlang.toLowerCase().indexOf('ja') !== -1){
  $(function() {
  $('#section_important2_en').css('display', 'none');
  $('#account_lang-en').css('display', 'none');
  });
}
else{
  $(function() {
  $('#section_important2_en').css('display', 'block');
  $('#account_lang-ja').css('display', 'none');
  });
}