import React , { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import Input from '../../components/common/input';
import Form , {renderButton} from '../../components/form';
import { LoginUser } from '../../store/authStore';
import router, { useRouter } from 'next/router'


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const LoginForm  = () => {
   const Route_Home = "/";

    let [account , setAccount] = useState({jwt : "" , username : "" , password : ""});
    const dispatch = useDispatch();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const jwt = await loginUser({
            account
          });
          account.jwt = jwt.token;
          dispatch(LoginUser(account));
          router.push(Route_Home);
        }
    const HandleInputChange = e => {
        let acc = {...account};
        acc[e.currentTarget.name] = e.currentTarget.value;
        setAccount(acc);
    }    
    return (
        <div className="container rtl">
        <form onSubmit={HandleSubmit} className="p-4" >
        <Input name="username" value={account.username} label="نام کاربری" onInputChange={ HandleInputChange} />
        <Input name="password" value={account.password} label="رمز عبور" onInputChange={ HandleInputChange} />
      
        {/* <button onClick="" className="mt-3 btn btn-primary">ورود</button> */}

        {renderButton("ورود")}
    </form> 
    </div>)
}
 
export default LoginForm;