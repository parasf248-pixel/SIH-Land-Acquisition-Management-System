import React from "react";
import {
  FileText,
  Download,
  Eye,
  Headphones,
} from "lucide-react";
import DaskNav from "./DaskNavbar";

const Dask4 = ({ userData }) => {
  const user = userData || {};

  const totalCompensation =
    user.totalCompensation || "24,75,000";

  const approvedAmount =
    user.approvedAmount || "24,75,000";

  const amountDisbursed =
    user.amountDisbursed || "18,50,000";

  const amountPending =
    user.amountPending || "6,25,000";

  return (
    <div className="scroll-zoom flex min-h-screen bg-[#f5f6f8]">

      {/* ================= LEFT NAVBAR ================= */}

      <aside className="w-[230px] shrink-0 min-h-screen">
        <DaskNav />
      </aside>


      {/* ================= RIGHT CONTENT ================= */}

      <main className="flex-1 min-w-0 p-5">

        <div className="text-gray-800">

          {/* HEADER */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Compensation
            </h1>

            <p className="text-sm text-gray-500">
              View your compensation assessment, payment status and related details.
            </p>
          </div>


          {/* SUMMARY */}
          <section className="scroll-left bg-white border border-gray-200 rounded-lg shadow-sm p-4">

            <h2 className="text-sm font-semibold mb-3">
              Compensation Summary
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              <SummaryCard
                title="Total Compensation"
                amount={`₹ ${totalCompensation}`}
                subtitle="(Assessment Amount)"
              />

              <SummaryCard
                title="Approved Amount"
                amount={`₹ ${approvedAmount}`}
                subtitle="(Approved)"
              />

              <SummaryCard
                title="Amount Disbursed"
                amount={`₹ ${amountDisbursed}`}
                subtitle="(Paid)"
              />

              <SummaryCard
                title="Amount Pending"
                amount={`₹ ${amountPending}`}
                subtitle="(In Progress)"
              />

            </div>

          </section>


          {/* PAYMENT + HISTORY */}
          <div className="grid scroll-right grid-cols-1 lg:grid-cols-[1.7fr_0.7fr] gap-4 mt-4">

            {/* PAYMENT STATUS */}
            <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>

                  <h2 className="text-sm font-bold mb-1">
                    Payment Status
                  </h2>

                  <h3 className="text-xs font-semibold">
                    Compensation Payment Status
                  </h3>

                  <div className="mt-4">

                    <PaymentStep
                      title="Assessment Completed"
                      completed
                    />

                    <PaymentStep
                      title="Award Approved"
                      completed
                    />

                    <PaymentStep
                      title="Payment Initiated"
                      completed
                    />

                    <PaymentStep
                      title="Final Disbursement -- In Progress"
                      active
                      last
                    />

                  </div>

                </div>


                {/* PROGRESS */}
                <div className="  border-l border-gray-200 pl-5">

                  <h2 className="text-sm font-bold">
                    Payment Progress
                  </h2>

                  <div className="mt-6">

                    <div className="flex justify-between mb-2">

                      <span className="text-xs text-gray-500">
                        Progress
                      </span>

                      <span className="text-xs font-semibold">
                        75%
                      </span>

                    </div>

                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">

                      <div className="h-full w-[75%] bg-[#21177d] rounded-full" />

                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                      ₹ {amountDisbursed} of ₹ {totalCompensation} disbursed
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* PAYMENT HISTORY */}
            <section className= "scroll-zoom bg-white border border-gray-200 rounded-lg shadow-sm p-4">

              <div className="flex items-center justify-between mb-3">

                <h2 className="text-sm font-bold">
                  Payment History
                </h2>

                <button className="text-xs text-purple-700">
                  View All
                </button>

              </div>

              <PaymentHistory
                date="25 April 2026"
                amount="10,00,000"
                status="Disbursed"
              />

              <PaymentHistory
                date="29 June 2026"
                amount="8,50,000"
                status="Disbursed"
              />

              <PaymentHistory
                date="Pending"
                amount="6,25,000"
                status="Final Disbursement"
                pending
              />

            </section>

          </div>


          {/* BREAKDOWN + DOCUMENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.7fr] gap-4 mt-4">

            {/* BREAKDOWN */}
            <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">

              <h2 className="text-sm font-bold mb-3">
                Compensation Breakdown
              </h2>

              <div className="text-xs">

                <div className="grid grid-cols-[1.5fr_1fr_0.7fr] bg-gray-100 px-3 py-2 font-semibold">
                  <span>Component</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>

                <BreakdownRow
                  component="Land Value"
                  amount="₹ 18,00,000"
                  status="Approved"
                  approved
                />

                <BreakdownRow
                  component="Additional Compensation"
                  amount="₹ 2,15,000"
                  status="Approved"
                  approved
                />

                <BreakdownRow
                  component="Other Eligible Amount"
                  amount="₹ 1,00,000"
                  status="Pending"
                />

                <div className="flex justify-end border-t mt-2 pt-2 font-bold">
                  Total: ₹ {totalCompensation}
                </div>

              </div>

            </section>


            {/* DOCUMENTS */}
            <section className="scroll-right bg-white border border-gray-200 rounded-lg shadow-sm p-4">

              <h2 className="text-sm font-bold mb-2">
                Compensation Documents
              </h2>

              <DocumentRow title="Award Documents" />

              <DocumentRow
                title="Compensation Assessment Statement"
              />

              <DocumentRow title="Payment Receipt" />

              <DocumentRow title="Disbursement Statement" />

              <button className="w-full mt-3 bg-[#7066c9] hover:bg-[#5d52b8] text-white text-xs py-2 rounded-md">
                View All Documents
              </button>

            </section>

          </div>


          {/* HELP BUTTON */}
          <div className="scroll-zoom fixed bottom-4 right-4">

            <button className="bg-[#281477] hover:bg-[#351c92] text-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-2">

              <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center">
                <Headphones size={17} />
              </div>

              <div className="text-left">

                <p className="text-xs font-semibold">
                  Need Assistance?
                </p>

                <p className="text-[10px] text-white/70">
                  Contact Support →
                </p>

              </div>

            </button>

          </div>

        </div>

      </main>

    </div>
  );
};


/* ================= SUMMARY CARD ================= */

const SummaryCard = ({
  title,
  amount,
  subtitle,
}) => (
  <div className="bg-gray-100 rounded-md px-3 py-3">

    <p className="text-xs text-gray-500">
      {title}
    </p>

    <p className="text-base font-bold text-gray-800">
      {amount}
    </p>

    <p className="text-[10px] text-gray-400">
      {subtitle}
    </p>

  </div>
);


/* ================= PAYMENT STEP ================= */

const PaymentStep = ({
  title,
  completed,
  active,
  last,
}) => (
  <div className="relative flex items-start gap-2">

    {!last && (
      <div className="absolute left-[6px] top-[13px] h-[28px] border-l border-gray-300" />
    )}

    <div
      className={`relative z-10 w-3 h-3 rounded-full shrink-0 ${
        completed
          ? "bg-green-600"
          : active
          ? "bg-orange-500"
          : "bg-gray-300"
      }`}
    />

    <p
      className={`text-xs pb-3 ${
        active
          ? "font-semibold text-orange-600"
          : "text-gray-600"
      }`}
    >
      {title}
    </p>

  </div>
);


/* ================= PAYMENT HISTORY ================= */

const PaymentHistory = ({
  date,
  amount,
  status,
  pending,
}) => (
  <div className="border-b border-gray-100 py-2">

    <p className="text-xs text-gray-400">
      {date}
    </p>

    <div className="flex items-center justify-between mt-1">

      <p className="text-xs font-semibold">
        ₹{amount}
      </p>

      <span
        className={`text-[10px] px-2 py-1 rounded-full ${
          pending
            ? "bg-orange-100 text-orange-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {status}
      </span>

    </div>

  </div>
);


/* ================= BREAKDOWN ROW ================= */

const BreakdownRow = ({
  component,
  amount,
  status,
  approved,
}) => (
  <div className="grid grid-cols-[1.5fr_1fr_0.7fr] px-3 py-2 border-b border-gray-100">

    <span>{component}</span>

    <span className="font-medium">
      {amount}
    </span>

    <span
      className={
        approved
          ? "text-green-600"
          : "text-orange-500"
      }
    >
      ● {status}
    </span>

  </div>
);


/* ================= DOCUMENT ROW ================= */

const DocumentRow = ({ title }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100">

    <div className="flex items-center gap-2">

      <div className="w-7 h-7 rounded bg-green-100 flex items-center justify-center">

        <FileText
          size={13}
          className="text-green-700"
        />

      </div>

      <span className="text-xs">
        {title}
      </span>

    </div>

    <div className="flex gap-2">

      <button className="text-purple-600">
        <Eye size={13} />
      </button>

      <button className="text-gray-500">
        <Download size={13} />
      </button>

    </div>

  </div>
);


export default Dask4;