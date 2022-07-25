import "./App.css";
import logo from "./logo.svg";

const tasks = [
  {
    task: "Meet Ramya",
    status: true,
    desc: `Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis`,
  },
  {
    task: "Learn something",
    status: false,
    desc: `Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis`,
  },
  {
    task: "Learn React",
    status: true,
    desc: `Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis`,
  },
  {
    task: "Learn Angular",
    status: false,
    desc: `Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis`,
  },
  {
    task: "Learn Mern",
    status: true,
    desc: `Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks dis Tasks
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis dis
              dis dis dis dis dis dis dis dis dis dis dis`,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Task Tracker
        <section className="tasks-box">
          {tasks.map(({desc,task,status}) => (
            <div className="tasks" style= {{textDecorationLine: status ? "line-through" : "", backgroundColor: status ? "cadetblue": ""}}>
              {task} <img src={logo} className="remove" alt="logo" />
              <div className="dis">
                {desc}
              </div>
            </div>
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
