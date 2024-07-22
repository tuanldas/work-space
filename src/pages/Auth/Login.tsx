const Login = () => {
    return (
        <>
            <form action="#" className="card-body flex flex-col gap-5 p-10" id="sign_in_form" method="get">
                <div className="text-center mb-2.5">
                    <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">
                        Sign in
                    </h3>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="form-label text-gray-900">
                        Email
                    </label>
                    <input className="input" placeholder="email@email.com" type="text" value=""/>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-1">
                        <label className="form-label text-gray-900">
                            Password
                        </label>
                    </div>
                    <label className="input" data-toggle-password="true">
                        <input name="user_password" placeholder="Enter Password" type="password" value=""/>
                        <button className="btn btn-icon" data-toggle-password-trigger="true">
                            <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden">
                            </i>
                            <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block">
                            </i>
                        </button>
                    </label>
                </div>
                <button className="btn btn-primary flex justify-center grow">
                    Sign In
                </button>
            </form>
        </>
    );
};

export default Login;
