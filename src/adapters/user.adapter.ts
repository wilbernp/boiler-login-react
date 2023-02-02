import { IUser } from "@/types/user.d.t";

export default function userAdapter(data:IUser):IUser{
    return{
        email:data.email,
        token:data.token,
        username:data.username
    }
}