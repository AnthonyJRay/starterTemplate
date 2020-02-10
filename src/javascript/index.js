import '../sass/styles.scss';

const greeting = document.getElementById('greeting');

const greet = name => {
  if (name) {
    greeting.innerHTML = `Hello, ${name}`;
    console.log(`Hello, ${name}`);
  } else {
    greeting.innerHTML = 'Please enter a name!';
    console.log('Please enter a name');
  }
};

greet('Anthony');
