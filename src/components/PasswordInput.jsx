function PasswordInput() {
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <input
      type="password"
      className="form-control"
      placeholder="Enter password..."
      onChange={handleChange}
    />
  );
}

export default PasswordInput;
