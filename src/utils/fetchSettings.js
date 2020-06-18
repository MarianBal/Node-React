export const getSettings = () => {
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
};

export const postSettings = data => {
  return {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};

export const deleteSettings = () => {
  return {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
};

export const putSettings = data => {
  return {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
};
