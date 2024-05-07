import axios from 'axios'
import React, { useState } from 'react'

function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [msg,setMsg]=useState("")
    const handelEmail = async(e) =>{
e.preventDefault()
        try {
            const res= await axios.post("http://localhost:8000/user/sendmail",{email,name,msg})
          console.log(res)
          if (res.status===200){
            alert("email send")
            
          }
          else { alert(res.data.msg) }
          setEmail("")
            setName("")
            setMsg("")
          
          } catch (error) {
            console.log(error)
          }

    }
  return (
    <div>
        <section className="py-12 py-sm-24 py-md-32 bg-info-light position-relative overflow-hidden">
  <div className="container position-relative">
    <div className="mw-6xl mx-auto">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 mb-16">
          <div className="mw-md mx-auto">
            <span className="fs-9 text-primary text-uppercase">Contact us</span>
            <h2 className="mt-6 mb-24">
              Get connected to grow better business.
            </h2>
            <div className="mb-14">
              <span className="d-block mb-4 fs-9 text-secondary-light text-uppercase">
                Email
              </span>
              <div>
                <a
                  className="btn btn-link fs-6 text-dark fw-semibold p-0"
                  href="mailto:#"
                >
                  info@email.com
                </a>
              </div>
              <div>
                <a
                  className="btn btn-link fs-6 text-dark fw-semibold p-0"
                  href="mailto:#"
                >
                  support@gmail.com
                </a>
              </div>
            </div>
            <div>
              <span className="d-block mb-4 fs-9 text-secondary-light text-uppercase">
                Phone
              </span>
              <span className="d-block fs-6 fw-semibold">+1 848 4125 690</span>
              <span className="fs-6 fw-semibold">+1 848 4125 658</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 position-relative">
          <img
            className="position-absolute top-0 start-0 w-100"
            src="flaro-assets/images/contact/gradient2.svg"
            alt=""
          />
          <div className="mw-md mx-auto mw-lg-lg me-lg-0 pt-8 pb-12 px-6 px-md-10 bg-white bg-opacity-75 rounded-4 shadow-lg position-relative">
            <form action="">
              <label className="form-label fw-light">Name</label>
              <div className="input-group mb-4">
                <span className="input-group-text bg-transparent">
                  <svg
                    width={14}
                    height={18}
                    viewBox="0 0 14 18"
                    fill="none"
                    
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3327 4.83358C10.3327 6.67453 8.8403 8.16691 6.99935 8.16691C5.1584 8.16691 3.66602 6.67453 3.66602 4.83358C3.66602 2.99263 5.1584 1.50024 6.99935 1.50024C8.8403 1.50024 10.3327 2.99263 10.3327 4.83358Z"
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.99935 10.6669C3.77769 10.6669 1.16602 13.2786 1.16602 16.5002H12.8327C12.8327 13.2786 10.221 10.6669 6.99935 10.6669Z"
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="First & last name"
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                />
              </div>
              <label className="form-label fw-light">Email Address</label>
              <div className="input-group mb-4">
                <span className="input-group-text bg-transparent">
                  <svg
                    width={18}
                    height={14}
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 3.66691L8.0755 8.05057C8.63533 8.4238 9.36467 8.4238 9.9245 8.05057L16.5 3.66691M3.16667 12.8336H14.8333C15.7538 12.8336 16.5 12.0874 16.5 11.1669V2.83357C16.5 1.9131 15.7538 1.16691 14.8333 1.16691H3.16667C2.24619 1.16691 1.5 1.9131 1.5 2.83357V11.1669C1.5 12.0874 2.24619 12.8336 3.16667 12.8336Z"
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email address"
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <label className="form-label fw-light">Message</label>
              <div className="position-relative">
                <span className="position-absolute top-0 start-0 mt-2 ms-4">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8898 2.11044L16.4201 1.58011L16.4201 1.58011L15.8898 2.11044ZM4.41667 16.5298V17.2798C4.61558 17.2798 4.80634 17.2008 4.947 17.0601L4.41667 16.5298ZM1.5 16.5298H0.75C0.75 16.944 1.08579 17.2798 1.5 17.2798L1.5 16.5298ZM1.5 13.5539L0.96967 13.0236C0.829018 13.1642 0.75 13.355 0.75 13.5539H1.5ZM13.4738 2.64077C13.9945 2.12007 14.8387 2.12007 15.3594 2.64077L16.4201 1.58011C15.3136 0.473623 13.5196 0.473623 12.4132 1.58011L13.4738 2.64077ZM15.3594 2.64077C15.8801 3.16147 15.8801 4.00569 15.3594 4.52639L16.4201 5.58705C17.5266 4.48056 17.5266 2.68659 16.4201 1.58011L15.3594 2.64077ZM15.3594 4.52639L3.88634 15.9995L4.947 17.0601L16.4201 5.58705L15.3594 4.52639ZM4.41667 15.7798H1.5V17.2798H4.41667V15.7798ZM12.4132 1.58011L0.96967 13.0236L2.03033 14.0843L13.4738 2.64077L12.4132 1.58011ZM0.75 13.5539V16.5298H2.25V13.5539H0.75ZM11.1632 3.89077L14.1094 6.83705L15.1701 5.77639L12.2238 2.83011L11.1632 3.89077Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </span>
              </div>
              <textarea
                className="ps-12 mb-6 form-control"
                style={{ height: 187, resize: "none" }}
                placeholder="Write message"
                defaultValue={""}
                onChange={(e)=>setMsg(e.target.value)}
                value={msg}
              />
              <button onClick={handelEmail} className="btn btn-primary shadow" >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact