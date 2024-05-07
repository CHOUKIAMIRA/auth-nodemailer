import axios from "axios"
import { GETCURRENT, LOGIN, LOGOUT, REGISTER } from "../actionType/actionType"
import { alert_error } from "./errorAction"
const mailer=async(email,name)=>{
    try {
      const res= await axios.post("http://localhost:8000/user/sendmail",{email,name})
    console.log(res)
    if (res.status===200){
      alert("go back to your email")
    }
    else { alert(res.data.msg) }
    } catch (error) {
      console.log(error)
    }
    
        }
export const registeruser = (data,navigate)=>async(dispatch)=>{
try {
    const res = await axios.post("http://localhost:8000/user/register",data)
    if (res.status===200){
mailer(data.email,data.name)
    }
dispatch({
    type:REGISTER,
    payload:res.data
})
navigate("/")
} catch (error) {
   console.log(error) 
   error.response.data.errors.forEach(el => {
    dispatch(alert_error(el.msg))
   });
}
}
export const loginuser = (data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("http://localhost:8000/user/login",data)
    dispatch({
        type:LOGIN,
        payload:res.data
    })
    navigate("/")
    } catch (error) {
       console.log(error)
       error.response.data.errors.forEach(el => {
        dispatch(alert_error(el.msg))
       }); 
    }
    }
    export const getcurrent=()=>async(dispatch)=>{
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        try {
            const res=await axios.get("http://localhost:8000/user/current",config)
            dispatch({
                type: GETCURRENT,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    export const logout =(navigate)=>{
navigate("/")
return {
    type: LOGOUT
}
    }