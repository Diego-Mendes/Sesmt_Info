function GetSesmt(){

    
    var funcs = Number(document.getElementById('funcs').value); 
    var risco = Number(document.getElementById('risco').value);
    var tec=0;
    var eng=0;
    var enf=0;
    var aux=0; 
    var med=0;

    var res = document.getElementById('res');


// if(funcs < 50 || risco < 1 || risco > 4){
//       res.innerHTML = window.alert("Valores inseridos são inválidos!")
// }


if(funcs > 5000){
    var tst = 0;
    var engt=0;
    var auxenf=0;
    var medt=0;

    funcs=funcs-5000;

    
    if(risco == 1){
        tec=2;
        eng=1;
        enf=1;
        aux=1;
        med=1;

    }else if(risco == 2){
        tec=5;
        eng=1;
        enf=1;
        aux=1;
        med=1;

 
    }else if(risco == 3){
        tec=8;
        eng=2;
        enf=1;
        aux=1;
        med=2;

 
    }else if(risco == 4){
        tec=10;
        eng=3;
        enf=1;
        aux=1;
        med=3;


    }

    do{
        if(risco == 1){
          tec = tec+1;
         eng=eng+1;
          aux=aux+1;
         med=med+1;

            funcs = funcs - 4000;
        }

             else if(risco == 2){

            tec=tec+1;
            eng=eng+1;
            aux=aux+1;
            med=med+1;

            funcs = funcs - 4000;

        }else if(risco == 3){
 
            tec=tec+3;
            eng=eng+1;
            aux=aux+1;
            med=med+1;

            funcs = funcs - 4000;

        }else if(risco == 4){

            tec=tec+3;
            eng=eng+1;
            aux=aux+1;
            med=med+1;

            funcs = funcs - 4000;

        }
    }while(funcs > 2000)
    
        
    
    funcs=0;
}



//Grau de risco 1 --------------------------------------------------
if(risco ==1){

if(funcs <= 100 && funcs >= 50){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 205 && funcs > 100){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 500  && funcs > 205){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 1000 && funcs > 500){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 2000 && funcs > 1000){
tec=1;
eng=0;
enf=0;
aux=0;
med=1;



}else if(funcs <= 3500 && funcs > 2000){
tec=1;
eng=1;
enf=0;
aux=1;
med=1;



}else if(funcs <= 5000 && funcs > 3500){
tec=2;
eng=1;
enf=1;
aux=1;
med=1;



}


}
//Grau de risco 2-------------------------------------------

if(risco == 2){


if(funcs <= 100 && funcs >= 50){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 205 && funcs > 100){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 500  && funcs > 205){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 1000 && funcs > 500){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 2000 && funcs > 1000){
tec=1;
eng=1;
enf=0;
aux=1;
med=1;



}else if(funcs <= 3500 && funcs > 2000){
tec=2;
eng=1;
enf=0;
aux=1;
med=1;



}else if(funcs <= 5000 && funcs > 3500){
tec=5;
eng=1;
enf=1;
aux=1;
med=1;



}
}

//Grau de risco 3--------------------------------------------

if(risco == 3){


if(funcs <= 100 && funcs >= 50){
tec=0;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 205 && funcs > 100){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 500  && funcs > 205){
tec=2;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 1000 && funcs > 500){
tec=3;
eng=1;
enf=0;
aux=0;
med=1;



}else if(funcs <= 2000 && funcs > 1000){
tec=4;
eng=1;
enf=0;
aux=1;
med=1;



}else if(funcs <= 3500 && funcs > 2000){
tec=6;
eng=1;
enf=0;
aux=2;
med=1;



}else if(funcs <= 5000 && funcs > 3500){
tec=8;
eng=2;
enf=1;
aux=1;
med=2;



}
}

//Grau de risco 4---------------------------------------------------

if(risco == 4){


if(funcs <= 100 && funcs >= 50){
tec=1;
eng=0;
enf=0;
aux=0;
med=0;



}else if(funcs <= 205 && funcs > 100){
tec=2;
eng=1;
enf=0;
aux=0;
med=1;



}else if(funcs <= 500  && funcs > 205){
tec=3;
eng=1;
enf=0;
aux=0;
med=1;



}else if(funcs <= 1000 && funcs > 500){
tec=4;
eng=1;
enf=0;
aux=1;
med=1;



}else if(funcs <= 2000 && funcs > 1000){
tec=5;
eng=1;
enf=0;
aux=1;
med=1;



}else if(funcs <= 3500 && funcs > 2000){
tec=8;
eng=2;
enf=0;
aux=2;
med=2;



}else if(funcs <= 5000 && funcs > 3500){
tec=10;
eng=3;
enf=1;
aux=1;
med=3;



}
}

res.innerHTML += `<p>Técnicos de Segurança: ${tec}</p> <p>Engenheiro de Segurança: ${eng}</p> <p>Enfermeiro do Trabalho: ${enf}</p> <p>Auxiliar de Enfermagem: ${aux}</p> <p>Médico do Trabalho: ${med}</p>`;

}

function EsconderMostrar(id){
    let divResultado = document.getElementById('resultado')
    let form = document.getElementById('form')
    let resElements = document.getElementById('res')
    let btnVoltar = document.getElementById('voltar')
    let funcs = Number(document.getElementById('funcs').value) 
    let risco = Number(document.getElementById('risco').value)

    if(id == 'calcular' ){
        let tipoFuncs =  typeof funcs 
        
        if(funcs < 50 || risco < 1 || risco > 4 || funcs == "" || risco == ""){
        alert("Valores inseridos são inválidos")
     }
     else{    
     divResultado.style.display = 'block'
     form.style.display = 'none'
     btnVoltar.style.display = 'block'
     
     resElements.innerHTML = ""
     
     GetSesmt()
    }
    
     

    }
    else if(id == 'voltar'){
        
        divResultado.style.display = 'none'
        form.style.display = 'block'
        btnVoltar.style.display = 'none'
    }
    
}
