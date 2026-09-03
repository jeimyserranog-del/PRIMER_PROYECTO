import '../Style/Tarjeta.css'
import Titulo from '../Componentes/Titulo'
import Imagen from '../Componentes/Imagen'
import Descripcion from '../Componentes/Descripcion'
export default function Tarjeta({title,descripcion,img,color}){
    return(
        <div className='CentrarC'>
            <div className='Centrar' style={{background: color}}>
                <Imagen
                    imga={img} /*imga es lo que se le pasa al componente y img lo recibe en este caso seria el datajson*/
                />
                <div className='Orde'>    
                    <Titulo
                        title={title}
                    />
                    <Descripcion
                        descripcion={descripcion}
                    />
                </div>
            </div>
        </div>     
    )
}