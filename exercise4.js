var drawSgabello = function(scale){
	var gambe = SIMPLEX_GRID([[0.05,-0.2, 0.05],[0.05,-0.2, 0.05],[0.5]]);
	var temp_sedia = SIMPLEX_GRID([[0.3],[0.3],[0.1]]);
	var sedia = T([2])([0.50001])(temp_sedia);
DRAW(STRUCT([gambe,sedia]));
}();