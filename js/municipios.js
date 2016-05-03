function municipio(){
var url="municipio.php";
var estado= $F("estado");
var parametros="estado="+estado;
var ajax=new Ajax.Updater('respMunicipio',url,{parameters:parametros,method:"post"});
}

function idiomas(){
var url="idioma.php";
var idioma= $F("idioma");
var parametros="idioma="+idioma;
var ajax=new Ajax.Updater('respIdioma',url,{parameters:parametros,method:"post"});
}
