import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function CaixaDePergunta() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    localStorage.setItem("buscaPergunta", inputValue);
    navigate("/Perguntas");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      className="border rounded-xl"
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Qual a sua pergunta?"
        inputProps={{ "aria-label": "Qual a sua pergunta?" }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", backgroundColor: "black", color:"white"}}
        aria-label="search"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
