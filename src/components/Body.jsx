import React from 'react'
import Card from './Card'
import Groups from './Groups'
import '../App.css'

function Body({ FinalData,GroupingType }) {
    return (
        <div className='kanbanBody'>
            <div className='column'>
                {
                    Object.keys(FinalData).map((key) => (
                        <Groups key={key} ele={FinalData[key]} heading={key}  GroupingType={GroupingType} />
                    ))
                }

            </div>
        </div>
    )
}

export default Body