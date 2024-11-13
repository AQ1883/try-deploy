import React from 'react'
import Downbar from './Downbar'

function Copyright() {
  return (
    <div className="bg-black">
        <Downbar />
        <h1 className="text-center mx-auto rounded-md w-auto py-2 px-4 text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Copyright© 2024 AHMED ALQURASHI | by AHMED ALQURASHI{" "}
          <button
            className=" rounded-md   border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#0077b5]/90 focus:shadow-none active:bg-[#0077b5]/90 hover:bg-[#0077b5]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <i className="fab fa-linkedin w-4 h-4" aria-hidden="true"></i>
          </button>
        </h1>
      </div>
  )
}

export default Copyright