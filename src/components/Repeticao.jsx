import { React } from 'react';
import produtos from '../data/produtos';


export default props => {
    function getProdutosListItem() {
        return produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - Preco {prod.preco.toString().replace(".", ",")}
                </li>
        });
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                { getProdutosListItem() }
            </ul>
        </div>
    )
}