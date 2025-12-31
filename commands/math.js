const State = {
    total: 0,
}

function add(number) {
    State.total += number;
    return State.total;
}

const math = {
    add
};

export default math;
