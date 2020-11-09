/*
En esta consulta he usado el $eq, e intento buscar aquellas palas de las que quede un stock igual a 30 unidades.

> db.palas.find( { stock: { $eq: 30 } } )  
{ "_id" : ObjectId("5fa940c80564b2f2030c982d"), "marca" : "babolat", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 30, "peso" : { "m" : 250, "h" : 310 } }
> 
*/

/*
En esta consulta he usado el $gt, e intento buscar aquellas palas de las que quede un stock superior a 25 unidades.

> db.palas.find( { stock: { $gt: 25 } } )  
{ "_id" : ObjectId("5fa940c80564b2f2030c982d"), "marca" : "babolat", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 30, "peso" : { "m" : 250, "h" : 310 } }
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }       
{ "_id" : ObjectId("5fa940c80564b2f2030c9831"), "marca" : "bullpadel", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 45, "peso" : { "m" : 280, "h" : 345 } } 
>
*/

/*
En esta consulta he usado el $gte, e intento buscar aquellas palas de las que quede un stock mayor o igual a 19 unidades.


> db.palas.find( { stock: { $gte: 19 } } )  
{ "_id" : ObjectId("5fa940c80564b2f2030c982d"), "marca" : "babolat", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 30, "peso" : { "m" : 250, "h" : 310 } }   
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }      
{ "_id" : ObjectId("5fa940c80564b2f2030c9831"), "marca" : "bullpadel", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 45, "peso" : { "m" : 280, "h" : 345 } } 
>
*/


/*
En esta consulta he usado el $in, e intento buscar aquellas palas de las que haya talla pequeña.


> db.palas.find( { talla: { $in: [ "P" ] } } )    
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }       
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}
>
*/

/*
En esta consulta he usado el $lt, e intento buscar aquellas palas en las que el stock sea menor que 25 unidades.

> db.palas.find( { stock: { $lt: 25 } } )  
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }
>
*/

/*
En esta consulta he usado el $lte, e intento buscar aquellas palas de las que quede un stock igual o menor a 30 unidades. 

> db.palas.find( { stock: { $lte: 30 } } )  
{ "_id" : ObjectId("5fa940c80564b2f2030c982d"), "marca" : "babolat", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 30, "peso" : { "m" : 250, "h" : 310 } }   
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }
>
*/

/*
En esta consulta he usado el $ne, e intento buscar aquellas palas de las que quede un stock diferente a 19 unidades.

> db.palas.find( { stock: { $ne: 19 } } )  
{ "_id" : ObjectId("5fa940c80564b2f2030c982d"), "marca" : "babolat", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 30, "peso" : { "m" : 250, "h" : 310 } }   
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}
{ "_id" : ObjectId("5fa940c80564b2f2030c9831"), "marca" : "bullpadel", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 45, "peso" : { "m" : 280, "h" : 345 } } 
> 
*/


/*
En esta consulta he usado el $nin, e intento buscar aquellas palas de las que no haya talla pequeña.

> db.palas.find( { talla: { $nin: [ "P" ] } } )    
{ "_id" : ObjectId("5fa940c80564b2f2030c982d"), "marca" : "babolat", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 30, "peso" : { "m" : 250, "h" : 310 } }   
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }      
{ "_id" : ObjectId("5fa940c80564b2f2030c9831"), "marca" : "bullpadel", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 45, "peso" : { "m" : 280, "h" : 345 } }
>
*/

/*
En esta consulta he usado el $and, e intento buscar aquellas palas de las que no hay un stock igual a 12 y sea de tipo redonda.

> db.palas.find( { $and: [ { stock: { $ne: 12 } }, { tipo: { $eq: "redonda" } } ] } ) 
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }       
> 
*/

/*
En esta consulta he usado el $not, e intento buscar las palas en las que el stock no sea mayor que 37 unidades.

> db.palas.find( { stock: { $not: { $gt: 37 } } } )      
{ "_id" : ObjectId("5fa940c80564b2f2030c982d"), "marca" : "babolat", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 30, "peso" : { "m" : 250, "h" : 310 } }   
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }       
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }      
>
*/

/*
En esta consulta he usado el $nor, e intento buscar aquellas palas que no tengan stock igual a 37 o sean de la marca babolat.
> db.palas.find( { $nor: [ { marca: "babolat" }, { stock: 37  } ]  } )
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }      
{ "_id" : ObjectId("5fa940c80564b2f2030c9831"), "marca" : "bullpadel", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 45, "peso" : { "m" : 280, "h" : 345 } }
>
*/

/*
En esta consulta he usado el $or, e intento buscar las palas que o bien hay menos de 20 en stock o bien son de tipo redondo.

> db.palas.find( { $or: [ { stock: { $lt: 20 } }, { tipo: "redonda" } ] } ) 
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }       
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }      
>

*/

/*
En esta consulta he usado el $regex, y busco en un hipotético caso de que no me acordase del nombre de la marca pero
 recuerdo que llevaba ..ea.. se usaría este operador.

>  db.palas.find( { marca: {$regex: /ea/}})
{ "_id" : ObjectId("5fa940c80564b2f2030c9830"), "marca" : "head", "tipo" : "lagrima", "talla" : [ "M", "G" ], "stock" : 19, "peso" : { "m" : 245, "h" : 300 } }

*/

/*
Aqui vuelvo a usar el $regex para que me quede claro como usarlo.
Ahora estoy en otro hipotético caso en el que no se si en tipo, se ha escrito masculino (redondo) o femenino (redonda). 
Me va a devolver todo ya que he usado el operador y no he puesto la ultima vocal.

> db.palas.find( { tipo: {$regex: /redond/}})
{ "_id" : ObjectId("5fa940c80564b2f2030c982e"), "marca" : "nox", "tipo" : "redonda", "talla" : [ "P", "G" ], "stock" : 37, "peso" : { "m" : 260, "h" : 325 } }       
{ "_id" : ObjectId("5fa940c80564b2f2030c982f"), "marca" : "adidas", "tipo" : "redonda", "talla" : [ "P", "M", "G" ], "stock" : 12, "peso" : { "m" : 210, "h" : 297 } 
}

*/