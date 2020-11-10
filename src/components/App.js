import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  fetchPets = () => {
    let endpoint = "/api/pets";

    if (this.state.filters.type !== "all") {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((pets) => this.setState({ pets: pets }));
  };

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map((p) => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       pets: [],
//       filters: {
//         type: "all",
//       },
//     };

//     this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
//     this.handleAdoptPet = this.handleAdoptPet.bind(this);
//   }

//   handleChangeFilterType(e) {
//     this.setState({
//       filters: {
//         type: e,
//       },
//     });
//   }

//   findPets() {
//     let url = "/api/pets";
//     if (this.state.filters.type !== "all") {
//       url += `?type=${this.state.filters.type}`;
//     }
//     fetch(url)
//       .then((res) => res.json())
//       .then((pets) => this.setState({ pets }));
//   }

//   handleAdoptPet = (pet) => {
//     this.setState({
//       adoptedPet: [...this.state.adoptedPets, pet],
//     });
//   };
//   // handleAdoptPet() {
//   //   this.props.onAdoptPet(this.props.pet.id);
//   // }

//   render() {
//     console.log("pets", this.props.pets);
//     return (
//       <div className="ui container">
//         <header>
//           <h1 className="ui dividing header">React Animal Shelter</h1>
//         </header>
//         <div className="ui container">
//           <div className="ui grid">
//             <div className="four wide column">
//               <Filters
//                 filters={this.state.filters}
//                 onChangeType={this.handleChangeFilterType}
//                 onFindPetsClick={this.findPets}
//               />
//             </div>
//             <div className="twelve wide column">
//               <PetBrowser
//                 pets={this.state.pets}
//                 onAdoptPet={this.handleAdoptPet}
//                 adoptedPets={this.state.adoptedPets}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
