const forgotpass = () => {
    return( <>

<form action="ma-page-de-traitement" method="post">

    <br />
    <br />
    <br />
    <br />
    <div class="head">
      <h2>FORGOT PASSWORD</h2>
      <br />
      <br />
      <h3>
        Please enter your email or phone number to verify the password reset
      </h3>
    </div>
    <br />
    <br />
    <br />
    <div class="centre">
      <div>
        <input
          type="text"
          class="btn btn-outline-primary"
          placeholder="Email Address"
          v-model="Email"
          required
        />
      </div>
      <br />
    </div>

    <div class="centre">
      <button type="submit" class="btn btn-outline-primary btn-login">
        SEND NOW
      </button>
      <br />
    </div>

    <br />
    <br />

    <a href="#" >
      <footer>Still in trouble? let's contact us</footer>
    </a>
  </form>

  </> );
}

export default forgotpass;