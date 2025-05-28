import React, { Component } from 'react';
import './main.css';

import Form from './Form';

import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novatarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (tarefas) {
      this.setState({ tarefas });
    }
  }


  componentDidUpdate(prevProps, prevState) {
  const { tarefas } = this.state;

    if (tarefas !== prevState.tarefas) {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const { tarefas, novatarefa, index } = this.state;
    const tarefaFormatted = novatarefa.trim();

    if (tarefaFormatted === '' || tarefas.indexOf(tarefaFormatted) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, tarefaFormatted],
        novatarefa: '',
      });
    } else {
      novasTarefas[index] = tarefaFormatted;
      this.setState({
        tarefas: [...novasTarefas],
        novatarefa: '',
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novatarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novatarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novatarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          novatarefa={novatarefa}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
