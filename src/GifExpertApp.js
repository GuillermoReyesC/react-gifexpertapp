import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ( { defaultCategories = [] } ) => {

    

    
    const [ categories, setCategories ] = useState( defaultCategories );

    //const [ categories, setCategories ] = useState(['One Punch']);
    
/*    // const categories = ['x', 'x2', 'x3', 'z']

  

   const handleAdd = () => {

   //setCategories(['n',...categories]);    ---> operador spread  " ...categories "
   setCategories( cats => [...categories, 'n'] );   // ---> arrow function para agregar a una const
   

   }
   console.log(categories) */

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            

           
            
                { 
                categories.map( category => (
                    <GifGrid 
                    key = { category }
                    category = { category }
                    />
                ))
                }
            

        </>
    )
}

export default GifExpertApp
