# Futura BioLab
proyecto es una aplicación web diseñada para compilar proyectos y recetas de bioplásticos y biomateriales. La plataforma permite a los usuarios compartir y descubrir información sobre diferentes servicios y proyectos relacionados con el uso de bioplásticos. Además, incluye un sistema de autenticación utilizando Firebase y se basa en cuatro bases de datos para gestionar usuarios, servicios, proyectos y pagos.
## Índice
- [Estructura] (#Estructura del proyecto)
- [Funcionalidades](#funcionalidades)
- [Tecnologías](#tecnologías)
- [Endpoints](#endpoints)
- [Despliegue](#despliegue)
## Estructura del proyecto
/raiz
│
├── config
│   ├── db.js
│   └── firebase.js
│
├── controllers
│   ├── authUsersControllers.js
│   ├── paymentControllers.js
│   ├── projectsRoutesControllers.js
│   └── servicesControllers.js
│
├── docs
│   ├── basicInfo.js
│   ├── components.js
│   ├── index.js
│   └── projects.js
│
├── middlewares
│   └── authMiddleware.js
│
├── models
│   ├── payment.js
│   ├── Projects.js
│   ├── Services.js
│   └── User.js
│
├── routes
│   ├── authRoutes.js
│   ├── paymentRoutes.js
│   ├── projectRoutes.js
│   └── services.js
│
├── .env
└── app.js
# Descripción de las Carpetas y Archivos
## config
Contiene archivos de configuración para la base de datos y Firebase.
- **db.js**: Configuración de la conexión a la base de datos.
- **firebase.js**: Configuración de Firebase para la autenticación y otros servicios.
## controllers
Contiene los controladores que manejan la lógica de negocio para diferentes entidades de la aplicación.
- **authUsersControllers.js**: Controlador para la autenticación de usuarios.
- **paymentControllers.js**: Controlador para manejar las operaciones relacionadas con los pagos.
- **projectsRoutesControllers.js**: Controlador para gestionar las rutas de proyectos.
- **servicesControllers.js**: Controlador para gestionar las rutas de servicios.
## docs
Contiene documentación y archivos de información relacionados con el proyecto.
- **basicInfo.js**: Información básica sobre el proyecto.
- **components.js**: Descripción de los componentes del proyecto.
- **index.js**: Índice de la documentación.
- **projects.js**: Documentación relacionada con los proyectos.
## middlewares
Contiene middleware que se utiliza para manejar la autenticación y otras funcionalidades comunes en las rutas.
- **authMiddleware.js**: Middleware para la verificación de autenticación de usuarios.
## models
Contiene los modelos de datos que representan las estructuras de las entidades en la base de datos.
- **payment.js**: Modelo para los pagos.
- **Projects.js**: Modelo para los proyectos.
- **Services.js**: Modelo para los servicios.
- **User.js**: Modelo para los usuarios.
## routes
Contiene las definiciones de las rutas de la API.
- **authRoutes.js**: Rutas para la autenticación de usuarios.
- **paymentRoutes.js**: Rutas para manejar los pagos.
- **projectRoutes.js**: Rutas para gestionar proyectos.
- **services.js**: Rutas para gestionar servicios.
## .env
Archivo que contiene las variables de entorno necesarias para la configuración del proyecto.
## app.js
Archivo principal de la aplicación, donde se configura y se inicia el servidor.
## Funcionalidades
### Autenticación de Usuarios
- **Registro de nuevos usuarios**: Mediante autenticación con Firebase.
- **Ingreso de usuarios existentes**: Permite a los usuarios iniciar sesión.
### Gestión de Proyectos
- **Consultar Proyectos**: Acceso a una lista de proyectos de bioplásticos y biomateriales.
- **Crear Proyectos**: Los usuarios registrados pueden subir sus propios proyectos.
- **Editar Proyectos**: Posibilidad de modificar la información de proyectos existentes.
- **Eliminar Proyectos**: Opción de eliminar proyectos que ya no se deseen mostrar.
### Servicios Ofrecidos
- **Consultar Servicios**: Los usuarios pueden ver los servicios disponibles relacionados con cursos y actividades de bioplásticos y biomateriales.
- **Ofrecer Servicios**: Los usuarios pueden crear, ofrecer y vender servicios.
## Tecnologías
- **Node.js**: Entorno de ejecución para el backend.
- **Express (versión: 4.21.1)**: Framework web para Node.js utilizado para la creación de aplicaciones y APIs.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar servicios, proyectos, usuarios y ventas de servicios.
- **Mongoose (versión: 8.8.0)**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **Firebase (versión: 11.0.1)**: SDK de Firebase para la interacción con servicios como Firestore, Authentication y Storage.
- **Firebase Admin (versión: 12.7.0)**: SDK administrativo de Firebase para la interacción con los servicios de Firebase.
- **JWT (JSON Web Tokens)**: Para la autenticación y autorización.
### Dependencias
- **cookie-parser (versión: 1.4.7)**: Permite analizar las cookies en las solicitudes HTTP.
- **cors (versión: 2.8.5)**: Configura el intercambio de recursos de origen cruzado (CORS) en aplicaciones Express.
- **dotenv (versión: 16.4.5)**: Carga variables de entorno desde un archivo `.env` a `process.env`.
## Endpoints
### Rutas de Servicios
- **GET** `/services`: Obtiene una lista de todos los servicios.
- **GET** `/services/user/:uid`: Obtiene servicios filtrados por el UID del usuario.
- **POST** `/services/new`: Crea un nuevo servicio. (Requiere autenticación)
- **GET** `/services/:id`: Obtiene un servicio específico por su ID. (Requiere autenticación)
- **PUT** `/services/:id`: Actualiza un servicio existente por su ID.
- **DELETE** `/services/:id`: Elimina un servicio por su ID.
#### Ejemplo de Endpoints de Servicios
##### getServices
- **Descripción**: Recupera y devuelve todos los servicios disponibles en la base de datos.
- **Método HTTP**: GET
- **Ruta**: `/services`
- **Respuesta**:
    - `200 OK`: Devuelve una lista de todos los servicios.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### createService
- **Descripción**: Permite crear un nuevo servicio. Se requieren varios parámetros como `name`, `email`, `username`, `description`, `duration`, `price`, entre otros.
- **Método HTTP**: POST
- **Ruta**: `/services`
- **Cuerpo de la Solicitud**: Detalles del servicio en formato JSON.
- **Respuesta**:
    - `201 Created`: Si el servicio se crea correctamente, devuelve el objeto del servicio guardado.
    - `400 Bad Request`: Si faltan campos requeridos.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### getServiceById
- **Descripción**: Recupera un servicio específico utilizando su ID.
- **Método HTTP**: GET
- **Ruta**: `/services/:id`
- **Parámetro**:
    - `id`: ID del servicio a recuperar.
- **Respuesta**:
    - `200 OK`: Devuelve los datos del servicio encontrado.
    - `404 Not Found`: Si el servicio no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### updateService
- **Descripción**: Actualiza un servicio existente utilizando su ID.
- **Método HTTP**: PUT
- **Ruta**: `/services/:id`
- **Parámetro**:
    - `id`: ID del servicio a actualizar.
- **Cuerpo de la Solicitud**: Campos a actualizar en formato JSON.
- **Respuesta**:
    - `200 OK`: Si el servicio se actualiza correctamente, devuelve un mensaje de éxito y el servicio actualizado.
    - `404 Not Found`: Si el servicio no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### deleteService
- **Descripción**: Permite eliminar un servicio específico por su ID.
- **Método HTTP**: DELETE
- **Ruta**: `/services/:id`
- **Parámetro**:
    - `id`: ID del servicio a eliminar.
- **Respuesta**:
    - `200 OK`: Si el servicio se elimina correctamente, devuelve un mensaje de éxito.
    - `404 Not Found`: Si el servicio no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### getServiceByUid
- **Descripción**: Recupera servicios asociados a un UID específico.
- **Método HTTP**: GET
- **Ruta**: `/services/uid/:uid`
- **Parámetro**:
    - `uid`: Identificador único del servicio a recuperar.
- **Respuesta**:
    - `200 OK`: Devuelve una lista de servicios asociados al UID.
    - `404 Not Found`: Si no se encuentran servicios.
    - `500 Internal Server Error`: En caso de un error en el servidor.
### Rutas de Proyectos
- **GET** `/projects`: Obtiene una lista de todos los proyectos.
- **GET** `/projects/user/:uid`: Obtiene proyectos filtrados por el UID del usuario.
- **GET** `/projects/title/:name`: Busca proyectos por coincidencia en el título.
- **GET** `/projects/:projectId`: Obtiene un proyecto específico por su ID.
- **POST** `/projects/new`: Crea un nuevo proyecto. (Requiere autenticación)
- **PUT** `/projects/:projectId`: Actualiza un proyecto existente por su ID.
- **DELETE** `/projects/:projectId`: Elimina un proyecto por su ID.
#### Ejemplo de Endpoints de Proyectos
##### getProjects
- **Descripción**: Recupera y devuelve todos los proyectos disponibles en la base de datos.
- **Método HTTP**: GET
- **Ruta**: `/projects`
- **Respuesta**:
    - `200 OK`: Devuelve una lista de todos los proyectos.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### createProject
- **Descripción**: Permite crear un nuevo proyecto. Se requieren varios parámetros como `nameproject`, `owner`, `description`, `license`, entre otros.
- **Método HTTP**: POST
- **Ruta**: `/projects`
- **Cuerpo de la Solicitud**: Detalles del proyecto en formato JSON.
- **Respuesta**:
    - `201 Created`: Si el proyecto se crea correctamente, devuelve el objeto del proyecto guardado.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### getProjectById
- **Descripción**: Recupera un proyecto específico utilizando su ID.
- **Método HTTP**: GET
- **Ruta**: `/projects/:id`
- **Parámetro**:
    - `id`: ID del proyecto a recuperar.
- **Respuesta**:
    - `200 OK`: Devuelve los datos del proyecto encontrado.
    - `404 Not Found`: Si el proyecto no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### updateProjectById
- **Descripción**: Actualiza un proyecto existente utilizando su ID.
- **Método HTTP**: PUT
- **Ruta**: `/projects/:id`
- **Parámetro**:
    - `id`: ID del proyecto a actualizar.
- **Cuerpo de la Solicitud**: Campos a actualizar en formato JSON.
- **Respuesta**:
    - `200 OK`: Si el proyecto se actualiza correctamente, devuelve un mensaje de éxito.
    - `404 Not Found`: Si el proyecto no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### deleteProjectById
- **Descripción**: Permite eliminar un proyecto específico por su ID.
- **Método HTTP**: DELETE
- **Ruta**: `/projects/:id`
- **Parámetro**:
    - `id`: ID del proyecto a eliminar.
- **Respuesta**:
    - `200 OK`: Si el proyecto se elimina correctamente, devuelve un mensaje de éxito.
    - `404 Not Found`: Si el proyecto no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
### Rutas de Pagos
- **POST** `/payment/new`: Crea una nueva venta o pago.
#### Ejemplo de Endpoint de Pagos
- **Descripción**: Este método permite crear una nueva venta. Se espera que en la solicitud se incluyan los parámetros `uidOwner`, `uidBuyer`, `methodPayment`, `price` y `services`.
- **Método HTTP**: POST
- **Ruta**: `/payments`
- **Cuerpo de la Solicitud**: Detalles de la venta en formato JSON.
- **Respuesta**:
    - `201 Created`: Si la venta se crea correctamente, devuelve el objeto de pago guardado.
    - `500 Internal Server Error`: En caso de un error en el servidor.
### Rutas de Usuarios
- **GET** `/users`: Obtiene una lista de todos los usuarios.
- **GET** `/users/:uid`: Obtiene un usuario específico por su UID.
- **GET** `/users/name/:username`: Busca usuarios por su nombre de usuario.
- **POST** `/users/new`: Crea un nuevo usuario.
- **PUT** `/users/:id`: Actualiza un usuario existente por su ID.
- **DELETE** `/users/:id`: Elimina un usuario por su ID.
1:24
#### Ejemplo de Controladores de Autenticación de Usuarios
##### getAllUser
- **Descripción**: Recupera todos los usuarios de la base de datos y los devuelve en formato JSON.
- **Método HTTP**: GET
- **Ruta**: `/users`
- **Respuesta**:
    - `200 OK`: Devuelve una lista de todos los usuarios.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### getUser
- **Descripción**: Busca un usuario específico por su ID o UID y devuelve sus datos en formato JSON.
- **Método HTTP**: GET
- **Ruta**: `/users/:uid` o `/members/:id`
- **Parámetros**:
    - `uid`: Identificador único del usuario.
    - `id`: ID de MongoDB del usuario.
- **Respuesta**:
    - `200 OK`: Devuelve los datos del usuario encontrado.
    - `404 Not Found`: Si el usuario no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### getUserByName
- **Descripción**: Busca usuarios cuyo nombre de usuario coincida con el patrón proporcionado.
- **Método HTTP**: GET
- **Ruta**: `/users/name/:username`
- **Parámetro**:
    - `username`: Nombre de usuario a buscar.
- **Respuesta**:
    - `200 OK`: Devuelve una lista de usuarios que coinciden con el nombre proporcionado.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### createUser
- **Descripción**: Crea un nuevo usuario en la base de datos. Si el usuario ya existe, se devuelve un mensaje de error.
- **Método HTTP**: POST
- **Ruta**: `/users`
- **Cuerpo de la Solicitud**: Detalles del usuario en formato JSON.
- **Respuesta**:
    - `201 Created`: Si el usuario se crea correctamente, devuelve un mensaje de éxito.
    - `401 Unauthorized`: Si el usuario ya existe.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### updateUser
- **Descripción**: Actualiza los datos de un usuario existente.
- **Método HTTP**: PUT
- **Ruta**: `/users/:id`
- **Parámetro**:
    - `id`: ID de MongoDB del usuario a actualizar.
- **Cuerpo de la Solicitud**: Campos a actualizar en formato JSON.
- **Respuesta**:
    - `200 OK`: Si el usuario se actualiza correctamente, devuelve un mensaje de éxito.
    - `404 Not Found`: Si el usuario no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
##### deleteUser
- **Descripción**: Elimina un usuario de la base de datos por su ID.
- **Método HTTP**: DELETE
- **Ruta**: `/users/:id`
- **Parámetro**:
    - `id`: ID de MongoDB del usuario a eliminar.
- **Respuesta**:
    - `200 OK`: Si el usuario se elimina correctamente, devuelve un mensaje de éxito.
    - `404 Not Found`: Si el usuario no se encuentra.
    - `500 Internal Server Error`: En caso de un error en el servidor.
## Despliegue
