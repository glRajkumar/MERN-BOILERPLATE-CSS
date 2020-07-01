import React from 'react'

function ProgressBar({progress}) {
    return (
        <div>
            <div 
             role="progressbar"
             aria-valuenow={progress}
             aria-valuemin="0"
             aria-valuemax="100"
             style={{ width : progress + "%" }}
            >
                {progress} %
            </div>
        </div>
    )
}

export default ProgressBar