import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex- gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor -pointer'>
            <div className='avatar-online'>
         
            </div>
            <div className='w-12 rounded-full'>
            <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-80.png" alt="user avatar" />

            </div>
            <div className='flex flex-col flex-1'></div>
            <div className='flex gap-3 justify-between' >
                <p className='font-bold text-gray-200'>Bharath kesineni</p>
                <span className='text-xl'>😇</span>
            </div>

        </div>
        <div className='divider my-0 py-0 h-1'/>
    </>
    

  )
}

export default Conversation



//STARTER CODE SNIPPET


// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//         <div className='flex- gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor -pointer'>
//             <div className='avatar-online'>
         
//             </div>
//             <div className='w-12 rounded-full'>
//             <img src="" alt="user avatar" />

//             </div>
//             <div className='flex flex-col flex-1'></div>
//             <div className='flex gap-3 justify-between' >
//                 <p className='font-bold text-gray-200'>Bharath kesineni</p>
//                 <span className='text-xl'>😇</span>
//             </div>

//         </div>
//         <div className='divider my-0 py-0 h-1'/>
//     </>
    

//   )
// }

// export default Conversation