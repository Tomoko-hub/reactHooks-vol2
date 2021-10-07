import React, { useState }from "react";

const EventForm = ({ state, dispatch }) => {

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

    const deleteAllEvents = event => {
        event.preventDefault();
        const result = window.confirm('Are you sure?');
        if (result) dispatch({type:'DELETE_ALL_EVENTS'});
    }

    const unCreatable = title === '' || body === '';
    //console.log({state});


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
            <button className="btn btn-danger ml-2" onClick={deleteAllEvents} disabled={state.length === 0}>Delete All Event</button>

            
        </form>
    </>
    );
}


export default EventForm;