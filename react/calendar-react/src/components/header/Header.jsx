import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../modal/Modal.jsx";
import {
  getWeekMonthString,
  getWeekYearString,
} from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({
  weekDates,
  handleNextWeek,
  handlePrevWeek,
  handleWeekReset,
}) => {
  const [isModalOpened, setModalOpened] = useState(false);

  const switchModal = () => {
    setModalOpened((isOpened) => !isOpened);
  };

  return (
    <>
      {isModalOpened && <Modal onClose={switchModal} />}
      <header className="header">
        <button className="button create-event-btn" onClick={switchModal}>
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={handleWeekReset}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={handlePrevWeek}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={handleNextWeek}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-date">
            {getWeekMonthString(weekDates)} {getWeekYearString(weekDates)}
          </span>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  handleNextWeek: PropTypes.func.isRequired,
  handlePrevWeek: PropTypes.func.isRequired,
  handleWeekReset: PropTypes.func.isRequired,
};

export default Header;
