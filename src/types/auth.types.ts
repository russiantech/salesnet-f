// types/auth.types.ts
export interface SignupFormData {
    username: string;
    email: string;
    phone: string;
    password: string;
    name?: string;
}

export interface SigninFormData {
    username: string;
    password: string;
    rememberFor30Days?: boolean; // Added this field
}

// export interface RecoverpasswordFormData {
//     username: string;
// }

// 
// For starting password recovery
export interface RecoverPasswordFormData {
  username: string;
  rememberFor30Days?: boolean;
}

// For verifying the recovery code
export interface VerifyRecoveryCodeFormData {
  username: string;
  code: string;
}

// For completing the password reset
export interface CompletePasswordResetFormData {
  username: string;
  newPassword: string;
  confirmPassword: string;
}
// 
export interface VerifyRecoveryFormData {
    token: string;
    verification_code: string;
    new_password?: string;
    confirm_password?: string;
}

export interface CompleteResetFormData {
    token: string;
    verification_code: string;
    new_password: string;
    confirm_password: string;
}
// 

export interface ModalState {
    show: boolean;
    message: string;
    type: string;
}

export interface AuthFormProps {
    variant: 'page' | 'canvas';
    formType: 'signin' | 'signup' | 'recover-password';
    onSuccess?: (data?: any) => void;
    className?: string;
    redirectPath?: string;
    showSocialAuth?: boolean;
    showLogo?: boolean;
    showBenefits?: boolean;
}
