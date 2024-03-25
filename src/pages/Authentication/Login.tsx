import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Alert, Button, Card, Col, Container, Form, FormFeedback, Input, Label, Row, Spinner} from 'reactstrap';
import withRouter from '../../Components/Common/withRouter';
import {useAppDispatch, useAppSelector} from '../../slices/hooks';
import {loginAction} from '../../slices/Auth/actions';
import {selectAuthState} from '../../slices/Auth/selector';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    document.title = "SignIn | Work Space";

    const dispatch = useAppDispatch();
    const authSlice = useAppSelector(selectAuthState);
    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState<boolean>(false);

    useEffect(() => {
        // dispatch(changeLayoutTheme(LAYOUT_THEME.DEFAULT))
    }, []);

    const validation: any = useFormik({
        enableReinitialize: true,

        initialValues: {
            username: 'admin@tuanldas.me',
            password: '123456',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values: { username: string, password: string }) => {
            dispatch(loginAction({
                email: values.username,
                password: values.password
            }));
        }
    });

    useEffect(() => {
        if (authSlice.access_token && authSlice.expires_at) {
            navigate('/dashboard');
        }
    }, [authSlice]);

    return (
        <React.Fragment>

            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <Card className="overflow-hidden card-bg-fill galaxy-border-none">
                                    <Row className="g-0">
                                        <Col lg={12}>
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-primary">Chào mừng quay trở lại!</h5>
                                                </div>
                                                {authSlice.login.errorMessage ? (<Alert
                                                    color="danger"> {authSlice.login.errorMessage} </Alert>) : null}
                                                <div className="mt-4">
                                                    <Form
                                                        onSubmit={(e) => {
                                                            e.preventDefault();
                                                            validation.handleSubmit();
                                                            return false;
                                                        }}
                                                        action="#">

                                                        <div className="mb-3">
                                                            <Label htmlFor="username" className="form-label">Tài khoản</Label>
                                                            <Input type="text" className="form-control" id="username" placeholder=""
                                                                   name="username"
                                                                   onChange={validation.handleChange}
                                                                   onBlur={validation.handleBlur}
                                                                   value={validation.values.username || ""}
                                                                   invalid={
                                                                       !!(validation.touched.username && validation.errors.username)
                                                                   }
                                                            />
                                                            {validation.touched.username && validation.errors.username ? (
                                                                <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                                                            ) : null}
                                                        </div>

                                                        <div className="mb-3">
                                                            <Label className="form-label" htmlFor="password-input">Mật khẩu</Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input type={passwordShow ? "text" : "password"} className="form-control pe-5 password-input" id="password-input"
                                                                       name="password"
                                                                       value={validation.values.password || ""}
                                                                       onChange={validation.handleChange}
                                                                       onBlur={validation.handleBlur}
                                                                       invalid={
                                                                           !!(validation.touched.password && validation.errors.password)
                                                                       }
                                                                />
                                                                {validation.touched.password && validation.errors.password ? (
                                                                    <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                                ) : null}
                                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon material-shadow-none" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></button>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Button color="success" className="w-100" type="submit">
                                                                {
                                                                    authSlice.login.isPending ?
                                                                        <Spinner size="sm"
                                                                                 className="flex-shrink-0"> Loading... </Spinner>
                                                                        : null
                                                                }
                                                                <span className="flex-grow-1 ms-2">Sign In</span>
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withRouter(Login);
