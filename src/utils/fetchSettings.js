export const getSettings = () => {
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
};

export const postSettings = data => {
  console.log(JSON.stringify(data));
  return {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
