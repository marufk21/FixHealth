import React, { useState, useEffect } from "react";
import doctorData from "../doctors.json";

const ConsultationForm = () => {
  const initialFormData = {
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    complaints: "",
    experience: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [bookingMessage, setBookingMessage] = useState("");
  const [isBookingDone, setIsBookingDone] = useState(false);
  const [availableDoctors, setAvailableDoctors] = useState([]);

  useEffect(() => {
    setAvailableDoctors(
      doctorData.doctors.map((doctor) => ({
        name: doctor.name,
        city: doctor.city,
      }))
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (Object.values(formData).every((field) => field !== "")) {
        const userEnteredCity = formData.city.trim().toLowerCase();
        const filteredDoctors = availableDoctors.filter(
          (doctor) => doctor.city.toLowerCase() === userEnteredCity
        );

        setBookingMessage(
          filteredDoctors.length > 0
            ? `Your booking is done. Available doctors in ${userEnteredCity}: ${filteredDoctors
                .map((doctor) => doctor.name)
                .join(", ")}`
            : `No available doctors in ${userEnteredCity}.`
        );

        setIsBookingDone(true);
      } else {
        setBookingMessage("Please fill out all fields before submitting.");
        setIsBookingDone(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseBookingMessage = () => {
    setIsBookingDone(false);
    setFormData(initialFormData);
  };

  return (
    <>
      <div className="w-full px-6 py-9 rounded-xl sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
        <span className="block mb-2 text-[#44b5c4] text-lg font-semibold">
          Book an Appointment for FREE
        </span>
        <div className="booking-form-container">
          <form noValidate="" className="self-stretch space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm text-gray-300 font-medium"
              ></label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-md focus:ring focus:border-violet-500 text-gray-800 placeholder-gray-400 border-2 border-gray-700 py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-sm text-gray-300 font-medium"
              ></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-md focus:ring focus:border-violet-500 text-gray-800 placeholder-gray-400 border-2 border-gray-700 py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="text-sm text-gray-300 font-medium"
              ></label>
              <input
                id="age"
                name="age"
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full rounded-md focus:ring focus:border-violet-500 text-gray-800 placeholder-gray-400 border-2 border-gray-700 py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="text-sm text-gray-300 font-medium"
              ></label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full rounded-md focus:ring focus:border-violet-500 text-gray-800 placeholder-gray-400 border-2 border-gray-700 py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="text-sm text-gray-300 font-medium"
              ></label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full rounded-md focus:ring focus:border-violet-500 text-gray-800 placeholder-gray-400 border-2 border-gray-700 py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="complaints"
                className="text-sm text-gray-300 font-medium"
              ></label>
              <textarea
                id="complaints"
                name="complaints"
                placeholder="Chief Complaints"
                value={formData.complaints}
                onChange={handleInputChange}
                className="w-full rounded-md focus:ring focus:border-violet-500 text-gray-800 placeholder-gray-400 border-2 border-gray-700 py-2 px-3"
              ></textarea>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-2 font-semibold rounded bg-[#44b5c4] text-gray-900 hover:bg-[#2e858e] focus:outline-none focus:ring focus:border-violet-500"
              >
                Start Your Recovery
              </button>
            </div>
          </form>

          {/* Booking confirmation pop-up */}
          {isBookingDone && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
                <p className="text-lg font-semibold">{bookingMessage}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={handleCloseBookingMessage}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;
