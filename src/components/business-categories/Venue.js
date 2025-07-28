// import React, { useState } from "react";

// const Venue = () => {
//   const [smallGatheringAllowed, setSmallGatheringAllowed] = useState("");
//   const [selectedVenueTypes, setSelectedVenueTypes] = useState([]);
//   const [userCancellationPolicy, setUserCancellationPolicy] = useState("");
//   const [venueCancellationPolicy, setVenueCancellationPolicy] = useState("");
//   const [roomBookingRequirement, setRoomBookingRequirement] = useState("");
//   const [cateringPolicy, setCateringPolicy] = useState("");
//   const [decorPolicy, setDecorPolicy] = useState("");
//   const [venueType, setVenueType] = useState("");
//   const [smallGatheringPreference, setSmallGatheringPreference] = useState("");
//   const [selectedVenueFeatures, setSelectedVenueFeatures] = useState([]);
//   const [parkingAvailability, setParkingAvailability] = useState("");
//   const [alcoholPolicy, setAlcoholPolicy] = useState("");
//   const [djPolicy, setDjPolicy] = useState("");

//   const primaryVenueTypes = [
//     { id: 1, label: "Farmhouse with Indoor Banquet capability" },
//     { id: 2, label: "Farmhouse with only outdoor space" },
//     { id: 3, label: "Hotel with indoor banquet & lawn" },
//     { id: 4, label: "Hotel with indoor banquet" },
//     { id: 5, label: "Standalone Banquet Hall" },
//     { id: 6, label: "Resort/retreat with outdoor areas" },
//     { id: 7, label: "Mountain destination wedding venue" },
//     { id: 8, label: "Beach/Coastal destination wedding venue" },
//     { id: 9, label: "Pool / water venue" },
//     { id: 10, label: "Cultural Center / Club with Banquet capability" },
//     { id: 11, label: "5 Star Hotel with Indoor Banquet" },
//     { id: 12, label: "5 Star Hotel without indoor banquet" },
//   ];
//   const cancellationOptions = [
//     "Partial Refund Offered",
//     "No Refund Offered",
//     "No Refund Offered However Date Adjustment Can Be Done",
//     "Full Refund Offered",
//   ];
//   const venueCancellationOptions = [
//     "Partial Refund Offered",
//     "No Refund Offered",
//     "Full Refund Offered",
//   ];
//   const roomOptions = [
//     "Yes, must be a minimum of 80 rooms booked for a wedding",
//     "No, we don’t need a minimum number of rooms to host a wedding",
//     "Sometimes",
//   ];
//   const cateringOptions = [
//     "In-house catering. Outside vendors not permitted",
//     "In-house catering. Outside vendors allowed",
//     "No in-house catering. Only outside vendors allowed",
//     "No in-house catering. Outside vendors from panel",
//   ];
//   const decorOptions = [
//     "Decoration must be done by venue’s in-house Panel",
//     "Outside decorators allowed",
//   ];
//   const options = [
//     { label: "Yes", value: "allow_under_150" },
//     { label: "No", value: "not_allow_under_150" },
//   ];
//   const venueFeatures = [
//     "Venue is wheelchair friendly",
//     "Venue has valet parking available",
//     "Venue has in-house rooms",
//     "Venue has only 3rd party rooms (not own)",
//     "Venue requires decor to be bought or comes in-house at wedding",
//     "Venue has a bridal room",
//     "Venue is allowed after curfew time",
//     "Venue has a lake/water view",
//     "Venue has in-house decorator",
//     "Venue allows outside decorator",
//     "Venue allows outside alcohol",
//     "Venue allows outside caterer",
//   ];
//   const parkingOptions = [
//     "There is ample private parking available",
//     "Parking is available on request",
//     "No parking available",
//   ];
//   const alcoholOptions = [
//     "In-house alcohol available. Outside alcohol permitted",
//     "In-house alcohol available. Outside alcohol not permitted",
//     "No in-house alcohol available. Outside alcohol permitted",
//     "No in-house alcohol available. Outside alcohol not permitted",
//   ];
//   const djOptions = [
//     "In-house DJ available. Outside DJ not permitted",
//     "In-house DJ available. Outside DJ permitted",
//     "No in-house DJ available. Outside DJ permitted",
//     "No in-house DJ available. Outside DJ not permitted",
//   ];

//   const toggleFeature = (feature) => {
//     setSelectedVenueFeatures((prev) =>
//       prev.includes(feature)
//         ? prev.filter((item) => item !== feature)
//         : [...prev, feature]
//     );
//   };
//   const venueOptions = ["Hotel", "Outdoor", "Resort", "Banquet / Partyhalls"];

//   const toggleVenueType = (id) => {
//     setSelectedVenueTypes((prev) =>
//       prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
//     );
//   };
//   return (
//     <>
//       {/* Are you a veg caterer only? */}
//       <div className="flex flex-col ">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Does your venue have rental cost along with per plate cost?
//         </p>

//         <div className="space-y-2.5">
//           {["Yes", "No"].map((item) => (
//             <div key={item} className="flex items-center mb-2">
//               <input
//                 className="accent-[#EA0056] size-5"
//                 type="radio"
//                 name="smallGatheringOption" // ✅ unique name
//                 id={`small-gathering-${item
//                   .replace(/\s+/g, "-")
//                   .toLowerCase()}`}
//                 value={item}
//                 checked={smallGatheringAllowed === item}
//                 onChange={(e) => setSmallGatheringAllowed(e.target.value)}
//               />
//               <label
//                 htmlFor={`small-gathering-${item
//                   .replace(/\s+/g, "-")
//                   .toLowerCase()}`}
//                 className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//               >
//                 {item}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* setSelectedVenueTypes */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="primaryVenueType"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           Primary Venue Type:
//         </label>
//         <div className="flex flex-col space-y-2.5">
//           {primaryVenueTypes.map((item) => (
//             <div key={item.id} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 id={`venue-${item.id}`}
//                 className="accent-[#EA0056] size-3.5 4xl:size-5"
//                 checked={selectedVenueTypes.includes(item.id)}
//                 onChange={() => toggleVenueType(item.id)}
//               />
//               <label
//                 htmlFor={`venue-${item.id}`}
//                 className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//               >
//                 {item.label}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* booking amount  */}
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What is the booking amount (in percentage terms you take) to book a
//           date?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
//           name="plateprice"
//         />
//       </div>
//       {/* usp  */}
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What is your USP? (Max 250 characters)
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2 py-2"
//           placeholder="Enter your message*"
//         ></textarea>
//       </div>
//       {/* How many weeks in advance should a booking be made?  */}
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           How many weeks in advance should a booking be made?
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2 py-2"
//           placeholder="Enter your message*"
//         ></textarea>
//       </div>
//       {/* describe your cancellation policy for user */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Please describe your cancellation policy (if a user initiates
//           cancellation) including whether you provide refunds of booking
//           amounts, and terms for doing so.
//         </p>

//         <div className="space-y-2.5">
//           {cancellationOptions.map((item) => {
//             const id = `user-cancellation-${item
//               .replace(/\s+/g, "-")
//               .toLowerCase()}`;
//             return (
//               <div key={item} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="userCancellationPolicyOption"
//                   id={id}
//                   value={item}
//                   checked={userCancellationPolicy === item}
//                   onChange={(e) => setUserCancellationPolicy(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {item}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {/* cancelation polity for you  */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Please describe your cancellation policy (if you initiate a
//           cancellation) including whether you provide refunds of booking amounts
//           and terms for doing so.
//         </p>

//         <div className="space-y-2.5">
//           {venueCancellationOptions.map((item) => {
//             const id = `venue-cancellation-${item
//               .replace(/\s+/g, "-")
//               .toLowerCase()}`;
//             return (
//               <div key={item} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="venueCancellationPolicyOption"
//                   id={id}
//                   value={item}
//                   checked={venueCancellationPolicy === item}
//                   onChange={(e) => setVenueCancellationPolicy(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {item}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {/* terms & conditions of your cancellation policy */}
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What are the terms & conditions of your cancellation policy? (please
//           describe in detail – e.g. No refunds within a month of the wedding day
//           or 50% amount refundable)
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2 py-2"
//           placeholder="Enter your message"
//         ></textarea>
//       </div>
//       {/* rooms are included in your destination Pricemap Package?  */}
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           How many rooms are included in your destination Pricemap Package?
//           (Default is 100)
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
//           name="plateprice"
//         />
//       </div>
//       {/* What would be the one-line bio for your venue  */}
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What would be the one-line bio for your venue
//         </label>
//         <textarea
//           className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2 py-2"
//           placeholder="Enter your message"
//         ></textarea>
//       </div>
//       {/* Do you need a minimum guarantee of 80 room bookings for hosting a wedding? */}
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Do you need a minimum guarantee of 80 room bookings for hosting a
//           wedding?
//         </p>

//         <div className="space-y-2.5">
//           {roomOptions.map((item) => {
//             const id = `room-booking-${item
//               .replace(/\s+/g, "-")
//               .toLowerCase()}`;
//             return (
//               <div key={item} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="roomBookingRequirementOption"
//                   id={id}
//                   value={item}
//                   checked={roomBookingRequirement === item}
//                   onChange={(e) => setRoomBookingRequirement(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {item}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What is the starting price for vegetarian menu (Assume 250 pax and
//           standard menu)
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
//           name="plateprice"
//         />
//       </div>
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           How many rooms are available in your accommodation?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
//           name="plateprice"
//         />
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           What is your policy on catering?
//         </p>
//         <div className="space-y-2.5">
//           {cateringOptions.map((item) => {
//             const id = `catering-policy-${item
//               .replace(/\s+/g, "-")
//               .toLowerCase()}`;
//             return (
//               <div key={item} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="cateringPolicyOption"
//                   id={id}
//                   value={item}
//                   checked={cateringPolicy === item}
//                   onChange={(e) => setCateringPolicy(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {item}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What is the starting price for a veg menu? (Assume 250 pax and
//           standard menu)
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
//           name="plateprice"
//         />
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           What is your policy on décor?
//         </p>

//         <div className="space-y-2.5">
//           {decorOptions.map((item) => {
//             const id = `decor-policy-${item
//               .replace(/\s+/g, "-")
//               .toLowerCase()}`;
//             return (
//               <div key={item} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="decorPolicyOption"
//                   id={id}
//                   value={item}
//                   checked={decorPolicy === item}
//                   onChange={(e) => setDecorPolicy(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {item}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Venue Type filter:
//         </p>

//         <div className="space-y-2.5">
//           {venueOptions.map((item) => {
//             const id = `venue-type-${item.replace(/\s+/g, "-").toLowerCase()}`;
//             return (
//               <div key={item} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="venueTypeFilterOption"
//                   id={id}
//                   value={item}
//                   checked={venueType === item}
//                   onChange={(e) => setVenueType(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {item}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Do you also allow small size gatherings (&lt;150)?
//         </p>

//         <div className="space-y-2.5">
//           {options.map(({ label, value }) => {
//             const id = `small-gathering-pref-${label.toLowerCase()}`;
//             return (
//               <div key={value} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="smallGatheringPreferenceGroup"
//                   id={id}
//                   value={value}
//                   checked={smallGatheringPreference === value}
//                   onChange={(e) => setSmallGatheringPreference(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {label}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Please select whichever is applicable for your venue:
//         </p>

//         <div className="space-y-2.5">
//           {venueFeatures.map((feature) => {
//             const id = `venue-feature-${feature
//               .toLowerCase()
//               .replace(/\s+/g, "-")
//               .replace(/[^a-z0-9-]/g, "")}`;
//             return (
//               <div key={feature} className="flex items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id={id}
//                   value={feature}
//                   className="accent-[#EA0056] size-4 4xl:size-5"
//                   checked={selectedVenueFeatures.includes(feature)}
//                   onChange={() => toggleFeature(feature)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {feature}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What year did your venue start operations?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
//           name="plateprice"
//         />
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           Is parking available at the venue?
//         </p>

//         <div className="space-y-2.5">
//           {parkingOptions.map((option) => {
//             const id = `parking-option-${option
//               .toLowerCase()
//               .replace(/\s+/g, "-")
//               .replace(/[^a-z0-9-]/g, "")}`;
//             return (
//               <div key={option} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="parkingAvailabilityOption"
//                   id={id}
//                   value={option}
//                   checked={parkingAvailability === option}
//                   onChange={(e) => setParkingAvailability(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {option}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           What is your policy on alcohol?
//         </p>

//         <div className="space-y-2.5">
//           {alcoholOptions.map((option) => {
//             const id = `alcohol-policy-${option
//               .toLowerCase()
//               .replace(/\s+/g, "-")
//               .replace(/[^a-z0-9-]/g, "")}`;
//             return (
//               <div key={option} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="alcoholPolicyOption"
//                   id={id}
//                   value={option}
//                   checked={alcoholPolicy === option}
//                   onChange={(e) => setAlcoholPolicy(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {option}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex flex-col ">
//         <label
//           htmlFor="plateprice"
//           className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2"
//         >
//           What is the minimum starting price to decorate your venue?
//         </label>
//         <input
//           className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
//           name="plateprice"
//         />
//       </div>
//       <div className="flex flex-col">
//         <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">
//           What is your policy on DJ/Band?
//         </p>

//         <div className="space-y-2.5">
//           {djOptions.map((option) => {
//             const id = `dj-policy-${option
//               .toLowerCase()
//               .replace(/\s+/g, "-")
//               .replace(/[^a-z0-9-]/g, "")}`;
//             return (
//               <div key={option} className="flex items-center mb-2">
//                 <input
//                   className="accent-[#EA0056] size-5"
//                   type="radio"
//                   name="djPolicyOption"
//                   id={id}
//                   value={option}
//                   checked={djPolicy === option}
//                   onChange={(e) => setDjPolicy(e.target.value)}
//                 />
//                 <label
//                   htmlFor={id}
//                   className="text-black font-normal text-[14px] ml-2 cursor-pointer"
//                 >
//                   {option}
//                 </label>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//        <div className="pt-4">
//         <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
//           Save
//         </button>
//       </div>
//     </>
//   );
// };

// export default Venue;


'use client';
import React, { useEffect, useState } from 'react';

const PreWeddingPhotographersForm = ({prefilledValues,defaultValues,onDataChange}) => {
  const [form, setForm] = useState({
    processedPics: '',
    services: [],
    paymentTerms: '',
    awards: '',
    preShootCost: '',
    travelLodgingCost: '',
    preWeddingStillsPrice: '',
    cancellationTerms: '',
    outstationCost: '',
    preWeddingFilmPrice: '',
    experienceYears: '',
  });

  useEffect(() => {
    if (prefilledValues && Object.keys(prefilledValues).length > 0) {
      setForm(prefilledValues);
    }
  }, [prefilledValues]);

  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length > 0) {
      setForm(defaultValues);
    }
  }, [defaultValues]);

  const countFilledFields = (formObj) => {
    let count = 0;
    Object.entries(formObj).forEach(([key, value]) => {
      let filled = false;
      if (Array.isArray(value)) {
        filled = value.length > 0;
      } else if (typeof value === 'string') {
        filled = value.trim() !== "";
      } else if (value) {
        filled = true;
      }
      if (filled) count++;
      console.log(key, value, filled, count);
    });
    return count;
  };

  const getTotalFields = (formObj) => Object.keys(formObj).length;

  const handleChange = (key, value) => {
    const updated = { ...form, [key]: value };
    setForm(updated);
    onDataChange(updated,countFilledFields(updated),getTotalFields(updated));
  };

  const toggleCheckbox = (key, item) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(item)
        ? prev[key].filter((v) => v !== item)
        : [...prev[key], item],
    }));
  };

  useEffect(() => {
    onDataChange(form, countFilledFields(form),getTotalFields(form));
  }, [form]);

  const processedOptions = [
    "Less than 25",
    "25–50",
    "50–100"
  ];

  const servicesList = [
    "Still Photography",
    "Videography",
    "Albums"
  ];

  const paymentOptions = [
    "25% Advance",
    "50% Advance",
    "100% Advance"
  ];

  const preShootOptions = [
    "Borne by client",
    "Borne by photographer (Only Local)"
  ];

  const travelLodgingOptions = [
    "Cost of stay and travel borne by client",
    "Cost of stay borne by client and travel by photographer"
  ];

  const outstationOptions = [
    "Cost of stay and travel borne by client",
    "Cost of stay borne by client and travel by you",
    "Both borne by you"
  ];

  const renderInput = (label, key, placeholder = 'Enter here') => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <input
        type="text"
        className="h-[42px] 3xl:h-[53px] rounded-[8px] outline-none bg-white px-[22px] placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );

  const renderTextarea = (label, key) => (
    <div className="flex flex-col">
      <label className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</label>
      <textarea
        className="h-[90px] 3xl:h-[120px] rounded-[8px] outline-none bg-white px-[22px] py-2 placeholder:text-[#525252] 3xl:placeholder:text-[16px] 3xl:text-[16px] placeholder:text-[14px] text-[14px] font-medium text-black w-1/2"
        value={form[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        placeholder="Enter your message*"
      ></textarea>
    </div>
  );

  const renderRadioGroup = (label, key, options) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</p>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const id = `${key}-${opt.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
          return (
            <div key={opt} className="flex items-center mb-2">
              <input
                type="radio"
                id={id}
                name={key}
                value={opt}
                checked={form[key] === opt}
                onChange={(e) => handleChange(key, e.target.value)}
                className="accent-[#EA0056] size-5"
              />
              <label htmlFor={id} className="text-black font-normal text-[14px] ml-2 cursor-pointer">{opt}</label>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCheckboxGroup = (label, key, options) => (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] 3xl:text-[18px] text-[#151515] mb-2">{label}</p>
      <div className="space-y-2.5">
        {options.map((item) => {
          const id = `${key}-${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
          return (
            <div key={item} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={id}
                value={item}
                checked={form[key].includes(item)}
                onChange={() => toggleCheckbox(key, item)}
                className="accent-[#EA0056] size-4"
              />
              <label htmlFor={id} className="text-black font-normal text-[14px] ml-2 cursor-pointer">{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {renderRadioGroup("How many processed (edited) pictures do you usually deliver to the client?", "processedPics", processedOptions)}

      {renderCheckboxGroup("Which services do you offer?", "services", servicesList)}

      {renderRadioGroup("What are your payment terms?", "paymentTerms", paymentOptions)}

      {renderInput("Please mention any awards you have received:", "awards")}

      {renderRadioGroup("Who bears the pre-wedding shoot location cost?", "preShootCost", preShootOptions)}

      {renderRadioGroup("Who bears cost of travel and lodging when travelling to a different city?", "travelLodgingCost", travelLodgingOptions)}

      {renderInput("Pricing for Pre-wedding stills? (Per day)", "preWeddingStillsPrice")}

      {renderTextarea("What are the terms & conditions of your cancellation policy?", "cancellationTerms")}

      {renderRadioGroup("Who bears the travel and stay cost for outstation weddings?", "outstationCost", outstationOptions)}

      {renderInput("Pricing for Pre-wedding Films? (Per day)", "preWeddingFilmPrice")}

      {renderInput("How long have you been doing pre-wedding photography?", "experienceYears")}

      {/* <div className="pt-4">
        <button className="bg-[#EA0056] text-white font-semibold rounded-[8px] px-6 py-2 text-[14px] 3xl:text-[16px]">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default PreWeddingPhotographersForm;