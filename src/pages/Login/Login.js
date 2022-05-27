import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useToken from '../../hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token]=useToken(gUser || user);
       
    const navigate =useNavigate();
        if (error) {
          return (
            <div>
              <p>Error: {error.message}</p>
            </div>
          );
        }
       
        let signInError;
       
        
        if(loading || gLoading){
          return <button class="btn loading">loading</button>
        }
        if(error || gError){
        signInError = <p>{error?.message || gError?.message}</p>
        }
        if(token){
        navigate('/');
        }
        const onSubmit = data => {
        
          signInWithEmailAndPassword(data.email, data.password)
        };
    return (
        <div className='flex h-screen justify-center items-center bg-black 
        '>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl">Log in</h2>
    <form  onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">email</span>
    
  </label>
  <input type="email" placeholder="Your email here" class="input input-bordered w-full max-w-xs"
  {...register("email",  {
    required:{
       value:true,
       message :'Email is requered'
    },
    pattern: {
      value: /[A-Za-z]{3}/,
      message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
    }
  })}
  />
  <label class="label">
  {errors.email?.type === 'required' &&  <span class="label-text-alt text-red">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red">{errors.email.message}</span>}
   
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">password</span>
    
  </label>
  <input type="password" placeholder="Your password here" class="input input-bordered w-full max-w-xs"
  {...register("password",  {
    required:{
       value:true,
       message :'password is requered'
    },
    minLength: {
      value: 6,
      message: 'Provide 6 character' // JS only: <p>error message</p> TS only support string
    }
  })}
  />
  <label class="label">
  {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
   
  </label>
</div>
{signInError}
<input className='btn w-full max-w-xs' type="submit" value='login' />
    </form>
    <p>New to doctor portals? <Link className='text-primary' to='/signup'>Plz register</Link></p>
    <div class="divider">OR</div>
    <button onClick={()=>signInWithGoogle()} class="btn btn-accent">continue with google</button>
    </div>
  </div>
</div>
            
        
    );


};

export default Login;