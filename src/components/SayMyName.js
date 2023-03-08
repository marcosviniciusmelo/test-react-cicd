import styles from './SayMyName.module.scss'

function SayMyName({nome, idade}){
    if( !idade )
        idade = ''

    return (
        <div className={styles.boxName}>
            <p>Fala aí {nome +'-'+ idade}, suave?</p>
        </div>

    )
}

export default SayMyName