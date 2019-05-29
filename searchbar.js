const SearchBar = ({onChange}) => (

    <div style={{marginTop:'15vh'}} >Search <input type="search" onChange={(event) => AppActions.applyFilter(event.target.value)} /> <button>Go</button> </div>
      
);
