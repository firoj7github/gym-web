import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
        if (error) {
          return (
            <div>
              <p>Error: {error.message}</p>
            </div>
          );
        }
        let signInError;
        if(loading || gLoading ||updating){
          return <button class="btn loading">loading</button>
        }
        if(error || gError ||updateError){
        signInError = <p>{error?.message || gError?.message ||updateError?.message}</p>
        }
        if(gUser){
          console.log(gUser);
        }
        const onSubmit = async data => {
          console.log(data)
         await createUserWithEmailAndPassword(data.email, data.password)
         await updateProfile({ displayName: data.name });
         navigate('/appionment')
        };
    return (
        <div className='flex h-screen justify-center items-center
        '>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl">sign up</h2>
    <form  onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">name</span>
    
  </label>
  <input type="text" placeholder="Your name here" class="input input-bordered w-full max-w-xs"
  {...register("name",  {
    required:{
       value:true,
       message :'Name is requered'
    }
  })}
  />
  <label class="label">
  {errors.name?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.name.message}</span>}
  
   
  </label>
</div>
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
  {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
   
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
<input className='btn w-full max-w-xs' type="submit" value='signup' />
    </form>
    <p>Aready have an account? <Link className='text-primary' to='/login'>Plz Login</Link></p>
    <div class="divider">OR</div>
    <button onClick={()=>signInWithGoogle()} class="btn btn-accent">continue with google</button>
    </div>
  </div>
</div>
            
    );
};

export default Signup;