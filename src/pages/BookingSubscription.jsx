import React from 'react'

const BookingSubscription = () => {
  return (
    <div className="msc-grid-layout">
{/* Left Column - Static Information */}
    <div className="msc-sidebar custom-scrollbar">
      <div className="msc-sidebar-header">
        <div className="msc-logo-wrapper">
          <img className="msc-logo-img" src="https://www.competentswimming.co.uk/wp-content/themes/twentytwentyfour-child/assets/images/competent-swimming-logos/Competent%20Swimmer%20white.png" alt="Competent Swimming Logo" />
        </div>
      </div>
    
      <div className="msc-highlight-card">
        <h2 className="msc-highlight-title">
          <span className="msc-highlight-icon-wrapper">
            <svg className="msc-highlight-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clip-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          </span>
          SWIM EVERY WEEK AND ATTAIN...
        </h2>
    
        <ul className="msc-feature-list">
          <li className="msc-feature-item">
            <span className="msc-feature-icon-bg">
              <svg className="msc-feature-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 
                     011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </span>
            <span className="msc-feature-text">LESSONS EVERY WEEK</span>
          </li>
          <li className="msc-feature-item">
            <span className="msc-feature-icon-bg">
              <svg className="msc-feature-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 
                     011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </span>
            <span className="msc-feature-text">LIFE SAVING SKILLS</span>
          </li>
          <li className="msc-feature-item">
            <span className="msc-feature-icon-bg">
              <svg className="msc-feature-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 
                     011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </span>
            <span className="msc-feature-text">AN EASY TO LEARN ENVIRONMENT</span>
          </li>
          <li className="msc-feature-item">
            <span className="msc-feature-icon-bg">
              <svg className="msc-feature-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 
                     011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </span>
            <span className="msc-feature-text">SEA-CAPABLE SWIMMING</span>
          </li>
          <li className="msc-feature-item">
            <span className="msc-feature-icon-bg">
              <svg className="msc-feature-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 
                     011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </span>
            <span className="msc-feature-text">WATER CONFIDENCE</span>
          </li>
        </ul>
    
        <p className="msc-highlight-desc">
          Learn to swim within weeks and be able to go into water anywhere.
        </p>
      </div>
    </div>

    <div className="bhd-teal-section custom-scrollbar">
      <div className="bhd-content-wrapper">
        <div className="msc-join-section">
          <div className="msc-logo-container">
            <img src="https://www.competentswimming.co.uk/wp-content/themes/twentytwentyfour-child/assets/images/competent-swimming-logos/Competent%20Swimmer%20white.png" alt="Competent Swimming Logo" className="msc-logo-img" />
          </div>
          <h2 className="msc-join-title">JOIN COMPETENT SWIMMING</h2>
          <p className="msc-join-subtitle">LEARN TO SWIM AT AN ACCELERATED RATE</p>
        </div>

        <form
          id="booking-form"
          autoComplete="on"
          action="/wp-admin/admin-post.php?action=cs_handle_booking"
          method="POST"
          className="bhd-form-stack"
          noValidate
        >
        [cs_booking_nonce]

          <div className="bhd-personal-info">
            <div className="bhd-info-header">
              <div className="bhd-icon-container">
                <svg className="bhd-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clip-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 
                       011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
              <h3 className="bhd-section-title">PERSONAL INFORMATION</h3>
            </div>
          
            <div className="bhd-input-grid">
              <div className="bhd-form-group">
                <label htmlFor="firstName" className="bhd-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  className="bhd-input"
                />
                <span className="error-message">First name is required</span>
              </div>
              <div className="bhd-form-group">
                <label htmlFor="lastName" className="bhd-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Last name is required</span>
              </div>
            </div>
          
            <div className="bhd-input-group">
              <div className="bhd-form-group">
                <label htmlFor="email" className="bhd-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Please enter a valid email address</span>
              </div>
              <div className="bhd-form-group">
                <label htmlFor="phone" className="bhd-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  pattern="[0-9]{10,}"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Please enter a valid phone number</span>
              </div>
            </div>
          </div>

            <div className="bhd-input-grid">
              <div className="bhd-form-group">
                <label htmlFor="swimmerFirstName" className="bhd-label">Swimmer First Name</label>
                <input
                  type="text"
                  name="swimmerFirstName"
                  id="swimmerFirstName"
                  placeholder="Swimmer First Name"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Swimmer first name is required</span>
              </div>
              <div className="bhd-form-group">
                <label htmlFor="swimmerLastName" className="bhd-label">Swimmer Last Name</label>
                <input
                  type="text"
                  name="swimmerLastName"
                  id="swimmerLastName"
                  placeholder="Swimmer Last Name"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Swimmer last name is required</span>
              </div>
            </div>

            <div className="bhd-input-grid">
              <div className="bhd-form-group">
                <label htmlFor="swimmerAge" className="bhd-label">Swimmer Age</label>
                <input
                  type="number"
                  name="swimmerAge"
                  id="swimmerAge"
                  placeholder="Age"
                  min="4"
                  max="120"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Please enter a valid age</span>
              </div>
              <div className="bhd-form-group">
                <label htmlFor="swimmerAbility" className="bhd-label">Swimmer Ability</label>
                <input
                  type="text"
                  name="swimmerAbility"
                  id="swimmerAbility"
                  placeholder="Beginner / Intermediate / Advanced"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Please describe swimmer ability</span>
              </div>
            </div>



          <div className="bhd-plans-section">

            <div className="bhd-plan-header">
              <div className="bhd-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" className="bhd-icon-svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clip-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
                           011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <h3 className="bhd-plan-title">SELECT LESSON TYPE</h3>
            </div>

            <div className="lesson-type-container" style={{ display: "flex", gap: "10px" }}>
              <div className="bhd-option-wrapper" style={{ flex: 1, marginRight: "5px" }}>
                <label className="plan-option-label">
                  <div className="bhd-option-inner">
                    <input type="radio" name="lesson_type" value="private" className="lesson-radio" required />
                    <div className="bhd-option-content">
                      <div className="bhd-option-header">
                        <span className="bhd-option-name">1-1 Private Lessons</span>
                      </div>
                      <p className="bhd-option-desc">Personalised 1-1 instruction for all ages</p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="bhd-option-wrapper" style={{ flex: 1, marginLeft: "5px" }}>
                <label className="plan-option-label">
                  <div className="bhd-option-inner">
                    <input type="radio" name="lesson_type" value="group" className="lesson-radio" />
                    <div className="bhd-option-content">
                      <div className="bhd-option-header">
                        <span className="bhd-option-name">Group Lessons</span>
                      </div>
                      <p className="bhd-option-desc">Fun, interactive learning for children</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <span className="error-message" id="lesson-type-error" style={{ display: "none" }}>Group lessons are only for children under 18</span>
            <input type="hidden" name="lesson-category" id="lessonCategory" />



            <div className="bhd-plan-header">
              <div className="bhd-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" className="bhd-icon-svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clip-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
                           011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <h3 className="bhd-plan-title">SELECT PLAN</h3>
            </div>
          
            <div className="bhd-plan-options">

              <div className="plan-container">
                <label className="plan-option-label">
                  <div className="bhd-option-inner">
                    <input type="radio" name="payment-plan" value="price_1RYYTR1VlpCPYqMRSJJhIwPI" className="plan-radio" data-plan-name="Test Plan" />
                    <div className="bhd-option-content">
                      <div className="bhd-option-header">
                        <span className="bhd-option-name">Test Plan</span>
                        <span className="bhd-option-price">£1.00</span>
                      </div>
                      <p className="bhd-option-desc">8 sessions – Test plan for integration</p>
                    </div>
                  </div>
                </label>
                <div className="plan-details">
                  <h4 className="bhd-details-title">Test Plan Details</h4>
                  <ul className="bhd-detail-list">
                    <li className="bhd-detail-item">
                      <svg className="bhd-detail-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                                 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0
                                 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      <span>Use this option to test your payment flow</span>
                    </li>   
                  </ul>
                </div>
              </div>

              <div className="plan-container">
                <label className="plan-option-label">
                  <div className="bhd-option-inner">
                    <input type="radio" name="payment-plan" value="price_1RIxdz1VlpCPYqMR5vDQEyQ9" className="plan-radio" data-plan-name="Starter" required />
                    <div className="bhd-option-content">
                      <div className="bhd-option-header">
                        <span className="bhd-option-name">Starter</span>
                        <span className="bhd-option-price">£215.99</span>
                      </div>
                      <p className="bhd-option-desc">8 sessions – Perfect for first-time swimmers</p>
                    </div>
                  </div>
                </label>
                <div className="plan-details">
                  <h4 className="bhd-details-title">Starter Plan Details</h4>
                  <ul className="bhd-detail-list">
                    <li className="bhd-detail-item">
                      <svg className="bhd-detail-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                                 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0
                                 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      <span>Introduction to water safety and basic swimming techniques</span>
                    </li>
                  </ul>
                  <div className="bhd-badge-container">
                    <span className="bhd-badge">Most Popular</span>
                  </div>
                </div>
              </div>
          
              <div className="plan-container">
                <label className="plan-option-label">
                  <div className="bhd-option-inner">
                    <input type="radio" name="payment-plan" value="price_1RIxh71VlpCPYqMRJSG59YVs" className="plan-radio" data-plan-name="Tidebreaker" />
                    <div className="bhd-option-content">
                      <div className="bhd-option-header">
                        <span className="bhd-option-name">Tidebreaker</span>
                        <span className="bhd-option-price">£388.99</span>
                      </div>
                      <p className="bhd-option-desc">8 sessions – For those with basic swimming skills</p>
                    </div>
                  </div>
                </label>
                <div className="plan-details">
                  <h4 className="bhd-details-title">Tidebreaker Plan Details</h4>
                  <ul className="bhd-detail-list">
                    <li className="bhd-detail-item">
                      <svg className="bhd-detail-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                                 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0
                                 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      <span>Refinement of freestyle, backstroke, and breaststroke</span>
                    </li>
                  </ul>
                  <div className="bhd-badge-container">
                    <span className="bhd-badge">Best Value</span>
                  </div>
                </div>
              </div>
          
              <div className="plan-container">
                <label className="plan-option-label">
                  <div className="bhd-option-inner">
                    <input type="radio" name="payment-plan" value="price_1RIxl91VlpCPYqMRuYUHuYGU" className="plan-radio" data-plan-name="Hydromaster"/>
                    <div className="bhd-option-content">
                      <div className="bhd-option-header">
                        <span className="bhd-option-name">Hydromaster</span>
                        <span className="bhd-option-price">£518.99</span>
                      </div>
                      <p className="bhd-option-desc">8 sessions – For confident swimmers looking to perfect technique</p>
                    </div>
                  </div>
                </label>
                <div className="plan-details">
                  <h4 className="bhd-details-title">Hydromaster Plan Details</h4>
                  <ul className="bhd-detail-list">
                    <li className="bhd-detail-item">
                      <svg className="bhd-detail-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                                 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0
                                 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      <span>Mastery of all four competitive strokes</span>
                    </li>
                  </ul>
                  <div className="bhd-badge-container">
                    <span className="bhd-badge">Elite Training</span>
                  </div>
                </div>
              </div>
          
              <span className="error-message">Please select a plan</span>
            </div>
          </div>



            <div className="bhd-payment-section">
              <div className="bhd-payment-header">
                <div className="bhd-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" className="bhd-icon-svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
                           011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                </div>
                <h3 className="bhd-payment-title">PAYMENT DETAILS</h3>
              </div>

              <div className="bhd-form-fields">

                <div className="bhd-form-group">
                  <label htmlFor="cardName" className="bhd-label">Card Name</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    placeholder="John Smith"
                    required
                    className="bhd-input"
                  />
                  <span className="error-message">Please enter the name on your card</span>
                </div>

                <div className="bhd-form-group">
                  <label htmlFor="card-number" className="bhd-label">Card Number</label>
                  <div id="card-number" className="bhd-input"></div>
                </div>

                <div className="bhd-form-group">
                  <label htmlFor="card-expiry" className="bhd-label">Expiry Date</label>
                  <div id="card-expiry" className="bhd-input"></div>
                </div>

                <div className="bhd-form-group">
                  <label htmlFor="card-cvc" className="bhd-label">CVC</label>
                  <div id="card-cvc" className="bhd-input"></div>
                </div>

                <div id="card-errors" className="error-message" role="alert"></div>

              </div>
            </div>

          


          <div className="bhd-billing-section">
            <div className="bhd-billing-header">
              <div className="bhd-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" className="bhd-payment-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                           01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 
                           1 0 011.414 0z"/>
                </svg>
              </div>
              <h3 className="bhd-billing-title">BILLING ADDRESS</h3>
            </div>
          
            <div className="bhd-form-fields">
              <div className="bhd-form-group">
                <label htmlFor="address" className="bhd-label">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="123 London St"
                  required
                  className="bhd-input"
                />
                <span className="error-message">Please enter your address</span>
              </div>
          
              <div className="bhd-address-grid">
                <div className="bhd-form-group">
                  <label htmlFor="city" className="bhd-label">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="London"
                    required
                    className="bhd-input"
                  />
                  <span className="error-message">Please enter your city</span>
                </div>
                <div className="bhd-form-group">
                  <label htmlFor="postCode" className="bhd-label">Post Code</label>
                  <input
                    type="text"
                    name="postCode"
                    id="postCode"
                    placeholder="Post Code"
                    pattern="^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?)))) ?[0-9][A-Za-z]{2})$"
                    required
                    className="bhd-input"
                  />
                  <span className="error-message">Please enter a valid post code</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="custom-checkbox">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              I agree to the terms and conditions and privacy policy
            </label>
            <span className="error-message">You must accept the terms and conditions</span>
          </div>

          <button type="submit" className="bhd-submit-button">
            Complete Payment
          </button>
          
          <p className="bhd-secure-note">
            Your payment information is secure and encrypted
          </p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default BookingSubscription