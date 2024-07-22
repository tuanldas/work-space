import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import useAuthMutation from '../../api/mutations/useAuthMutation.tsx';

const Login = () => {
    const {loginMutation} = useAuthMutation();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Email không hợp lệ')
                .required('Email không được để trống'),
            password: Yup.string()
                .required('Mật khẩu không được để trống')
                .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        }),
        onSubmit: (values) => {
            loginMutation.mutate(values);
        }
    });

    return (
        <>
            <form className="card-body flex flex-col gap-5 p-10"
                  onSubmit={(e) => {
                      formik.handleSubmit(e);
                  }}>
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">
                        {t('Auth.Sign In')}
                    </h3>
                </div>

                <div className="flex items-center gap-2">
                    <span className="border-t border-gray-200 w-full"></span>
                </div>
                {
                    loginMutation.isError
                        ? <div className="lg:mb-15 alert text-danger">
                            <div>Tài khoản hoặc mật khẩu không đúng.</div>
                        </div>
                        : ''
                }
                <div className="flex flex-col gap-1">
                    <label className="form-label text-gray-900">Email</label>
                    <input name="email"
                           placeholder="email@email.com"
                           type="text"
                           {...formik.getFieldProps('email')}
                           className={clsx('input', {'border-danger': formik.touched.email && formik.errors.email})}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-danger text-sm">
                            <span>{formik.errors.email}</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-1">
                        <label className="form-label text-gray-900">
                            {t('Auth.Password')}
                        </label>
                    </div>
                    <label
                        className={clsx('input', {'border-danger': formik.touched.password && formik.errors.password})}
                        data-toggle-password="true">
                        <input
                            name="password"
                            placeholder={t('Auth.Password')}
                            type="password"
                            {...formik.getFieldProps('password')}
                        />
                        <button className="btn btn-icon" type={'button'} data-toggle-password-trigger="true">
                            <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden">
                            </i>
                            <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block">
                            </i>
                        </button>
                    </label>
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-danger text-sm">
                            <span>{formik.errors.password}</span>
                        </div>
                    )}
                </div>
                <button className="btn btn-primary flex justify-center grow"
                        type={'submit'}
                        disabled={loginMutation.isPending}>
                    {t('Auth.Sign In')}
                    {
                        loginMutation.isPending ?
                            <svg aria-hidden="true"
                                 className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>
                            : null
                    }
                </button>
            </form>
        </>
    );
};

export default Login;
