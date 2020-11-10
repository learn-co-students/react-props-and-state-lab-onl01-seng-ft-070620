import React from "react";

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const { pet, isAdopted } = this.props;
    const { name, type, age, weight, gender } = pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name}
            {gender === "female" ? "♀" : "♂"}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted && (
            <button className="ui primary button" onClick={this.handleAdoptPet}>
              Adopt pet
            </button>
          )}
          {isAdopted && (
            <button className="ui disabled button">Already adopted</button>
          )}
          {/* <button className="ui primary button" onClick={this.handleAdoptPet}>
            Adopt pet
          </button> */}
        </div>
      </div>
    );
  }
}

export default Pet;
