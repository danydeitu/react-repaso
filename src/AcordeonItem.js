import React from 'react'
import Card from './Card'

function AcordeonItem({id, title, data}) {
    return (
        <div class="accordion-item">
          <h2 class="accordion-header" id={`heading${id}`}>
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`}  aria-controls={`collapse${id}`}>
              {title}
            </button>
          </h2>
          <div id={`collapse${id}`} class="accordion-collapse collapse" aria-labelledby={`heading${id}`} data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div className="row">
                {
                    data.map((item,i) =>  <Card key={Date.now()} {...item}/>)
                }
                </div>
            </div>
          </div>
        </div>
    )
}

export default AcordeonItem
