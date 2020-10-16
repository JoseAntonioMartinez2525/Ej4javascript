
var valores =[true, 5, false, "hola", "adios", 2];
	if (valores[3]> valores[4]) {
		alert('El elemento del texto mayor es '+valores[3]);

	}else{
		alert('El elemento del texto mayor es '+valores[4]);
	}
	alert('Para que de true es '+(valores[0]||valores[2]));
		alert('Para que de false es '+(valores[0]&&valores[2]));

	//operaciones
	alert('suma: '+(valores[1]+valores[5]));
	alert('resta: '+(valores[1]-valores[5]));
	alert('multiplicacion: '+(valores[1]*valores[5]));	
	alert('division: '+(valores[1]/valores[5]));	