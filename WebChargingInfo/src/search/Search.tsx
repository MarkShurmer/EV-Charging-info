import { Input, Button } from "@mui/joy";
import searchClasses from "./Search.module.css";
import { ChangeEvent, useState } from "react";
import { searchForChargePoints } from "../api/api";

function Search() {
  const [location, setLocation] = useState("");
  const [speedFrom, setSpeedFrom] = useState(1);
  const [speedTo, setSpeedTo] = useState(750);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.currentTarget.value);
  };

  const onChangeSpeedFrom = (e: ChangeEvent<HTMLInputElement>) => {
    setSpeedFrom(parseInt(e.currentTarget.value));
  };

  const onChangeSpeedTo = (e: ChangeEvent<HTMLInputElement>) => {
    setSpeedTo(parseInt(e.currentTarget.value));
  };

  const onSearch = async () => {
    console.log("=> ", location, speedFrom, speedTo);
    const chargeData = await searchForChargePoints(location, speedTo);
    console.log("::: ", chargeData);
  };

  return (
    <>
      <form className={searchClasses.filterBar}>
        <span className={searchClasses.filterItem}>
          <label htmlFor="speedFrom">Location</label>

          <Input
            id="location"
            placeholder="Location to search"
            variant="outlined"
            color="primary"
            aria-label="Location to search"
            type="text"
            className={searchClasses.filterInput}
            onChange={onChange}
          />
        </span>

        <span className={searchClasses.filterItem}>
          <label htmlFor="speedFrom">Speed range from</label>

          <Input
            id="speedFrom"
            placeholder="Speed from"
            variant="outlined"
            color="primary"
            aria-label="Speed from"
            onChange={onChangeSpeedFrom}
            type="number"
            slotProps={{ input: { min: 1, max: 500 } }}
            className={searchClasses.filterInput}
          />
        </span>

        <span className={searchClasses.filterItem}>
          <label htmlFor="speedTo">to</label>

          <Input
            id="speedTo"
            placeholder="Speed to"
            variant="outlined"
            color="primary"
            onChange={onChangeSpeedTo}
            type="number"
            slotProps={{ input: { min: 1, max: 500 } }}
            className={searchClasses.filterInput}
          />
        </span>

        <div className={searchClasses.filterItem}>
          <Button size="md" onClick={onSearch}>
            Search
          </Button>
        </div>
      </form>
    </>
  );
}

export { Search };
