import { connect } from 'react-redux';
import { togglePomo } from '../actions/Pomo';
import Pomo from '../components/Pomo';

const mapStateToProps = state => ({
    name: "boii"
});

const mapDispatchToProps = dispatch => ({
    togglePomo : () => dispatch(togglePomo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pomo);