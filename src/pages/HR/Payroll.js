import React from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const Payroll = () => {
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">Payroll</h2>
        <div className="flex items-center gap-5">
          <Link to="/hr/addEmployee">
            <button className="py-1 px-7 rounded text-sm text-white bg-[#097D0D]">
              Add Employee
            </button>
          </Link>
          <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-7">
        <p className="text-xs text-gray-500">
          View all your employee details here and make sure
          <br />
          you pay your employees at time.
        </p>
        <div className="flex items-center gap-5">
          <input type="date" className="input input-bordered input-sm" />
          <div className="h-[2px] bg-gray-300 w-5"></div>
          <input type="date" className="input input-bordered input-sm" />
        </div>
      </div>

      <div className="overflow-x-auto mt-14 px-14">
        <table className="w-full">
          <thead className="bg-[#EAEAEA] rounded">
            <tr>
              <th className="font-normal py-2 text-gray-500 rounded-tl-xl rounded-bl-xl">
                NAME
              </th>
              <th className="font-normal py-2 text-gray-500">LEAVE DAY</th>
              <th className=" rounded-tr-xl  rounded-br-xl">WORKING DAY</th>
              <th className=" rounded-tr-xl  rounded-br-xl">OVERTIME</th>
              <th className=" rounded-tr-xl  rounded-br-xl">
                OVERTIME PAY SALARY
              </th>
              <th className=" rounded-tr-xl  rounded-br-xl">TOTAL SALARY</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((data) => (
              <tr className="border-b-2">
                <td className="text-center text-sm py-3">Andie Bell</td>
                <td className="text-center text-sm py-3">
                  Civil Mall, Kathmandu
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-2 mr-1">
          <button className="text-blue-600 text-sm underline">View More</button>
        </div>
      </div>
    </section>
  );
};

export default Payroll;
