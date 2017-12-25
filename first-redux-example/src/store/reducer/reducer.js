let state={
    name: 'name of developer',
    salary: 'salary of developer',
    occupation: 'occupation of developer'
}

function storeReducers(state = 0, action){
    switch(action.type){
        case 'aashir':
        return{ name: 'aashir', occupation: 'full stack developer', salary: '200000'}
        break;
        case 'shoaib':
        return{ name: 'shobib', occupation: 'full stack developer', salary: '200000'}
        break;
        case 'zuhaib':
        return{ name: 'zuhaib', occupation: 'full stack developer', salary: '200000'}
        break;
        case 'faiz':
        return{ name: 'faiz', occupation: 'full stack developer', salary: '200000'}
        break;
        default:
        return{
            name: 'name of developer',
            salary: 'salary of developer',
            occupation: 'occupation of developer'
        } 
    }
}

export default storeReducers;