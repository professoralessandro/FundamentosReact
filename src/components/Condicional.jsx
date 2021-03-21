import { React } from "react";

export default (props) =>
    <div>
        <h2>O numero {props.numero} </h2>
        {
            props.numero % 2 === 0 ?
            <span>
                Par
            </span>
            :
            <span>
                Impar
            </span>
        }
    </div>