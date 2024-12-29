const jsonObject = {
  name: 'Priya',
  age: 34,
  isDeveloper: true,
  skills: ['JavaScript', 'Automation', 'Testing'],
  address: {
    street: '123 Example Street',
    country: 'Australia',
  },
  projects: [
    {
      name: 'Tasker Enhancement',
      duration: '3 months',
      details: 'Task management application.',
    },
    {
      name: 'Style Haven',
      duration: '40 days',
      details: 'Cross-browser and cross-platform testing project.',
    },
  ],
}

console.log(jsonObject['name'])

function testJS() {
 console.log(jsonObject['name'])
 console.log(typeof jsonObject['age']);
 console.log(jsonObject['projects'].length);
 console.log(jsonObject['projects'][1]);
 
 
}
testJS()

