function secureLogin(username, password) {
    // Mock user data
    const users = {
        'user1': 'password1',
        'user2': 'password2'
    };

    return users[username] === password;
}

function calculateLoanPayment(amount, rate, term) {
    const monthlyRate = rate / 12 / 100;
    const numberOfPayments = term * 12;

    return amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
}

function calculateInvestmentProjection(initial, contribution, rate, term) {
    const monthlyRate = rate / 12 / 100;
    const numberOfPayments = term * 12;

    let balance = initial;
    for (let i = 0; i < numberOfPayments; i++) {
        balance = (balance + contribution) * (1 + monthlyRate);
    }

    return balance;
}
