import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Orquestador/Tarjeta'
import Catalogo from './data.json'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      Catalogo.map((libro)=>(
        <Tarjeta
          title = {libro.title}
          descripcion = {libro.descripcion}
          img = {libro.img}
          color = {libro.color}
        />
      ))
    }    
  </StrictMode>,
)

