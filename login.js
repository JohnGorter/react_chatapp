

let MyButton = ({history}) => {
    return <button value="test" onClick={() => {history.push("/main");}}>My Login</button>
}

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            haserror: false,
            errorText: '-username password combination not valid -'
        }
    }

    checkLogin = () => {
        console.log(`current username ${this.state.username}`);
        this.setState({hasError : !(this.state.username == "john" && this.state.password == "secret" )});
        if (this.props.onLogin)
            this.props.onLogin(this.state.username == "john" && this.state.password == "secret"); 
        if (this.state.username == "john" && this.state.password == "secret" ) {
            console.log("pushing", this.props.history);
            this.props.history.push('/main');
        }
    }   

    render(){
        let error = this.state.hasError ? <div>{this.state.errorText}</div>: "";

       return <div className="loginContainer"><div className="loginDialog">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png" style={{height:'33vh'}}></img>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" name="username" value={this.state.username} onChange={(event) => this.setState({username : event.target.value})}></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="password" value={this.state.password} onChange={(event) => this.setState({password : event.target.value})}></input></dd>
                </dl>
                <button onClick={this.checkLogin}>Login</button>
                
                <BetterButton onClick={this.checkLogin}>Login</BetterButton>

                <div style={{color:'red'}}>{error}</div>
            </div>
        </div>
    }
}

let BetterButton = ReactRouterDOM.withRouter(MyButton);