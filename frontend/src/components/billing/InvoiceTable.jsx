// InvoiceTable.jsx

import InvoiceRow from "./InvoiceRow";

const InvoiceTable = ({ invoices = [] }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-semibold mb-5">
        Invoices
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="bg-slate-100 border-b">
              <th className="px-4 py-3 text-left">
                Invoice ID
              </th>

              <th className="px-4 py-3 text-left">
                Amount
              </th>

              <th className="px-4 py-3 text-left">
                Date
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <InvoiceRow
                key={invoice.id}
                invoice={invoice}
              />
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default InvoiceTable;