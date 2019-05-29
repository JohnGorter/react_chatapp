class ListView extends React.Component {

    constructor(){
        super(); 
        this.state = { filteredList:AppStore.getState().data};

        console.log("-ListView constructor-");
    }

    componentWillMount(){
        console.log("-ListView component will mount-");
    }

    componentDidMount(){
        console.log("-ListView component did mount-");
        AppStore.subscribe(_ => this.setState({
            filteredList: this.filter(AppStore.getState().data, AppStore.getState().filter)
        }));
    }

    componentWillUnmount(){
        console.log("-ListView component will unmount-");
    }

    filter = (data, filtercriteria) => {
        return data.filter((m) => filtercriteria == "" ||  m.naam.indexOf(filtercriteria) > -1);
     }

    render(){ 
        console.log("-ListView render-",  AppStore.getState());
        return (
            this.state.filteredList.length < 1 ? <div>-no items-</div> :
            <div className="listView"> { this.state.filteredList.map((item) => <div key={item.id} className="listitem">
                <div style={{padding:20}}><img src={item.plaat} /></div>
                <div> 
                    <div>{item.naam}</div>
                    <div>{item.model}</div>
                </div>
            </div>)} 
        </div>);
    }
}

