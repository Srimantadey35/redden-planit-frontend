// WeddingPlanner.js
'use client'
import React, { useState } from 'react'

const WeddingPlanner = () => {
  const [commercialType, setCommercialType] = useState('')
  const [styleUSP, setStyleUSP] = useState('')
  const [decorPolicy, setDecorPolicy] = useState('')
  const [plannedCities, setPlannedCities] = useState('')
  const [userCancelPolicy, setUserCancelPolicy] = useState('')
  const [selfCancelPolicy, setSelfCancelPolicy] = useState('')
  const [servicesProvided, setServicesProvided] = useState('')
  const [businessYear, setBusinessYear] = useState('')
  const [celebrityWedding, setCelebrityWedding] = useState('')
  const [cancelTerms, setCancelTerms] = useState('')
  const [prominentCelebs, setProminentCelebs] = useState('')
  const [advanceBookingWeeks, setAdvanceBookingWeeks] = useState('')
  const [startingPrice, setStartingPrice] = useState('')
  const [averagePrice, setAveragePrice] = useState('')
  const [destinationChange, setDestinationChange] = useState('')
  const [includedServices, setIncludedServices] = useState([])

  const cancelUserOptions = [
    'Partial Refund Offered',
    'No Refund Offered',
    'No Refund Offered However Date Adjustment Can Be Done',
    'Full Refund Offered',
  ]

  const cancelSelfOptions = [
    'Partial Refund Offered',
    'No Refund Offered',
    'Full Refund Offered',
  ]

  const decorOptions = [
    'We have in-house decor done by our team, but you are free to work with other decorators as well',
    'We do not have in-house decor; we are open to working with decorators of your choice',
    'We have in-house decor done by our team, and we don’t work with other decorators',
  ]

  const commercialOptions = [
    'Charges a Fixed Fee For Planning',
    'Charges a percentage of the wedding cost',
  ]

  const serviceOptions = [
    'Vendor sourcing, contracts, and negotiations',
    'Vendor coordination/oversight setup, timely arrival of vendors, etc.',
    'Hospitality, room & floor planning, and allocation',
    'Event planning & flow management',
    'RSVP, card, and invite distribution',
    'Shadows & guest management',
    'Coordination of activities & stalls',
    'On-ground coordination',
    'Bride & groom entries with special effects',
    'Travel management',
    'Ideation for décor',
    'Entertainment arrangements',
  ]

  const toggleService = (val) => {
    setIncludedServices((prev) =>
      prev.includes(val)
        ? prev.filter((s) => s !== val)
        : [...prev, val]
    )
  }

  const renderRadioGroup = (title, options, state, setter, namePrefix) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
        {title}
      </p>
      <div className="space-y-2.5">
        {options.map((item, i) => {
          const id = `${namePrefix}-${i}`
          return (
            <div key={id} className="flex items-center mb-2">
              <input
                className="accent-[#EA0056] size-5"
                type="radio"
                name={namePrefix}
                id={id}
                value={item}
                checked={state === item}
                onChange={() => setter(item)}
              />
              <label
                htmlFor={id}
                className="text-black font-normal text-[14px] ml-2 cursor-pointer"
              >
                {item}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderInput = (title, state, setter, type = 'input') => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
        {title}
      </label>
      {type === 'input' ? (
        <input
          className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
          value={state}
          onChange={(e) => setter(e.target.value)}
        />
      ) : (
        <textarea
          className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
          value={state}
          onChange={(e) => setter(e.target.value)}
        ></textarea>
      )}
    </div>
  )

  return (
    <>
      {renderRadioGroup('What kind of commercials do you work on?', commercialOptions, commercialType, setCommercialType, 'commercial')}
      {renderInput('What is your style USP?', styleUSP, setStyleUSP, 'textarea')}
      {renderRadioGroup('What is your policy on decor?', decorOptions, decorPolicy, setDecorPolicy, 'decor')}
      {renderInput('Which are some key cities you have planned weddings in previously?', plannedCities, setPlannedCities, 'textarea')}
      {renderRadioGroup('Please describe your cancellation policy (if a user initiates cancellation)', cancelUserOptions, userCancelPolicy, setUserCancelPolicy, 'cancel-user')}
      {renderRadioGroup('Please describe your cancellation policy (if you initiate a cancellation)', cancelSelfOptions, selfCancelPolicy, setSelfCancelPolicy, 'cancel-self')}
      {renderInput('What services are provided by you?', servicesProvided, setServicesProvided, 'textarea')}
      {renderInput('In which year did you start your business?', businessYear, setBusinessYear)}
      {renderInput('Have you planned any celebrity weddings? Please mention the name of the celebrity.', celebrityWedding, setCelebrityWedding)}
      {renderInput('What are the terms & conditions of your cancellation policy?', cancelTerms, setCancelTerms, 'textarea')}
      {renderInput('Would you like to mention a few names of any prominent people/celebrities whose wedding you have planned?', prominentCelebs, setProminentCelebs, 'textarea')}
      {renderInput('How many weeks in advance should a booking be made?', advanceBookingWeeks, setAdvanceBookingWeeks)}
      {renderInput('What is your starting price for planning a 3 day wedding?', startingPrice, setStartingPrice)}
      {renderInput('What is your average wedding planning package cost?', averagePrice, setAveragePrice)}
      {renderRadioGroup('Does your planning fee change for destination weddings?', ['Yes', 'No'], destinationChange, setDestinationChange, 'destination-fee')}

      {/* Service Checkboxes */}
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
          Which of the following services are included in your planning fee?
        </p>
        <div className="space-y-2.5">
          {serviceOptions.map((service, idx) => {
            const id = `service-${idx}`
            return (
              <div key={id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={id}
                  value={service}
                  className="accent-[#EA0056] size-4 4xl:size-5"
                  checked={includedServices.includes(service)}
                  onChange={() => toggleService(service)}
                />
                <label
                  htmlFor={id}
                  className="text-black font-normal text-[14px] ml-2 cursor-pointer"
                >
                  {service}
                </label>
              </div>
            )
          })}
        </div>
      </div>

       <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div>
    </>
  )
}

export default WeddingPlanner