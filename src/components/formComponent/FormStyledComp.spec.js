import React from 'react';
import {shallow, mount} from 'enzyme';
import FormStyledComp from './index';
import {Input, MessagesBlock} from './styledComponents';

describe('test FormForTests', () => {
    const component = mount(<FormStyledComp/>);
    const component1 = shallow(<FormStyledComp/>);
    const input1 = component.find('input').at(0);
    const input2 = component.find('input').at(1);

    test('test input ', () => {
        const form = shallow(<FormStyledComp/>);
        // console.log(form.debug());
        //const inputBefore  = form.dive();
        const inputBefore  =  form.find(Input);
        inputBefore.at(0).simulate("change", {target : {value : "admin" }});
        const inputAfter  =  form.find(Input).at(0);
        console.log(inputAfter.debug());
            //  .at(0)
            // .simulate("change", {target : {value : "admin" }});
        const input =   form.find('styled.input[name="login"]');
       // form.update();
        //console.log(input.debug());
       // expect(input.props().value).toEqual('');
        expect(form);
    });

    /* it('should call onChange with shallow second input', () => {
         const event = {
             target: {
                 name: 'password',
                 value: '123'
             }
         };
         const onChange = sinon.spy();
         input2.simulate('change', event);
         input1.update();
         //console.log('input1 simulate', input2.props());
        // console.log('onChange onChange', onChange);
         expect(input2.props().value).toEqual('123');
     });*/


    /*    it('test input  init value', () => {

            const onLoginChange = jest.fn();
            //component.inspect().onLoginChange(event);
            // expect(input1.value).toEqual('aaa');
            expect(input1.props().name).toEqual('login');
        });*/
    /*  it('test onChange first input', () => {
          const event = {
              target: {
                  name: 'login',
                  value: 'admin'
              }
          };
         // const handleChangeSpy = sinon.spy(input1.instance(), "onChange");
          const handleChangeSpy = sinon.spy(input1.props().onChange);
          console.log('input1.props().onChange', input1.props().onChange);
          //console.log('input1.instance() ', input1.instance());
         // input1.update();
          //input1.simulate('change', event);
          input1.props().onChange(event);

         //expect(handleChangeSpy.calledOnce).to.be.true;
         // console.log('input1', input1.props());
          expect(input1.props().value).toEqual('admin');
      });*/

    /* it('try loading', () => {
         const testFormForTests = mount(<FormForTests/>);
         console.log(testFormForTests.html());
         expect(testFormForTests.find('form'));
     })*/

});

