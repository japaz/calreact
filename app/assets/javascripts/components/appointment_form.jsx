class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.onUserInput = props.onUserInput.bind(this);
    this.onFormSubmit = props.onFormSubmit.bind(this);
  }

  handleChange(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.onFormSubmit();
  }

  setApptTime(e) {
    var name = 'appt_time';
    var obj = {};
    if (obj[name] = e.toDate()) {
      this.onUserInput(obj);
    }
  }

  render() {
    var inputProps = {
      name: 'appt_time'
    };

    return(
      <div>
      <h2>Make a new appointment</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input name='title' placeholder='Appointment Title' 
      value={this.props.input_title}
      onChange={this.handleChange.bind(this)}/>

      <Datetime input={false} open={true} inputProps={inputProps}
        value={this.props.appt_time}
        onChange={this.setAppttime} />

      <input type='submit' value='Make Appointment' />
      </form>
      </div>
    )
  }
}
