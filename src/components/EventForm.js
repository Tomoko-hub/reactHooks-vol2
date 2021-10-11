import React, { useState, useContext }from "react";

import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCuurentIso8601 } from '../utils';

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext);
    const [ title, setTitle ] = useState('');
    const [ body, setBoby ] = useState(''); 

    const addEvent = event =>{
        event.preventDefault();
        dispatch({
          type: CREATE_EVENT,
          title,
          body
    });

        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'Event was created.',
            operatedAt: timeCuurentIso8601()
        });

        setTitle('');
        setBoby('');
    }

    const deleteAllEvents = event => {
        event.preventDefault();
        const result = window.confirm('Are you sure?');
        if (result){
          dispatch({type:DELETE_ALL_EVENTS})

          dispatch({
              type: ADD_OPERATION_LOG,
              description:'Deleted all events.',
              operatedAt: timeCuurentIso8601()
          })
        };
    }

    const unCreatable = title === '' || body === '';

    const deleteAllOperationLogs = event => {
        event.preventDefault();
        const result = window.confirm('Are you really want to delet all logs?');

        if (result) {
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS
            })
        }
    }

    return (

        <>
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

                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>Create Event</button>
                <button className="btn btn-danger ml-2" onClick={deleteAllEvents} disabled={state.events.length === 0}>Delete All Event</button>
                <button className="btn btn-danger ml-2" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>Delete All Logs</button>
                
            </form>
        </>
    );
}


export default EventForm;