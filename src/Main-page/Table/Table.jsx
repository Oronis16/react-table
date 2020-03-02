import React, { useEffect, useState, useRef } from "react";

export function Table() {
  const [availableCityCodes, setAvailableCityCode] = useState();
  const [plates, setPlates] = useState([]);
  useEffect(() => {
    fetch("plate-data.json")
      .then(response => response.json())
      .then(plates => {
        setPlates(plates);
        const filter = plates.map(key => {
          return key.city;
        })
        setAvailableCityCode(Array.from(new Set(filter))) 
      });
  },[]);

  return (
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>City</th>
          <th>Availability</th>
          <th>Type</th>
          <th>Prefix</th>
          <th>Number</th>
          <th>Suffix</th>
          <th>Color</th>
          <th>Vector</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <select>
              {availableCityCodes && availableCityCodes.map(cityCode => {
                return <option value={cityCode}>{cityCode}</option>
              })}
            </select>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {plates.map(plate => {
          return (
            <tr key={plate.code}>
              {Object.keys(plate).map((key, index) => {
                return <td key={plate.code+index}>{plate[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
