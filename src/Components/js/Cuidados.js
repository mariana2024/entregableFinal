import React from 'react'
import Styles from '../css/Cuidados.module.css'
import Imgcuidado from '../data/SkinCare.jpeg'

const Cuidados = () => {
  return (
    <section className={Styles.sectioncuidado} id='cuidados'>
      <h2 className={Styles.h2sub}>Cuidados</h2>
      <hr></hr>
      <h3 className={Styles.h3sub}>Piel normal</h3>
        <div className={Styles.containercuidado}>
          <p>La piel normal debe limpiarse minuciosamente todos los días por la mañana y por la noche. No es necesario usar 
            productos especialmente suaves, pero si quieres ir sobre seguro, usa una leche limpiadora o un desmaquillador facial en
            formato crema como NIVEA Desmaquillador Bajo la Ducha con vitamina E limpia suave y eficazmente la piel eliminando los 
            restos de maquillaje y la máscara de pestañas.
          </p>
          <img src={Imgcuidado} alt='imagen cuidado'></img>
        </div>
        <hr></hr>
        <h3 className={Styles.h3sub}>Piel seca</h3>
        <div className={Styles.containercuidado2}>

          <p>Tome baños o duchar breves con agua tibia o fría cada dos días. Si tiene que ducharse a diario, tome duchas breves. No 
            permanezca dentro de la tina por mucho tiempo.
            Algunos jabones podrían ser ásperos para la piel. Báñese con un jabón suave que tenga humectante; por ejemplo:
            <ul>
              <li>Cetaphil®</li>
              <li>Vanicream®</li>
              <li>Dove®</li>
              <li>Eucerin®</li>
            </ul>
          </p>
          <img src={Imgcuidado} alt='imagen cuidado'></img>
        </div>
        <hr></hr>
        <h3 className={Styles.h3sub}>Piel grasosa</h3>
        <div className={Styles.containercuidado}>
          <p>Limpia tu rostro. A la hora de limpiar tu rostro, utiliza productos que sean neutros y respeten el PH de tu cutis. Y es muy
          importante que lo limpies siempre a primera hora de la mañana (por la noche la piel sigue produciendo sebo) y antes de irte a la 
          cama.</p>
          <img src={Imgcuidado} alt='imagen cuidado'></img>
        </div>
    </section>
  )
}

export default Cuidados