import Error404 from '../../containers/errors/Error404'
import Home from '../../containers/pages/Home'
import Dashboard from '../../containers/pages/Dashboard'
// import Cases from './containers/pages/Cases'
// import Services from './containers/pages/Services'
// import About from './containers/pages/About'
import Blog from '../../containers/pages/blog/Blog'
// import Careers from './containers/pages/Careers'
// import Contact from './containers/pages/Contact'
// import Category from './containers/pages/Category'
// import Search from './containers/pages/Search'
// import PostDetail from './containers/pages/PostDetail'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from "framer-motion"

import React from 'react'
import ResetPassword from '../../containers/auth/ResetPassword'
import ResetPasswordConfirm from '../../containers/auth/ResetPasswordConfirm'

const AllRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='*' element={<Error404/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/forgot_password' element={<ResetPassword/>}/>
                <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>}/>
                {/* <Route path='/casos' element={<Cases/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path='/nosotros' element={<About/>}/>
                <Route path='/carreras' element={<Careers/>}/>
                <Route path='/category/:slug' element={<Category/>}/>
                <Route path='/search/:term' element={<Search/>}/>
                <Route path='/blog/:slug' element={<PostDetail/>}/>
                <Route path='/contacto' element={<Contact/>}/> */}
            </Routes>
        </AnimatePresence>
  )
}

export default AllRoutes
