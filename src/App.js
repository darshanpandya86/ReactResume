import React, {Component} from 'react';
import resume from './resume.json';
import './App.css';
import Experience from './Experience';
import Skillset from './Skill';
import Education from './Education';
import Language from './Language';
import Interest from './Interest';


class App extends Component  {

 renderExperiences(){
    let resultArray =[];
    resume.experiences.map((item, i) => {
        resultArray.push(<Experience item = {item} key={i} />);
    });
    return resultArray
}

renderSkills(){
    let resultArray =[];
    resume.skills.map((item, i) => {
        resultArray.push(<Skillset item = {item} key={i} />);
    });

    return resultArray
}

renderEducation(){
    let resultArray =[];
    resume.education.map((item, i) => {
        resultArray.push(<Education item = {item} key={i} />);
    });

    return resultArray
}

renderLanguage(){
    let resultArray =[];
    resume.languages.map((item, i) => {
        resultArray.push(<Language item = {item} key={i} />);
    });

    return resultArray
}

renderInterest(){
    let resultArray =[];
    resume.interests.map((item, i) => {
        resultArray.push(<Interest item = {item} key={i} />);
    });

    return resultArray
}

render(){

  return (
    <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} style={{width:"170px"}} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">Full Stack Developer</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                    <li className="phone"><i className="fas fa-phone"></i><a href="tel:{resume.phone}">{resume.phone}</a></li>
                    <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="#" target="_blank">linkedin.com/in/{resume.linkedin}</a></li>
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                {this.renderEducation()}
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                {this.renderLanguage()}
                </ul>
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderInterest()}
                </ul>
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
                

            {this.renderExperiences()}
               
            </section>
            
            
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                
                    
                {this.renderSkills()}
            </section>
            
        </div>
    </div>
  );
}
}

export default App;
