"use client"
import React,{useState,useEffect} from 'react'

import addProperty from '@/app/actions/addProperty';



const PropertyAddForm = () => {

    const [mounted, setMounted] = useState(false);
    const [fields , setFields] = useState({
        type : '',
        name : '',
        model : '',
        year : '',
        description : '',
        location:{
            street:'',
            city: '',
            state : '',
            zipcode : '',
        },
        seating_capacity : '',
        fuel_type : '',
        transmission : '',
        amenities : [],
        rates:{
            weekly : '',
            monthly : '',
            nightly : '',
        },
        seller_info:{
            name:'',
            email:'',
            phone:'',
        },
        images:[]
    });

    useEffect(()=>{
        setMounted(true);
    },[])

    const handleChange = (e)=>{
        const {name , value} = e.target;
        console.log(`Changing ${name} to ${value}`);
        if(name.includes('.')){
            // check if nesting is there
            const [outerKey , innerKey] = name.split('.');
            setFields((prevFields)=>({
                ...prevFields,
                [outerKey] : {
                    ...prevFields[outerKey],
                    [innerKey] : value
                }
            }));
        }else{
            // not nested
            setFields((prevFields)=>({
                ...prevFields,
                [name]:value
            }));
        }
    }
    const handleAmenitiesChange = (e)=>{
        const {value , checked} = e.target;

        // clone the current array
        const updatedAmenities = [...fields.amenities];
        if(checked){
            // add value to array
            updatedAmenities.push(value);
        }else{
            // remove value form array
            const index = updatedAmenities.indexOf(value);
            if(index !== -1){
                updatedAmenities.splice(index,1);
            }
        }
        // update state with updated array
        setFields((prevFields)=>({
            ...prevFields,
            amenities:updatedAmenities,
        }))
    }

    const handleImageChange = (e)=>{
        const {files} = e.target;
        // clone images array
        const updatedImages = [...fields.images];
        // add new files to the array
        for(const file of files){
            updatedImages.push(file);
        }
        // updated state with array of images
        setFields((prevFields)=>({
            ...prevFields,
            images: updatedImages,
        }))
    }


  return mounted && 
    <form action={addProperty}> 
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Car
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
                value = {fields.type}
                onChange={handleChange}
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
                value = {fields.name}
                onChange={handleChange}
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
                value = {fields.model}
                onChange={handleChange}
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
                value = {fields.year}
                onChange={handleChange}
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
                value = {fields.description}
                onChange={handleChange}
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
                value = {fields.location.street}
                onChange={handleChange}
              />
              <input
                type="text"
                id="city"
                name="location.city"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="City"
                required
                value = {fields.location.city}
                onChange={handleChange}
              />
              <input
                type="text"
                id="state"
                name="location.state"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="State"
                required
                value = {fields.location.state}
                onChange={handleChange}
              />
              <input
                type="text"
                id="zipcode"
                name="location.zipcode"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Zipcode"
                value = {fields.location.zipcode}
                onChange={handleChange}
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
                  value = {fields.seating_capacity}
                  onChange={handleChange}
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
                  value = {fields.fuel_type}
                  onChange={handleChange}
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
                  value = {fields.transmission}
                  onChange={handleChange}
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
                    checked={fields.amenities.includes('Air Conditioning')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('GPS Navigation')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('Bluetooth Connectivity')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('Leather Seats')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('Rearview Camera')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('Parking Sensors')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('Airbags')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('ABS')}
                    onChange={handleAmenitiesChange}
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
                    checked={fields.amenities.includes('AWD')}
                    onChange={handleAmenitiesChange}
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
                    value = {fields.rates.weekly}
                    onChange={handleChange}
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
                    value = {fields.rates.monthly}
                    onChange={handleChange}
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
                    value = {fields.rates.nightly}
                    onChange={handleChange}
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
                value = {fields.seller_info.name}
                onChange={handleChange}
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
                value = {fields.seller_info.email}
                onChange={handleChange}
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
                value = {fields.seller_info.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
                Images (Select up to 4 images)
              </label>
              <input
                type="file"
                id="images"
                name="images"
                className="border rounded w-full py-2 px-3"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                required
              />
            </div>

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Property
              </button>
            </div>
          </form>
  
}

export default PropertyAddForm
