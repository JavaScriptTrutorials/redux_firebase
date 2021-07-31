export const createProject = (project) => {
    // normally we here return an action
    /*
    return {
        type: 'ADD_PROJECT',
        project
    };
    */
    // but when we use thunk, we return a function
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        dispatch({type: 'CREATE_PROJECT', project})
    };
}