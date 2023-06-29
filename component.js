let root = ReactDOM.createRoot(document.getElementById("mydiv"));

// Functional Component
let GreetingsFunctionalComponent = (props) =>{
    return (
      
            <h1 className ="bg-primary"> Hello {props.name} </h1>
        
    )
}

//root.render(<GreetingsFunctionalComponent name = "Jane Do"/>);

// Class Component
class GreetingsClassComponent extends React.Component{
    render(props){
        return (
            < fragment> 
            <h1 className ="bg-secondary text-light"> Name: {this.props.name} </h1>
            <h1 className ="bg-warning" > Gender: {this.props.gender} </h1>
            <h1 className ="bg-light" > Age: {this.props.age} </h1>
            <h1 className ="bg-success text-light" > Graduate: {this.props.graduate + ''} </h1> {/* have to stringify to get boolean value */}
            <h1 className ="bg-light" > Majors: {this.props.majors.join()} </h1>
            </fragment>
        )
    }
}
root.render([ <GreetingsFunctionalComponent name = "Jennifer Hudson"/>, <GreetingsClassComponent name = "Jane Doe" gender = "female" age = {30} graduate = {true} majors = {['maths', 'science']}/> ]);