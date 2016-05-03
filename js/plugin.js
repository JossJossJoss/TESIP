(function($){
  $.fn.placeholder = function(){
    // Ingnoramos si el navegador soporta nativamente esta funcionalidad
    if ($.fn.placeholder.supported()){
      return $(this);
    }else{

      // En el evento submit del formulario reseteamos los values de los inputs
      // cuyo value es igual al placeholder
      $(this).parent('form').submit(function(e){
        $('input[placeholder].placeholder', this).val('');
      });

      // activamos el placeholder
      $(this).each(function(){
        $.fn.placeholder.on(this);
      });

      return $(this)
        // Evento on focus
        .focus(function(){
          // Desactivamos el placeholder si vamos a introducir nuevo texto
          if ($(this).hasClass('placeholder')){
            $.fn.placeholder.off(this);
          }
        })
        // Evento on blur
        .blur(function(){
          // Activamos el placeholder si no tiene contenido
          if ($(this).val() == ''){
            $.fn.placeholder.on(this);
          }
        });
    }
  };

  // Función que detecta si el navegdor soporta el placeholder nativamente
  // Extraida de: http://diveintohtml5.org/detect.html#input-placeholder
  $.fn.placeholder.supported = function(){
    var input = document.createElement('input');
    return !!('placeholder' in input);
  };

  // Añade el contenido del placeholder en el value del input
  $.fn.placeholder.on = function(el){
    var $el = $(el);
    $el.val($el.attr('placeholder')).addClass('placeholder');
  };
  // Borra el contenido del value
  $.fn.placeholder.off = function(el){
    $(el).val('').removeClass('placeholder');
  };
})(jQuery);