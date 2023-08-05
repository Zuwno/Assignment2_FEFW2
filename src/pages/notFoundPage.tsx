import React from 'react';

type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <div className='bg-slate-100  text-white text-5xl flex flex-col justify-center items-center h-screen' style={{ backgroundImage: `url("/imgs/5451315.jpg")`, backgroundSize: 'cover', backgroundPosition: '' }}>
      <button className='border p-4 border-dashed rounded-xl font-funny text-4xl transform hover:rotate-6 hover:scale-110 transition duration-300 hover:text-clip hover:text-red-300'>
        Not Found Page 404
      </button>
    </div>
  )
}

export default NotFoundPage;
