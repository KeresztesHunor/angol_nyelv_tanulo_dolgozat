function MondatKiegeszit(props)
{
    console.log();
    const MONDAT_RESZEK = props.mondat.mondat.split("_");
    return (
        <div className="mondat-kiegeszit">
            <form onSubmit={event => {
                event.preventDefault();
                props.onSubmit(event.target.childNodes[1].value)}
            }>
                <div>{MONDAT_RESZEK[0]}</div>
                <input type="text" value={props.value} />
                <div>{MONDAT_RESZEK[1]} ({props.mondat.alap})</div>
                <input type="submit" value="Ok" />
            </form>
        </div>
    );
}

export default MondatKiegeszit;