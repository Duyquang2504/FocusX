import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./ui/combobox";
import { option } from "@/lib/data";

const DateFilter = ({ dateQuery, setDateQuery }) => {
  return (
    <Combobox items={option} value={dateQuery} onValueChange={setDateQuery}>
      <ComboboxInput
        placeholder="Hôm nay"
        className="bg-accent/80 border-none"
        value={option.find((o) => o.value === dateQuery)?.label ?? ""}
        readOnly
      />

      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList className="bg-accent/80 ">
          {option.map((item) => (
            <ComboboxItem key={item.value} value={item.value}>
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default DateFilter;
