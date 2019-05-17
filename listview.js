class ListView extends React.Component {

    constructor(){
        super(); 
        console.log("-ListView constructor-");
    }

    componentWillMount(){
        console.log("-ListView component will mount-");
    }

    componentDidMount(){
        console.log("-ListView component did mount-");
    }


    componentWillUnmount(){
        console.log("-ListView component will unmount-");
    }

    render(){ 
        console.log("-ListView render-");
        return (
            <div className="listView"> { this.props.items.map((item) => <div key={item.id} className="listitem">
                <div style={{padding:20}}><img src={item.plaat} /></div>
                <div> 
                    <div>{item.naam}</div>
                    <div>{item.model}</div>
                </div>
            </div>)} </div>
        );
    }
}