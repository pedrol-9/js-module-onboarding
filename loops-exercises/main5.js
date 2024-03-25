/* ***5*** Using a "for in" loop, create an object with at least 5 properties, make a program that cycles through said object and only shows all the keys of its properties in the console.

In the console it should look like this: name, lastName, origin, studies */
const productoTablet = {
    referencia: "ASD8616",
    precio: 800,
    garantia: true,
    marca: "China",
}

for (const key in productoTablet) {
    if (Object.hasOwnProperty.call(productoTablet, key)) {
        const properties = Object.keys(productoTablet)
        console.clear()
        // console.log(properties) // imprime un array con las propiedades del objeto
        // manera larga
        console.log(properties[0])
        console.log(properties[1])
        console.log(properties[2])
        console.log(properties[3])

        // modo pro:
        for (let index = 0; index < properties.length; index++) {
            console.log(properties[index])
        }
    }
}  // output ok

/* DUDA EXISTENCIAL: por qué, si con el Object.hasOwnProperty.call(productoTablet, key) estoy literal dándole el comando de llamar keys, me retorna los values y no las keys? */