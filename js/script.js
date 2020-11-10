function show(t){
    //obtener el que tiene la clase selected
    let currentSelection = document.getElementById('selected');
    //elimino la clase selected
    if(currentSelection != undefined){
        currentSelection.removeAttribute('id');
        //ocultar el p hijo
        let currentAnswer = currentSelection.getElementsByTagName('div')[0];
        currentAnswer.style.display = 'none';
    }
    //obtener el div padre 
    let newSelection = t.parentNode;
    //agregarle la clase selected
    newSelection.setAttribute('id','selected');
    //mostrar el p hijo
    let answer = newSelection.getElementsByTagName('div')[0];
    answer.style.display = 'block';

}