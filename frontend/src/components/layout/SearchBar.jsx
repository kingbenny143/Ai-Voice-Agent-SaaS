// SearchBar component - Search bar for top navigation bar
import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <input className="w-50 h-7 px-6 border border-slate-300 rounded-md m-2 text-black" type="text" placeholder="Search" />
        <button className="bg-slate-300 text-slate-800 px-3 py-1 rounded-md">🔍 Search...</button>
    </div>
  )
}

export default SearchBar    