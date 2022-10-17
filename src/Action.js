export const addfun=(t)=>{
    return{
        type:"ADD" ,
        payload:t
    }
}
export const deletefun=(t)=>{
    return{
        type:"DELETE" ,
        payload:t
    }
}
export const editfun=(index , task)=>{
    return{
        type:"EDIT" ,
        payload:{index , task}
    }
}
export const editfun1=(index , task)=>{
    return{
        type:"EDIT1" ,
        payload:{index , task}
    }
}
export const deletefun1=(t)=>{
    return{
        type:"DELETE1" ,
        payload:t
    }
}
export const transfertocom=(task , index)=>{
    return{
        type:"TRANSFERCOM" ,
        payload:{task , index}
    }
}
export const transfertoinc=(task , index)=>{
    return{
        type:"TRANSFERINC" ,
        payload:{task , index}
    }
}