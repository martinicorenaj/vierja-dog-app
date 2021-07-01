import React from 'react'
import Breed from "./screens/breed"
import Search from "./screens/search"
import Team from "./screens/team"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Cuando el sitio pasa a tener varias paginas el archivo app.js pasa a estar ocupado
// por las routes
// en nuestro caso tenemos tres routes. Cada route representa una pagina de la aplicacion

//tenemos que pensar en que data necesita cada pagina para poder funcionar

// La pagina de search:
// No necesita saber nada del resto, porque su unica funcionalidad es mostrar el listado de perros

// La pagina de breed:
// - Va a neceistar saber el breed que le usuario eligio, por lo tanto ese debe ser uno de los paramtros
//   que se pasen en la url
// - A su vez, necesita saber si el usuario ya tiene incluidos perros en su equipo, para
//   poder saber si el usuario puede agregar un perro mas al equipo segun las reglas dadas

// La pagina de my team:
// - Va a necesitar saber los perros que se agregaron al equipo en la seccion de breed

// La estrategia que vamos a usar es la siguiente:
// cada vez que el usuario pasa de una pagina a otra tiene que llevarse consigo
// - los perros que haya en el equipo
// - la raza de perro elegida
// Lo primero que va a hacer cualquier pagina al renderizarse es buscar en la url estos parametros
// si es que existen y guardarlos en su estado
// cuando el usuario navega hacia otra pagina agregamos los valores de esos parametros de vuelta
// a la url. De esa forma la informacion que necesitamos se va a ir compartiendo entre
// las paginas

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
 
          </ul>
        </nav>

        <Switch>
          <Route path="/breeds/:raza">
            <Breed />
          </Route>
          <Route path="/myTeam/:team">
            <Team />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App