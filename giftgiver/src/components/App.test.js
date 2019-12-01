import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

configure({adapter: new Adapter(), disableLifecycleMethods: true})

describe('App', () => {
    const app = shallow(<App />)
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot()
    })
    
    it('initialized the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([])
    })
    
    describe('when clicking the `add-gift` button', () => {
        const id = 1

        beforeEach(() => {
            app.find('.btn-add').simulate('click')
        })
        afterEach(() => {
            app.setState({gifts: []})
        })

        it('adds a new gift to `state` when clicking the `add gift` button', () => {
            expect(app.state().gifts).toEqual([{ id }])
        })
        
        it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
            expect(app.find('.gift-list').children().length).toEqual(1)
        })
        
        it('creates a new gift component when clicking the `add-gift` button', () => {
            expect(app.find('Gift').exists()).toEqual(true)
        })

        describe('when clicking the `remove-gift` button', () => {
            beforeEach(() => {
                app.instance().removeGift(id)
            })

            it('removes an existing gift from `state` when clicking the `remove gift` butfromn', () => {
                expect(app.state().gifts).toEqual([])
            })

        })
    })

    
})