import updateProperty from "@/app/actions/updateProperty";
const PropertyEditForm  = ({property}) => {
    
  const updatePropertyById = updateProperty.bind(null , property._id);

  return (
    <form action={updatePropertyById}> 
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Property
            </h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                Car Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                defaultValue={property.type}
              >
                <option value="Sedan">Sedan</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Hatchback">Hatchback</option>
                <option value="SUV">SUV</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Coupe">Coupe</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Honda City "
                required
                defaultValue={property.name}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Model
              </label>
              <input
                type="text"
                id="model"
                name="model"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. xli"
                required
                defaultValue={property.model}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 2020"
                required
                defaultValue={property.year}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add an optional description of your property"
                defaultValue={property.description}
              ></textarea>
            </div>

            <div className="mb-4 bg-blue-50 p-4">
              <label className="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                id="street"
                name="location.street"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Street"
                defaultValue={property.location.street}
              />
              <input
                type="text"
                id="city"
                name="location.city"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="City"
                required
                defaultValue={property.location.city}
              />
              <input
                type="text"
                id="state"
                name="location.state"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="State"
                required
                defaultValue={property.location.state}
              />
              <input
                type="text"
                id="zipcode"
                name="location.zipcode"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Zipcode"
                defaultValue={property.location.zipcode}

              />
            </div>

            <div className="mb-4 flex flex-wrap">
              <div className="w-full sm:w-1/3 pr-2">
                <label htmlFor="seating_capacity" className="block text-gray-700 font-bold mb-2">
                  Seating Capacity
                </label>
                <input
                  type="number"
                  id="seating_capacity"
                  name="seating_capacity"
                  className="border rounded w-full py-2 px-3"
                  required
                  defaultValue={property.seating_capacity}
                />
              </div>
              <div className="w-full sm:w-1/3 px-2">
                <label htmlFor="fuel_type" className="block text-gray-700 font-bold mb-2">
                  Fuel Type
                </label>
                <input
                  type="text"
                  id="fuel_type"
                  name="fuel_type"
                  className="border rounded w-full py-2 px-3"
                  required
                  defaultValue={property.fuel_type}
                />
              </div>
              <div className="w-full sm:w-1/3 pl-2">
                <label
                  htmlFor="transmission"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Transmission
                </label>
                <input
                  type="text"
                  id="transmission"
                  name="transmission"
                  className="border rounded w-full py-2 px-3"
                  required
                  defaultValue={property.transmission}
                />
              </div>
              
              
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Amenities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div>
                  <input
                    type="checkbox"
                    id="amenity_air_conditioning"
                    name="amenities"
                    value="Air Conditioning"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('Air Conditioning')}
                  />
                  <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_gps"
                    name="amenities"
                    value="GPS Navigation"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('GPS Navigation')}
                  />
                  <label htmlFor="amenity_gps">GPS Navigation</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="amenity_bluetooth"
                    name="amenities"
                    value="Bluetooth Connectivity"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('Bluetooth Connectivity')}
                  />
                  <label htmlFor="amenity_bluetooth">Bluetooth Connectivity</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="amenity_leather_seats"
                    name="amenities"
                    value="Leather Seats"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('Leather Seats')}
                  />
                  <label htmlFor="amenity_leather_seats">Leather Seats</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="amenity_rear_camera"
                    name="amenities"
                    value="Rearview Camera"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('Rearview Camera')}
                  />
                  <label htmlFor="amenity_rear_camera">Rearview Camera</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="amenity_parking_sensors"
                    name="amenities"
                    value="Parking Sensors"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('Parking Sensors')}
                  />
                  <label htmlFor="amenity_parking_sensors">Parking Sensors</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="amenity_airbags"
                    name="amenities"
                    value="Airbags"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('Airbag')}
                  />
                  <label htmlFor="amenity_airbags">Airbags</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="amenity_anti_lock_braking_system"
                    name="amenities"
                    value="ABS"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('ABS')}
                  />
                  <label htmlFor="amenity_anti_lock_braking_system">ABS</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="amenity_all_wheel_drive"
                    name="amenities"
                    value="AWD"
                    className="mr-2"
                    defaultChecked = {property.amenities.includes('AWD')}
                  />
                  <label htmlFor="amenity_all_wheel_drive">AWD</label>
                </div>
                
              </div>
            </div>

            <div className="mb-4 bg-blue-50 p-4">
              <label className="block text-gray-700 font-bold mb-2">
                Rates (Leave blank if not applicable)
              </label>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <label htmlFor="weekly_rate" className="mr-2">
                    Weekly
                  </label>
                  <input
                    type="number"
                    id="weekly_rate"
                    name="rates.weekly"
                    className="border rounded w-full py-2 px-3"
                    defaultValue = {property.rates.weekly}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="monthly_rate" className="mr-2">
                    Monthly
                  </label>
                  <input
                    type="number"
                    id="monthly_rate"
                    name="rates.monthly"
                    className="border rounded w-full py-2 px-3"
                    defaultValue = {property.rates.monthly}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="nightly_rate" className="mr-2">
                    Nightly
                  </label>
                  <input
                    type="number"
                    id="nightly_rate"
                    name="rates.nightly"
                    className="border rounded w-full py-2 px-3"
                    defaultValue = {property.rates.nightly}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="seller_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Seller Name
              </label>
              <input
                type="text"
                id="seller_name"
                name="seller_info.name"
                className="border rounded w-full py-2 px-3"
                placeholder="Name"
                defaultValue = {property.seller_info.name}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="seller_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Seller Email
              </label>
              <input
                type="email"
                id="seller_email"
                name="seller_info.email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address"
                required
                defaultValue = {property.seller_info.email}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="seller_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Seller Phone
              </label>
              <input
                type="tel"
                id="seller_phone"
                name="seller_info.phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Phone"
                defaultValue = {property.seller_info.phone}
              />
            </div>

            
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Property
              </button>
            </div>
          </form>
  );
}

export default PropertyEditForm 
