import React from 'react';
import axios from 'axios';
class ThreadCreateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      text: '' 
    };
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('Тред создан', e)
    axios.post('http://localhost:3000/api/threads', {
    title: 'Fred',
    cover: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  handleNameChange(e) {
    console.log('Изменено', e.target.value)
    this.setState({name: e.target.value})
  }
    render() {
        return(
        <form onSubmit={::this.handleSubmit}>
        <input
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={::this.handleNameChange}
          />
          <button>Create Thread</button>
      </form>
    );
  }
}

export default ThreadCreateForm;