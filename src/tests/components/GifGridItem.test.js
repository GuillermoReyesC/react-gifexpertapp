import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'  

describe('Pruebas en <GifGridItem/ >', () => {


    const title= 'titulo';
    const url= 'http://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem  title={ title } url={ url } />)

    
    
    test('Debe de mostrarse el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot( );
        
        
    })


    test('debe de mostrar data enviada por propTypes ', () => {

    
        const wrapper = shallow(
        
            <GifGridItem
                title={ title }
                url={ url }

        
            />) 
               
        
        expect( wrapper ).toMatchSnapshot()    
            
    });


    test('debe tener un parrafo con un texto', () => {

        
        
        const parrafoTexto = wrapper.find('p').text()

        expect( parrafoTexto.trim() ).toBe( title );
    
        


    });

    test('debe tener la iomagen igual a la url y alt de los props', () => {

        const img = wrapper.find('img')

        //console.log(img.props().alt)

        expect(img.prop('src') ).toBe(url)
        expect(img.prop('alt') ).toBe(title)
        
    });

    test('el <div> debe tener animate_fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className')
        // animate_fadeIn

        console.log(div.prop('className'))

        expect(div.prop('className')).toEqual('card animate__animated animate__fadeIn')

        expect( className.includes('animate__fadeIn') ).toBe(true)
        
    });


});