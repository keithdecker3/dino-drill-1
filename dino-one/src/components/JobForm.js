import React from 'react'

class JobForm extends React.Component {

state = {
  id: '',
  title: '',
  description: '',
  pay: '',
  interested: ''
}

resetForm = () => {
  this.setState(
    {
    id: '',
    title: '',
    description: '',
    pay: '',
    interested: ''
    }
  )
}

handleChange = (event) => {
  console.log('test')
  this.setState (
    {[event.target.name]: event.target.value}
  )
}

onFormSubmit = (event) => {
  event.preventDefault()
  this.props.jobListingSubmitted(this.state)
  this.resetForm()
}

  render() {
  return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <label htmlFor="pay">Compensation</label>
          <input type="text" name="pay" value={this.state.pay} onChange={this.handleChange} />
          <label htmlFor="description">Description</label>
          <textarea name="description" rows="8" cols="40" value={this.state.description} onChange={this.handleChange}></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}
export default JobForm