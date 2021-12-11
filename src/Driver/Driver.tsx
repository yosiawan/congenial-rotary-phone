import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import DriverCard from "./components/DriverCard/DriverCard";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "./driver.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./driver.css";
import useFetchDriverData from "./hooks/useFetchDriverData";
import { useState } from "react";

export default function Driver() {
  const { data, error, loading } = useFetchDriverData();
  const [cursor, setCursor] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const pageSize = 5;
  const noMoreData = cursor + pageSize >= data.length;
  const isPrevBtnDisabled = cursor < 1;

  function handlePrevPage() {
    setCursor(cursor - 5);
  }

  function handleNextPage() {
    setCursor(cursor + 5);
  }

  function handleFilterInput(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    e.preventDefault();
    setNameFilter(e.target.value);
  }

  function driverList() {
    if (loading) return <div>Loading driver data</div>;
    if (error) return <div>Error while getting driver data</div>;
    if (nameFilter) {
      return data
        .filter((driver) =>
          driver.name.first.toLowerCase().includes(nameFilter.toLowerCase())
        )
        .map((driver, idx) => {
          return (
            <DriverCard
              key={idx}
              id={driver.id.value}
              firstName={driver.name.first}
              lastName={driver.name.last}
              phoneNumber={driver.phone}
              email={driver.email}
              birthdate={driver.dob.date}
              picture={driver.picture.thumbnail}
            />
          );
        });
    }
    return data.slice(cursor, cursor + pageSize).map((driver, idx) => {
      return (
        <DriverCard
          key={idx}
          id={driver.id.value}
          firstName={driver.name.first}
          lastName={driver.name.last}
          phoneNumber={driver.phone}
          email={driver.email}
          birthdate={driver.dob.date}
          picture={driver.picture.thumbnail}
        />
      );
    });
  }

  return (
    <div className="" style={{ margin: 20 }}>
      <div className="driver-header">
        <div>
          <div style={{ fontWeight: "bold", fontSize: 24, color: "red" }}>
            Driver Management
          </div>
          <div>Data driver yang bekerja dengan Anda</div>
        </div>
        <div className="driver-header-search">
          <OutlinedInput
            size="small"
            type="text"
            placeholder="Cari Driver"
            value={nameFilter}
            onChange={handleFilterInput}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            variant="contained"
          >
            <span>Tambah driver </span>
            <AddIcon />
          </Button>
        </div>
      </div>
      <div className="driver-list-container">{driverList()}</div>
      <div className="driver-footer">
        <Button
          disabled={isPrevBtnDisabled}
          style={{ color: isPrevBtnDisabled ? "grey" : "black" }}
          onClick={handlePrevPage}
        >
          <ChevronLeftIcon />
          Previous Page
        </Button>
        <Button
          disabled={noMoreData}
          style={{ color: noMoreData ? "grey" : "black" }}
          onClick={handleNextPage}
        >
          Next Page <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
