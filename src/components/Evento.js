import Button from './Evento/Button'

function Evento(){

    function meuEvento(e){
        e.preventDefault()
        alert('Foi')
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <button onClick={meuEvento}>Disparar</button>
        </div>
    )
}

export default Evento