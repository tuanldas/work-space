import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Button, Card, Col, Container, Form, FormFeedback, Input, Label, Row} from 'reactstrap';
import withRouter from '../../Components/Common/withRouter';
import {changeLayoutTheme} from '../../slices/layouts/thunk';
import {LAYOUT_THEME} from '../../Components/constants/layout';
import {useAppDispatch} from '../../slices/hooks';

const Login = () => {
    document.title = "SignIn | Work Space";

    const dispatch = useAppDispatch();
    const [passwordShow, setPasswordShow] = useState<boolean>(false);

    useEffect(() => {
        dispatch(changeLayoutTheme(LAYOUT_THEME.DEFAULT))
    }, []);

    const validation: any = useFormik({
        enableReinitialize: true,

        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            console.log("values", values)
        }
    });

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
                                                                   name="userName"
                                                                   onChange={validation.handleChange}
                                                                   onBlur={validation.handleBlur}
                                                                   value={validation.values.userName || ""}
                                                                   invalid={
                                                                       !!(validation.touched.userName && validation.errors.userName)
                                                                   }
                                                            />
                                                            {validation.touched.userName && validation.errors.userName ? (
                                                                <FormFeedback type="invalid">{validation.errors.userName}</FormFeedback>
                                                            ) : null}
                                                        </div>

                                                        <div className="mb-3">
                                                            <Label className="form-label" htmlFor="password-input">Mật khẩu</Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input type={passwordShow ? "text" : "password"} className="form-control pe-5 password-input"id="password-input"
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
                                                            <Button color="success" className="w-100" type="submit">Sign In</Button>
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
