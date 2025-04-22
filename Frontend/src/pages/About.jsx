import React from "react";
import Title from "../components/Title"
import assets from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
const About=()=>{
    return(
        <div>

          <div className="text-2xl text-center pt-8 border-t ">
            <Title text1={"ABOUT"} text2={"US"}/>
          </div>

          <div className="my-10 flex flex-col md:flex-row gap-16">
            <img src={assets.about} className="w-full md:max-w-[450px]" alt="" />
              <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vel maiores quis facere, doloribus, ipsam voluptatum eos atque placeat dicta tenetur ad numquam quasi consectetur. Maiores eveniet quod quae repudiandae.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem possimus temporibus harum quidem mollitia dicta veniam omnis, veritatis quo ipsam? Quae minima id blanditiis officiis facere aliquam nisi velit!
              quibusdam earum odio repellendus! Aut numquam libero labore, dolores omnis eaque inventore saepe totam a optio ratione adipisci quod vero. Inventore fugit voluptatum doloremque itaque alias fuga.</p>
              <b className="text-gray-800">Our Missiion</b>
              <p>Our mission is to empower customer with choice,convenience,and confidence.</p>
              </div>
          </div>
          <div className="text-4xl py-4">
            <Title text1={"WHY"} text2={"CHOOSE US"}/>
          </div>
          <div className="flex flex-col md:flex-row text-sm mb-20">
               <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Quality Assurance:</b>
                <p>We select and vet each product to ensure it meets our stringent quality standards</p>
               </div>
               <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                          <b>Convenience:</b>
                          <p>With our user-friendly interface and hassle-free ordering process,shopping has never been easier</p>
               </div>
               <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                          <b>Exceptional Customer Service:</b>
                          <p>Our team of dedicated professionals is here to assist you the way,ensuring your satisfaction is our top priority </p>
               </div>
          </div>
          <NewsletterBox/>
        </div>
    )
}
export default About