import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Gift from './Gift'

configure({adapter: new Adapter(), disableLifecycleMethods: true})

describe('Gift', () => {
    const mockRemove = jest.fn()
    const id = 1
    const props = { gift: { id }, removeGift: mockRemove }

    const gift = shallow(<Gift {...props} />)

    it('renders properly', () => {
        expect(gift).toMatchSnapshot()
    })

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: ''})
    })

    describe('when typing into person input', () => {
        const person = 'Uncle'

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person } })
        })
        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person)
        })
    })

    describe('when typing into present input', () => {
        const present = 'Sex Doll'

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present } })
        })
        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present)
        })
    })

    describe('when clicking the `remove-gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click')
        })

        it('calls the removeGift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id)
        })

        // it('removes an existing gift to the rendered list when clicking the `remove gift` button', () => {
        //     expect(app.find('.gift-list').children().length).toEqual(0)
        // })
        
        // it('removes an existing gift component when clicking the `remove-gift` button', () => {
        //     expect(app.find('Gift').exists()).toEqual(false)
        // })
    })
})