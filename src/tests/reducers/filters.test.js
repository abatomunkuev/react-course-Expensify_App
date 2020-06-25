import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducer(undefined,{ type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: "SORT_BY_DATE"}
    const state = filterReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
    const text = 'This is test';
    const action = { type: 'SET_TEXT_FILTER', text}
    const state = filterReducer(undefined,action);
    expect(state.text).toBe(text);
});

// should set startDate filter
test('should set startDate filter', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE' ,startDate}
    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(action.startDate);
})

// should set endDate filter
test('should set startDate filter', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE' ,endDate}
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
})