import React from "react";

class Pet extends React.Component {
  isDisabledBtn = pet => {
    if (pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>;
    } else {
      return (
        <button
          onClick={e => this.props.onAdoptPet(pet.id)}
          className="ui primary button"
        >
          Adopt pet
        </button>
      );
    }
  };

  render() {
    const pet = this.props.pet;
    return (
      <div className="card" id={pet.id}>
        <div className="content">
          <a href="https://www.google.com" className="header">
            <p>{pet.gender === "male" ? "♂" : "♀"}</p>
            <p>{pet.name}</p>
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.isDisabledBtn(pet)}</div>
      </div>
    );
  }
}

export default Pet;
