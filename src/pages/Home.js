import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
//import { toast } from "react-toastify";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/api/get");
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteArtiste = (id) => {
    if (window.confirm("Are you sure that you want to delete this artiste")) {
      axios.delete("http://localhost:8000/api/remove/{id}");
      toast.success("Artist Deleted Successfuly");
      setTimeout(() => loadData(), 500);
    }
  };

  const searchHandle = (event) => {
    //let key1 = event.target.value;
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/addArtiste">
        <button className="btn btn-contact">Add Artiste</button>
      </Link>

      <input
        type=""
        className="search-artist-box"
        placeholder="Search Artist"
        onChange={searchHandle}
      ></input>

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}> ID</th>
            <th style={{ textAlign: "center" }}>NPArtiste</th>
            <th style={{ textAlign: "center" }}>DateNais</th>
            <th style={{ textAlign: "center" }}>LieuNais</th>
            <th style={{ textAlign: "center" }}>DateDeces</th>
            <th style={{ textAlign: "center" }}>LieuDeces</th>
            <th style={{ textAlign: "center" }}>Nation</th>
            <th style={{ textAlign: "center" }}>Biograph</th>
            <th style={{ textAlign: "center" }}>OEUVREId</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.NPArtiste}</td>
                <td>{item.DateNais}</td>
                <td>{item.LieuNais}</td>
                <td>{item.DateDeces}</td>
                <td>{item.LieuDeces}</td>
                <td>{item.Nation}</td>
                <td>{item.Biograph}</td>
                <td>{item.OEUVREId}</td>
                <td>
                  <Link /* to={"/update/${item.id}"}*/>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteArtiste(item.id)}
                  >
                    Delete
                  </button>
                  <Link /*</td>to={"/view/${item.id}"}*/>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
