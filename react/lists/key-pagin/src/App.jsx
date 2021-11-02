import React from 'react';

import UsersList from './UsersList.jsx';

const App = () => {
  return (
    <div className="App">
      <UsersList
        users={[
          { id: 'id-0', name: 'Tom', age: 18 },
          { id: 'id-1', name: 'Jack', age: 19 },
          { id: 'id-2', name: 'Pook', age: 20 },
          { id: 'id-3', name: 'Cook', age: 21 },
          { id: 'id-4', name: 'Tock', age: 22 },
          { id: 'id-5', name: 'Sock', age: 23 },
          { id: 'id-6', name: 'Mock', age: 24 },
          { id: 'id-7', name: 'Dock', age: 25 },
        ]}
      />
    </div>
  );
};

export default App;
