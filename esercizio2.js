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
		dx,a1,dx,a1,dx,a1,dx,a1,sx,a1,sx,a1,sx,a1,su,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,su,a1,giu,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,su,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,su,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,,dx,a1,su,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,su,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,sx,a1,
		sx,a1,su,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,
		dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1,dx,a1
		]));
}();