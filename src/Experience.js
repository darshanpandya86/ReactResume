import React, {Component} from 'react'
import Highlight from './Highlight'

class Experience extends Component{


renderHighlights(){
    let resultArray =[];
    if(this.props.item.highlights){
   this.props.item.highlights.map((item, i) => {
        resultArray.push(<Highlight item = {item} key={i} />);
    });
}
    return resultArray;
}

	render(){
		return(
<div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{this.props.item.title}</h3>
                            <div className="time">{this.props.item.period}</div>
                        </div>
                        <div className="company"><a href={this.props.item.company}>{this.props.item.company}</a></div>
                    </div>
                    <div className="details">
                        <p>{this.props.item.details}</p>
                        <ul>{this.renderHighlights()}</ul>
                        <p><b>Techonologies :</b> {this.props.item.technologies}</p>

                    </div>
                </div>
			);
	}
}

export default Experience;