import { shallow } from 'enzyme';
import React from "react";
import {GifExpertApp} from '../GifExpertApp';


describe('pruebas al componente <GifExpertApp/>', () => {
    
    test('debe mostrarse correctamente <GifExpertApp',()=>{

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    }); 

    test('debe mostrarse correctamente <GifExpertApp con categorias',()=>{

        const categories = ['One Punch', 'Samurai X'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    }); 

 

   

        

});