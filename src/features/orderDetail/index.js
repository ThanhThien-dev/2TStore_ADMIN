import React from "react";
import PrinterIcon from "@heroicons/react/24/outline/PrinterIcon";

function OrderDetail() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow rounded-lg p-6 max-w-15xl mx-auto">
        <div className="print-only">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Wed, Aug 13, 2025, 4:34PM
              </h2>
              <p className="text-gray-500">#ID 3453012</p>
            </div>
            <button
              className="btn btn-ghost text-gray-500 no-print"
              onClick={() => window.print()}
            >
              <PrinterIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-start">
              <h3 className="font-medium">Customer</h3>
              <p>John Alexander</p>
              <p>alex@example.com</p>
              <p>+998 99 22123456</p>
              <button className="btn btn-link text-blue-500 mt-2">
                View profile
              </button>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-medium">Shipping</h3>
              <p>Fargo express</p>
              <p>Payment method: Card card</p>
              <p>
                Status: <span className="text-red-500">Status</span>
              </p>
              <button className="btn btn-link text-blue-500 mt-2">
                Download
              </button>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-medium">Deliver to</h3>
              <p>City: Tashkent, Uzbekistan</p>
              <p>Street: Beruniy 369</p>
              <p>Address: Block A, House 123, Floor 2</p>
              <a
                href="https://www.google.com/maps?q=Block+A,+House+123,+Floor+2,+Beruniy+369,+Tashkent,+Uzbekistan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link text-blue-500 mt-2"
              >
                Open map
              </a>
            </div>
          </div>

          <table className="table w-full text-left border-collapse mb-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4">Product</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Unit Price</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">Áo thể thao MU</td>
                <td className="p-4">2</td>
                <td className="p-4">$43.50</td>
                <td className="p-4">$87.00</td>
              </tr>
              <tr>
                <td className="p-4">Giày Thượng Đình</td>
                <td className="p-4">1</td>
                <td className="p-4">$13.50</td>
                <td className="p-4">$13.50</td>
              </tr>
            </tbody>
          </table>

          <div className="grid grid-cols-2 gap-4 items-start">
            <div>
              <h3 className="font-medium">Payment info</h3>
              <p>Master Card **** **** 4768</p>
              <p>Business name: Master Card, inc.</p>
              <p>Phone: +1 (800) 555-154-52</p>
            </div>
            <div className="text-right">
              <p>Subtotal: $100.05</p>
              <p>Shipping cost: $10.00</p>
              <p className="font-semibold text-lg">Total: $110.05</p>
              <p className="text-green-500 font-medium mt-2 bg-green-100 inline-block px-3 py-1 rounded-md">
                Payment made
              </p>
            </div>
          </div>

          <div className="mt-6">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Type here..."
            ></textarea>
            <button className="btn btn-primary mt-2">Save note</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
