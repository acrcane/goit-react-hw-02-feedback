import React, {Component} from 'react';
import PropTypes from 'prop-types';

//STYLE!!!!!!!!!!!!!!

export class FeedbackOptions extends Component {

  render() {   
    const { options, onLeaveFeedback } = this.props

    return (     
      <ul>
        { options.map( option => {
            return (
              <li key={ option }>
                <button onClick={()=>{onLeaveFeedback( option.toLowerCase() )}}> 
                  {option.charAt(0).toUpperCase() + option.slice(1)} 
                </button>
              </li>
            
            )
          })
        }
      </ul>
    )
  }
}



FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}