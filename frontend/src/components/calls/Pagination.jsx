// Pagination component for call table pagination
const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4 w-full">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
        <a href="#" className="text-gray-500 px-2">1</a>
        <a href="#" className="text-gray-500 px-2">1</a>
        <a href="#" className="text-gray-500 px-2">2</a>
        <a href="#" className="text-gray-500 px-2">3</a>
        <a href="#" className="text-gray-500 px-2">4</a>
        <a href="#" className="text-gray-500 px-2">5</a>
        <a href="#" className="text-gray-500 px-2">6</a>
        <a href="#" className="text-gray-500 px-2">..</a>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
    </div>
  )
}

export default Pagination