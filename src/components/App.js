import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <h4>Create Event</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle"></input>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody"></textarea>
        </div>

        <button className="btn btn-primary">Create Event</button>
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
            <tbody></tbody>
          </table>
      </form>
    </div>
  );
}

export default App;
