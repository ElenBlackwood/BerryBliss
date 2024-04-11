import React from 'react'
import './_login.scss'

function Login() {
  return (
    <section className="login">
      <div className=" login__container">
        <h2 className='login__title'>Sign up</h2>
        <div className="login__form-holder">
          <form action="" method="get" className="login__login-form">
            <input required type="text"  placeholder='Your name' />
            <input required type="email" placeholder='Email Adress' />
            <input required type="password" placeholder='Password' />
            <button className="red-btn red-btn_big" type="submit" value="Submit">Continue</button>
          </form>
        </div>
        <div className="login__signin">
          <p>Already have an account? <span>Login here.</span></p>
        </div>
        <div className="login__agree">
          <form action="" className="login__chebox-form">
            <input type="checkbox" name="" id="" />
            <p>By signing up, you are agreeing to our privacy policy, terms of use and code of conduct.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login