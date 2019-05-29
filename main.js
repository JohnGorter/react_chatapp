

class MainScreen extends React.Component {
  render(){
    return (
    <ReactRouterDOM.Switch>
        <ReactRouterDOM.Route path='/main' component={Main}></ReactRouterDOM.Route>
        <ReactRouterDOM.Route path='/' component={Login}></ReactRouterDOM.Route>
    </ReactRouterDOM.Switch>);
  }
}

class Main extends React.Component {
    /* 
    (Class Constructor)	
componentWillMount	Invoked once before initial rendering (setting state does not trigger re-render)
(render)	
componentDidMount
*/
    constructor(){
        console.log("constructor");
        super();
        this.state  = { 
            showChat : false,
        };
    }

    setShowChat = (event) => {
       this.setState({showChat: true})
    }

    closeChat = () => this.setState({showChat:false})

    render() {
        let chat = this.state.showChat ?  
            <Chat closeChat={this.closeChat}></Chat> : 
            <div className="startChat" onClick={this.setShowChat}>Start a chat with a real person</div>
        return (         
        <div>
            <AppBar title="Motoren"></AppBar>
            <SearchBar></SearchBar>
            <ListView></ListView>
            {chat}
        </div>
    );}
}
