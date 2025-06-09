'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
/////////////////////////////////////////////////
const user1 = {
  name: 'Walk Now',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  rate: 1.2,
  pin: 1111,
  plan: 'premium',
};

const user2 = {
  name: 'James lebron',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  rate: 1.5,
  pin: 2222,
  plan: 'standard',
};

const user3 = {
  name: 'Thomas Williams',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  rate: 0.7,
  pin: 3333,
  plan: 'premium',
};

const user4 = {
  name: 'Steve Smith',
  transactions: [430, 1000, 700, 50, 90],
  rate: 1,
  pin: 4444,
  plan: 'basic',
};

const userAccounts = [user1, user2, user3, user4];

const welcomeMsg = document.querySelector('.welcome');
const dateDisplay = document.querySelector('.date');
const balanceDisplay = document.querySelector('.balance__value');
const totalIn = document.querySelector('.summary__value--in');
const totalOut = document.querySelector('.summary__value--out');
const totalInterest = document.querySelector('.summary__value--interest');
const sessionTimer = document.querySelector('.timer');

const appWrapper = document.querySelector('.app');
const transactionList = document.querySelector('.movements');

const loginBtn = document.querySelector('.login__btn');
const transferBtn = document.querySelector('.form__btn--transfer');
const loanBtn = document.querySelector('.form__btn--loan');
const closeBtn = document.querySelector('.form__btn--close');
const sortBtn = document.querySelector('.btn--sort');

const loginUserInput = document.querySelector('.login__input--user');
const loginPinInput = document.querySelector('.login__input--pin');
const transferToInput = document.querySelector('.form__input--to');
const transferAmtInput = document.querySelector('.form__input--amount');
const loanAmtInput = document.querySelector('.form__input--loan-amount');
const closeUserInput = document.querySelector('.form__input--user');
const closePinInput = document.querySelector('.form__input--pin');

const renderTransactions = function (txns, sort = false) {
  transactionList.innerHTML = '';

  const txnsToRender = sort ? txns.slice().sort((a, b) => a - b) : txns;

  txnsToRender.forEach(function (txn, i) {
    const type = txn > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${txn}€</div>
      </div>
    `;
    transactionList.insertAdjacentHTML('afterbegin', html);
  });
};

const showBalance = function (user) {
  user.balance = user.transactions.reduce((sum, txn) => sum + txn, 0);
  balanceDisplay.textContent = `${user.balance}€`;
};

const showSummary = function (user) {
  const deposits = user.transactions
    .filter(txn => txn > 0)
    .reduce((sum, txn) => sum + txn, 0);
  totalIn.textContent = `${deposits}€`;

  const withdrawals = user.transactions
    .filter(txn => txn < 0)
    .reduce((sum, txn) => sum + txn, 0);
  totalOut.textContent = `${Math.abs(withdrawals)}€`;

  const earnedInterest = user.transactions
    .filter(txn => txn > 0)
    .map(dep => (dep * user.rate) / 100)
    .filter(interest => interest >= 1)
    .reduce((sum, interest) => sum + interest, 0);
  totalInterest.textContent = `${earnedInterest}€`;
};

const generateUsernames = function (users) {
  users.forEach(function (user) {
    user.username = user.name
      .toLowerCase()
      .split(' ')
      .map(part => part[0])
      .join('');
  });
};
generateUsernames(userAccounts);

const refreshUI = function (user) {
  renderTransactions(user.transactions);
  showBalance(user);
  showSummary(user);
};

let activeUser;

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();

  activeUser = userAccounts.find(
    user => user.username === loginUserInput.value
  );

  if (activeUser?.pin === Number(loginPinInput.value)) {
    welcomeMsg.textContent = `Welcome back, ${activeUser.name.split(' ')[0]}`;
    appWrapper.style.opacity = 1;

    loginUserInput.value = loginPinInput.value = '';
    loginPinInput.blur();

    refreshUI(activeUser);
  }
});

transferBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(transferAmtInput.value);
  const receiver = userAccounts.find(
    user => user.username === transferToInput.value
  );
  transferAmtInput.value = transferToInput.value = '';

  if (
    amount > 0 &&
    receiver &&
    activeUser.balance >= amount &&
    receiver?.username !== activeUser.username
  ) {
    activeUser.transactions.push(-amount);
    receiver.transactions.push(amount);
    refreshUI(activeUser);
  }
});

loanBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(loanAmtInput.value);

  if (amount > 0 && activeUser.transactions.some(txn => txn >= amount * 0.1)) {
    activeUser.transactions.push(amount);
    refreshUI(activeUser);
  }
  loanAmtInput.value = '';
});

closeBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    closeUserInput.value === activeUser.username &&
    Number(closePinInput.value) === activeUser.pin
  ) {
    const index = userAccounts.findIndex(
      user => user.username === activeUser.username
    );
    userAccounts.splice(index, 1);
    appWrapper.style.opacity = 0;
  }

  closeUserInput.value = closePinInput.value = '';
});

let sorted = false;
sortBtn.addEventListener('click', function (e) {
  e.preventDefault();
  renderTransactions(activeUser.transactions, !sorted);
  sorted = !sorted;
});
