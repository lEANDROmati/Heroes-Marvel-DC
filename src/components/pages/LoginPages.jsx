import { useNavigate } from "react-router-dom"

export const LoginPages =()=>{

    const Navigate = useNavigate()

    const onLogin = ()=>{
        Navigate("/marvel")
    }
    return(

       <div className="container mt-5">
        <h1>login</h1>

        <hr />

        <button onClick={onLogin} className="btn btn-primary" >login</button>
        
       </div>
    )
}