import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeSelection = selection => {
    this.setState({
      filters: {type: selection}
    })
  }

  fetchPets = async() => {
    if (this.state.filters.type === 'all') {
      let response = await fetch("/api/pets")
      let jsObj = await response.json()
      this.setState({ pets: jsObj })
    } else {
      let response = await fetch(`/api/pets?type=${this.state.filters.type}`)
      let jsObj = await response.json()
      this.setState({ pets: jsObj })
    }
  }

  adoptPet = identifier => {
    let pet = this.state.pets.find(p => p.id === identifier)
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
                onChangeType={this.changeSelection}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.adoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}
