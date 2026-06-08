import { useState } from "react";

import BillingSummaryCard from "../../components/billing/BillingSummaryCard";
import SubscriptionDetails from "../../components/billing/SubscriptionDetails";
import PlanCard from "../../components/billing/PlanCard";
import PaymentMethod from "../../components/billing/PaymentMethod";
import InvoiceTable from "../../components/billing/InvoiceTable";
import BillingHistory from "../../components/billing/BillingHistory";
import UpgradePlanModal from "../../components/billing/UpgradePlanModal";

const BillingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const invoices = [
    {
      id: "INV-001",
      amount: "₹999",
      date: "2026-06-01",
      status: "Paid",
    },
    {
      id: "INV-002",
      amount: "₹999",
      date: "2026-05-01",
      status: "Paid",
    },
    {
      id: "INV-003",
      amount: "₹999",
      date: "2026-04-01",
      status: "Pending",
    },
  ];

  const billingHistory = [
    {
      id: 1,
      month: "June 2026",
      date: "2026-06-01",
      amount: "₹999",
      status: "Paid",
    },
    {
      id: 2,
      month: "May 2026",
      date: "2026-05-01",
      amount: "₹999",
      status: "Paid",
    },
    {
      id: 3,
      month: "April 2026",
      date: "2026-04-01",
      amount: "₹999",
      status: "Paid",
    },
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold text-center text-gray-800">
        Billing
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <BillingSummaryCard
          title="Monthly Cost"
          value="₹999"
        />

        <BillingSummaryCard
          title="Current Plan"
          value="Starter"
        />

        <BillingSummaryCard
          title="Invoices"
          value="12"
        />

        <BillingSummaryCard
          title="Calls Used"
          value="350 / 500"
        />

      </div>

      {/* Subscription */}
      <SubscriptionDetails
        plan="Starter"
        status="Active"
        renewalDate="15 July 2026"
        used={350}
        total={500}
      />

      {/* Plans */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Available Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <PlanCard
            plan="Starter"
            price="₹999"
            isCurrent={true}
            features={[
              "500 Calls",
              "Basic Analytics",
              "Email Support",
            ]}
          />

          <PlanCard
            plan="Pro"
            price="₹2999"
            features={[
              "Unlimited Calls",
              "Advanced Analytics",
              "AI Customization",
            ]}
          />

          <PlanCard
            plan="Enterprise"
            price="₹9999"
            features={[
              "Unlimited Calls",
              "Priority Support",
              "Dedicated Manager",
            ]}
          />

        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Upgrade Plan
        </button>
      </div>

      <PaymentMethod />

      <InvoiceTable invoices={invoices} />

      <BillingHistory history={billingHistory} />

      <UpgradePlanModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

    </div>
  );
};

export default BillingPage;