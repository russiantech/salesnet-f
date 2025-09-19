// ImageUploadModal.jsx - Professional image upload modal
import React, { useState, useRef } from 'react';
import { LoadingZoom } from '../LoadingSpinner';

interface ImageUploadModalProps {
  show: boolean;
  onHide: () => void;
  uploadType: 'avatar' | 'cover';
  onUpload: (file: File, type: 'avatar' | 'cover') => Promise<void>;
  uploading: boolean;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  show,
  onHide,
  uploadType,
  onUpload,
  uploading
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAvatar = uploadType === 'avatar';
  const title = isAvatar ? 'Update Profile Picture' : 'Update Cover Image';
  const acceptedFormats = 'image/jpeg, image/jpg, image/png, image/webp';
  const maxSize = isAvatar ? 5 : 10; // MB
  const recommendedSize = isAvatar ? '400x400px' : '1200x400px';

  // Handle file selection
  const handleFileSelect = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle drag and drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // Handle file input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  // Handle upload
  const handleUpload = async () => {
    if (!selectedFile) return;
    
    try {
      await onUpload(selectedFile, uploadType);
      handleClose();
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  // Handle modal close
  const handleClose = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setDragActive(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onHide();
  };

  if (!show) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div className="modal-backdrop fade show" onClick={handleClose}></div>
      
      {/* Modal */}
      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={handleClose}
                disabled={uploading}
              ></button>
            </div>
            
            <div className="modal-body">
              <div className="mb-4">
                <div className="text-muted small mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Recommended size: {recommendedSize}</span>
                    <span>Max file size: {maxSize}MB</span>
                  </div>
                  <div>Accepted formats: JPEG, PNG, WebP</div>
                </div>

                {/* Upload Area */}
                <div
                  className={`border border-2 border-dashed rounded p-4 text-center position-relative ${
                    dragActive ? 'border-primary bg-light' : 'border-secondary'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  style={{ minHeight: '200px' }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={acceptedFormats}
                    onChange={handleInputChange}
                    className="d-none"
                    disabled={uploading}
                  />
                  
                  {!previewUrl ? (
                    <div>
                      <i className="ci-cloud-upload display-4 text-muted mb-3"></i>
                      <div>
                        <p className="mb-2">
                          Drag and drop your image here, or{' '}
                          <button
                            type="button"
                            className="btn btn-link p-0 text-decoration-none border p-1 rounded-pill border-danger"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={uploading}
                          >
                            browse files
                          </button>
                        </p>
                        <small className="text-muted">
                          {isAvatar ? 'Square images work best for profile pictures' : 'Wide images (3:1 ratio) work best for covers'}
                        </small>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-3">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className={`img-fluid ${
                            isAvatar ? 'rounded-circle' : 'rounded'
                          }`}
                          style={{
                            maxHeight: isAvatar ? '150px' : '120px',
                            maxWidth: isAvatar ? '150px' : '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="d-flex gap-2 justify-content-center">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm rounded-pill"
                          onClick={() => {
                            setSelectedFile(null);
                            setPreviewUrl(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = '';
                            }
                          }}
                          disabled={uploading}
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm rounded-pill"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={uploading}
                        >
                          Change Image
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* File Info */}
                {selectedFile && (
                  <div className="mt-3 p-3 bg-light rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-medium">{selectedFile.name}</div>
                        <small className="text-muted">
                          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </small>
                      </div>
                      <i className="ci-check-circle text-success fs-5"></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-pill"
                onClick={handleClose}
                disabled={uploading}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-pill"
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
              >
                {uploading ? (
                  <>
                    <LoadingZoom size='sm' />
                    Uploading...
                  </>
                ) : (
                  `Update ${isAvatar ? 'Profile Picture' : 'Cover Image'}`
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploadModal;