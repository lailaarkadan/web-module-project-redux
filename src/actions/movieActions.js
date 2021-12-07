export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload: id});
}

export const addMovie = (title) => {
     return({type:ADD_MOVIE, payload: title});
}