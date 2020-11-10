// import React from "react";

// class Pet extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { pet, isAdopted } = this.props;
//     const { name, type, age, weight, gender } = pet;
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {name}
//             {gender === "female" ? "♀" : "♂"}
//           </a>
//           <div className="meta">
//             <span className="date">{type}</span>
//           </div>
//           <div className="description">
//             <p>Age: {age}</p>
//             <p>Weight: {weight}</p>
//           </div>
//         </div>
//         <div className="extra content">
//           {!isAdopted && (
//             <button className="ui primary button" onClick={this.handleAdoptPet}>
//               Adopt pet
//             </button>
//           )}
//           {isAdopted && (
//             <button className="ui disabled button">Already adopted</button>
//           )}
//           <button className="ui primary button" onClick={this.handleAdoptPet}>
//             Adopt pet
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Pet;

import React from "react";

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{" "}
            {this.props.pet.gender === "female" ? "♀" : "♂"}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button"
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
