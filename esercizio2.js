var creaRiga3d = function(n){
var t = T([0])([1]);	
var a1 = SIMPLEX_GRID([[1],[1],[0.5]]);
var k = [a1];
if(n!=1){
for(var i = 0; i < n; i++){
k.push(t);
k.push(a1);	
}
DRAW(STRUCT([k[0],k[1],k[2]]));
}
else{DRAW(a1);}
}




//Versione un pò terra terra
var BPavilion = function(){
	var a1 = SIMPLEX_GRID([[1],[1],[0.5]]);
	var dx = T([0])([1]);
	var su = T([1])([1]);
	var giu = T([1])([-1]);
	var sx = T([0])([-1]);
	DRAW(STRUCT([a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,sx,a1,sx,a1,sx,a1,su,a1, // Seconda riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1, // Terza Riga
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,sx,a1,sx,a1, // Quarta Riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,dx,a1, //Quinta Riga
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,su,a1,giu,a1,sx,a1,sx,a1, //Quadratino ultimo quinta Riga
		sx,a1,sx,a1,sx,a1,su,a1,sx,a1,sx,a1,sx,a1,sx,a1,  //Sesta Riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,  //Settima Riga
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Ottava
		sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1, // Nona
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Decima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,,dx,a1,su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1, //Undicesima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //Dodicesima
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Tredicesima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //Quattordicesima
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Quindicesima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //Sedicesima
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,  //qua sono alla 6ultima riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1, 
		su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,,dx,a1, // qua sto alla quintultima riga
		su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1, //quartultima
		su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //terzultima
		su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1, //penultima
		su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1  //ultima riga in alto
		]));
	var a2 = SIMPLEX_GRID([[20],[9]]);
	var t = T([0,1])([2,1]);
	DRAW(STRUCT([t,a2]));
	var a3 = SIMPLEX_GRID([[4],[11]]);
	var t2= T([0,1])([49,5]);
	DRAW(STRUCT([t2,a3]));

	
}();