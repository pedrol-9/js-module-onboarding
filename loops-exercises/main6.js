/* ***6*** ​​​​​​​Using a "for in" loop, create a program that runs through the object created in previous exercise and only displays the values of each of the keys in the console.  */

for (const key in productoTablet) {
    if (Object.hasOwnProperty.call(productoTablet, key)) {
        const values = Object.values(productoTablet)
        console.clear()
        // console.log(properties) // imprime un array con los values del objeto
        // manera larga
        console.log(values[0])
        console.log(values[1])
        console.log(values[2])
        console.log(values[3])

        // modo pro:
        for (let index = 0; index < values.length; index++) {
            console.log(values[index])
        }
    } // todo ok
}
