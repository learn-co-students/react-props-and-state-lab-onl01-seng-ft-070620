import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // renderPets() {
  //   console.log(this.props.pets)
  //   for (const pet of this.props.pets) {
  //     return <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />
  //   }
  // }
  
  render() {
    const petCards = this.props.pets.map(p => (
      <Pet onAdoptPet={this.props.onAdoptPet} pet={p} key={p.id} />
    ))
    
    return (
      <div className="ui cards">
        {petCards}
      </div>
    )
  }
}

export default PetBrowser
