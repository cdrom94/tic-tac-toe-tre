import React from 'react'
import Bar from './Bar'

const Grid = () => {
  return( 
        <React.Fragment>
            <Bar position={[2.4, 0, 0]} />
            <Bar position={[0, 0, 0]} />
            <Bar position={[1.2, -1.2, 0]} rotation={[0, 0, Math.PI/2]} />  
            <Bar position={[1.2, 1.2, 0]} rotation={[0, 0, Math.PI/2]} />
        </React.Fragment>
    )
}

export default React.memo(Grid)
