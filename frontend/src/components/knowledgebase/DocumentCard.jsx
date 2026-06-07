// DocumentCard component for displaying document information


const DocumentCard = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3>{title}</h3>
      <p className={color}>{value}</p>  
    </div>
  )
}

export default DocumentCard