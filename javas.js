var q = 1 , to=0, subigv=0, dato;
function addFila(){
    cliente = document.getElementById("cliente").value;
    cantidad = document.getElementById("cantidad").value;
    precio = document.getElementById("precio").value;
    let actual = document.getElementById("caja1").innerHTML;
    var total=parseInt(actual);

    importe = precio*cantidad;
    document.getElementById("tabla").insertRow(-1).innerHTML = "<td>" + q+ "</td><td>" + cliente + "</td><td>" + precio +"</td><td>" + cantidad +"</td><td>"+importe+"</td>";
    q++;
}