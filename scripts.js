document.addEventListener('DOMContentLoaded', function () {
  var phoneInput = document.getElementById('exampleInputPhone');
  var im = new Inputmask({
    mask: '+38 (099) 999-99-99',
  });
  im.mask(phoneInput);
});
