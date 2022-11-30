function validar(){
    var nombre = document.getElementById('nombre').value;
    var contenido = document.getElementById('contenido').value;
    var firma = document.getElementById('firma').value;
    //var docu = document.getElementById('documento').value;

   // console.log(docu);
    //console.log(nombre + contenido + firma)//ver que los datos pasen

    var newnombre = 'name : ' + nombre;
    var newcontenido = 'msg : ' + contenido;
    
    var preHash = newnombre + newcontenido;
    console.log(preHash)

    //CryptoJS.SHA256(data).toString(CryptoJS.enc.Base64url)
    var newid = CryptoJS.SHA256(preHash)
    var newhash = newid.toString(CryptoJS.enc.Base64url);
    console.log(newid,newhash);

    if(newhash == firma){
        alert("La fimra es valida");
    }else{
        alert("La firma no es valida");
    }
}