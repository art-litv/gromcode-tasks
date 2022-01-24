import { connect } from "react-redux";

import Options from "./Options";

import { availableOptionsSelector } from "../options/options.selectors";
import { toggleOption } from "../options/options.actions";

const mapState = (state) => ({
  optionsList: availableOptionsSelector(state),
});

const mapDispatch = {
  onToggle: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
