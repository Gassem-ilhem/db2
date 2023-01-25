import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddEdit.css";

const initialState = {
  NPArtiste: "",
  DateNais: "",
  LieuNais: "",
  DateDeces: "",
  LieuDeces: "",
  Nation: "",
  Biograph: "",
  OEUVREId: "",
};

const AddEdit = () => {
  const
  const [state, setState] = useState(initialState);

  const {
    NPArtiste,
    DateNais,
    LieuNais,
    DateDeces,
    LieuDeces,
    Nation,
    Biograph,
    OEUVREId,
  } = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!NPArtiste || !OEUVREId || !Nation) {
      toast.error("Please provide value into each input field");
    } else {
      axios
        .post("http://localhost:8000/api/post", {
          NPArtiste,
          DateNais,
          LieuNais,
          DateDeces,
          LieuDeces,
          Nation,
          Biograph,
          OEUVREId,
        })
        .then(() => {
          setState({
            NPArtiste: "",
            DateNais: "",
            LieuNais: "",
            DateDeces: "",
            LieuDeces: "",
            Nation: "",
            Biograph: "",
            OEUVREId: "",
          });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Artiste Added Successfully");
      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="NPArtiste">NPArtiste</label>
        <input
          type="text"
          id="NPArtiste"
          onChange={handleInputChange}
          value={NPArtiste}
          placeholder="Name Artist ..."
        />

        <label htmlFor="DateNais">DateNais</label>
        <input
          type="date"
          id="DateNais"
          placeholder="DateNais Artist ..."
          value={DateNais}
          onChange={handleInputChange}
        />

        <label htmlFor="LieuNais">LieuNais</label>
        <input
          type="text"
          id="LieuNais"
          placeholder="LieuNais Artist ..."
          value={LieuNais}
          onChange={handleInputChange}
        />

        <label htmlFor="DateDeces">DateDeces</label>
        <input
          type="date"
          id="DateDeces"
          placeholder="DateDeces Artist ..."
          value={DateDeces}
          onChange={handleInputChange}
        />

        <label htmlFor="LieuDeces">LieuDeces</label>
        <input
          type="text"
          id="LieuDeces"
          placeholder="LieuDeces Artist ..."
          value={LieuDeces}
          onChange={handleInputChange}
        />

        <label htmlFor="Nation">Nation</label>
        <input
          type="text"
          id="Nation"
          placeholder="Nation Artist ..."
          value={Nation}
          onChange={handleInputChange}
        />

        <label htmlFor="Biograph">Biograph</label>
        <input
          type="text"
          id="Biograph"
          placeholder="Biograph Artist ..."
          value={Biograph}
          onChange={handleInputChange}
        />

        <label htmlFor="OEUVREId">OEUVREId</label>
        <input
          type="number"
          id="OEUVREId"
          placeholder="OEUVREId Artist ..."
          value={OEUVREId}
          onChange={handleInputChange}
        />
        <input type="submit" value="Save" />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
