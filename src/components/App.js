import React, { useReducer, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event';
import reducer from '../reducers';

function App() {
  const [ state, dispatch ] = useReducer(reducer, []);
  const [ title, setTitle ] = useState('');
  const [ body, setBoby ] = useState(''); 

  const addEvent = event =>{
    event.preventDefault();
    dispatch({
      type:'CREATE_EVENT',
      title,
      body
    });

    setTitle('');
    setBoby('');
  }

  //console.log({state});

  return (
    <div className="container-fluid">
      <h4>Create Event</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={event =>setTitle(event.target.value)}></input>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={event => setBoby(event.target.value)}></textarea>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>Create Event</button>
        <button className="btn btn-danger ml-2">Delete All Event</button>

          <h4>Show all event</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { state.map((event,index) =>(<Event key={index} event={event} dispatch={dispatch} />))}
            </tbody>
          </table>
      </form>
    </div>
  );
}

export default App;
