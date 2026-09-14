
import React from 'react'
import { Search } from 'lucide-react';

const Form = () => {
  return (
    <div>
      <form className="flex items-center gap-2">

        <input
          type="text"
          placeholder="Search..."
          className="
            w-64 bg-gray-300 px-5 py-2
            outline-none border-2 border-gray-400
            rounded-2xl text-black
            transition-all duration-300 ease-in-out
            focus:w-72 focus:border-blue-500
            focus:ring-4 focus:ring-blue-300/40
            hover:bg-gray-200
          "
        />

        <button
          type="submit"
          className="
            cursor-pointer text-black
            border-2 border-gray-500
            px-5 py-2 rounded-2xl
            transition-all duration-300 ease-in-out
            hover:bg-blue-500 hover:text-white
            hover:border-blue-500
            hover:scale-110
            active:scale-95
          "
        >
          <Search
            size={20}
            className="transition-transform duration-300 hover:rotate-90"
          />
        </button>

      </form>
    </div>
  )
}

export default Form
