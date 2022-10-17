const initialstate={
    task:[] ,
    complete:[]
}
export const reducerfun=(state = initialstate , action)=>{
    let temptask = [...state.task]
    let tempcomplete=[...state.complete]
     switch(action.type){
        case "ADD":
            temptask.push(action.payload)
            return{
                ...state , task:temptask
            }
        case "DELETE":
            temptask.splice(action.payload , 1)
            return{
               ...state , task:temptask
            }
        case "DELETE1":
            tempcomplete.splice(action.payload , 1)
            return{
                ...state , complete:tempcomplete 
            }
        case "TRANSFERCOM":
            temptask.splice(action.payload.index , 1)
            tempcomplete.push(action.payload.task)
            return{
               ...state , task:temptask , complete:tempcomplete
            }
        case "TRANSFERINC":
            
            tempcomplete.splice(action.payload.index , 1)
            temptask.push(action.payload.task)
            return{
               ...state , task:temptask , complete:tempcomplete
            }
        case "EDIT":
            temptask.splice(action.payload.index , 1 , action.payload.task)
        return{
            ...state , task:temptask
        }
        case "EDIT1":
            tempcomplete.splice(action.payload.index , 1 , action.payload.task)
        return{
            ...state , complete:tempcomplete
        }
        default:
            return{
                ...state
            }
     }
}