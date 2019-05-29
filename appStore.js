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


const AppConstants = { APPLYFILTER:'ApplyFilter'};

let AppActions = {
    applyFilter(paramfilter) { AppStore.dispatch({ type: AppConstants.APPLYFILTER,  filter: paramfilter  }); },
}

let appData = function(state = {data:data, filter:''}, action){
    switch(action.type){
    case AppConstants.APPLYFILTER:
        console.log("AppStore", "Apply Filter called with " + action.filter); 
        return { data:data, filter:action.filter};
    }    
    return state;    
}



let AppStore = Redux.createStore(appData);