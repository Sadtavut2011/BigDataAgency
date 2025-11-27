function TextInput() {
  return (
    <div className="absolute bg-gray-50 bottom-0 left-0 right-0 top-[46.43%]" data-name="text-input">
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[30px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">Enter your name</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContactInput() {
  return (
    <div className="absolute h-[56px] left-0 top-[300px] w-[722px]" data-name="contact-input">
      <p className="absolute bottom-[66.07%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic right-[82.27%] text-[16px] text-black text-nowrap top-0 whitespace-pre">Name (Required)</p>
      <TextInput />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-gray-50 bottom-0 left-0 right-0 top-[46.43%]" data-name="text-input">
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[30px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">Enter your Email</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContactInput1() {
  return (
    <div className="absolute h-[56px] left-0 top-[384px] w-[722px]" data-name="contact-input">
      <p className="absolute bottom-[66.07%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic right-[82.83%] text-[16px] text-black text-nowrap top-0 whitespace-pre">Email (Required)</p>
      <TextInput1 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-gray-50 bottom-0 left-0 right-0 top-[46.43%]" data-name="text-input">
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[30px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">&nbsp;</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContactInput2() {
  return (
    <div className="absolute h-[56px] left-0 top-[468px] w-[722px]" data-name="contact-input">
      <p className="absolute bottom-[66.07%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic right-[81.72%] text-[16px] text-black text-nowrap top-0 whitespace-pre">Phone (Required)</p>
      <TextInput2 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute bg-gray-50 bottom-0 left-0 right-0 top-[46.43%]" data-name="text-input">
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[30px] py-[5px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">Enter your company name</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContactInput3() {
  return (
    <div className="absolute h-[56px] left-0 top-[552px] w-[722px]" data-name="contact-input">
      <p className="absolute bottom-[66.07%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic right-[71.75%] text-[16px] text-black text-nowrap top-0 whitespace-pre">Company Name (Required)</p>
      <TextInput3 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="absolute bg-gray-50 bottom-[20%] left-0 right-0 top-[72.35%]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[20%] contents left-0 right-0 top-[69.51%]">
      <p className="absolute bottom-[28.42%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic right-[71.21%] text-[16px] text-black top-[69.51%]">Message (Required)</p>
      <TextInput4 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="relative size-full" data-name="contact">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#2e3c52] text-[64px] text-nowrap top-0 whitespace-pre">{`LET'S TALK`}</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[24px] text-black top-[105px] w-[722px]">{`We welcome inquiries about our digital solutions, opportunities for collaboration, or career prospects. Our experts are on standby to offer complimentary consultation and guidance on long-term digital business expansion. Get in touch today and receive tailored advice from our specialists."`}</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[16px] text-black top-[782px] w-[722px]">
        <p className="mb-0">Big Data Agency requires this information to follow up on your inquiry and to provide you with relevant news and updates about our services.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">By submitting this form, you consent to receive marketing communications via email from our team. You may unsubscribe at any time by following the instructions provided in our emails.</p>
        <p className="mb-0">&nbsp;</p>
        <p>For more information, please refer to our Privacy Policy.</p>
      </div>
      <ContactInput />
      <ContactInput1 />
      <ContactInput2 />
      <ContactInput3 />
      <Group />
    </div>
  );
}