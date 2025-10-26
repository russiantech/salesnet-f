// hooks/useAuthForm.ts
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UsersService } from "../services/local/UsersService";
import { UsersAxiosService } from "../services/net/UsersAxiosService";
import { NotificationService } from "../services/local/NotificationService";
import { 
  SignupFormData, 
  SigninFormData, 
  RecoverPasswordFormData, 
  ModalState 
} from "../types/auth.types";

interface UseAuthFormProps {
  formType: "signin" | "signup" | "recover-password";
  onSuccess?: (data?: any) => void;
  redirectPath?: string;
  variant?: 'page' | 'canvas'; // Add variant to control redirect behavior
}

export const useAuthForm = ({ 
  formType, 
  onSuccess, 
  redirectPath, 
  variant = 'page' 
}: UseAuthFormProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultRedirect = location.state?.from || "/users/personal";
  const finalRedirectPath = redirectPath || defaultRedirect;

  // Initialize form data with rememberFor30Days for signin
  const [formData, setFormData] = useState<
    SignupFormData | SigninFormData | RecoverPasswordFormData
  >(() => {
    switch (formType) {
      case "signup":
        return { username: "", email: "", phone: "", password: "", name: "" };
      case "recover-password":
        return { username: "", rememberFor30Days: false };
      case "signin":
      default:
        return { username: "", password: "", rememberFor30Days: false };
    }
  });

  const [modalState, setModalState] = useState<ModalState>({
    show: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = UsersService.isAuthenticated();

  // Subscribe to notifications
  useEffect(() => {
    const observer = (data: ModalState) => setModalState(data);
    NotificationService.subscribe(observer);
    return () => NotificationService.unsubscribe(observer);
  }, []);

  // CRITICAL FIX: Only redirect if it's a PAGE variant signin, not canvas
  useEffect(() => {
    if (isAuthenticated && formType === "signin" && variant === "page") {
      // Only redirect for page-based signin forms, not canvas modals
      navigate(finalRedirectPath, { replace: true });
    }
  }, [isAuthenticated, formType, navigate, finalRedirectPath, variant]);

  const getDefaultSuccessMessage = () => {
    switch (formType) {
      case "signup":
        return "Account created successfully!";
      case "signin":
        return "Login successful!";
      case "recover-password":
        return "Recovery instructions sent!";
      default:
        return "Operation successful";
    }
  };

  const getRedirectPath = () => {
    if (formType === "signup") return "/auth/signin";
    if (formType === "signin") return finalRedirectPath;
    return null;
  };

  const validateForm = useCallback((): boolean => {
    if (formType === "signup") {
      const signupData = formData as SignupFormData;
      if (!signupData.username || !signupData.phone || !signupData.email || !signupData.password) {
        NotificationService.showDialog(
          "All fields are required: username, phone, email, and password",
          "danger"
        );
        return false;
      }
    } else if (formType === "recover-password") {
      const recoverData = formData as RecoverPasswordFormData;
      if (!recoverData.username) {
        NotificationService.showDialog(
          "Must provide email, username, or phone number.",
          "danger"
        );
        return false;
      }
    } else {
      const signinData = formData as SigninFormData & { rememberFor30Days?: boolean };
      if (!signinData.username || !signinData.password) {
        NotificationService.showDialog("Must provide both username and password.", "danger");
        return false;
      }
    }
    return true;
  }, [formData, formType]);

  const handleSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();

      if (!validateForm()) return;
      setIsLoading(true);

      try {
        let response;

        if (formType === "signup") {
          response = await UsersAxiosService.signup(formData as SignupFormData);
        } else if (formType === "signin") {
          response = await UsersAxiosService.signin(formData as SigninFormData);
        } else {
          response = await UsersAxiosService.recoverPassword(formData as RecoverPasswordFormData);
        }

        if (response.data.success) {
          // Authenticate user if access token is present
          if (response.data.access_token) {
            const userData = {
              ...response.data,
              access_token: response.data.access_token,
              refresh_token: response.data.refresh_token
            };
            
            UsersService.authenticate(userData);
          }

          NotificationService.showDialog(
            response.data.message || getDefaultSuccessMessage(),
            "success"
          );

          if (onSuccess) {
            onSuccess(response.data);
          } else if (formType === "recover-password") {
            navigate("/auth/verify-recovery", {
              state: {
                token: response.data.data?.token,
                message: response.data.message,
              },
            });
          } else if (variant === "page") {
            // Only redirect for page variants
            const redirectTo = getRedirectPath();
            if (redirectTo) navigate(redirectTo, { replace: true });
          }
          // For canvas variants, let onSuccess handle the behavior
        } else {
          NotificationService.showDialog(
            response.data.message || response.data.error || "Operation failed", 
            "error"
          );
        }
      } catch (err: any) {
        console.error('Auth form error:', err);
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "An unexpected error occurred";
        NotificationService.showDialog(errorMessage, "error");
      } finally {
        setIsLoading(false);
      }
    },
    [formData, formType, validateForm, onSuccess, navigate, finalRedirectPath, variant]
  );

  const handleInputChange = useCallback(
    (key: string, evt: React.ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      setFormData((prev: any) => ({ ...prev, [key]: value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(() => {
      switch (formType) {
        case "signup":
          return { username: "", email: "", phone: "", password: "", name: "" };
        case "recover-password":
          return { username: "", rememberFor30Days: false };
        case "signin":
        default:
          return { username: "", password: "", rememberFor30Days: false };
      }
    });
    setIsLoading(false);
  }, [formType]);

  return {
    formData,
    modalState,
    isLoading,
    isAuthenticated,
    handleSubmit,
    handleInputChange,
    resetForm,
    setFormData,
  };
};

