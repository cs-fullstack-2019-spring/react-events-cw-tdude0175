import React, {Component} from "react"


class Player extends Component
{
    constructor(props)
    {
        //saves the state of the score
        super(props);
        this.state = {score:0}
    }

    addpoints=(e)=>
    {
      //  when you click the buttons it will imcrease the score based on the score state in the App.js file
      this.setState({score: this.state.score+ this.props.state})
    };

    render() {
        return(
            //added a class for display purposes to make it look better
            <div className={"player"}>
                {/*props.children shows with player it is currently from 1 to 3*/}
                <p>Player: {this.props.children}</p>
                {/*Shows the score of the current player*/}
                <p>{this.state.score}</p>
                {/*button for adding points shows up as the score state from app.js file*/}
                <button onClick={this.addpoints}>{this.props.state}pt</button>
            </div>
        )
    }
}

export default Player