import React, { useState, useEffect } from "react";

const ConsultationForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    complaints: "",
    experience: false,
  });

  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("../doctors.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const urlParams = new URLSearchParams(window.location.search);
        const urlCity = urlParams.get("city");
        const selectedCity = urlCity || formData.city;

        const filteredDoctors = data.doctors.filter(
          (doctor) => doctor.city.toLowerCase() === selectedCity.toLowerCase()
        );
        setDoctors(filteredDoctors);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDoctors();
  }, [formData.city]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await setDoctors();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div className="w-full px-6 py-9 rounded-xl sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
            <span className="block mb-2 text-[#44b5c4] text-lg font-semibold">
              Book an Appointment for FREE
            </span>
            {/* Form */}
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
                <div className="flex items-center">
                  <input
                    id="experience"
                    name="experience"
                    type="checkbox"
                    checked={formData.experience}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Any previous experience with physiotherapy
                  <label
                    htmlFor="experience"
                    className="text-sm text-gray-100"
                  ></label>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-2 font-semibold rounded bg-[#44b5c4] text-gray-900 hover:bg-[#2e858e] focus:outline-none focus:ring focus:border-violet-500"
                >
                  Start Your Recovery
                </button>
              </form>
              {/* Display doctors */}
              <p className="mt-4 text-xl font-semibold mb-4">Available Doctors</p>
              {doctors.length > 0 ? (
                <ul>
                  {doctors.map((doctor, index) => (
                    <li key={index} className="text-gray-100">
                      {`Dr. ${doctor.name} - ${doctor.expertise} - ${doctor.city} - ${
                        formData.experience ? "Experience: Yes" : "Experience: No"
                      }`}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-100">
                  No doctors available for the selected criteria.
                </p>
              )}
            </div>
          </div>
    </>
  )
}

export default ConsultationForm