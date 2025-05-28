import React from 'react';

import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import '../Form/Form.css';

export default function Form({ handleSubmit, handleChange, novatarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        type="text"
        value={novatarefa}
        onChange={handleChange}
        placeholder="Digite uma tarefa"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novatarefa: PropTypes.string.isRequired,
}
