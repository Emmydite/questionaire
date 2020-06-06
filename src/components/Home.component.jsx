import React from 'react'
//import Buttons from './Button.component'

class Home extends React.Component{
    constructor(){
        super();
         
        this.state = {
            response : "Your result will show here!"
        }
    }

    handleAnswer =(e)=>{

        e.preventDefault();

      let c1Score = 0;
      let c2Score = 0;
      let c3Score = 0;
      let c4Score = 0;

      let choices = document.getElementsByTagName('input');

      //loop through all the radio inputs
      for(let i = 0; i < choices.length; i++){
          // if radio button is checked
          if(choices[i].checked){
            if(choices[i].value === 'c1'){
               c1Score +=1;
            }
            if(choices[i].value === 'c2'){
                c2Score +=1;
             }
             if(choices[i].value === 'c3'){
                c3Score +=1;
             }
             if(choices[i].value === 'c4'){
                c4Score +=1;
             }
             // if more choices is added, you have to add another if statement below
          }
      }

      // find out which choices got the highest score
      let maxScore = Math.max(c1Score, c2Score, c3Score, c4Score);

      //display answer corresponding to the choice
        let answerBox;
       if(c1Score === maxScore){
           //if user chooses the first choice the most, this outcome will be displayed
           answerBox = "You must be a computer researcher! You will enjoy developing algorithms and doing things with computer no one else has done before. For example, researchers sent a robot to the moon, built a computer to beat the beat human in jeopady and are creating robots to do chores for you.Computer reserachers typically go to the college and work at universities, or as a part of the research and development team in companies";

           this.setState({response:answerBox});
       }

       if(c2Score === maxScore){
           answerBox = "You are an altruistic coder! You love to help people and feel the positive impact of your work everyday. Altruistic coders are out there everyday making the world a better place by building softwares that people find useful";

           this.setState({response : answerBox});
       }

       if(c3Score === maxScore){
           answerBox = "You are a developer! Developers create games, apps, social media platforms, movies and all sorts of fun programs that people enjoy. Developers need sharp coding skills, are great debuggers and need to work well in a team of other developers.";

           this.setState({response : answerBox});
       }

       if(c4Score === maxScore){
           answerBox = "You the future CEO of a new startup! You enjoy taking risks and building the next big thing that no one has ever thought of before. For example, Billionare Mark Zuckerberg founded facebook in 2004, a project he started inside his dorm room in college which eventually turned into a social networking revolution that changed the world.";

           this.setState({response : answerBox});
       }
       //add another response if next choice is added
    }

    handleReset=()=>{
      let answerBox;
      answerBox ="Your result will show here!";
      this.setState({response : answerBox});
    }


 render(){
    return (
        <div className="wrapper">
          <h1>What kind of computer scientist are you ?</h1>
          <p>Take this questionaire to find out</p>

          <form>
              <div className="form-group">
            <h3>What gets you the most excited</h3>
            {/* here are the choices for the first question. Each input tag must have the same name, for this question, the name is q1.. The value is the answer the choice corresponds to */}
            <label htmlFor="c1"> <input type="radio" id="c1" name="q1" value="c1"/> 
            Experimenting, discovering, and learning
            </label>
            
             <br />
            <label htmlFor="c2">
            <input type="radio" id="c2" name="q1" value="c2"/>
                Helping others</label>
            
            <br />

            <label htmlFor="c3"> 
            <input type="radio" id="c3" name="q1" value="c3"/>
            Music, movies, games nad making others laugh</label>
            
            <br />
            <label htmlFor="c4"> 
            <input type="radio" id="c4" name="q1" value="c4"/>
            Taking risks</label>         
            </div>

            <div className="form-group">
            <h3>What is your ideal work environment?</h3>
            {/* here are the choices for the first question. Each input tag must have the same name, for this question, the name is q2.. The value is the answer the choice corresponds to */}
            <label htmlFor="c1"> 
            <input type="radio" id="c1" name="q2" value="c1"/>
            Inside a high tech lab with lots of fancy equipments</label>
            
            <br />
            <label htmlFor="c2">
            <input type="radio" id="c2" name="q2" value="c2"/>
                Somewhere I feel appreciated for my work</label>
            
            <br />
            <label htmlFor="c3">
            <input type="radio" id="c3" name="q2" value="c3"/>
                Surrounded by cool gadgets and toys</label>
            
            <br />
            <label htmlFor="c4">
            <input type="radio" id="c4" name="q2" value="c4"/>
                Inside a cozy room or garage at home</label>
            
            </div>
             
             {/* question3 */}
            <div className="form-group">
            <h3>Who are your role models?</h3>
             
            <label htmlFor="c1"> 
            <input type="radio" id="c1" name="q3" value="c1"/>
            People who make great discoveries</label>
            
            <br />
            <label htmlFor="c2">
            <input type="radio" id="c2" name="q3" value="c2"/>
                People who make sacrifices to help others</label>
            
            <br />
            <label htmlFor="c3">
            <input type="radio" id="c3" name="q3" value="c3"/>
                Creative, artistic, and expressive people</label>
           
            <br />
            <label htmlFor="c4">
            <input type="radio" id="c4" name="q3" value="c4"/>
                People who build innovative products</label>
            
            </div>

                         {/* question4 */}
                         <div className="form-group">
            <h3>What do you do when you encounter a difficult problem?</h3>
             
            <label htmlFor="c1"> 
            <input type="radio" id="c1" name="q4" value="c1"/>
            Try to find the solution yourself (online, in a book, etc)</label>
            
            <br />
            <label htmlFor="c2">
            <input type="radio" id="c2" name="q4" value="c2"/>
                Ask someone for help</label>
            
            <br />
            <label htmlFor="c3">
            <input type="radio" id="c3" name="q4" value="c3"/>
                Take a break, because it helps you be more creative</label>
            
            <br />
            <label htmlFor="c4">
            <input type="radio" id="c4" name="q4" value="c4"/>
                Jump in and try different solutions until one works</label>
            
            </div>
        <button type="submit" id="submit" onClick={this.handleAnswer}>
        Submit your Answers
      </button>
      <button type="reset" id="reset" onClick={this.handleReset}>
          Reset
      </button>
          </form>

          <div id="ans">{this.state.response}</div>
        </div>
    )
 }
}

export default Home;
