"use client";

import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import transition from "../transition";
import { animateScroll as scroll } from "react-scroll";

const MerchandisePage = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);

  const [data, setData] = useState({
    size: "S",
    address: "",
    quantity: 0,
    type: "Hoodie",
  });
  const paymentHandler = async (e) => {
    e.preventDefault();
    const obj = { ...data };
    let jsonobj = JSON.stringify(obj);
    window.alert(jsonobj);
  };
  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  return (
    <div className="bg-[#0f0d09]">
      {/* <ComingSoon /> */}
      { <><div className="h-[600px]">
        <Carousel slideInterval={2000}>
          <img
            src="https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708955492/Jacket_h6xhte.png"
            alt="Jacket" />
          <img
            src="https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708955492/T-shirt_mlb5tv.png"
            alt="T-shirt" />
        </Carousel>
      </div>
      <div className="flex justify-center items-center h-[100px]">
          <div>
            {/*onClick{() => setOpenModal(true)}*/}
            <Button
              className="bg-[#f5c143] text-[#0f0d09] hover:bg-[#e6aa1e]"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfusnTl0EayLZb_QJkuE1RxGFrseBoluGb50vSqsy0DVkRfAw/viewform?usp=sf_link" target="_blank">Buy Our Merch</a>
            </Button>
          </div>
          
       {/*<Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Merchandise Form</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <motion.form
                  // initial={{ y: 50, opacity: 0 }}
                  // animate={{ y: 0, opacity: 1 }}
                  // transition={{ duration: 1 }}
                  onSubmit={paymentHandler}
                  className=" w-full h-full rounded-lg bg-[#7CB9E8] shadow-xl px-5 py-5 backdrop-blur-lg text-white font-semibold"
                >
                  <div className="justify-center items-center mb-4">
                    <label htmlFor="address" className="block mb-2 text-sm  ">
                      Address
                    </label>
                    <input
                      type="string"
                      id="address"
                      onChange={handleChangeInput}
                      value={data.address}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                      placeholder="Your Address"
                      required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="size" className="block mb-2 text-sm">
                      Available Merchandise
                    </label>
                    <select
                      id="type"
                      onChange={handleChangeInput}
                      value={data.type}
                      placeholder="Hoodie"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                      required
                    >
                      <option value="Hoodie">Hoodie</option>
                      <option value="Tshirt">Tshirt</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="quantity" className="block mb-2 text-sm  ">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      min="0"
                      onChange={handleChangeInput}
                      value={data.quantity}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                      placeholder="Eg. 1, 2, 3..."
                      required />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="size" className="block mb-2 text-sm">
                      Select your size{" "}
                      {data.type == "Tshirt + Hoodie Combo" && "(Tshirt)"}
                    </label>
                    <select
                      id="size"
                      onChange={handleChangeInput}
                      value={data.size}
                      placeholder="Eg. S, M"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                      required
                    >
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="text-[#efede0] bg-[#3C91E6]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08]  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                  >
                    {loading ? "Placing Order" : "Submit"}
                  </button>
                </motion.form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(false)}>I accept</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Decline
              </Button>
            </Modal.Footer>
  </Modal>*/}
        </div></> }
    </div>
  );
};

const Merchandise = transition(MerchandisePage);
export default Merchandise;
