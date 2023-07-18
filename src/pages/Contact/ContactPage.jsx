import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  return (
    <div><h1 className='d-flex justify-content-center'>Contact</h1>

              <div className="pt-5 px-2 fs-4">
                <div>
                  <label for="name" className="form-label">Name:
                    <input type="text" className="form-control fs-4" name="name" id="name"
                      placeholder="Your name"></input>
                  </label>
                </div>
              </div>
              <div className="pt-5 px-2 fs-4">
                <div><label for="nationality" className="form-label">Nationality:</label>
                  <select className="form-select fs-4" id="nationality"
                    aria-label="Default select example">
                    <option selected>Select your country</option>
                    <option value="">Argentina</option>
                    <option value="">Chile</option>
                    <option value="">Uruguay</option>
                    <option value="">UE</option>
                  </select>
                </div>
              </div>
              <div className="pt-5 px-2 fs-4">
                <label for="gender" class="form-label px-2">Gender:
                  <div className="d-flex">
                    <div className="px-2 form-check" name="gender">
                      <input className="form-check-input" type="radio" name="flexRadioDefault"
                        id="flexRadioDefault1"></input>
                      <label className="form-check-label" for="flexRadioDefault1"> Male
                      </label>
                    </div>
                    <div className="px-2 form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault"
                        id="flexRadioDefault2" checked></input>
                      <label className="form-check-label" for="flexRadioDefault2"> Female
                      </label>
                    </div>
                    <div className="px-2 form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault"
                        id="flexRadioDefault2" checked></input>
                      <label className="form-check-label" for="flexRadioDefault2"> Other
                      </label>
                    </div>
                  </div>
                </label>
                <div className="pt-5 px-2 fs-4">
                  <label for="exampleInputEmail1" class="form-label">Email:</label>
                  <input type="email" className="form-control fs-4" id="exampleInputEmail1"
                    aria-describedby="emailHelp"></input>
                  <div id="emailHelp" className="form-text">Must be in the correct format</div>
                </div>
                <div className="py-2 px-2">
                  <label for="comentaries" className="form-label">Send us your comments:
                    <input type="text" className="form-control fs-4" name="" id="comentaries"
                      placeholder="Write here.."></input>
                  </label>
                </div>
                <div className="py-3 d-flex justify-content-center">
                  <input type="submit" class="shake btn mb-4 p-2 mt-4 border border-opacity-50"
                    value="Submit" id=""></input>
                </div>
              </div>
            </div>

  )
}

export default ContactPage