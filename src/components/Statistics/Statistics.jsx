import React, {Component} from "react";


export class Statistics extends Component {

    render(){
        // const { good, neutral, bad, total, positiveFeedback} = this.props;
        // const elements = ['Good: ', 'Neutral: ', 'Bad: ', 'Total: ', 'Positive Feedback: ']
        const { good, neutral, bad, total, percentage } = this.props;
        const elements = ['Good: ', 'Neutral: ', 'Bad: ', 'Total: ', 'Positives feedback: '];
        const values = [ good, neutral, bad, total, percentage ];

        return(
            <ul>
                {elements.map((elem, index) => {
                    return <li key = {index}>
                        <p> {elem}
                            <span>{ index!==4 ? values[index] : values[index] + '%' }</span>
                        </p>
                    </li>
                })}
            </ul>
        )
    }
}