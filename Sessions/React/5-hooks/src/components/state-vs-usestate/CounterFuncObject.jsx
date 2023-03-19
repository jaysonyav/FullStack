import { useState } from "react";

function CounterFuncObject() {
  const [state, setState] = useState({ counter: 0, show: true, input: "" ,});

  const inputHandler = (e) => {
    setState({ input: e.target.value, counter: state.counter, show: state.show });
  };

  const incHandler = () => {
    setState({ counter: state.counter + 1, input:state.input, show:state.show });
  };
  const decHandler = () => {
    setState({ counter: state.counter - 1, input:state.input, show:state.show });
  };
  const toggleShowHandler = () => {
    setState({ counter:state.counter, show: !state.show, input:state.input });
  };
  const addValue = () => {
      setState({counter:state.counter, input:'', show:state.show});
      setState({counter:state.counter + Number(state.input), input:'', show:state.show},);
    
    
  };

  return (
    <div className="container mt-5">
      {state.show && (
        <div className="card mx-auto w-25 card-body text-center fw-bold">
          {state.counter}
          <input
            type="text"
            className="form-control w-100 text-center"
            onChange={(e) => inputHandler(e)}
            value={state.input}
          />
        </div>
      )}

      <div className="w-50 mx-auto d-flex justify-content-between mt-5">
        <button
          className="btn btn-primary"
          onClick={() => {
            incHandler();
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            toggleShowHandler();
          }}
        >
          {state.show ? "Hide" : "Show"}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            decHandler();
          }}
        >
          -
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            addValue();
          }}
        >
          Add Input Value
        </button>
      </div>
    </div>
  );
}

export default CounterFuncObject;
