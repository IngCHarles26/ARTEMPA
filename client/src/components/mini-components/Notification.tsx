import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { delMessage, setMessage } from "../../redux/slices/notSlice";
import { useDispatch } from "react-redux";

const bgStyles = {
  success:'bg-green-900 border-green-500 text-green-50',
  info:   'bg-blue-900 border-blue-500 text-blue-50',
  alert:  'bg-yellow-900 border-yellow-500 text-yellow-50',
  error:  'bg-red-900 border-red-500 text-red-50',
}

const strokeStyles = {
  success:'stroke-green-600',
  info:   'stroke-blue-600',
  alert:  'stroke-yellow-600',
  error:  'stroke-red-600',
}

function AlertMessage() {
  const { message , type , visible} = useSelector((st:TypeStore)=>st.not)
  const dispatch = useDispatch();



  return ( 
    <div className={` 
      fixed bottom-2 right-2 transition-all hover:scale-105 bg-neutral-400 flex items-start p-1 rounded-lg border-t-4
      ${!visible && 'hidden'} ${bgStyles[type]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`h-6 mr-2 ${strokeStyles[type]}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>

        <div>
          {
            message.map((el,ix)=>
              <p
                key={`alertMessage_${ix}`}
                className={`text-wrap w-52 ${message.length > 1 ? 'text-sm' : 'text-base'}`}
              > {el}</p>)
          }
        </div>

        <button
          onClick={()=>dispatch(delMessage())}
          className="text-gray-600 hover:bg-white/30 p-1 rounded-md transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-4 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
    </div>
  );
}



export default AlertMessage;