// import moment from 'moment'; // stack trace error
const moment = jest.requireActual('moment'); // grab original version. Requiring the original module

export default (timestamp = 0) => {
    return moment(timestamp);
}