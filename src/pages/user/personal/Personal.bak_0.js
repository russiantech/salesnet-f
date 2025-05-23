import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
