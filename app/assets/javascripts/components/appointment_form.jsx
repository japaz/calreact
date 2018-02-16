class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.onUserInput = props.onUserInput.bind(this);
  }


  handleChange(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.onUserInput(obj);
  }

  render() {
    return(
      <div>
      <h2>Make a new appointment</h2>
      <form>
      <input name='title' placeholder='Appointment Title' 
        value={this.props.input_title}
        onChange={this.handleChange.bind(this)}/>
      <input name='appt_time' placeholder='Date and Time' 
        value={this.props.input_appt_time}
        onChange={this.handleChange.bind(this)}/>
      <input type='submit' value='Make Appointment' />
      </form>
      </div>
    )
  }
}
