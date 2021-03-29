import { shallow } from 'enzyme'
import HookApp from '../../HookApp'

describe('pruebas de <HookApp />', () => {

    const wrapper = shallow(<HookApp />)

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})