var cleave = new Cleave('.number', {
    creditCard: true,
});

var cleave2 = new Cleave('.month', {
    date: true,
    datePattern: ['m']
});

var cleave3 = new Cleave('.year', {
    date: true,
    datePattern: ['Y']
});