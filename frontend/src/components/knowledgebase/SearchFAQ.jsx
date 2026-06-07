// SearchFAQ component for searching through FAQs

const SearchFAQ = () => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-md">
        <input 
        type='text'
        placeholder='Search'
        className='w-64 border border-gray-300 px-4 shadow-md py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button 
        className='bg-blue-500 text-white px-4 shadow-md py-2 rounded-lg ml-5'
        >
        🔍 Search..
        </button>
    </div>
  )
}

export default SearchFAQ