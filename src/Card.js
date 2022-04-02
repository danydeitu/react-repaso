import React from 'react'

function Card({text, code}) {
    return (
        <div className="col-12 col-md-6">
        <div className="card shadow mb-2">
            <div className="card-body">
                <ul>
                    {
                        text.map((item, i) => <li key={Date.now()}>{item}</li>)
                    }
                </ul>
              <p className="card-text">{}</p>
              <pre>{code}</pre>
              <div>
                
              </div>
            </div>
        </div>
    </div>
    )
}

export default Card
