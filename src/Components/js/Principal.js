import React from 'react'
import SkinCare from '../data/SkinCare.jpeg'
import Styles from '../css/Principal.module.css'

const Principal = () => {
  return (
    <main id='principal'>
        <h1>SkinMary</h1>
       <section className={Styles.SeccionPrincipal}>
            <div>
                <img src={SkinCare} alt='cuidado de piel'></img>
            </div>
            <div className={Styles.InformationContainer}>
                <h2>Cuidado de la piel</h2>
                <p>
                La piel protege de agentes externos, del calor y el frío, del aire y los elementos, de las bacterias, es impermeable, 
                se repara y lubrica a sí misma, incluso elimina algunos residuos del cuerpo.
                <br></br>
                <br></br>
                Como sus parientes el pelo y las uñas, refleja tanto la salud física como la mental. La piel puede avisar de enfermedades
                 internas con cambios en su color o textura, con aparición de granos o de manchas. Proporciona el sentido del tacto, puede
                  ser áspera o delicada, suave o arrugada, según dicten las necesidades o la edad.
                </p>
            </div>
       </section>
    </main>
  )
}

export default Principal