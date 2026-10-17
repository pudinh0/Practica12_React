interface SaludoPage{
  nombre: string;
  
}

export function Saludo({nombre}: SaludoPage) {
  return(
    <header>
      <h1>Hola {nombre}</h1>
      <p> Bienvenido a mi primera aplicacion con react</p>
    </header>
  )
}
