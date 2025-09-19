
// v3
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Aside from '../shared/Aside';
import { AxiosService } from '@/services/net/base/AxiosService';
import { NotificationService } from '@/services/local/NotificationService';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { UsersService } from '@/services/local/UsersService';
import { LoadingZoom } from '../../../components/shared/LoadingSpinner';

interface PersonalInfo {
  name: string;
  dob: string;
  languages: number[];
  email: string;
  phone: string;
}

interface Language {
  id: number;
  name: string;
  code: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  dob?: string;
  languages: {
    id: number;
    name: string;
    code: string;
  }[];
  default_language?: {
    id: number;
    name: string;
    code: string;
  };
  phone_verified?: boolean;
  email_verified?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface PasswordData {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

const Personal: React.FC = () => {
  const navigate = useNavigate();
  
  // State management
  const [user, setUser] = useState<User | null>(UsersService.getCurrentUser());
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: user?.name || '',
    dob: user?.dob || '',
    languages: user?.languages.map(l => l.id) || [],
    email: user?.email || '',
    phone: user?.phone || ''
  });
  
  const [passwordData, setPasswordData] = useState<PasswordData>({
    current_password: '',
    new_password: '',
    confirm_password: ''
  });
  
  // Loading states
  const [loading, setLoading] = useState(true);
  const [savingBasicInfo, setSavingBasicInfo] = useState(false);
  const [savingContact, setSavingContact] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);
  
  // Data and UI states
  const [languages, setLanguages] = useState<Language[]>([]);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load languages from API
        const languagesResponse = await AxiosService.json.get('/languages?page_size=100');
        setLanguages(languagesResponse.data?.languages || []);
        
        // Initialize form with user data
        if (user) {
          setPersonalInfo({
            name: user.name || '',
            dob: user.dob || '',
            languages: user.languages?.map(l => l.id) || [],
            email: user.email || '',
            phone: user.phone || ''
          });
        } else {
          console.warn('No user data available');
          navigate('/auth/signin');
        }
      } catch (err: any) {
        console.error('Failed to load personal info:', err);
        const message = err.response?.data?.message || err.response?.data?.error || 'Failed to load data';
        NotificationService.showDialog(message, 'danger');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user, navigate]);

  // Handle form input changes
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validation functions
  const validateBasicInfo = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!personalInfo.name.trim()) {
      errors.name = 'Name is required';
    } else if (personalInfo.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (personalInfo.dob) {
      const birthDate = new Date(personalInfo.dob);
      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 120);
      
      if (birthDate > today) {
        errors.dob = 'Date of birth cannot be in the future';
      } else if (birthDate < minDate) {
        errors.dob = 'Invalid date of birth';
      }
      
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateContactInfo = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!personalInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!personalInfo.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (personalInfo.phone.trim().length < 10) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePassword = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!passwordData.current_password) {
      errors.current_password = 'Current password is required';
    }
    
    if (!passwordData.new_password) {
      errors.new_password = 'Password is required';
    } else if (passwordData.new_password.length < 4) {
      errors.new_password = 'Password must be at least 4 characters';
    } else if (passwordData.new_password.length > 64) {
      errors.new_password = 'Password cannot exceed 64 characters'; 
    } else if (passwordData.new_password.includes(' ')) {
      errors.new_password = 'Password cannot contain spaces';
    } else if (passwordData.new_password.toLowerCase() === personalInfo.name.toLowerCase()) {
      errors.new_password = 'Password cannot be your name';
    } else if (passwordData.new_password.toLowerCase() === personalInfo.email.toLowerCase()) {
      errors.new_password = 'Password cannot be your email';
    }
    
    if (!passwordData.confirm_password) {
      errors.confirm_password = 'Please confirm your new password';
    } else if (passwordData.new_password !== passwordData.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Update local user data
  const updateLocalUser = (newData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...newData };
      UsersService.updateLocalUser(updatedUser);
      setUser(updatedUser);
    }
  };

  // Form submission handlers
  const handleBasicInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBasicInfo()) return;
    
    setSavingBasicInfo(true);
    try {
      const payload = {
        name: personalInfo.name.trim(),
        dob: personalInfo.dob || null,
        languages: personalInfo.languages
      };
      
      const response = await AxiosService.json.put(`/users/${user?.id}`, payload);

      if (response.data.success) {
        updateLocalUser(response.data);
        NotificationService.showDialog(response.data.message || 'Basic information updated successfully', 'success');
        setPersonalInfo(prev => ({
          ...prev,
          name: response.data.name,
          dob: response.data.dob || ''
        }));
        // Re-authenticate user if access token is provided
        if (response.data.access_token) {
          // Store the new access token
          localStorage.setItem('access_token', response.data.access_token);
        }

        // Close form
        const collapseElement = document.querySelector('#basicInfoEdit') as HTMLElement;
        if (collapseElement && window.bootstrap) {
          new window.bootstrap.Collapse(collapseElement).hide();
        }
      } else {
        NotificationService.showDialog(response.error || 'Update failed', 'danger');
      }
    } catch (err: any) {
      const message = err.response?.data?.error || err.response?.data?.message || 'Update failed';
      NotificationService.showDialog(message, 'danger');
    } finally {
      setSavingBasicInfo(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContactInfo()) return;
    
    setSavingContact(true);
    try {
      const payload = {
        email: personalInfo.email.trim(),
        phone: personalInfo.phone.trim()
      };

      const response = await AxiosService.json.put(`/users/${user?.id}`, payload);
      console.log('Contact update response:', response); // Log the response for debugging

      if (response.data.success) {
        // Check if re-authentication is needed
        if (response.data.access_token) {
          // Re-authenticate user with new tokens
          const userData = {
            ...response.data,
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token
          };
          
          UsersService.authenticate(userData);
          setUser(userData);
          
          NotificationService.showDialog(
            response.data.message || 'Contact information updated successfully. You have been re-authenticated for security.', 
            'success'
          );
        } else {
          updateLocalUser(response?.data);
          NotificationService.showDialog(response.data.message || 'Contact information updated successfully', 'success');
        }
        
        // Close form
        const collapseElement = document.querySelector('#contactInfoEdit') as HTMLElement;
        if (collapseElement && window.bootstrap) {
          new window.bootstrap.Collapse(collapseElement).hide();
        }
      } else {
        NotificationService.showDialog(response.data.error || 'Update failed', 'danger');
      }
    } catch (err: any) {
      const message = err.response?.data?.error || err.response?.data?.message || 'Failed to update contact information';
      NotificationService.showDialog(message, 'danger');
    } finally {
      setSavingContact(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword()) return;
    
    setChangingPassword(true);
    try {
      const payload = {
        current_password: passwordData.current_password,
        new_password: passwordData.new_password,
        confirm_password: passwordData.confirm_password
      };
      
      const response = await AxiosService.json.put('/users/change-password', payload);
      
      if (response.data.success) {
        NotificationService.showDialog('Password changed successfully', 'success');

        // Reset password form
        setPasswordData({
          current_password: '',
          new_password: '',
          confirm_password: ''
        });
        
        // Close form
        const collapseElement = document.querySelector('#passChangeEdit') as HTMLElement;
        if (collapseElement && window.bootstrap) {
          new window.bootstrap.Collapse(collapseElement).hide();
        }
      } else {
        NotificationService.showDialog(response.data.error || 'Failed to change password', 'danger');
      }
    } catch (err: any) {
      const message = err.response?.data?.error || err.response?.data?.message || 'Failed to change password';
      NotificationService.showDialog(message, 'danger');
    } finally {
      setChangingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone and you will lose all your data.'
    );
    
    if (!confirmed) return;
    
    setDeletingAccount(true);
    try {
      const response = await AxiosService.json.delete('/user/account');
      
      if (response.success) {
        NotificationService.showDialog(
          'Account deletion initiated. You will receive an email with further instructions.', 
          'info'
        );
        
        // Clear local storage and redirect
        UsersService.logout();
        navigate('/products');
      } else {
        NotificationService.showDialog(response.error || 'Failed to delete account', 'danger');
      }
    } catch (err: any) {
      const message = err.response?.data?.error || err.response?.data?.message || 'Failed to delete account';
      NotificationService.showDialog(message, 'danger');
    } finally {
      setDeletingAccount(false);
    }
  };

  // Helper functions
  const formatDisplayValue = (value: string | null | undefined): string => {
    return value && value.trim() ? value.trim() : 'Not provided';
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Not provided';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  const closeForm = (target: string) => {
    const collapseElement = document.querySelector(target) as HTMLElement;
    if (collapseElement && window.bootstrap) {
      new window.bootstrap.Collapse(collapseElement).hide();
    }
  };

  // Loading state
  if (loading) {
    return (
      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="text-center py-5">
            <LoadingSpinner />
            <p className="mt-2">Loading personal information...</p>
          </div>
        </div>
      </main>
    );
  }

  // No user state
  if (!user) {
    return (
      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="text-center py-5">
            <h2>User not found</h2>
            <p>Please log in to access your personal information.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => navigate('/auth/login')}
            >
              Go to Login
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
            {/* Sidebar navigation */}
            <Aside />
            
            {/* Personal info content */}
            <div className="col-lg-9">
              <div className="ps-lg-3 ps-xl-0">
                {/* Page title */}
                <h1 className="h2 mb-1 mb-sm-2">Personal info</h1>
                
                {/* Basic info section */}
                <div className="border-bottom py-4">
                  <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3 animate-scale">
                    <h2 className="h6 mb-0">Basic info</h2>
                    <Link 
                      className="nav-link hiding-collapse-toggle p-0 collapsed rounded-pill badge border p-1 text-dark animate-target" 
                      to="#basicInfoEdit" 
                      data-bs-toggle="collapse" 
                      aria-expanded="false" 
                      aria-controls="basicInfoPreview basicInfoEdit"
                    >
                      Edit
                    </Link>
                  </div>
                  
                  {/* Basic info preview */}
                  <div className="collapse basic-info show" id="basicInfoPreview">
                    <ul className="list-unstyled fs-sm m-0">
                      <li className="mb-1">
                        <strong>Name:</strong> {formatDisplayValue(user?.name)}
                      </li>
                      <li className="mb-1">
                        <strong>Date of birth:</strong> {user?.dob ? formatDate(user.dob) : 'Not provided'}
                      </li>
                      <li className="mb-1">
                        <strong>Languages:</strong> 
                        {user?.languages?.length > 0 
                          ? user.languages.map(lang => lang.name).join(', ')
                          : user?.default_language 
                            ? `${user.default_language.name} (system default)`
                            : 'None selected'
                        }
                      </li>
                      <li>
                        <strong>Default language:</strong> 
                        {user?.languages[0]?.name || user?.default_language?.name || 'System default'}
                      </li>
                    </ul>
                  </div>
                  
                  {/* Basic info edit form */}
                  <div className="collapse basic-info" id="basicInfoEdit">
                    <form className="row g-3 g-sm-4" onSubmit={handleBasicInfoSubmit} noValidate>
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <div className="position-relative">
                          <input 
                            type="text" 
                            className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                            id="name" 
                            name="name"
                            value={personalInfo.name}
                            onChange={handlePersonalInfoChange}
                            required 
                            maxLength={100}
                          />
                          {formErrors.name && (
                            <div className="invalid-feedback">{formErrors.name}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-sm-6">
                        <label htmlFor="dob" className="form-label">Date of birth</label>
                        <div className="position-relative">
                          <input 
                            type="date" 
                            className={`form-control form-icon-end ${formErrors.dob ? 'is-invalid' : ''}`}
                            id="dob" 
                            name="dob"
                            value={personalInfo.dob}
                            onChange={handlePersonalInfoChange}
                            max={new Date().toISOString().split('T')[0]}
                          />
                          <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
                          {formErrors.dob && (
                            <div className="invalid-feedback">{formErrors.dob}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="languages" className="form-label">Languages</label>
                        <select 
                          multiple
                          size={4}
                          className="form-select" 
                          id="languages"
                          name="languages"
                          value={personalInfo.languages}
                          onChange={e => {
                            const options = e.target.options;
                            const selected = [];
                            for (let i = 0; i < options.length; i++) {
                              if (options[i].selected) {
                                selected.push(parseInt(options[i].value));
                              }
                            }
                            setPersonalInfo(prev => ({ ...prev, languages: selected }));
                          }}
                        >
                          {languages.map(language => (
                            <option key={language.id} value={language.id}>
                              {language.name}
                            </option>
                          ))}
                        </select>
                      </div>
                                      
                      <div className="col-12">
                        <div className="d-flex gap-3 pt-2 pt-sm-0">
                          <button 
                            type="submit" 
                            className="btn btn-primary d-flex align-items-center rounded-pill"
                            disabled={savingBasicInfo}
                          >
                            {savingBasicInfo ? (
                              <>
                                <LoadingZoom size='sm' />
                                Saving...
                              </>
                            ) : 'Save changes'}
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-secondary rounded-pill" 
                            onClick={() => closeForm('#basicInfoEdit')}
                            disabled={savingBasicInfo}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                {/* Contact section */}
                <div className="border-bottom py-4">
                  <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3 animate-scale">
                    <div className="d-flex align-items-center gap-3 me-4">
                      <h2 className="h6 mb-0">Contact</h2>
                    </div>
                    <Link className="nav-link hiding-collapse-toggle collapsed rounded-pill badge border p-1 text-dark animate-target" 
                      to="#contactInfoEdit" 
                      data-bs-toggle="collapse" 
                      aria-expanded="false" 
                      aria-controls="contactInfoPreview contactInfoEdit"
                    >
                      Edit
                    </Link>
                  </div>
                  
                  {/* Contact info preview */}
                  <div className="collapse contact-info show" id="contactInfoPreview">
                    <ul className="list-unstyled fs-sm m-0">
                      <li className="mb-1">
                        <strong>Email:</strong> {formatDisplayValue(user?.email)}
                        {user?.email_verified && <span className="text-success ms-2">✓ Verified</span>}
                      </li>
                      <li>
                        <strong>Phone:</strong> {formatDisplayValue(user?.phone)}
                        {user?.phone_verified && <span className="text-success ms-2">✓ Verified</span>}
                      </li>
                    </ul>
                  </div>
                  
                  {/* Contact info edit form */}
                  <div className="collapse contact-info" id="contactInfoEdit">
                    <form className="row g-3 g-sm-4" onSubmit={handleContactSubmit} noValidate>
                      <div className="col-sm-6">
                        <label htmlFor="email" className="form-label">Email address *</label>
                        <div className="position-relative">
                          <input 
                            type="email" 
                            className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                            id="email" 
                            name="email"
                            value={personalInfo.email}
                            onChange={handlePersonalInfoChange}
                            required 
                            maxLength={100}
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">{formErrors.email}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-sm-6">
                        <label htmlFor="phone" className="form-label">Phone number *</label>
                        <div className="position-relative">
                          <input 
                            type="tel" 
                            className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                            id="phone" 
                            name="phone"
                            value={personalInfo.phone}
                            onChange={handlePersonalInfoChange}
                            placeholder="+1 (555) 123-4567" 
                            required 
                            maxLength={20}
                          />
                          {formErrors.phone && (
                            <div className="invalid-feedback">{formErrors.phone}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="d-flex gap-3 pt-2 pt-sm-0">
                          <button 
                            type="submit" 
                            className="btn btn-primary d-flex align-items-center rounded-pill"
                            disabled={savingContact}
                          >
                            {savingContact ? (
                              <>
                                <LoadingZoom size='sm' />
                                Saving...
                              </>
                            ) : 'Save changes'}
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-secondary rounded-pill" 
                            onClick={() => closeForm('#contactInfoEdit')}
                            disabled={savingContact}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                {/* Password section */}
                <div className="border-bottom py-4">
                  <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3 animate-scale">
                    <div className="d-flex align-items-center gap-3 me-4">
                      <h2 className="h6 mb-0">Password</h2>
                    </div>
                    <Link to="#passChangeEdit" className="nav-link hiding-collapse-toggle p-0 collapsed rounded-pill badge border p-1 text-dark animate-target" data-bs-toggle="collapse" 
                    aria-expanded="false" aria-controls="passChangePreview passChangeEdit">
                      Change
                    </Link>
                  </div>
                  
                  {/* Password preview */}
                  <div className="collapse password-change show" id="passChangePreview">
                    <ul className="list-unstyled fs-sm m-0">
                      <li>••••••••••••••</li>
                    </ul>
                  </div>
                  
                  {/* Password change form */}
                  <div className="collapse password-change" id="passChangeEdit">
                    <form className="row g-3 g-sm-4" onSubmit={handlePasswordSubmit} noValidate>
                      <div className="col-sm-6">
                        <label htmlFor="current_password" className="form-label">Current password *</label>
                        <div className="password-toggle">
                          <input 
                            type={showCurrentPassword ? "text" : "password"}
                            className={`form-control ${formErrors.current_password ? 'is-invalid' : ''}`}
                            id="current_password" 
                            name="current_password"
                            value={passwordData.current_password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your current password" 
                            required 
                          />
                          <label 
                            className="password-toggle-button" 
                            aria-label="Show/hide password"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            style={{ cursor: 'pointer' }}
                          >
                            <input type="checkbox" className="btn-check" />
                          </label>
                          {formErrors.current_password && (
                            <div className="invalid-feedback">{formErrors.current_password}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-sm-6">
                        <label htmlFor="new_password" className="form-label">New password *</label>
                        <div className="password-toggle">
                          <input 
                            type={showNewPassword ? "text" : "password"}
                            className={`form-control ${formErrors.new_password ? 'is-invalid' : ''}`}
                            id="new_password" 
                            name="new_password"
                            value={passwordData.new_password}
                            onChange={handlePasswordChange}
                            placeholder="Create new password" 
                            required 
                            minLength={4}
                            maxLength={64}
                          />
                          <label 
                            className="password-toggle-button" 
                            aria-label="Show/hide password"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            style={{ cursor: 'pointer' }}
                          >
                            <input type="checkbox" className="btn-check" />
                          </label>
                          {formErrors.new_password && (
                            <div className="invalid-feedback">{formErrors.new_password}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-sm-6">
                        <label htmlFor="confirm_password" className="form-label">Confirm new password *</label>
                        <div className="position-relative">
                          <input 
                            type="password"
                            className={`form-control ${formErrors.confirm_password ? 'is-invalid' : ''}`}
                            id="confirm_password" 
                            name="confirm_password"
                            value={passwordData.confirm_password}
                            onChange={handlePasswordChange}
                            placeholder="Confirm new password" 
                            required 
                          />
                          {formErrors.confirm_password && (
                            <div className="invalid-feedback">{formErrors.confirm_password}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <small className="text-muted">
                          Password must be at least 4 characters long and cannot contain spaces.
                        </small>
                      </div>
                      
                      <div className="col-12">
                        <div className="d-flex gap-3 pt-2 pt-sm-0">
                          <button 
                            type="submit" 
                            className="btn btn-primary d-flex align-items-center rounded-pill"
                            disabled={changingPassword}
                          >
                            {changingPassword ? (
                              <>
                                <LoadingZoom size='sm' />
                                Changing...
                              </>
                            ) : 'Change password'}
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-secondary rounded-pill" 
                            onClick={() => closeForm('#passChangeEdit')}
                            disabled={changingPassword}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                {/* Delete account section */}
                <div className="pt-3 mt-2 mt-sm-3">
                  <h2 className="h6">Delete account</h2>
                  <p className="fs-sm text-muted">
                    When you delete your account, your public profile will be deactivated immediately. 
                    If you change your mind before the 14 days are up, sign in with your email and password, 
                    and we'll send you a link to reactivate your account.
                  </p>
                  <button
                    className="btn btn-link text-danger fs-sm fw-medium p-0 text-decoration-underline"
                    onClick={handleDeleteAccount}
                    disabled={deletingAccount}
                    style={{ border: 'none', background: 'none' }}
                  >
                    {deletingAccount ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Deleting account...
                      </>
                    ) : 'Delete account'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Personal