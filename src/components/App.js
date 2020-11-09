import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  handleFindPetsClick = () => {
    const url = (this.state.filters.type != 'all') ? `/api/pets?type=${this.state.filters.type}` : '/api/pets'

    fetch(url)
      .then(response => response.json())
        .then(result => this.setState({pets: result}))
  }

  handleAdoptPet = (id) => {
    let pet = this.state.pets.find(p => p.id === id)
    pet.isAdopted = true
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
