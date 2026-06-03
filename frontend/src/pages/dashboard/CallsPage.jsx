
import CallTable from '../../components/calls/CallTable'
import Pagination from '../../components/calls/Pagination'
import CallFilters from '../../components/calls/CallFilters'



const CallsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center flex-1 justify-center">
        Calls
      </h1>
      <CallFilters />
      <CallTable />
      <Pagination />
    </div>
  )
}

export default CallsPage;
