import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from '../services'
const CommentsForm = ({ slug }) => {
    const [Error, setError] = useState(false)
    const [LocalStorage, setLocalStorage] = useState(null)
    const [showSuccessMessage, setshowSuccessMessage] = useState(false)
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();
    useEffect(() => {
        nameEl.current.value=window.localStorage.getItem('name')
        emailEl.current.value=window.localStorage.getItem('email')
    }, [])
    const handleCommentSubmition= () =>{
        setError(false)
        const {value:comment} = commentEl.current
        const {value:name} = nameEl.current
        const {value:email} = emailEl.current
        const {checked:storeData} = storeDataEl.current
      
        if(!comment ||!name||!email){
            setError(true)
            return;
        }
        const commentObj={
            name,email,comment , slug
        }
        if(storeData){
            window.localStorage.setItem('name',name)
            window.localStorage.setItem('email',email)
        }
        else{
            window.localStorage.removeItem('name',name)
            window.localStorage.removeItem('email',email)
        }
        submitComment(commentObj)
            .then((res) =>{
                setshowSuccessMessage(true)
                setTimeout(() => {
                    setshowSuccessMessage(false)
                }, 3000);
            })
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a reply</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea ref={commentEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Comment"
                    name="Comment"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input type="text" ref={nameEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Name"
                    name="Name"
                />
                  <input type="text" ref={emailEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="email"
                    name="email"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input type="checkbox" ref={storeDataEl} id="storedata" name="storedata" value="true" />
                    <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">save my email and name for the next time i comment</label>
                </div>
            </div>
            {Error && <p className="text-xs text-red-500">All fields are required.</p>}
            <div className="mt-8">  
                <button type="button"
                 onClick={handleCommentSubmition}
                 className="transition duration-500 ease-in-out hover:bg-blue-500 bg-blue-300 hover:scale-105 rounded-full text-lg px-8 py-3 cursor-pointer text-white hover:text-black"
                 >
                    Post Comment
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-blue-500">Comment Submited For Review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
