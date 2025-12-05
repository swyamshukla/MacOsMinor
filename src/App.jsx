import React from 'react'



import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/MainLayout/MainLayout'
import Application from './components/app/Application'
import Icons from './components/app/Icons'

import Camera from './components/functionality/Camera'
import Pallete from './components/functionality/Pallete'


const App = () => {
  let router = createBrowserRouter([
    {
      path:'/',
      element : <MainLayout />,
      children:[
        {
          // path:'/', 
          index:true, 
          element: <Icons />
        },
 
        {
          path:'/camera',
          element: <div className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-700 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <Camera />
</div>

        },
        {
          path:'/pallete',
          element: <Pallete/>
        },
      ]
    }
  ])


  return ( <RouterProvider router={router}/> )
}


export default App