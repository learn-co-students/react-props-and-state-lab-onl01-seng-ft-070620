import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  handleFilterChange = selectedAnimalType => {
    this.setState({
      filters: { type: selectedAnimalType }
    });
  };

  onAdoptPet = id => {
    this.setState(prevState => {
      let pets = prevState.pets.map(pet => {
        return pet.id === id ? { ...pet, isAdopted: true } : pet;
      });
      return { pets };
    });
  };

  onFindPetsClick = () => {
    const type = this.state.filters.type;
    let url = type === "all" ? "/api/pets" : `/api/pets?type=${type}`;
    fetch(url)
      .then(res => res.json())
      .then(petsObj => this.setState({ pets: petsObj }));
  };

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
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.handleFilterChange}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
