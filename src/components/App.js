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

  changeType = (type) => {
    this.setState(previousState => {
      return {
        ...previousState,
        filters: {
          type
        }
      }
    })
  }

  getPets = () => {
    let url
    const filter = this.state.filters.type
    if (filter === 'all') {
      url = '/api/pets'
    } else if (filter === 'cat') {
      url = '/api/pets?type=cat'
    } else if (filter === 'dog') {
      url = '/api/pets?type=dog'
    } else if (filter === 'micropig') {
      url = '/api/pets?type=micropig'
    }
    fetch(url)
      .then(r => r.json())
      .then(pets => this.setState({
        pets
      }))
  }

  adoptPet = (id) => {
    let pet = this.state.pets.find(pet => id === pet.id)
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
              <Filters 
                onFindPetsClick={this.getPets}
                onChangeType={this.changeType} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
