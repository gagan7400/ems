import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('');
    let nav = useNavigate()
    let submitHandler = async (e) => {
        e.preventDefault();
        try {
            let data = await fetch('http://localhost:4000/api/admin/login', {
                method: "POST",
                body: JSON.stringify({ email, password }), headers: {
                    "Content-Type": "application/json"
                }
            })
            let res = await data.json();
            if (res.result) {
                console.log(res);
                localStorage.setItem("token", JSON.stringify(res.token));
                localStorage.setItem("admin", JSON.stringify(res.user));
                nav("/dashboard")
            } else {
                console.log(res.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full  justify-center flex items-center   h-[90vh]  '>
            <form style={{ width: "500px" }} className=' bg-amber-300 p-5  my-5 ' onSubmit={submitHandler}>
                <h4 className='text-center text-white w-75 m-auto py-3'> Admin Register </h4>
                <div className="form-group mb-3">
                    <label htmlFor="email">email</label>
                    <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} className="form-control" placeholder="enter Email" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">password</label>
                    <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="form-control" placeholder="enter Password" />
                </div>
                <button type="submit" className="btn btn-primary"> Submit </button>
            </form>

        </div>
    )
}
