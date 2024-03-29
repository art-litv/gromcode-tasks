import React from "react";

import AvailableOptions from "./AvailableOptions";
import SelectedOptions from "./SelectedOptions";

export default function TransferList() {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available options" />
      <SelectedOptions title="Selected options" />
    </div>
  );
}
