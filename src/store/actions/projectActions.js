
export const createProject = (project) => {
   
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        // make async call to database: // before send data request in db, we connect the db and ask for ask data
        const firestore = getFirestore();
        firestore.collection('project').add({
            title: project.title,
            content: project.content,
            authorLastName: 'Nguyen',
            authorFirstName: 'Viet Son',
            authorId: 123,
            createAt: new Date()
        }).then(
            () => {
                dispatch({type: 'CREATE_PROJECT', project})
            }
        ).catch(
            (err) => {
                dispatch({type: 'CREATE_PROJECT_ERROR', err})
            }
        )
    }
};