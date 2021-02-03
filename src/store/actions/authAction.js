export const signIn = (credential) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(credential.email, credential.password)
        .then(() => {
            dispatch({type: 'SIGNED_IN_SUCCESS'})
          })
          .catch(
            (err) => {
                dispatch({type: 'SIGNED_IN_ERROR', err})
            }
          );
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
                .then( () => {
                    dispatch({type: 'SIGNED_OUT_SUCCESS'})
                });
    }
}
