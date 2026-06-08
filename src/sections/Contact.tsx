import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 text-gray-800">
                Ready to bring your next project to life? Let&apos;s connect
                and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://mail.google.com/mail/?view=cm&to=unenlightened690@gmail.com&subject=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950 hover:bg-gray-800 transition"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
