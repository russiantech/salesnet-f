
// const MakeFavoriteModal = () => {
//     return (
//         <>

//             {/* Create new favorite modal */}
//             <div className="modal fade" id="wishlistModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="wishlistModalLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="wishlistModalLabel">Create new favorite</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//                         </div>
//                         <form className="modal-body needs-validation" noValidate>
//                             <div className="mb-3">
//                                 <label htmlFor="wl-name" className="form-label">favorite name <span className="text-danger">*</span></label>
//                                 <input type="text" className="form-control" id="wl-name" required />
//                                 <div className="invalid-feedback">Please enter the favorite name!</div>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="wl-description" className="form-label">Description</label>
//                                 <textarea className="form-control" id="wl-description" rows={4} defaultValue={""} />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="form-label">Privacy</label>
//                                 <select className="form-select" data-select="{&quot;removeItemButton&quot;: false}" aria-label="Privacy settings">
//                                     <option value="private">Private</option>
//                                     <option value="public">Public</option>
//                                     <option value="shared">Shared</option>
//                                 </select>
//                             </div>
//                             <div className="d-flex gap-3">
//                                 <button type="reset" className="btn btn-secondary w-100" data-bs-dismiss="modal" data-bs-target="#wishlistModal">Cancel</button>
//                                 <button type="submit" className="btn btn-primary w-100">Create favorite</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MakeFavoriteModal

// 
import { useState } from 'react';

interface MakeFavoriteModalProps {
    onCreate: (name: string, description: string, privacy: string) => void;
}

const MakeFavoriteModal = ({ onCreate }: MakeFavoriteModalProps) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [privacy, setPrivacy] = useState('private');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim()) {
            setErrors({ name: 'Favorite list name is required' });
            return;
        }

        setIsSubmitting(true);
        try {
            await onCreate(name, description, privacy);
            // Reset form on success
            setName('');
            setDescription('');
            setPrivacy('private');
            setErrors({});
            // Hide modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('wishlistModal'));
            modal?.hide();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

    <div className="modal fade" id="wishlistModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="wishlistModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="wishlistModalLabel">Create new favorite</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal" />
          </div>
          <form className="modal-body needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="wl-name" className="form-label">Favorite name <span className="text-danger">*</span></label>
              <input 
                type="text" 
                className="form-control" 
                id="wl-name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="invalid-feedback">Please enter the favorite name!</div>
            </div>
            <div className="mb-3">
              <label htmlFor="wl-description" className="form-label">Description</label>
              <textarea 
                className="form-control" 
                id="wl-description" 
                rows={4} 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Privacy</label>
              <select 
                className="form-select" 
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
              >
                <option value="private">Private</option>
                <option value="public">Public</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="d-flex gap-3">
              <button type="reset" className="btn btn-secondary w-100" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create favorite'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeFavoriteModal;