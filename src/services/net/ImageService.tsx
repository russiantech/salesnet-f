// services/ImageService.tsx - Handle image upload operations
import { UsersAxiosService } from "./UsersAxiosService";
import { PagesAxiosService } from "./PagesAxiosService";

export class ImageService {
  /**
   * Validate image file before upload
   */
  static validateImage(
    file: File,
    type: "avatar" | "cover" = "avatar"
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Allowed file types
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      errors.push("Please select a JPEG, PNG, or WebP image file");
    }

    // Max size (5MB avatar, 10MB cover)
    const maxSize = type === "avatar" ? 5 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) {
      const maxSizeMB = type === "avatar" ? 5 : 10;
      errors.push(`File size must be less than ${maxSizeMB}MB`);
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Compress image before upload
   */
  static async compressImage(
    file: File,
    maxWidth: number = 1200,
    quality: number = 0.8
  ): Promise<File> {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        let { width, height } = img;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }
            const compressedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          file.type,
          quality
        );
      };

      img.src = URL.createObjectURL(file);
    });
  }

  /**
   * Upload avatar image
   */
  static async uploadAvatar(
    businessId: string | number,
    file: File,
    businessType: string = "user"
  ): Promise<{ success: boolean; data: any; avatar_url: string }> {
    const validation = this.validateImage(file, "avatar");
    if (!validation.isValid) {
      throw new Error(validation.errors.join(", "));
    }

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      let response;
      if (businessType === "user") {
        response = await UsersAxiosService.updateUser(formData, formData);
      } else {
        response = await PagesAxiosService.updatePage(
          String(businessId),
          "page",
          formData
        );
      }

      return {
        success: true,
        data: response.data,
        avatar_url: response.data.avatar,
      };
    } catch (error) {
      console.error("Avatar upload failed:", error);
      throw new Error("Failed to upload avatar. Please try again.");
    }
  }

  /**
   * Upload cover image
   */
  static async uploadCoverImage(
    businessId: string | number,
    file: File,
    businessType: string = "user"
  ): Promise<{ success: boolean; data: any; cover_image_url: string }> {
    const validation = this.validateImage(file, "cover");
    if (!validation.isValid) {
      throw new Error(validation.errors.join(", "));
    }

    const formData = new FormData();
    formData.append("cover_image", file);

    try {
      let response;
      if (businessType === "user") {
        response = await UsersAxiosService.updateUser(formData, formData);
      } else {
        response = await PagesAxiosService.updatePage(
          String(businessId),
          "page",
          formData
        );
      }

      return {
        success: true,
        data: response.data,
        cover_image_url: response.data.cover_image,
      };
    } catch (error) {
      console.error(`Cover image upload failed: ${error}`);
      throw new Error("Failed to upload cover image. Please try again.");
    }
  }

  /**
   * Generic image upload (decides avatar/cover)
   */
  static async uploadImage(
    businessId: string | number,
    file: File,
    type: "avatar" | "cover",
    businessType: string = "user"
  ): Promise<any> {
    if (type === "avatar") {
      return this.uploadAvatar(businessId, file, businessType);
    } else if (type === "cover") {
      return this.uploadCoverImage(businessId, file, businessType);
    } else {
      throw new Error('Invalid upload type. Must be "avatar" or "cover".');
    }
  }

  /**
   * Generate preview URL for selected image
   */
  static createPreviewUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  /**
   * Get dimensions of an image file
   */
  static getImageDimensions(
    file: File
  ): Promise<{ width: number; height: number; aspectRatio: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth / img.naturalHeight,
        });
        URL.revokeObjectURL(img.src);
      };

      img.onerror = () => {
        reject(new Error("Failed to load image"));
        URL.revokeObjectURL(img.src);
      };

      img.src = URL.createObjectURL(file);
    });
  }

  /**
   * Validate dimensions and suggest improvements
   */
  static async validateImageDimensions(
    file: File,
    type: "avatar" | "cover" = "avatar"
  ): Promise<{
    dimensions: { width: number; height: number; aspectRatio: number } | null;
    recommendations: string[];
    isOptimal: boolean;
  }> {
    try {
      const dimensions = await this.getImageDimensions(file);
      const recommendations: string[] = [];

      if (type === "avatar") {
        if (dimensions.aspectRatio < 0.8 || dimensions.aspectRatio > 1.25) {
          recommendations.push(
            "Square images (1:1 ratio) work best for profile pictures"
          );
        }
        if (dimensions.width < 200 || dimensions.height < 200) {
          recommendations.push(
            "For best quality, use images at least 400x400 pixels"
          );
        }
      } else if (type === "cover") {
        if (dimensions.aspectRatio < 2.5 || dimensions.aspectRatio > 4) {
          recommendations.push(
            "Wide images (3:1 ratio) work best for cover photos"
          );
        }
        if (dimensions.width < 800) {
          recommendations.push(
            "For best quality, use images at least 1200 pixels wide"
          );
        }
      }

      return {
        dimensions,
        recommendations,
        isOptimal: recommendations.length === 0,
      };
    } catch (error) {
      return {
        dimensions: null,
        recommendations: ["Unable to analyze image dimensions"],
        isOptimal: false,
      };
    }
  }
}
