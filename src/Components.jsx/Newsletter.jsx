import React from 'react'

function Newsletter() {
  return (
    <>
    <section className="newsletter py-5 text-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <h2>Send Newsletter </h2>
      </div>
      <div className="col-lg-3">
        Sign up for our newsletter to get up-to-date from us
      </div>
      <div className="col-lg-5">
        <form className="position-relative my-3">
          <input className="form-control rounded-pill py-3" type="text" placeholder="Your email address" />
          <button className="mc btn btn-warning rounded-pill"> subscribe!</button>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Newsletter