class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'Standup but on table',
      appt_time: 'Tomorrow at 10am'
    };
  }

  render() {
    return (
      <div>
      <AppointmentForm 
        input_title={this.state.title} 
        input_appt_time={this.state.appt_time}
        onUserInput={(obj) => this.setState(obj)}/>
      <AppointmentsList appointments={this.state.appointments}/>
      </div>
    )
  }
};
