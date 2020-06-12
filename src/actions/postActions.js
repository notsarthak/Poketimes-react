export const deletePost=(id)=>{
    return {
        type:'DELETE_POST',
        id
    }
}

//or
/*
const deletePost=(id)=>{
    return {
        type:'DELETE_POST',
        id
    }
}

export default deletePost;
}*/
//if we do it like this we won't have to use object destructuring in Post.js file to import the fn.