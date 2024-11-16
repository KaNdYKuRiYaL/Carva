import React from 'react'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          
            <InfoBox 
                heading='For Renters'
                backgroundColor = 'bg-gray-200'
                buttonInfo={{
                    text: 'Browse Cars',
                    link : '/properties',
                    backgroundColor:'bg-black'
            }}>
                Find your dream car. Bookmark cars and contact owners.
            </InfoBox>

            <InfoBox 
                heading='For Car Owners'
                backgroundColor = 'bg-blue-400'
                buttonInfo={{
                    text: 'Add Cars',
                    link : '/properties/add',
                    backgroundColor:'bg-blue-500'
            }}>
                List your cars and reach potential buyers. Rent for a day-trip or long term.
            </InfoBox>
            
        </div>
      </div>
    </section>

  )
}

export default InfoBoxes
