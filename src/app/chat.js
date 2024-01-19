"use client"
import { useCompletion } from 'ai/react';
import { MdOutlineClose } from "react-icons/md";

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
        <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
            <output>{completion}</output>
            <MdOutlineClose onClick={() => {setIsChatting(!isChatting)}} />
            <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-8">
                <label className="grow">
                    <input
                        className="w-full max-w-md bottom-0 border border-gray-300 rounded shadow-xl p-2"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask anything..."
                    />
                </label>
                <button type="button" onClick={stop}>
                    Stop
                </button>
                <button disabled={isLoading} type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}