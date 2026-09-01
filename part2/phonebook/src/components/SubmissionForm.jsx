import Button from "./Button";

const SubmissionForm = ({ newNumber, handleNumberChange, addNumber }) => {
  return (
    <form onSubmit={addNumber}>
      <div>
        name: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <Button name="add" type="submit" />
      </div>
    </form>
  );
};

export default SubmissionForm;
