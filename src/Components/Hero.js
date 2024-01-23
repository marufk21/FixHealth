import React, { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    complaints: "",
    experience: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    // Check age for previous experience
    const showExperience = formData.age >= 40;

    // Use the city from the URL parameter if available
    const urlParams = new URLSearchParams(window.location.search);
    const urlCity = urlParams.get("city");
    const selectedCity = urlCity || formData.city;

    // Filter doctors based on the city
    const filteredDoctors = getDoctorsByCity(selectedCity);

    // Display the results (You can replace this with your logic)
    console.log({
      ...formData,
      experience: showExperience,
      doctors: filteredDoctors,
    });
  };

  const getDoctorsByCity = (city) => {
    // Implement your logic to get doctors by city
    // Replace this with an actual API call or data retrieval
    return [
      { name: "Dr. Smith", city: "New York" },
      { name: "Dr. Johnson", city: "Los Angeles" },
      // Add more doctors as needed
    ].filter((doctor) => doctor.city === city);
  };

  return (
    <>
      <section className="p-6  bg-gray-800 text-gray-100">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <img
            src="https://source.unsplash.com/people-stretching-inside-pool-room-sGIp9xdj7kA/480x360"
            alt=""
            className="object-cover w-full rounded-xl xl:col-span-3 bg-gray-500"
          />
          <div className="w-full px-6 py-9 rounded-xl sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
            <span className="block mb-2  text-[#44b5c4] text-lg font-semibold">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
