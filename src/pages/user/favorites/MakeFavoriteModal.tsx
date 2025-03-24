
const MakeFavoriteModal = () => {
    return (
        <>

            {/* Create new favorite modal */}
            <div className="modal fade" id="wishlistModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="wishlistModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="wishlistModalLabel">Create new favorite</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form className="modal-body needs-validation" noValidate>
                            <div className="mb-3">
                                <label htmlFor="wl-name" className="form-label">favorite name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="wl-name" required />
                                <div className="invalid-feedback">Please enter the favorite name!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="wl-description" className="form-label">Description</label>
                                <textarea className="form-control" id="wl-description" rows={4} defaultValue={""} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Privacy</label>
                                <select className="form-select" data-select="{&quot;removeItemButton&quot;: false}" aria-label="Privacy settings">
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                    <option value="shared">Shared</option>
                                </select>
                            </div>
                            <div className="d-flex gap-3">
                                <button type="reset" className="btn btn-secondary w-100" data-bs-dismiss="modal" data-bs-target="#wishlistModal">Cancel</button>
                                <button type="submit" className="btn btn-primary w-100">Create favorite</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeFavoriteModal
