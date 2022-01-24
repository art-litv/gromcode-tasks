import { connect } from "react-redux";

import Options from "./Options";

import { selectedOptionsSelector } from "../options/options.selectors";
import { toggleOption } from "../options/options.actions";

const mapState = (state) => ({
  optionsList: selectedOptionsSelector(state),
});

const mapDispatch = {
  onToggle: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
