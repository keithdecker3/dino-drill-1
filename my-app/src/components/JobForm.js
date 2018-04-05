import React from 'react'

class JobForm extends React.Component {
  render() {
  return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form">
          <label htmlFor="title">Title</label>
          <input type="text" className="title"/>
          <label htmlFor="pay">Compensation</label>
          <input type="text" className="pay"/>
          <label htmlFor="description">Description</label>
          <textarea className="description" rows="8" cols="40"></textarea>
          <input type="submit" className="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}
export default JobForm