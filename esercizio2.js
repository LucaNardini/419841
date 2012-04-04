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
	var a1 = SIMPLEX_GRID([[1],[1],[1]]);
	var dx = T([0])([1]);
	var su = T([1])([1]);
	var giu = T([1])([-1]);
	var sx = T([0])([-1]);
	DRAW(STRUCT([a1,su,a1,giu,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,sx,a1,sx,a1,sx,a1,su,a1, // Seconda riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1, // Terza Riga
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,sx,a1,sx,a1, // Quarta Riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,dx,a1, //Quinta Riga
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,giu,a1,sx,a1,sx,a1, //Quadratino ultimo quinta Riga
		sx,a1,sx,a1,sx,a1,su,a1,sx,a1,sx,a1,sx,a1,sx,a1,  //Sesta Riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,  //Settima Riga
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Ottava
		sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1, // Nona
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Decima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,,dx,a1,dx,a1,su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1, //Undicesima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //Dodicesima
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Tredicesima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //Quattordicesima
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1, //Quindicesima
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //Sedicesima
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,  //qua sono alla 6ultima riga
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, // qua sto alla quintultima riga
		su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1, //quartultima
		su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1, //terzultima
		su,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1, //penultima
		su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,  //ultima riga in alto
		]));
	var a2 = SIMPLEX_GRID([[20],[9]]);
	var t = T([0,1])([1,1]);
	DRAW(STRUCT([t,a2]));
	var a3 = SIMPLEX_GRID([[4],[11]]);
	var t2= T([0,1])([49,5]);
	DRAW(STRUCT([t2,a3]));
	var muro = SIMPLEX_GRID([[7.1],[0.2],[6]]);
	var t = T([0,1])([0.9,0.8]);
	var x = STRUCT([t,muro]);
	DRAW(x);
	var muro = SIMPLEX_GRID([[0.2],[21.4],[6]]); 
	var t = T([0,1])([0.9,0.8]);
	var y = STRUCT([t,muro]);
	DRAW(y);
	var muro = SIMPLEX_GRID([[8.2],[0.2],[6]]);
	var t = T([0,1])([0.9,22.2]);
	var z = STRUCT([t,muro]);
	DRAW(z);
	var muro = SIMPLEX_GRID([[0.2],[5.2],[6]]);
	var t = T([0,1])([9.1,17]);
	var k = STRUCT([t,muro]);
	DRAW(k);
	var scala = SIMPLEX_GRID([[0.375],[3],[0.875]]);
	var scala2 = SIMPLEX_GRID([[0.75],[3],[0.75]]);
	var scala3 = SIMPLEX_GRID([[1.125],[3],[0.625]]);
	var scala4 = SIMPLEX_GRID([[1.5],[3],[0.5]]);
	var scala5 = SIMPLEX_GRID([[1.875],[3],[0.425]]);
	var scala6 = SIMPLEX_GRID([[2.25],[3],[0.3]]);
	var scala7 = SIMPLEX_GRID([[2.625],[3],[0.125]]);
	var scala8 = SIMPLEX_GRID([[3],[3]]);
	var scale = STRUCT([scala,scala2,scala3,scala4,scala5,scala6,scala7,scala8]);
	var m = T([0,1])([37,1]);
	DRAW(STRUCT([m,scale]));
	var tetto = SIMPLEX_GRID([[10],[10]]);
	var z = T([0])([0,5])(tetto);
	var q = T([1])([13.2])(z);
	var m = T([2])([6])(q);

	DRAW(m);

}();