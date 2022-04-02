const content = [
    {
        id: 1,
        title: 'Funciones',
        data: [{
            text: ['Forma tradicional'],
            code: `
    const getUser = () => {
        return {
            id: 'ABC123',
            username : 'Patito'
        }
    }
              `
        },
        {
            text: ['Si queremos retornar directamente el objeto probablemente nos generaría un error, porque JS ve al objeto como el cuerpo de la función'],
            code: `
    const getUser2 = () => 
    {
        id: 'ABC123',
        username : 'Patito'
    }`
        },
        {
            text: ['A fin de arreglar el error, usamos los paréntesis'],
            code: `
    const getUser3 = () => ({
        id: 'ABC123',
        username : 'Patito'
    })`
        }
        ]
    },
    {
        id: 2,
        title: 'Desestructuración de objetos',
        data: [{
            text: ['Dado el siguiente objeto y variable, podemos acceder a sus propiedades mediante "dot notation"'],
            code: `
    const persona = {
        nombre : 'Tony',
        edad : 45,
        clave: 'Iroman',
        };
        
    const nombre = 'Elvis'
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona.clave);
                `
        },
        {
            text: ['Sin embargo podemos desestructurar el objeto de la siguiente manera (no importa el orden), incluso de ser necesario, asignándole el valor de la propiedad a otra cosntante:'],
            code: `
    const {nombre:heroe, edad, clave} = persona;

    console.log(nombre); // Elvis
    console.log(heroe); // Tony
    console.log(edad, clave); // 45 Iroman
            `
        },
        {
            text: ['Creamos un función que recibe un objeto por parámetro y que al ser ejecutada retorna todo el objeto y sus propiedades'],
            code: `
    const retornaPersona = (persona) => {
        return console.log(persona);
        }

    retornaPersona();
            `
        },
        {
            text: ['Podemos crear una función que internamente desestruture el objeto y muestre por consola las propiedades por separado'],
            code: `
    const retornaPersona = (persona) => {
        const {nombre:heroe, edad, clave} = persona;
        console.log(heroe, edad, clave);
        }
    
    retornaPersona(persona)
            `
        },
        {
            text: ['Podemos pasar a la función un objeto y desestructurar en los parámetros sus propiedades'],
            code: `
    const retornaPersona = ({nombre, edad}) => {
        console.log(nombre, edad)
        }
    
    retornaPersona(persona)
            `
        },
        {
            text: ['Podemos agregar valores por defecto en los parámetros en el caso que en el objeto no se encuentre la propiedad'],
            code: `
    const retornaPersona = ({nombre, edad, rango = 'capitán'}) => {
        console.log(nombre, edad, rango)
        }
    
    retornaPersona(persona);
            `
        },
        {
            text: ['Podemos crear una función que recibe un objeto desectructurado y retorna un nuevo objeto con los datos obtenidos.', 'De esta manera podemos desestructurar el objeto retornado con los datos del objeto recibido'],
            code: `
    const use_Context = ({ edad, clave, rango= "soldado"}) => (
        {
            nombreClave : clave,
            anios : edad,
            latlong : {
                lat : 14.223,
                lng: -12.234
            },
            rango
        }
    )
    const avenger = useContext(persona);
    
    console.log(avenger);

    const {nombreClave, anios, latlong:{lat,lng}} = use_Context(persona);

    console.log(nombreClave, anios);
    console.log(lat, lng);
            `
        },
        ]
    },
    {
        id: 3,
        title: 'Desestructuración de arreglos',
        data: [{
            text: ['Dado el siguiente arreglo mostramos los valores por consola"'],
            code: `
    const heroes = ['Batman', 'Robin', 'Superman'];

    console.log(heroes[0]);
    console.log(heroes[1]);
    console.log(heroes[2]);
                `
        },
        {
            text: ['Aplico desestructuración al arrreglo. El orden, a diferencia de la desestructuracioń de objetos, es importante!'],
            code: `
    const [heroe1,heroe2,heroe3] = personajes;

    console.log(heroe1);
    console.log(heroe2); 
    console.log(heroe3);
            `
        },
        {
            text: ['Creamos una función que retorna un arreglo y lo mostramos por consola'],
            code: `
    const retornaArreglo = () => {
        return ['ABC', 123]
        }
        
    console.log(retornaArreglo()); //retorna ['ABC',123]
            `
        },
        {
            text: ['Desestructuro el arreglo que me retorna la función:'],
            code: `
    const [letras, numeros] = retornaArreglo();

    console.log(letras); //retorna ABC
    console.log(numeros); //retorna 123
            `
        },
        {
            text: ['Creamos una función que recibe un valor y retorna un array con dos posiciones: la primera es el valor y la segunda muestra por consola un mensaje:'],
            code: `
    const use_State = (valor) => {
        return [valor, () => console.log('Hola Mundo')];
        }
            `
        },
        {
            text: ['Guardamos en una variable lo que retorna la función y mostramos por consola'],
            code: `
    const use_State = (valor) => {
        return [valor, () => console.log('Hola Mundo')];
        }

    const array = use_State('Goku');

    console.log(array); // ["Goku",function];
            `
        },
        {
            text: ['Podemos acceder a las posiciones del array y mostrarlas por consola'],
            code: `

    const use_State = (valor) => {
        return [valor, () => console.log('Hola Mundo')];
        }

    const array = use_State('Goku');

    console.log(array[0]) //retorna Goku
    
    array[1]() //retorna "Hola Mundo"
            `
        },
        {
            text: ['Podemos aplicar desestructuración al array que devuelve la función', 'De manera que podemos acceder de forma mas clara, particularmente a la función que ocupa la posición 1 del array'],
            code: `

    const use_State = (valor) => {
        return [valor, () => console.log('Hola Mundo')];
        }

    const [nombre, setNombre] = use_State('Batman');
    console.log(nombre); //retorna Batman
    setNombre(); //retorna "Hola Mundo"
            `
        },
        ]
    },
    {
        id: 4,
        title: 'Import & export',
        data: [{
            text: ['Creamos el siguiente arreglo de objetos', 'Podemos exportar de dos maneras diferentes: 1) individual, o 2) por defecto'],
            code: `
    const heroes = [
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        },
    ];

    //exportación individual
    export const owners = ['DC', 'Marvel'];

    //exportación por defecto
    export default heroes; 
                `
        },
        {
            text: ['Si la exportación es por defecto, podemos luego importarla con cualquier nombre.', 'En cambio para importar lo que fue exportado de forma individual siempre debemos respetar el nombre de la constante/variable que se haya exportado.'],
            code: `
    import heroes, {owners} from "../data/heroes";

    console.log(heroes);
    console.log(owners);
            `
        },
        {
            text: ['Podemos exportar funciones'],
            code: `
    
    import heroes from "./heroes";

    export const getHeroesById = id => heroes.find(heroe => heroe.id === id);
    export const getHeroeByOwner = owner => heroes.filter(heroe => heroe.owner === owner);
            `
        },
        {
            text: ['Luego las importamos y vemos el resultado por por consola'],
            code: `
    import {getHeroesById} from './functions';

    //devuelve el héroe que machee con el id
    console.log(getHeroesById(4)); 

    //devuelve el array de owners 
    console.log(getHeroeByOwner('Marvel')); 
            `
        },
        ]
    },
    {
        id: 5,
        title: 'Promesas',
        data: [{
            text: ['Creamos una instancia del objeto Promise y la guardamos en el constante promesa. Esta recibe un ejecutor (un callback) con dos argumentos: resolve y reject.', 'Programo para que luego de dos segundos se ejecutará el método resolve', 'Por medio del método .then() aplicado a la promesa, se mostrará por consola el mensaje cuando se haya ejecutado el resolve()'],
            code: `
    const promesa = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    }); 
    
    promesa.then( () => {
        console.log('then de la promesa!!') //se mostrará cuando se ha ejecutado el resolve()
    }) 
                `
        },
        {
            text: ['Importamos la función que nos permite traer un héroe por su id', 'Guardamos en una constante el héroe que retorna la función', 'Paso la constante como argumento del método resolve()', 'Por medio del método then(), aplicado a la promesa se mostrará por consola el héroe'],
            code: `
    import {getHeroesById} from './functions'; 

    const promesa = new Promise( (resolve, reject) => {
        setTimeout(() => {
        const heroe = getHeroesById(4)
        resolve(heroe);
        }, 2000);
    }); 
    
    promesa.then( (heroe) => {
        console.log('héroe',heroe);
    })
            `
        },
        {
            text: ['Utilización de reject()', 'Programamos para que luego de dos segundos se ejecute el reject(), pasándole por parámetro un mensaje que será manejado con el método catch()'],
            code: `
    
    const promesa = new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(4)
            reject('no se pudo encontrar el héroe');
        }, 2000);
        }); 
        
        promesa.then( (heroe) => {

        //no devuelve nada, dado que la promesa devolvió un reject
        console.log('héroe',heroe)
        })

        //muestra una advertencia por consola con el texto que viene en el reject()
        .catch(error => console.warn(error))
            `
        },
        {
            text: ['Creamos una función que recibe un id y devolverá un héroe o un mensaje de error si no lo encuentra'],
            code: `
    const getHeroesByIdAsync = id => {

        return new Promise( (resolve, reject) => {
            setTimeout(() => {
            const heroe = getHeroesById(id)
            if(heroe){
                resolve(heroe); 
            }else{
                reject('Heroe no encontrado!')
            }
            }, 2000);
        }); 
        }
        
        //se mostrará el héroe que machee con el id
        getHeroesByIdAsync(5)
        .then(heroe => console.log('Heroe', heroe))
        .catch(error => console.warn(error))
        
        //se mostrará la advertencia que lanza el catch
        getHeroesByIdAsync(50)
        .then(console.log)
        .catch(console.warn) 
            `
        },
        ]
    },
    {
        id: 6,
        title: 'Fetch',
        data: [{
            text: ['Hacemos un pedido con fetch a la API Giphy', 'Cuando la promesa de cumple retorna una respuesta', 'Retornamos la respuesta parseada con el método json()', 'Cuando el método json() termina de parsear podemos trabajar con la data obtenida', 'En el caso de rechazo de la promesa me mostrará un mensaje de error'],
            code: `

    //apiKey generada por la API
    const apiKey = '';

    const peticion = fetch("https://api.giphy.com/v1/gifs/random?api_key=" + apiKey)
    
    peticion
        .then(response => {
        return response.json()
        })
        .then(data => { 
        console.log(data)
        })
        .catch(console.warn) 
        `
        },
        {
            text: ['En este ejemplo mostramos lo que devuelve la petición en el navegador'],
            code: `

    //apiKey generada por la API
    const apiKey = '';

    const peticion = fetch('https://api.giphy.com/v1/gifs/random?api_key=' + apiKey)

    peticion
        .then( resp => resp.json())
        .then( ({data}) => {
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
        })
        .catch(console.warn)
            `
        }]
    },
    {
    id: 7,
    title: 'Async y await',
    data: [{
        text: ['Otra manera de trabajar con promesas','La función debe ser asincŕonica (async)', 'Se utiliza la estructura de un try{...} catch{...}, de manera que prueba algo (try), y si hay algún error, este lo manejará el catch()', 'Se utiliza la palabra clave await antes de cada pedido asincrónico, guardando en una variable el resultado obtenido'],
        code: `
    //apiKey generada por la API
    const apiKey = '';

    const getImagen = async () => {

        try {
            //apiKey generada por la API
            const apiKey = '';
            const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + apiKey);
            const { data } = await response.json();
        
            const { url } = data.images.original;
        
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img)
        } catch (error) {
            console.log(error) // manejo del error
        }
    
    }

    getImagen()
    `
    },
]
    },
    {
        id: 8,
        title: 'If ternario',
        data: [
            {
            text: ['Creamos la estructura de un if tradicional', 'Mostrará por consola el respectivo mensaje según si activo es true o false'],
    code: `
    const activo = true;
    let mensaje;

    if(activo){
        mensaje = 'Activo';
    }else{
        mensaje = 'Inactivo';
    }
    console.log(mensaje)
        `
        },
        {
            text: ['Creamos un if ternario', 'Simplificará en el condicional, guardando en una variable el resultado devuelto'],
    code: `
    const activo = true;

    const mensaje = (activo) ? 'Activo' : 'Inactivo';
    
    console.log(mensaje)
        `
        },
        {
            text: ['En el caso que no se considere una accion si no se cumpliera la condición, podemos utilizar una if ternario abreviado', 'En el caso de no cumplirse la condición, solo devolverá false'],
    code: `
    const activo = true;

    const mensaje = activo && 'Activo'
    console.log(mensaje)
        `
        },
    ]
        }
]

export default content