fetch('https://dog.ceo/api/breeds/list/all')
  .then(function (response) {
    console.log('AFTER FIRST THEN');
    console.log('RESPONSE OBJECT');
    console.log(response);
    console.log('RESPONSE PARSED IN JSON FORMAT');
    // console.log(response.json());
    return response.json();
  })
  .then((data) => {
    console.log('AFTER SECOND THEN');
    console.log(data.message);
  });
