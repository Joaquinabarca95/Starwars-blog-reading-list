import React from 'react'

const CharacterCard = () => {

    const style = {
        width: "18rem",
      };
    

    return (
        <>
            <div className="card-list">
            <ul>
              <li>
                <div className="card" style={style}>
                  <img src="https://via.placeholder.com/286" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Character Name</h5>
                    <p className="card-text">
                      Character description
                    </p>
                    <a href="/" className="btn btn-primary">
                      More Details...
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
    )
}

export default CharacterCard
