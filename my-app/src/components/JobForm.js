import React from 'react'

class JobForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      compensation: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

handleSubmit(event) {
  this.setState({title: title})
  event.preventDefault()
}

  render() {
  return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form">
          <label htmlFor="title">Title</label>
          <input type="text" className="title" value={this.state.title} onChange={this.handleChange}/>
          <label htmlFor="pay">Compensation</label>
          <input type="text" className="pay"/>
          <label htmlFor="description">Description</label>
          <textarea className="description" rows="8" cols="40"></textarea>
          <input type="submit" className="submit" value="Submit" />
        </form>
        <div>{this.state.title}</div>
      </aside>
    )
  }
}
export default JobForm