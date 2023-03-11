import { BrowserRouter as Router } from 'react-router-dom' 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

function App() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "React",
          label: "React",
          trigger: "React",
        },
        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },
    {
      id: "React",
      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Angular",
      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
      end: true,
    },
  ]; 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />
        <Segment floated="left">
          <ChatBot steps= { steps }></ChatBot>
        </Segment>
        </Router>
    </div>
  );
}

export default App;