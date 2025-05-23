import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import Aside from '../shared/Aside'
// // import Navigation from '../../../components/shared/Navigation'
// const Personal = () => {
//     return (
//         <>
//             {/* <Categories /> */}
//             {/* <Navigation /> */}
//             {/* Page content */}
//             <main className="content-wrapper">
//                 <div className="container py-5 mt-n2 mt-sm-0">
//                     <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//                         {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
//                         <Aside />
//                         {/* Personal info content */}
//                         <div className="col-lg-9">
//                             <div className="ps-lg-3 ps-xl-0">
//                                 {/* Page title */}
//                                 <h1 className="h2 mb-1 mb-sm-2">Personal info</h1>
//                                 {/* Basic info */}
//                                 <div className="border-bottom py-4">
//                                     <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                                         <h2 className="h6 mb-0">Basic info</h2>
//                                         <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#basicInfoEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="basicInfoPreview basicInfoEdit">Edit</a>
//                                     </div>
//                                     <div className="collapse basic-info show" id="basicInfoPreview">
//                                         <ul className="list-unstyled fs-sm m-0">
//                                             <li>Russian Developer</li>
//                                             <li>May 12, 1996</li>
//                                             <li>English</li>
//                                         </ul>
//                                     </div>
//                                     <div className="collapse basic-info" id="basicInfoEdit">
//                                         <form className="row g-3 g-sm-4 needs-validation" noValidate>
//                                             <div className="col-sm-6">
//                                                 <label htmlFor="fn" className="form-label">First name</label>
//                                                 <div className="position-relative">
//                                                     <input type="text" className="form-control" id="fn" defaultValue="Chris" required />
//                                                     <div className="invalid-feedback">Please enter your first name!</div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm-6">
//                                                 <label htmlFor="ln" className="form-label">Last name</label>
//                                                 <div className="position-relative">
//                                                     <input type="text" className="form-control" id="ln" defaultValue="James" required />
//                                                     <div className="invalid-feedback">Please enter your last name!</div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm-6">
//                                                 <label htmlFor="birthdate" className="form-label">Date of birth</label>
//                                                 <div className="position-relative">
//                                                     <input type="date" className="form-control form-icon-end" id="birthdate" 
//                                                      placeholder="Choose date" />
//                                                     <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm-6">
//                                                 <label className="form-label">Language</label>
//                                                 <select className="form-select" data-select-template="true">
//                                                 <option value="">Efik</option>
//                                                 <option value="">Lagos</option>
//                                                 <option value="">Igbo</option>
//                                                 </select>
//                                             </div>
//                                             <div className="col-12">
//                                                 <div className="d-flex gap-3 pt-2 pt-sm-0">
//                                                     <button type="submit" className="btn btn-primary">Save changes</button>
//                                                     <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".basic-info" aria-expanded="true" aria-controls="basicInfoPreview basicInfoEdit">Close</button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                                 {/* Contact */}
//                                 <div className="border-bottom py-4">
//                                     <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                                         <div className="d-flex align-items-center gap-3 me-4">
//                                             <h2 className="h6 mb-0">Contact</h2>
//                                         </div>
//                                         <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#contactInfoEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="contactInfoPreview contactInfoEdit">Edit</a>
//                                     </div>
//                                     <div className="collapse contact-info show" id="contactInfoPreview">
//                                         <ul className="list-unstyled fs-sm m-0">
//                                             <li className="mb-1">russian.techa@email.com</li>
//                                             <li>+1 (805) 348 95 72 <span className="text-success ms-1">Verified</span></li>
//                                         </ul>
//                                     </div>
//                                     <div className="collapse contact-info" id="contactInfoEdit">
//                                         <form className="row g-3 g-sm-4 needs-validation" noValidate>
//                                             <div className="col-sm-6">
//                                                 <label htmlFor="email" className="form-label">Email address</label>
//                                                 <div className="position-relative">
//                                                     <input type="email" className="form-control" id="email" defaultValue="russian.techa@email.com" required />
//                                                     <div className="invalid-feedback">Please enter a valid email address!</div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm-6">
//                                                 <label htmlFor="phone" className="form-label">Phone number</label>
//                                                 <div className="position-relative">
//                                                     <input type="text" className="form-control" id="phone" data-input-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 (&quot;, &quot;)&quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 0, 3, 2, 2]}" placeholder="+1 (___) ___ __ __" defaultValue="+1 (805) 348 95 72" required />
//                                                     <div className="invalid-feedback">Please enter your phone number!</div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-12">
//                                                 <div className="d-flex gap-3 pt-2 pt-sm-0">
//                                                     <button type="submit" className="btn btn-primary">Save changes</button>
//                                                     <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".contact-info" aria-expanded="true" aria-controls="contactInfoPreview contactInfoEdit">Close</button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                                 {/* Password */}
//                                 <div className="border-bottom py-4">
//                                     <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                                         <div className="d-flex align-items-center gap-3 me-4">
//                                             <h2 className="h6 mb-0">Password</h2>
//                                         </div>
//                                         <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#passChangeEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="passChangePreview passChangeEdit">Edit</a>
//                                     </div>
//                                     <div className="collapse password-change show" id="passChangePreview">
//                                         <ul className="list-unstyled fs-sm m-0">
//                                             <li>**************</li>
//                                         </ul>
//                                     </div>
//                                     <div className="collapse password-change" id="passChangeEdit">
//                                         <form className="row g-3 g-sm-4 needs-validation" noValidate>
//                                             <div className="col-sm-6">
//                                                 <label htmlFor="current-password" className="form-label">Current password</label>
//                                                 <div className="password-toggle">
//                                                     <input type="password" className="form-control" id="current-password" placeholder="Enter your current password" required />
//                                                     <label className="password-toggle-button" aria-label="Show/hide password">
//                                                         <input type="checkbox" className="btn-check" />
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm-6">
//                                                 <label htmlFor="new-password" className="form-label">New password</label>
//                                                 <div className="password-toggle">
//                                                     <input type="password" className="form-control" id="new-password" placeholder="Create new password" required />
//                                                     <label className="password-toggle-button" aria-label="Show/hide password">
//                                                         <input type="checkbox" className="btn-check" />
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-12">
//                                                 <div className="d-flex gap-3 pt-2 pt-sm-0">
//                                                     <button type="submit" className="btn btn-primary">Save changes</button>
//                                                     <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".password-change" aria-expanded="true" aria-controls="passChangePreview passChangeEdit">Close</button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                                 {/* Delete account */}
//                                 <div className="pt-3 mt-2 mt-sm-3">
//                                     <h2 className="h6">Delete account</h2>
//                                     <p className="fs-sm">When you delete your account, your public profile will be deactivated immediately. If you change your mind before the 14 days are up, sign in with your email and password, and we'll send you a link to reactivate your account.</p>
//                                     <a className="text-danger fs-sm fw-medium" href="#!">Delete account</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }
// export default Personal
// 
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationService } from '../../../services/local/NotificationService';
import { UsersService } from '../../../services/local/UsersService';
import { AxiosUsersService } from '../../../services/net/AxiosUsersService';
// import ConfirmationModal from '../../components/shared/ConfirmationModal';
const Personal = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [activeSection, setActiveSection] = useState('basic');
    const [modalState, setModalState] = useState({ show: false, message: '', type: '' });
    const [loading, setLoading] = useState({ basic: false, contact: false, password: false });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    // Form states
    const [basicInfo, setBasicInfo] = useState({});
    const [contactInfo, setContactInfo] = useState({});
    const [passwordInfo, setPasswordInfo] = useState({});
    useEffect(() => {
        const observer = (data) => setModalState(data);
        NotificationService.subscribe(observer);
        const currentUser = UsersService.getCurrentUser();
        if (!currentUser) {
            NotificationService.showDialog('Please sign in to continue', 'warning');
            // navigate('/auth/signin');
            return;
        }
        loadUserData(currentUser.access_token);
        return () => NotificationService.unsubscribe(observer);
    }, [navigate]);
    const loadUserData = async (token) => {
        try {
            const response = await AxiosUsersService.getProfile(token);
            if (response.data.success) {
                const user = response.data.user;
                setUserData(user);
                setBasicInfo({
                    firstName: user.first_name,
                    lastName: user.last_name,
                    birthdate: user.birthdate,
                    language: user.language
                });
                setContactInfo({
                    email: user.email,
                    phone: user.phone
                });
            }
        }
        catch (error) {
            handleApiError(error);
        }
    };
    const handleApiError = (error) => {
        const message = error.response?.data?.error || error.message;
        if (error.response?.status === 401)
            handleTokenRefresh();
        else
            NotificationService.showDialog(message || 'Operation failed', 'error');
    };
    const handleTokenRefresh = async () => {
        const currentUser = UsersService.getCurrentUser();
        if (!currentUser?.refresh_token) {
            UsersService.logout();
            navigate('/auth/signin');
            return;
        }
        try {
            const response = await AxiosUsersService.refreshToken(currentUser.refresh_token);
            UsersService.authenticate({
                ...currentUser,
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token
            });
            loadUserData(response.data.access_token);
        }
        catch (error) {
            UsersService.logout();
            navigate('/auth/signin');
        }
    };
    const handleBasicInfoSubmit = async (e) => {
        e.preventDefault();
        setLoading(prev => ({ ...prev, basic: true }));
        try {
            const response = await AxiosUsersService.updateProfile(userData.access_token, { ...basicInfo });
            setUserData(prev => ({ ...prev, ...response.data.user }));
            NotificationService.showDialog('Profile updated successfully', 'success');
        }
        catch (error) {
            handleApiError(error);
        }
        finally {
            setLoading(prev => ({ ...prev, basic: false }));
        }
    };
    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setLoading(prev => ({ ...prev, password: true }));
        try {
            await AxiosUsersService.changePassword(userData.access_token, passwordInfo);
            NotificationService.showDialog('Password updated successfully', 'success');
            setPasswordInfo({});
        }
        catch (error) {
            handleApiError(error);
        }
        finally {
            setLoading(prev => ({ ...prev, password: false }));
        }
    };
    const handleAccountDeletion = async () => {
        try {
            await AxiosUsersService.deleteAccount(userData.access_token);
            UsersService.logout();
            NotificationService.showDialog('Account deleted successfully', 'success');
            navigate('/auth/signin');
        }
        catch (error) {
            handleApiError(error);
        }
    };
    if (!userData)
        return _jsx("div", { className: "text-center py-5", children: "Loading profile..." });
    return (_jsx("main", { className: "content-wrapper", children: _jsx("div", { className: "container py-5 mt-n2 mt-sm-0", children: _jsx("div", { className: "row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5", children: _jsx("div", { className: "col-lg-9", children: _jsxs("div", { className: "ps-lg-3 ps-xl-0", children: [_jsx("h1", { className: "h2 mb-1 mb-sm-2", children: "Personal info" }), _jsxs("div", { className: "border-bottom py-4", children: [_jsxs("div", { className: "nav flex-nowrap align-items-center justify-content-between pb-1 mb-3", children: [_jsx("h2", { className: "h6 mb-0", children: "Basic info" }), _jsx("button", { className: "btn btn-link text-decoration-underline p-0", onClick: () => setActiveSection('basic'), children: "Edit" })] }), activeSection === 'basic' ? (_jsxs("form", { className: "row g-3 g-sm-4", onSubmit: handleBasicInfoSubmit, children: [_jsxs("div", { className: "col-sm-6", children: [_jsx("label", { className: "form-label", children: "First name" }), _jsx("input", { type: "text", className: "form-control", value: basicInfo.firstName || '', onChange: (e) => setBasicInfo(prev => ({ ...prev, firstName: e.target.value })), required: true })] }), _jsx("div", { className: "col-12", children: _jsxs("div", { className: "d-flex gap-3 pt-2 pt-sm-0", children: [_jsx("button", { type: "submit", className: "btn btn-primary", disabled: loading.basic, children: loading.basic ? 'Saving...' : 'Save changes' }), _jsx("button", { type: "button", className: "btn btn-secondary", onClick: () => setActiveSection(null), children: "Cancel" })] }) })] })) : (_jsx("div", { className: "fs-sm", children: _jsxs("ul", { className: "list-unstyled m-0", children: [_jsx("li", { children: `${userData.first_name} ${userData.last_name}` }), _jsx("li", { children: new Date(userData.birthdate).toLocaleDateString() }), _jsx("li", { children: userData.language })] }) }))] }), _jsxs("div", { className: "border-bottom py-4", children: [_jsxs("div", { className: "nav flex-nowrap align-items-center justify-content-between pb-1 mb-3", children: [_jsx("h2", { className: "h6 mb-0", children: "Password" }), _jsx("button", { className: "btn btn-link text-decoration-underline p-0", onClick: () => setActiveSection('password'), children: "Change" })] }), activeSection === 'password' && (_jsxs("form", { className: "row g-3 g-sm-4", onSubmit: handlePasswordChange, children: [_jsxs("div", { className: "col-sm-6", children: [_jsx("label", { className: "form-label", children: "New Password" }), _jsx("input", { type: "password", className: "form-control", value: passwordInfo.newPassword || '', onChange: (e) => setPasswordInfo(prev => ({ ...prev, newPassword: e.target.value })), required: true, minLength: "8" })] }), _jsx("div", { className: "col-12", children: _jsxs("div", { className: "d-flex gap-3 pt-2 pt-sm-0", children: [_jsx("button", { type: "submit", className: "btn btn-primary", disabled: loading.password, children: loading.password ? 'Updating...' : 'Update Password' }), _jsx("button", { type: "button", className: "btn btn-secondary", onClick: () => setActiveSection(null), children: "Cancel" })] }) })] }))] }), _jsxs("div", { className: "pt-3 mt-2 mt-sm-3", children: [_jsx("h2", { className: "h6", children: "Delete account" }), _jsx("p", { className: "fs-sm", children: "When you delete your account, all personal data will be permanently removed. This action cannot be undone." }), _jsx("button", { className: "btn btn-link text-danger fs-sm fw-medium p-0", onClick: () => setShowDeleteModal(true), children: "Delete Account" })] })] }) }) }) }) }));
};
export default Personal;
