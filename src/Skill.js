import React, {Component} from 'react'

class Skillset extends Component{

	render(){
		return(
 			 <div className="skillset">   
                    <div className="item">
                    <h3 className="level-title">{this.props.item.name}</h3>
						 <div class="progress level-bar">
						    <div class="progress-bar theme-progress-bar" role="progressbar" style={{width: this.props.item.percent}}></div>
						</div>  
                        
                    </div>
                </div>                    
			);
	}
}

export default Skillset;