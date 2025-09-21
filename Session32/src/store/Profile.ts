import { createStore,combineReducers } from "redux"

type User={
    id:number
    userName:string
    gender:string
    dateBirth:string
    address:string
}
const initialState:User={
    id:1,
    userName:"Nguyen Van Nam",
    gender:"Nam",
    dateBirth:"20/03/2023",
    address:"Thanh Xuan,Ha Noi"
}
const UPDATE_USER="UPDATE_USER"
interface UpdateUserAction{
    type:typeof UPDATE_USER
    payload:Partial<User>
}
type userAction=UpdateUserAction
export const updateUser=(payload:Partial<User>):UpdateUserAction=>({
    type:UPDATE_USER,
    payload,
})
function userReducer(state=initialState,action:userAction):User{
    switch(action.type){
        case UPDATE_USER:
            return {...state,...action.payload}
            default:
                return state
    }
}
export const store=createStore(combineReducers({user:userReducer}))
export type RootState=ReturnType<typeof store.getState>