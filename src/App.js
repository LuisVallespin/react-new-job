import { useEffect, useState } from 'react';
import './App.css';
import MainCard from './components/main-card/main-card';
import getJobs from './services/getJobs';

function App() {
  const [jobs, setJobs] = useState([
    {
      name: '',
      company: {
        logo: '',
        name: '',
      },
    },
  ]);
  useEffect(async () => {
    setJobs(getJobs);
    console.log(jobs);
  });
  return (
    <div className="App flex h-screen">
      <div className="m-auto">
        <MainCard job={jobs[0]} />
      </div>
    </div>
  );
}

export default App;
