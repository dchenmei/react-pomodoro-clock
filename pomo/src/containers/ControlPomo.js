import { connect } from 'react-redux';
import { togglePomo } from '../actions/Pomo';
import Pomo from '../components/Pomo';

const mapStateToProps = state => ({
    name: "boii",
    time: state.time,
    status: state.status
});

const mapDispatchToProps = dispatch => ({
    togglePomo : (timeElapsed) => dispatch(togglePomo(timeElapsed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pomo);