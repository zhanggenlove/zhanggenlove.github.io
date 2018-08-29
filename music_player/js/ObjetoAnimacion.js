var FuncionesTiempo={Linear:function(Tiempo){return Tiempo;},SinIn:function(Tiempo){return 1-Math.cos(Tiempo*Math.PI/2);},SinOut:function(Tiempo){return Math.sin(Tiempo*Math.PI/2);},SinInOut:function(Tiempo){return-0.5*(Math.cos(Math.PI*Tiempo)-1);},CubicInOut:function(Tiempo){return(Tiempo<0.5)?4.0*Tiempo*Tiempo*Tiempo:0.5*Math.pow(2.0*Tiempo-2.0,3.0)+1.0;},CircularInOut:function(Tiempo){return(Tiempo<0.5)?0.5*(1.0-Math.sqrt(1.0-4.0*Tiempo*Tiempo)):0.5*(Math.sqrt((3.0-2.0*Tiempo)*(2.0*Tiempo-1.0))+1.0);}};var ObjetoAnimacion=function(){this.Animaciones=[];this.EnPausa=false;this.Tick=0;this.Actualizar=function(nTick){if(this.EnPausa===true){return;}
if(typeof(nTick)==='undefined'){this.Tick=Date.now();}
else{this.Tick=nTick;}
for(var i=this.Animaciones.length-1;i>-1;i--){if(this.Animaciones[i].Actualizar(this.Tick)===true){this.Animaciones.splice(i,1);}}};this.Pausa=function(){this.EnPausa=true;};this.Reanudar=function(){this.Tick=Date.now();for(var i=this.Animaciones.length-1;i>-1;i--){this.Animaciones[i]._UltimoTick=this.Tick-1;}
this.EnPausa=false;};this.Limpiar=function(){for(var i=this.Animaciones.length-1;i>-1;i--){this.Animaciones[i].Terminar();}
this.Animaciones=[];};this.CrearAnimacion=function(Pasos,Opciones){return new ObjetoAnimacion_Animacion(Pasos,Opciones,this,false);;};this.CrearTransicion=function(Pasos,Opciones){return new ObjetoAnimacion_Animacion(Pasos,Opciones,this,true);;};};var ObjetoAnimacion_Animacion=function(ArrayPasos,Opciones,Padre,nTransicion){this._Padre=Padre;this._UltimoTick=0;this._Pasos=ArrayPasos;this._PosPasos=1;this._PasoOrig=this._Pasos[this._PosPasos-1];this._PasoDest=this._Pasos[this._PosPasos];this._Avance=0;this._Invertido=nTransicion;this._Terminado=false;this._Retraso=this._PasoDest.Retraso;this._Opciones={Repetir:0,Invertir:false,FuncionActualizar:function(Valores){},FuncionTerminado:function(){}};if(typeof(Opciones)!=='undefined'){if(typeof Opciones.Repetir!=="undefined"){this._Opciones.Repetir=Opciones.Repetir;}
if(typeof Opciones.Invertir!=="undefined"){this._Opciones.Invertir=Opciones.Invertir;}
if(typeof Opciones.FuncionActualizar!=="undefined"){this._Opciones.FuncionActualizar=Opciones.FuncionActualizar;}
if(typeof Opciones.FuncionTerminado!=="undefined"){this._Opciones.FuncionTerminado=Opciones.FuncionTerminado;}}
for(var Paso in this._Pasos){if(typeof this._Pasos[Paso].Tiempo==="undefined"){this._Pasos[Paso].Tiempo=1;}
if(typeof this._Pasos[Paso].Retraso==="undefined"){this._Pasos[Paso].Retraso=0;}
if(typeof this._Pasos[Paso].FuncionTiempo==="undefined"){this._Pasos[Paso].FuncionTiempo=FuncionesTiempo.Linear;}}
for(var Indice in this._PasoOrig.Paso){this[Indice]=this._PasoOrig.Paso[Indice];}
this._Opciones.FuncionActualizar(this);this.Iniciar=function(){var AniCreada=false;for(var i=0;i<this._Padre.Animaciones.length;i++){if(this._Padre.Animaciones[i]===this){AniCreada=true;break;}}
if(AniCreada===false){this._Padre.Animaciones.push(this);this._PosPasos=1;this._PasoOrig=this._Pasos[this._PosPasos-1];this._PasoDest=this._Pasos[this._PosPasos];this._Retraso=this._PasoDest.Retraso;}
this._Terminado=false;};this.Transicion=function(){this._Invertido=!this._Invertido;var AniCreada=false;for(var i=0;i<this._Padre.Animaciones.length;i++){if(this._Padre.Animaciones[i]===this){AniCreada=true;break;}}
if(AniCreada===false){this._Padre.Animaciones.push(this);if(this._Invertido===false){this._PosPasos=1;this._PasoOrig=this._Pasos[this._PosPasos-1];this._PasoDest=this._Pasos[this._PosPasos];this._Retraso=this._PasoDest.Retraso;}
else{this._PosPasos=this._Pasos.length-1;this._PasoOrig=this._Pasos[this._PosPasos];this._PasoDest=this._Pasos[this._PosPasos-1];this._Retraso=this._PasoOrig.Retraso;}
this._Avance=0;this._UltimoTick=0;}
else{var PasoD=this._PasoDest;var PasoO=this._PasoOrig;this._PasoDest=PasoO;this._PasoOrig=PasoD;var Avance=Math.abs(this._Avance-1);this._Avance=Avance;var FuncionTiempo=this._PasoDest.FuncionTiempo(this._Avance);for(var Indice in this._PasoOrig.Paso){this[Indice]=PasoO[Indice]-(PasoO[Indice]-PasoD[Indice])*FuncionTiempo;}}
this._Terminado=false;};this.Cancelar=function(){this._Opciones.FuncionTerminado();this.Terminado=true;};this.Terminar=function(){this._Opciones.FuncionTerminado();this._Terminado=true;for(var Indice in this._Pasos[this._Pasos.length-1].Paso){this[Indice]=this._Pasos[this._Pasos.length-1].Paso[Indice];}
this._Opciones.FuncionActualizar(this);};this.Actualizar=function(t){if(this._Terminado===true){return true;}
var Ret=0;if(this._UltimoTick!==0){(this._Invertido===false)?Ret=this.ActualizarNormal(t):Ret=this.ActualizarInvertido(t);}
this._UltimoTick=t;return Ret;};this.ActualizarNormal=function(t){var TiempoFrame=t-this._UltimoTick;if(this._Retraso>0){this._Retraso=this._Retraso-TiempoFrame;}
else{this._Avance+=(TiempoFrame/this._PasoDest.Tiempo);var FuncionTiempo=this._PasoDest.FuncionTiempo(this._Avance);if(this._Avance<1&&this._Avance>-1){for(var Indice in this._PasoDest.Paso){this[Indice]=this._PasoOrig.Paso[Indice]-(this._PasoOrig.Paso[Indice]-this._PasoDest.Paso[Indice])*FuncionTiempo;}
this._Opciones.FuncionActualizar(this);}
else{for(var Indice in this._PasoDest.Paso){this[Indice]=this._PasoDest.Paso[Indice];}
this._Opciones.FuncionActualizar(this);this._PosPasos++;if(this._PosPasos<this._Pasos.length){this._PasoOrig=this._Pasos[this._PosPasos-1];this._PasoDest=this._Pasos[this._PosPasos];this._Retraso=this._PasoDest.Retraso;this._Avance=0;}
else{if(this._Opciones.Invertir===false){if(this._Opciones.Repetir===0){this._Opciones.FuncionTerminado();this._Terminado=true;}
else{this._Opciones.Repetir--;this._PosPasos=1;this._PasoOrig=this._Pasos[this._PosPasos-1];this._PasoDest=this._Pasos[this._PosPasos];this._Retraso=this._PasoDest.Retraso;this._Avance=0;}}
else{this._PosPasos=this._Pasos.length-1;this._PasoOrig=this._Pasos[this._PosPasos];this._PasoDest=this._Pasos[this._PosPasos-1];this._Retraso=this._PasoOrig.Retraso;this._Avance=0;this._Invertido=true;}}}}
return this._Terminado;};this.ActualizarInvertido=function(t){var TiempoFrame=t-this._UltimoTick;this._Avance+=(TiempoFrame/this._PasoOrig.Tiempo);var FuncionTiempo=this._PasoDest.FuncionTiempo(this._Avance);if(this._Avance<1&&this._Avance>-1){for(var Indice in this._PasoDest.Paso){this[Indice]=this._PasoOrig.Paso[Indice]-(this._PasoOrig.Paso[Indice]-this._PasoDest.Paso[Indice])*FuncionTiempo;}
this._Opciones.FuncionActualizar(this);}
else{if(this._Retraso>0){this._Retraso=this._Retraso-TiempoFrame;}
else{for(var Indice in this._PasoDest.Paso){this[Indice]=this._PasoDest.Paso[Indice];}
this._Opciones.FuncionActualizar(this);this._PosPasos--;if(this._PosPasos>0){this._PasoOrig=this._Pasos[this._PosPasos];this._PasoDest=this._Pasos[this._PosPasos-1];this._Retraso=this._PasoOrig.Retraso;this._Avance=0;}
else{if(this._Opciones.Invertir===true){this._Invertido=false;}
if(this._Opciones.Repetir===0){this._Opciones.FuncionTerminado();this._Terminado=true;}
else{this._Opciones.Repetir--;this._PosPasos=1;this._PasoOrig=this._Pasos[this._PosPasos-1];this._PasoDest=this._Pasos[this._PosPasos];this._Avance=0;this._Retraso=this._PasoOrig.Retraso;}}}}
this._UltimoTick=t;return this._Terminado;};};