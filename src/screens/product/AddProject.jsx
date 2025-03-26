import { CategoryDropDown, Caption, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

const initialState = {
  make: "",
  model: "",
  year: "",
  mileage: "",
  fuelType: "",
  transmission: "",
  startingBid: "",
  description: "",
  category: null,
};

export const AddProduct = () => {
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className="font-normal mb-5">
          List Your Car for Bidding
        </Title>
        <hr className="my-5" />
        <form>
          <div className="w-full">
            <Caption className="mb-2">Make *</Caption>
            <input type="text" name="make" className={`${commonClassNameOfInput}`} placeholder="Car Make (e.g., Toyota)" required />
          </div>
          <div className="py-5">
            <Caption className="mb-2">Model *</Caption>
            <input type="text" name="model" className={`${commonClassNameOfInput}`} placeholder="Car Model (e.g., Corolla)" required />
          </div>
          <div className="flex items-center gap-5 my-4">
            <div className="w-1/2">
              <Caption className="mb-2">Year *</Caption>
              <input type="number" name="year" placeholder="Year" className={`${commonClassNameOfInput}`} required />
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Mileage (km) *</Caption>
              <input type="number" name="mileage" placeholder="Mileage" className={`${commonClassNameOfInput}`} required />
            </div>
          </div>
          <div className="flex items-center gap-5 my-4">
            <div className="w-1/2">
              <Caption className="mb-2">Fuel Type *</Caption>
              <input type="text" name="fuelType" placeholder="Petrol, Diesel, Electric, Hybrid" className={commonClassNameOfInput} required />
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Transmission *</Caption>
              <input type="text" name="transmission" placeholder="Automatic / Manual" className={commonClassNameOfInput} required />
            </div>
          </div>
          <div className="w-full">
            <Caption className="mb-2">Starting Bid Amount *</Caption>
            <input type="number" name="startingBid" className={`${commonClassNameOfInput}`} placeholder="Enter Starting Bid" required />
          </div>
          <div>
            <Caption className="mb-2">Description *</Caption>
            <textarea name="description" className={`${commonClassNameOfInput}`} cols="30" rows="5" placeholder="Describe the car condition, features, and any other details..." required></textarea>
          </div>
          <div>
            <Caption className="mb-2">Upload Car Images *</Caption>
            <input type="file" className={`${commonClassNameOfInput}`} name="image" multiple required />
          </div>
          <PrimaryButton type="submit" className="rounded-none my-5">
            LIST CAR FOR BIDDING
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};
