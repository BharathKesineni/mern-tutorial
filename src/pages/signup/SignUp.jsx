import React from 'react'

import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className=''text-3xl font-semibold text-center text-gray-300>
                SignUp <span className='text-blue-500'> ChatApp </span>
            </h1>
            <form className='form'>
                <div >
                    <label className="label p-2">
                        <span className='text-base label-text'>Fullname</span>
                    </label><br></br>
                    <input type='text' placeholder="Bharath Kesineni" className="w-input input-bordered h-10"/>
                </div>
                <div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Username</span>
                    </label><br></br>
                    <input type='text' placeholder="venkat kesineni" className="w-input input-bordered h-10"/>
                </div>

                <div>
                    <label className="label">
                        <span className='text-base label-text'>Password</span>
                    </label><br></br>
                    <input type='password' placeholder="Enter your password" className="w-full input input-bordered h-10"/>
                </div>

                <div>
                    <label className="label">
                        <span className='text-base label-text'>confirmPassword</span>
                    </label><br></br>
                    <input type='password' placeholder="confirm password" className="w-full input input-bordered h-10"/>
                </div>

                </div>

                <GenderCheckBox/>
                <a className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block' href="#" >Already have an account?</a>
                <div>
                    <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                </div>



            </form>

        </div>
    </div>
  )
}

export default SignUp;


//STARTER CODE FOR THE SIGNUP COMPONENT



// import React from 'react'

// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className=''text-3xl font-semibold text-center text-gray-300>
//                 SignUp <span className='text-blue-500'> ChatApp </span>
//             </h1>
//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>Fullname</span>
//                     </label>
//                     <input type='text' placeholder="Bharath Kesineni" className="w-input input-bordered h-10"/>
//                 </div>
//                 <div>
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type='text' placeholder="venkat kesineni" className="w-input input-bordered h-10"/>
//                 </div>

//                 <div>
//                     <label className="label">
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type='password' placeholder="Enter your password" className="w-full input input-bordered h-10"/>
//                 </div>

//                 <div>
//                     <label className="label">
//                         <span className='text-base label-text'>confirmPassword</span>
//                     </label>
//                     <input type='password' placeholder="confirm password" className="w-full input input-bordered h-10"/>
//                 </div>

//                 </div>

//                 <GenderCheckBox/>
//                 <a className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block' href="#" >Already have an account?</a>
//                 <div>
//                     <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//                 </div>



//             </form>

//         </div>
//     </div>
//   )
// }

// export default SignUp