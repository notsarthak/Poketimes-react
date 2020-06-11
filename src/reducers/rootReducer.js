const initState={
    posts:[
        {id:'1', title:'Squirtle Laid an Egg', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium asperiores culpa cum, illo aut laudantium ipsam aspernatur quaerat harum quae natus est, assumenda minima iusto consectetur quia explicabo ab?'},
        {id:'2', title:'Charmander Laid an Egg', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium asperiores culpa cum, illo aut laudantium ipsam aspernatur quaerat harum quae natus est, assumenda minima iusto consectetur quia explicabo ab?'},
        {id:'3', title:'A Helix Fossil was found', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium asperiores culpa cum, illo aut laudantium ipsam aspernatur quaerat harum quae natus est, assumenda minima iusto consectetur quia explicabo ab?'}
    ]
}

const rootReducer=(state=initState,action)=>{
    return state;
}

export default rootReducer;