import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddEdit.css";

const AddEdit = () => {
  const [NPArtiste, setNPArtiste] = useState("");
  const [DateNais, setDateNais] = useState("");
  const [LieuNais, setLieuNais] = useState("");
  const [DateDeces, setDateDeces] = useState("");
  const [LieuDeces, setLieuDeces] = useState("");
  const [Nation, setNation] = useState("");
  const [Biograph, setBiograph] = useState("");
  const [OEUVREId, setOEUVREId] = useState(0);

  const [artistList, setartistList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!NPArtiste || !OEUVREId || !Nation) {
      toast.error("Please provide value into each input field");
    } else {
      axios
        .post("http://localhost:8000/api/post", {
          NPArtiste: NPArtiste,
          DateNais: DateNais,
          LieuNais: LieuNais,
          DateDeces: DateDeces,
          LieuDeces: LieuDeces,
          Nation: Nation,
          Biograph: Biograph,
          OEUVREId: OEUVREId,
        })
        .then(() => {
          setartistList([
            ...artistList,
            {
              NPArtiste: NPArtiste,
              DateNais: DateNais,
              LieuNais: LieuNais,
              DateDeces: DateDeces,
              LieuDeces: LieuDeces,
              Nation: Nation,
              Biograph: Biograph,
              OEUVREId: OEUVREId,
            },
          ]);
        });

      toast.success("Artiste Added Successfully");
      setTimeout(() => navigate("/"), 500);
    }
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
          onChange={(event) => {
            setNPArtiste(event.target.value);
          }}
          placeholder="Name Artist ..."
        />

        <label htmlFor="DateNais">DateNais</label>
        <input
          type="date"
          id="DateNais"
          placeholder="DateNais Artist ..."
          onChange={(event) => {
            setDateNais(event.target.value);
          }}
        />

        <label htmlFor="LieuNais">LieuNais</label>
        <input
          type="text"
          id="LieuNais"
          placeholder="LieuNais Artist ..."
          onChange={(event) => {
            setLieuNais(event.target.value);
          }}
        />

        <label htmlFor="DateDeces">DateDeces</label>
        <input
          type="date"
          id="DateDeces"
          placeholder="DateDeces Artist ..."
          onChange={(event) => {
            setDateDeces(event.target.value);
          }}
        />

        <label htmlFor="LieuDeces">LieuDeces</label>
        <input
          type="text"
          id="LieuDeces"
          placeholder="LieuDeces Artist ..."
          onChange={(event) => {
            setLieuDeces(event.target.value);
          }}
        />

        <label htmlFor="Nation">Nation</label>
        <input
          type="text"
          id="Nation"
          placeholder="Nation Artist ..."
          onChange={(event) => {
            setNation(event.target.value);
          }}
        />

        <label htmlFor="Biograph">Biograph</label>
        <input
          type="text"
          id="Biograph"
          placeholder="Biograph Artist ..."
          onChange={(event) => {
            setBiograph(event.target.value);
          }}
        />

        <label htmlFor="OEUVREId">OEUVREId</label>
        <input
          type="number"
          id="OEUVREId"
          placeholder="OEUVREId Artist ..."
          onChange={(event) => {
            setOEUVREId(event.target.value);
          }}
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
