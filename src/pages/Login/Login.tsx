import userAdapter from "@/adapters/user.adapter"
import useFetch from "@/custom-hooks/useFetch"
import { useAppDispatch } from "@/redux/hooks"
import { setUser } from "@/redux/states/user.slice"
import authService from "@/services/auth.service"
import { EventInputChange, EventSubmit } from "@/types/DOMEvents"
import { IUser, IUserLogin } from "@/types/user"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [inputs, setInputs] = useState<IUserLogin>({
    email:"",
    password:""
  })
  const navigate = useNavigate()
  const [user, fetchUser, loadingUser,errorUser] = useFetch<IUser>(succesLogin)
  const dispatch = useAppDispatch()

  function succesLogin(user:IUser){
    console.log("user",user)
    const clean = userAdapter(user);
    dispatch(setUser(clean))
    // navigate("/")
  }

  function handleChange(e:EventInputChange){
    setInputs(prev => {
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  async function handleSubmit(e:EventSubmit) {
    e.preventDefault()
    if (inputs.email.length && inputs.password.length) {
      // await fetchUser(authService.login(inputs))
      navigate("/")
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
