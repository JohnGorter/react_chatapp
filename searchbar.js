const SearchBar = ({onChange}) => (
    <AppContext.Consumer>
        {(context) => (
            <div style={{marginTop:'15vh'}} >Search <input type="search" onChange={context.filter} /> <button>Go</button> </div>
        )}
    </AppContext.Consumer>
);
