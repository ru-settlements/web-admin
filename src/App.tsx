import './App.css'
import Layout from './Layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dictionaries from './pages/Dictionaries'
import Error404 from './pages/errors/Error404'
import Search from './pages/dictionaries/Search'
import Features from './pages/dictionaries/Features'
import DictionaryId from './pages/dictionaries/DictionaryId'
import { Posts } from './pages/Posts'

export default function App() {
  return (
    <Layout>
      <div>hello</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="dictionaries" element={<Dictionaries />}>
          <Route index element={<Features />} />
          <Route path="features" element={<Features />} />
          <Route path="search" element={<Search />} />
          <Route path=":dictionaryId" element={<DictionaryId />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  )
}
