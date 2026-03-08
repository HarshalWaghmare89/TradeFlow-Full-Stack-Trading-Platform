import { useState } from "react";
import "./BrokerageSection.css";

// Data for all tabs
const tabData = {
  equities: {
    headers: [
      "",
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],
    rows: [
      [
        "Brokerage",
        "Zero Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "0.03% or Rs. 20/executed order whichever is lower",
        "Flat Rs. 20 per executed order",
      ],
      [
        "STT/CTT",
        "0.1% on buy & sell",
        "0.025% on the sell side",
        "0.02% on the sell side",
        [
          "0.125% of the intrinsic value on options that are bought and exercised",
          "0.1% on sell side (on premium)",
        ],
      ],
      [
        "Transaction charges",
        "NSE: 0.00297%\nBSE: 0.00375%",
        "NSE: 0.00297%\nBSE: 0.00375%",
        "NSE: 0.00173%\nBSE: 0",
        "NSE: 0.03503% (on premium)\nBSE: 0.0325% (on premium)",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      [
        "SEBI charges",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
      ],
      [
        "Stamp charges",
        "0.015% or ₹1500 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
  },
  currency: {
    headers: ["", "Currency futures", "Currency options"],
    rows: [
      [
        "Brokerage",
        "0.03% or ₹ 20/executed order whichever is lower",
        "₹ 20/executed order",
      ],
      ["STT/CTT", "No STT", "No STT"],
      [
        "Transaction charges",
        "NSE: 0.00035%\nBSE: 0.00045%",
        "NSE: 0.0311%\nBSE: 0.001%",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      [
        "Stamp charges",
        "0.0001% or ₹10 / crore on buy side",
        "0.0001% or ₹10 / crore on buy side",
      ],
    ],
  },
  commodities: {
    headers: ["", "Commodity futures", "Commodity options"],
    rows: [
      [
        "Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "₹ 20/executed order",
      ],
      ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
      [
        "Transaction charges",
        "MCX: 0.0021%\nNSE: 0.0001%",
        "MCX: 0.0418%\nNSE: 0.001%",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      [
        "SEBI charges",
        "Agri:\n₹1 / crore\nNon-agri:\n₹10 / crore",
        "₹10 / crore",
      ],
      [
        "Stamp charges",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
  },
  fo: {
    headers: ["", "F&O - Futures", "F&O - Options"],
    rows: [
      [
        "Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "Flat Rs. 20 per executed order",
      ],
      [
        "STT/CTT",
        "0.02% on sell side",
        [
          "0.125% of the intrinsic value on options that are bought and exercised",
          "0.1% on sell side (on premium)",
        ],
      ],
      [
        "Transaction charges",
        "NSE: 0.00173%\nBSE: 0",
        "NSE: 0.03503% (on premium)\nBSE: 0.0325% (on premium)",
      ],
      [
        "GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
      ],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      [
        "Stamp charges",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
  },
};

function RenderTable({ headers, rows }) {
  return (
    <div className="table-responsive brokerage-table">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={cIdx === 0 ? "charges-heads" : ""}>
                  {Array.isArray(cell) ? (
                    <ul>
                      {cell.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BrokerageSection() {
  const [activeTab, setActiveTab] = useState("equities");

  return (
    /*  Brokerage Section*/
    <section className="charges-sections tinytabs">
      <div className="container">
        {/* Tabs */}
        <nav className="nav nav-tabs tabs">
          {["equities", "fo", "currency", "commodities"].map((tab) => (
            <button
              key={tab}
              className={`nav-link tab ${tab === "fo" ? "tab-fo" : ""} ${activeTab === tab ? "sel" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "equities"
                ? "Equity"
                : tab === "fo"
                  ? "F&O"
                  : tab === "currency"
                    ? "Currency"
                    : "Commodity"}
            </button>
          ))}
        </nav>

        {/* Render Table*/}
        <RenderTable
          headers={tabData[activeTab].headers}
          rows={tabData[activeTab].rows}
        />

        <p className="text-center brokerage-link">
          <a href="#">Calculate your costs upfront </a> using our brokerage
          calculator
        </p>
      </div>
    </section>
  );
}

export default BrokerageSection;
