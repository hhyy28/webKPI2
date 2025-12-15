export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (!response.ok) throw new Error('Помилка мережі');
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 1500);
  });
};