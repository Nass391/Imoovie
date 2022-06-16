const signup = () => {
    return( <>
  
  <form action="ma-page-de-traitement" method="post">
  
        <br />
        <br />
  
        <div class="head">
          <h2>Logout</h2>
          <h3>Fill up information</h3>
        </div>
  
        <br />
        <div class="centre">
          <div>
            <input
              type="text"
              class="btn btn-outline-primary"
              placeholder="Name"
              v-model="Name"
              required
            />
          </div>
  
          <div>
            <input
              type="text"
              class="btn btn-outline-primary"
              placeholder="Email Address"
              v-model="Email"
              required
            />
          </div>
  
  
          <div>
            <input
              type="password"
              class="btn btn-outline-primary"
              placeholder="Password"
              v-model="password"
              required
            />
          </div>
  
          <div>
            <input
              type="password"
              class="btn btn-outline-primary"
              placeholder="Confirm password"
              v-model="password"
              required
            />
          </div>
        </div>
  
        <div class="forgotdiv">
          <a href="forgotpass"
            >Forgot your password ?</a
          >
        </div>
  
        <div class="centre">
          <button type="submit" class="btn btn-outline-primary btn-login">
            LOG IN
          </button>
          <br />
          <br />
          <h4>OR</h4>
          <br />
          <button type="submit" class="btn btn-outline-primary btn-google">
            CONTINUE WITH GOOGLE
          </button>
          <br />
        </div>
        <br />
        <a href="signin" >
          <footer>Don't have any account? <strong>SIGN-IN</strong></footer>
        </a>
        <br />
      </form>
  
      </> );
  }
  
  export default signup;