import { ReactNode } from 'react';
import { ReactElement } from 'react';

const Products: Array<{ title: string; isFruit: boolean; id: number }> = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];


function ShoppingList():ReactElement {
    const  listNames : ReactNode[]=  Products.map(product=>{
        return(
            <li key={product.id} style={{color : product.isFruit? 'magenta' : 'darkgreen' }}>{product.title}</li>
        )});

    return(
        <ul> {listNames} </ul>
    );
}

export default ShoppingList