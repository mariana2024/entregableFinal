import React from 'react'
import Imagen1 from '../data/SkinMary.jpg'
import Styles from '../css/SkinTypes.module.css'

const SkinTypes = () => {
  return (
    <section className={Styles.SectionWidget} id='skintypes'>
        <h2 className={Styles.H2Widget}>Tipos De Pieles</h2>
        <div className={Styles.containerWidget}>
            <article className={Styles.widget}>
                <img src={Imagen1} alt='piel seca'></img>
                <h3>Piel Seca</h3>
                <p>Es una piel que presenta una textura regular, sin imperfecciones y un aspecto suave y limpio, sin necesidad de 
                cuidados especiales.</p>
            </article>
            <article className={Styles.widget}>
                <img src={Imagen1} alt='piel normal'></img>
                <h3>Piel Normal</h3>
                <p>En muchos casos, la piel seca suele ser algo temporal, causada por factores externos como el clima, la baja humedad 
                del aire y la inmersión en agua caliente. No obstante, en algunas personas la piel seca puede darse con mayor frecuencia 
                e incluso ser una afección de por vida. Aunque en general no suele ser grave, si no se cuida, puede provocar otros 
                problemas, ya que la piel seca se puede agrietar quedando más expuesta a bacterias.</p>
            </article>
            <article className={Styles.widget}>
                <img src={Imagen1} alt='piel grasosa'></img>
                <h3>Piel Grasosa</h3>
                <p>Un cutis graso tiene una apariencia porosa, húmeda y brillante. Se produce como resultado de un exceso de producción 
                de grasa por las glándulas sebáceas. Suele estar determinado por causas genéticas y/o hormonales. Es frecuente en adolescentes
                y jóvenes menores de 30 años3, y suele estar relacionada con la aparición de acné.</p>
            </article>
        </div>
    </section>
  )
}

export default SkinTypes