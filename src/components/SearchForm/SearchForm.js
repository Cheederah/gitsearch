import React from 'react';

const searchForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <form 
            className='input-group form' style={{paddingTop:'10px', paddingRight:'10px'}}>
                <input 
                type='text' 
                placeholder='Type username here'
                className='form-control' onChange={onInputChange} />
                <span>
                    <button type='submit' 
                    className='btn btn-warning center'  onClick={onButtonSubmit}>
                        Submit </button>
                </span>
             </form>
        </div>
    )
}    
    
   

export default searchForm;