import logo from './logo.svg';
import './App.css';
//import { AppSvc } from './satyam-services/AppSvc';
import { UsersSvc } from './satyam-services-gql-users/UsersSvc';

// const appSvc = new AppSvc();
// const handleClick = async () => {
//   console.log('SATYAM AppSvc');
//   await appSvc.getApps();
// };

const usersSvc = new UsersSvc();
const handleClick2 = async () => {
  console.log('SATYAM UsersSvc');
  await usersSvc.getUsers();
};
const handleClick3 = async () => {
  console.log('SATYAM UsersSvc');
  await usersSvc.createUsers();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={handleClick2}>Acquisitions Call</button>
        </p>
        <p>
          <button onClick={handleClick2}>Get All Users</button>
        </p>
        <p>
          <button onClick={handleClick3}>Create Users</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
