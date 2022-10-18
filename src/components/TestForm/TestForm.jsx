import { useRef } from "react";

export const TestForm = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    alert(
      `Hello, ${nameRef.current.value}! You're age is ${ageRef.current.value}`
    );
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Age:
        <input type="text" ref={ageRef} />
      </label>
      <button>Submit</button>
    </form>
  );
};
