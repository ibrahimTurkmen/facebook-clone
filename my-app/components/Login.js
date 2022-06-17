import React from 'react'
import Image from "next/image";
import {signIn} from "next-auth/react"
function Login() {
  return (
    <div className='mt-9 grid place-items-center  '>
         <Image
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          layout="fixed"
          width={300}
          height={300}
          objectFit="contain"
        />
    <h1 onClick={signIn} className="mt-6 p-5 bg-blue-500 text-white text-center cursor-pointer rounded-full">
        Login with Facebook
    </h1>
    </div>
  )
}

export default Login