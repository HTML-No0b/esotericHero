import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { LockClosedIcon } from '@heroicons/react/20/solid'

import Auth from  '../utils/auth'

const LoginForm = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  const [login, { error, data }] = useMutation(LOGIN_USER);

  useEffect(() =>{
    if (error) {
      setShowAlert(true);
    }else{
      setShowAlert(false);
    }
  }, [error])

  const handleChange = (event)  => {
    const { name, value } =  event.target;

    setFormState({ ...formState, [name]:value })
    };

    const handleFormSubmit  = async (event) => {

      event.preventDefault();
      console.log(formState);

      const form = event.currentTarget;
      if (form.checkValidity() === false){
        event.preventDefault();
        event.stopPropagation();
      }

      try {
        const { data} = await login({
          variables: { ...formState },
        });

        console.log(data)
        Auth.login(data.login.token);

      } catch (e){
        console.error(e);
      }

      setFormState({
        email: '',
        password: '',
      })
  };


  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/Register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Register
              </a>
            </p>
          </div>
          <div>
            { data ? (
              <p>
                Success! You may now head { ' ' }
                <Link to ='/'>back to the homepage.</Link>
              </p>

            ) : (

              <form className="mt-8 space-y-6" action="#" onSubmit={handleFormSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    onChange = {handleChange}
                    value={formState.email}
                    
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    onChange = {handleChange}
                    value={formState.password}
                    
                  />
                </div>
                
              </div>

              <div>
                <button
                  type="submit"
                  style={{ cursor: 'pointer'}}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          )}
          
          { error && (
            <div className=" ">
              {error.message}
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  )
}


export default LoginForm