import userAdapter from "@/adapters/user.adapter"
import useFetch from "@/custom-hooks/useFetch"
import { useAppDispatch } from "@/redux/hooks"
import { setToken, setUser } from "@/redux/states/user.slice"
import authService from "@/services/auth.service"
import { EventInputChange, EventSubmit } from "@/types/DOMEvents"
import { IUser, IUserLogin, ResponseLogin } from "@/types/user"
import localStorageHandle from "@/utils/localStorage.handle"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [inputs, setInputs] = useState<IUserLogin>({
    email:"",
    password:""
  })
  const [user, fetchUser, loadingUser,errorUser] = useFetch<ResponseLogin>(succesLogin)
  const dispatch = useAppDispatch()

  function succesLogin(response:ResponseLogin){
    console.log("response",response)
    localStorageHandle.setItem("token",response.token)
    dispatch(setToken(response.token))
  }

  function handleChange(e:EventInputChange){
    setInputs(prev => {
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

 function handleSubmit(e:EventSubmit) {
    e.preventDefault()
    if (inputs.email.length && inputs.password.length) {
      fetchUser(authService.login(inputs))
    }
  }


  
  return (
    <form onSubmit={handleSubmit} style={{width:"50%",margin:"0 auto", display:"flex",flexDirection:"column",gap:"10px",alignItems:"center"}}>
      <div>
        <input type="email" name="email" value={inputs.email} placeholder="Your Email..." onChange={handleChange} />
      </div>
      <div>
        <input type="password" name="password" value={inputs.password} placeholder="Your Password..." onChange={handleChange} />
      </div>

      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}
