function SubmitButton() {
  function handleEnter() {
    console.log("Mouse Entering");
  }

  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button
      className="btn btn-primary w-100"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <i className="bi bi-lock me-2"></i>
      Submit Password
    </button>
  );
}

export default SubmitButton;
