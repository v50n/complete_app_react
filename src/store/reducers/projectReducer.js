const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]
}

const projectReducer = (state = initState, action) =>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_PROJECT': 
            console.log("project Reducer: ", action.project);
            // let newProject = state.projects.push(action.project);
            // return {
            //     ...state,
            //     projects: newProject
            // }
            // break;
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error: ', action.err);
            return state;
        default: 
            return state; // by default change nothing

    }
    //console.log(state);
    return state;
}

export default projectReducer;