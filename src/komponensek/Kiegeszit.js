import { useState } from "react";
import MondatKiegeszit from "./MondatKiegeszit";

function Kiegeszit(props)
{
    const [mondat, setMondat] = useState(props.model.jelenlegiMondat);
    const [pontszam, setPontszam] = useState(props.model.pontszam);
    return (
        <div>
            <h2>{props.model.fejlec}</h2>
            <MondatKiegeszit mondat={mondat} onSubmit={value => {
                if (props.model.helyes(value))
                {
                    props.model.pontszamotNovel();
                    setPontszam(props.model.pontszam);
                }
                props.model.jelenlegiMondatIndexetLeptet();
                setMondat(props.model.jelenlegiMondat);
            }} />
            <div>Pontszám: {pontszam}</div>
        </div>
    );
}

export default Kiegeszit;