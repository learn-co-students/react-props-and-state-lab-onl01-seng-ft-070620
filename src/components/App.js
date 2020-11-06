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

  handleChangeType = (value) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  fetchPets = (type) => {
    if(type == 'all')
    {
      fetch('/api/pets')
      .then(r => r.json())
      .then(r => this.setState({pets: r}))
    }
    else
    {
      fetch(`/api/pets?type=${type}`)
      .then(r => r.json())
      .then(r => this.setState({pets: r}))
    }
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
              <Filters onChangeType={(value) => this.handleChangeType(value)} onFindPetsClick={() => this.fetchPets(this.state.filters.type)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={(petId) => {
                let pet = this.state.pets.find(object => object.id == petId)
                pet.isAdopted = true
                console.log('Running onAdoptPet')
              }}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
