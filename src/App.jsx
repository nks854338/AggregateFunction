import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({ name: "", age: "", city: "" });
  const [aggregateData, setData] = useState({
    groupedByCity: [],
    averageAge: 0,
    sortedByAge: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/data", formData);
      alert("Data added successfully");
    } catch (error) {
      console.error("error", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/aggregate");
      setData(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Aggregation Function</h1>

      <div className="container">
        <div className="left">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <div className="data">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="data">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="data">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="aggregateData">
            <div className="data1">
              <div className="top">
                <h3>Grouped by City</h3>
              </div>
              <div className="bottom">
                {aggregateData.groupedByCity.map((group) => (
                  <li key={group._id}>
                    {group._id}: {group.count}
                  </li>
                ))}
              </div>
            </div>
            <hr />
            <div className="data1">
              <div className="top">
                <h3>Average Age</h3>
              </div>
              <div className="bottom">
                <p>{aggregateData.averageAge}</p>
              </div>
            </div>
            <hr />
            <div className="data1">
              <div className="top">
                <h3>Sorted by Age</h3>
              </div>
              <div className="bottom">
                {aggregateData.sortedByAge.map((user) => (
                  <li key={user._id}>
                    {user.name}, Age: {user.age}, City: {user.city}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
