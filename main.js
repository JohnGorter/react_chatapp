

let data = [
    {id:"1",naam:"honda", model:"fireblade", plaat:"http://john.jpg"},
    {id:"2",naam:"suzuki", model:"gsx", plaat:"http://john.jpg"},
    {id:"3",naam:"ducati", model:"monster", plaat:"http://john.jpg"},
    {id:"4",naam:"triumph", model:"speed tripple", plaat:"http://john.jpg"},
    {id:"5",naam:"kawasaki", model:"z1000", plaat:"http://john.jpg"},
    {id:"6",naam:"aprillia", model:"650", plaat:"http://john.jpg"},
    {id:"7",naam:"bmw", model:"onzin", plaat:"http://john.jpg"},
    {id:"8",naam:"honda", model:"fireblade", plaat:"http://john.jpg"},
    {id:"9",naam:"suzuki", model:"gsx", plaat:"http://john.jpg"},
    {id:"11",naam:"ducati", model:"monster", plaat:"http://john.jpg"},
    {id:"12",naam:"triumph", model:"speed tripple", plaat:"http://john.jpg"},
    {id:"13",naam:"kawasaki", model:"z1000", plaat:"http://john.jpg"},
    {id:"14",naam:"aprillia", model:"650", plaat:"http://john.jpg"},
    {id:"15",naam:"bmw", model:"onzin", plaat:"http://john.jpg"} ,
];

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
            motoren : data,
            filteredlist : data,
            filter:(event) => {
                this.setState({filteredlist: this.state.motoren.filter((m) => event.target.value == "" ||  m.naam.indexOf(event.target.value) > -1)})
             }
        };
    }


    setShowChat = (event) => {
       this.setState({showChat: true})
    }

    // filter = (event) => {
    //    this.setState({filteredlist: this.state.motoren.filter((m) => event.target.value == "" ||  m.naam.indexOf(event.target.value) > -1)})
    // }

    closeChat = () => this.setState({showChat:false})

    render() {
        console.log("render");
        let child = this.state.filteredlist.length > 0  ? <ListView></ListView> : <div>-no items-</div>
        let chat = this.state.showChat ?  
            <Chat closeChat={this.closeChat}></Chat> : 
            <div className="startChat" onClick={this.setShowChat}>Start a chat with a real person</div>
        return (         
        <div>
            <AppContext.Provider value={this.state}>
                <AppBar title="Motoren"></AppBar>
                <SearchBar></SearchBar>
                {child}
                {chat}
            </AppContext.Provider>
        </div>
    );}
}
