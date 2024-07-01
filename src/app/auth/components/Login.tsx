import {toAbsoluteUrl} from '../../../_metronic/helpers';
import './layout.css'
export function Login() {
  return (
      <>
        <div className="d-flex flex-lg-row-fluid">
          <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
            <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
                 src={toAbsoluteUrl('media/auth/agency.png')} alt=""/>
            <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
                 src={toAbsoluteUrl('media/auth/agency-dark.png')} alt=""/>
            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and
              Productive</h1>
          </div>
        </div>
        <div
            className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
          <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
            <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
              <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
                <form className="form w-100" id="kt_sign_in_form"
                      data-kt-redirect-url="index.html" action="#">
                  <div className="text-center mb-11">
                    <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
                    <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                  </div>
                  <div className="row g-3 mb-9">
                    <div className="col-md-6">
                      <a href="#"
                         className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo"
                             src={toAbsoluteUrl('media/svg/brand-logos/google-icon.svg')}
                             className="h-15px me-3"/>Sign
                        in with Google</a>
                    </div>
                    <div className="col-md-6">
                      <a href="#"
                         className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo"
                             src={toAbsoluteUrl('media/svg/brand-logos/apple-black.svg')}
                             className="theme-light-show h-15px me-3"/>
                        <img alt="Logo"
                             src={toAbsoluteUrl('media/svg/brand-logos/apple-black-dark.svg')}
                             className="theme-dark-show h-15px me-3"/>Sign in with Apple</a>
                    </div>
                  </div>
                  <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                  </div>
                  <div className="fv-row mb-8">
                    <input type="text" placeholder="Email" name="email" autoComplete="off"
                           className="form-control bg-transparent"/>
                  </div>
                  <div className="fv-row mb-3">
                    <input type="password" placeholder="Password" name="password" autoComplete="off"
                           className="form-control bg-transparent"/>
                  </div>
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <a href="#" className="link-primary">Forgot
                      Password ?</a>
                  </div>
                  <div className="d-grid mb-10">
                    <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                      <span className="indicator-label">Sign In</span>
                      <span className="indicator-progress">Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                  </div>
                  <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
                    <a href="#" className="link-primary">Sign up</a></div>
                </form>
              </div>
              <div className="d-flex flex-stack">
                <div className="me-10">
                  <button
                      className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
                      data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                      data-kt-menu-offset="0px, 0px">
                    <img data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3"
                         src={toAbsoluteUrl('media/flags/united-states.svg')} alt=""/>
                    <span data-kt-element="current-lang-name" className="me-1">English</span>
                    <i className="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
                  </button>
                  <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
                      data-kt-menu="true" id="kt_auth_lang_menu">
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
												<span className="symbol symbol-20px me-4">
													<img data-kt-element="lang-flag" className="rounded-1"
                                                         src={toAbsoluteUrl('media/flags/united-states.svg')} alt=""/>
												</span>
                        <span data-kt-element="lang-name">English</span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
												<span className="symbol symbol-20px me-4">
													<img data-kt-element="lang-flag" className="rounded-1"
                                                         src={toAbsoluteUrl('media/flags/spain.svg')} alt=""/>
												</span>
                        <span data-kt-element="lang-name">Spanish</span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
												<span className="symbol symbol-20px me-4">
													<img data-kt-element="lang-flag" className="rounded-1"
                                                         src={toAbsoluteUrl('media/flags/germany.svg')} alt=""/>
												</span>
                        <span data-kt-element="lang-name">German</span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
												<span className="symbol symbol-20px me-4">
													<img data-kt-element="lang-flag" className="rounded-1"
                                                         src={toAbsoluteUrl('media/flags/japan.svg')} alt=""/>
												</span>
                        <span data-kt-element="lang-name">Japanese</span>
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
												<span className="symbol symbol-20px me-4">
													<img data-kt-element="lang-flag" className="rounded-1"
                                                         src={toAbsoluteUrl('media/flags/france.svg')} alt=""/>
												</span>
                        <span data-kt-element="lang-name">French</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
