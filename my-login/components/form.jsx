export function FromDefult() {
  return (
    <>
      <form action="">
        <label htmlFor="">
          Username/email:
          <input
            type="text"
            className="user-input-field"
            placeholder="Type username/email..."
          />
        </label>
        <label htmlFor="">Password
        <input
          type="password"
          className="user-input-field"
          placeholder="Type password..."
        /></label>
        
        <button id="login-btn">Log in</button>
      </form>
    </>
  );
}

export default FromDefult;
