class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'Standup but on table',
      appt_time: 'Tomorrow at 10am'
    };
  }

  handleFormSubmit() {
    var appointment = {title: this.state.title, appt_time: this.state.appt_time};
    $.post('/appointments',
      {appointment: appointment})
      .done((data) => {this.addNewAppointment(data)});
  }

  addNewAppointment(appointment) {
    var appointments = Object.assign([], this.state.appointments);
    appointments.push(appointment);
    this.setState({ 
      appointments: appointments.sort(function(a,b) {
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render() {
    return (
      <div>
      <AppointmentForm 
        input_title={this.state.title} 
        input_appt_time={this.state.appt_time}
        onUserInput={(obj) => this.setState(obj)}
        onFormSubmit={() => this.handleFormSubmit()}/>
      <AppointmentsList appointments={this.state.appointments}/>
      </div>
    )
  }
};
