class Chat extends React.Component {
    constructor(){
        super(); 
        this.state = { messages:[], message:'' };
        console.log("opening the socket");
        this.ws = new WebSocket("ws://localhost:8999");
        this.ws.onmessage = (data) => { 
            let datalist = this.state.messages; 
            datalist.push(data.data);
            this.setState({messages:datalist})
        };
    }

    sendData = (event) => {
        this.ws.send("John: " + this.state.message);
    }
    setMessage = (event) => {
        this.setState({message:event.target.value});
    }
    componentWillUnmount(){
        console.log("closing the socket");
        this.ws.close();
    }

    render() {
        return (
            <div className="chatContainer">
                <div className="chatToolbar" onClick={this.props.closeChat}>X</div>
                <div className="chatList">
                    { this.state.messages.map((m) => <div>{m}</div>) }
                </div>
                <div className="chatInput"><input type="text" onChange={this.setMessage}></input><button onClick={this.sendData}>Send</button></div>
            </div>
        );
    }
}