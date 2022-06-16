const signin = () => {
    return( <>
        <form action="ma-page-de-traitement" method="post">
            <br /><br />
            <div class="head">
                <h2>SIGN IN</h2>
                <h3>Fill up information</h3>
            </div>
            <br /><br /><br />
            <div>
                <input
                    type="text"
                    class="btn btn-outline-primary"
                    placeholder="Email Address"
                    v-model="Email"
                    required
                />
            </div>
            <br /><br />
            <div>
                <input
                    type="password"
                    class="btn btn-outline-primary"
                    placeholder="Password"
                    v-model="password"
                    required
                />
            </div>
            <br /><br /><br /><br />
            <div class="forgotdiv">
                <a href="forgotpass" >Forgot your password ?</a>
            </div>
            <div class="centre">
                <button type="submit" class="btn btn-outline-primary btn-login">
                    LOG IN
                </button>
                <br /><br />
                <h4>OR</h4>
                <br />
                <button type="submit" class="btn btn-outline-primary btn-google">
                    CONTINUE WITH GOOGLE
                </button>
                <br />
            </div>
            <a href="signup" >
                <footer>don't have any account? <strong>SIGN-UP</strong></footer>
            </a>
            <br />
        </form>
    </> );
}

export default signin;
