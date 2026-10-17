import {Saludo} from "./Saludo"
import { TarjetaPerfil } from "./TarjetaPerfil"

export default function App(){
  return(
    <main className="pagina">
      <Saludo nombre="Adel Mendez"></Saludo>
      <section className="equipo">
        <TarjetaPerfil nombre="Adel Mendez" carrera="ingenieria en software" semestre={5}></TarjetaPerfil>
        <TarjetaPerfil nombre="Adel Popusa" carrera="ingenieria en software" semestre={5}></TarjetaPerfil>
        <TarjetaPerfil nombre="Adel Gordita" carrera="ingenieria en software" semestre={5}></TarjetaPerfil>
      </section>
    </main>
  )
}