import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-80.png"} />
{/* {<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />} */}
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hii! What's up??</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:40                                                                                                                     </div>

    </div>
  )
}

export default Message