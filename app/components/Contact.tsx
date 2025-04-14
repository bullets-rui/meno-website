import Link from 'next/link';

const Contact = () => (
  <section className="bg-[#00B4C8] text-white py-5 sm:py-10 text-center">
    <Link
      href="/contact"
      className="
        relative inline-block 
        text-[clamp(3rem,12vw,10rem)] font-regular 
        text-white
        after:content-[''] after:block 
        after:h-[4px] after:bg-white
        after:w-0 hover:after:w-full 
        after:transition-all after:duration-300 
        after:mt-[-50px]
      "
    >
      CONTACT US
    </Link>
  </section>
);

export default Contact;
