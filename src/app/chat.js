"use client"
import { useCompletion } from 'ai/react';
import { MdOutlineClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaStop } from "react-icons/fa";

export default function Chat({isChatting, setIsChatting}) {
    const {
        completion,
        input,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit
      } = useCompletion({
        api: '/api/completion'
      });

    return (
        <div className="chatBox mx-auto w-full max-w-md py-4 px-4 flex flex-col stretch lg:w-1/3 rounded h-full">
            <MdOutlineClose onClick={() => {setIsChatting(!isChatting)}} />
            <output className='Output grow'>{completion}</output>
            <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-8">
                <label className="grow">
                    <input
                        className="messageBox w-full max-w-md bottom-0 border border-gray-300 rounded shadow-xl p-2"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Write a message..."
                    />
                </label>
                <button className="Stop" type="button" onClick={stop}>
                    <FaStop />
                </button>
                <button className="Send" disabled={isLoading} type="submit">
                    <IoSend />
                </button>
            </form>
        </div>
    )
}