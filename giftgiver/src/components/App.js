import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import { max_number } from './helper/index'

class App extends Component {
    state = {
        gifts: []
    }

    addGift = () => {
        const { gifts } = this.state
        gifts.push({ id: max_number(gifts.map(gift => gift.id)) + 1})
        this.setState({ gifts })
    }
    
    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id)
        this.setState({ gifts })
    } 

    render() {
        const { gifts } = this.state
        const giftList = gifts.map(gift => {
            return (
                <Gift
                    key={gift.id}
                    gift={gift}
                    removeGift={this.removeGift} />
            )
        })

        return(
            <div>
                <h2>Gift Giver</h2>
                <div className='gift-list'>
                    {giftList}
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App
