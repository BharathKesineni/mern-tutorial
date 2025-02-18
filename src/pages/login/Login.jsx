import React from 'react'

const Login = () => {
  return (

            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>
            <form>
                <div>
                    <label htmlFor="userName" >
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input id="userName" type='text' placeholder="Enter your username" className="w-full input input-bordered h-10"/>
                    {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />  */}
                    
                </div>
                <div>
                    <label className="label">
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder="Enter your password" className="w-full input input-bordered h-10"/>
                </div>
                <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>
            </form>
        </div>

    </div>
  )
}

export default Login;




// STARTER CODE FOR THIS FILE


// import React from 'react'

// const Login = () => {
//     return (
  
//               <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//               <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                   <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                       Login
//                       <span className='text-blue-500'> ChatApp</span>
//                   </h1>
//               <form>
//                   <div>
//                       <label htmlFor="userName" >
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input id="userName" type='text' placeholder="Enter your username" className="w-full input input-bordered h-10"/>
//                       {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />  */}
                      
//                   </div>
//                   <div>
//                       <label className="label">
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type='password' placeholder="Enter your password" className="w-full input input-bordered h-10"/>
//                   </div>
//                   <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>
//               </form>
//           </div>
  
//       </div>
//     )
//   }
  
//   export default Login
  
  
  


