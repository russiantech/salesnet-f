// import Navigation from "../../../components/shared/Navigation"
import Aside from "../shared/Aside"

const Notifications = () => {
  return (
    <>
      {/* <Navigation /> */}
      
      {/* Page content */}
      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <Aside />

            {/* Notifications content */}
            <div className="col-lg-9">
              <div className="ps-lg-3 ps-xl-0">
                {/* Page title + Master switch */}
                <div className="nav flex-nowrap align-items-center justify-content-between pb-3 mb-3 mb-lg-4">
                  <h1 className="h2 me-3 mb-0">Notifications</h1>
                  <div className="form-check form-switch nav-link animate-underline p-0 m-0" data-master-checkbox="{&quot;container&quot;: &quot;#notifications&quot;, &quot;label&quot;: &quot;Select all&quot;, &quot;labelChecked&quot;: &quot;Unselect all&quot;}">
                    <label htmlFor="notifications-master" className="form-check-label animate-target me-5">Unselect all</label>
                    <div className="ps-3">
                      <input type="checkbox" className="form-check-input" id="notifications-master" defaultChecked />
                    </div>
                  </div>
                </div>
                {/* Notification switches list */}
                <div className="vstack gap-4" id="notifications">
                  <div className="form-check form-switch mb-0">
                    <input type="checkbox" className="form-check-input" id="exclusive-offers" />
                    <label className="form-check-label ps-2" htmlFor="exclusive-offers">
                      <span className="d-block h6 mb-2">Exclusive offers</span>
                      <span className="fs-sm">Receive alerts about exclusive discounts, promotions, and special offers tailored just for you.</span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input type="checkbox" className="form-check-input" id="order-updates" defaultChecked />
                    <label className="form-check-label ps-2" htmlFor="order-updates">
                      <span className="d-block h6 mb-2">Order updates</span>
                      <span className="fs-sm">Stay informed about the status of your orders, including confirmations, shipping updates, and delivery notifications.</span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input type="checkbox" className="form-check-input" id="products-recommendations" defaultChecked />
                    <label className="form-check-label ps-2" htmlFor="products-recommendations">
                      <span className="d-block h6 mb-2">Product recommendations</span>
                      <span className="fs-sm">Get personalized recommendations based on your browsing and purchase history to discover new products you'll love.</span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input type="checkbox" className="form-check-input" id="restock" />
                    <label className="form-check-label ps-2" htmlFor="restock">
                      <span className="d-block h6 mb-2">Restock notifications</span>
                      <span className="fs-sm">Be the first to know when out-of-stock items are back in inventory, ensuring you never miss out on your favorite products.</span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input type="checkbox" className="form-check-input" id="events" />
                    <label className="form-check-label ps-2" htmlFor="events">
                      <span className="d-block h6 mb-2">Event reminders</span>
                      <span className="fs-sm">Receive reminders about upcoming sales events, flash sales, or product launches to make sure you're always in the loop.</span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input type="checkbox" className="form-check-input" id="account-security" defaultChecked />
                    <label className="form-check-label ps-2" htmlFor="account-security">
                      <span className="d-block h6 mb-2">Account security alerts</span>
                      <span className="fs-sm">Receive notifications about any suspicious account activity or changes to your login credentials for enhanced security.</span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input type="checkbox" className="form-check-input" id="support" />
                    <label className="form-check-label ps-2" htmlFor="support">
                      <span className="d-block h6 mb-2">Customer support updates</span>
                      <span className="fs-sm">Get updates on any inquiries or support tickets you've submitted, ensuring timely resolution of any issues.</span>
                    </label>
                  </div>
                </div>
                {/* Communication channels */}
                <h2 className="h6 pt-5 mt-md-2">Communication channels</h2>
                <div className="d-flex flex-column gap-2">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="sms" />
                    <label htmlFor="sms" className="form-check-label">SMS</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="whatsapp" />
                    <label htmlFor="whatsapp" className="form-check-label">Messages in WhatsApp</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="email" defaultChecked />
                    <label htmlFor="email" className="form-check-label">Email</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="push" />
                    <label htmlFor="push" className="form-check-label">App push notifications</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default Notifications
