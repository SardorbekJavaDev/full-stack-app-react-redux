import React, { useState } from 'react'
import { Input } from '../ui'
import { icon } from '../constants'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='text-center'>
      <main class="form-signin w-25 m-auto">
        <form>
          <img class="mb-4" src={icon} alt="" width="150" />
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

          <Input label={'Email address'} state={email} setState={setEmail} type={'email'}/>
          <Input label={'Password'} state={password} setState={setPassword} type={'password'}/>
        
          <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button class="btn btn-primary w-100 py-2" type="submit">Sign up</button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  )
}

export default Login