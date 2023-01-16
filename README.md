# Para tener en cuenta

## Estados

Para manejar los estados globales de este esta prueba utilice react-redux y redux toolkit ya que el stack lo pedia.
Cree 2 features , uno para menejar todo lo que tiene que ver con el estado de los productos, cargar ,crear , editar , filtrar , etc y el otro para manejar el esatdo del modal:

- products
- common

## Hooks

Utilice varios hooks personalizados para organizar un poco la logica de los formularios y filtro.

## Servicios

Cree y exporte una instancia de Axios para configurar la baseUrl del backend en un archivo llamado **rest**

## Vistas

Considere no usar rutas con react-router-dom ya que la aplicación solo iba a tener una pagina principal y el login, por lo que opte por
crear un HOC que lea del localtorage y me renderice de manera condicional el Login o el AdminPage , si el usuario esta loggueado me
renderizara el AdminPage y sino el Login.

## Estilos

Para los estilos de la aplicación considere utilizazr css puro ya que el stack asi lo pedia

### Extra

Añadi la funcionabilidad de limpiar el filtro y la de cerrar sesión a pesar que no estaba en las indicaciones

## INICIAR PROYECTO

npm install
npm run dev
