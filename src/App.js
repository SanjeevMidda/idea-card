import "./index.css";
import { userData } from "/Users/sanjeevmidda/Desktop/idea-card/src/data/userData.jsx";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <div className="userContainer">
        {userData.map((user) => {
          return <UserCard userData={user} key={user.number} />;
        })}
      </div>
    </div>
  );
}

export default App;
