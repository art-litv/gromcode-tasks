import { connect } from "react-redux";

import Options from "./Options";

import { availableOptionsSelector } from "../options/options.selectors";
import { toggleOption } from "../options/options.actions";

const mapState = (state) => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
