import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList/>
      <AddForm/>
    </div>
  );
}

export default App;
