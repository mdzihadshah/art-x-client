import React from "react";

const SelectedClassRow = ({ singleClass }) => {
  const {
    _id,
    name,
    photo,
    email,
    price,
    instractorname,
    availablesit,
    status,
  } = singleClass;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{instractorname}</td>
      <td>{availablesit}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-sm my-2 bg-green-500">Pay</button>
        <button className="btn btn-sm bg-red-600">Delete</button>
      </td>
    </tr>
  );
};

export default SelectedClassRow;
