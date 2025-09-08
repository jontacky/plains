import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm uppercase tracking-widest text-gray-400">OUR TESTIMONIALS</p>
        <h3 className="text-4xl font-bold my-4 text-white">WHAT THEY'RE TALKING ABOUT</h3>
        <div className="mt-12 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tyrese Gibson"
              className="rounded-full w-48 h-48 object-cover"
            />
            <div className="absolute top-0 -right-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
          <div className="text-left text-gray-300">
            <p className="italic">
              "Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis tristique venenatis. Tempor id commodo odio nunc id hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet modo volutpat quis neque. Scelerisque at in in id donec ornare velit. ortis volutpat purus mauris. Tortor magna non turpis ultricies iaculis lectus proin pellentesque platea."
            </p>
            <p className="mt-6 font-bold text-white">Tyrese Gibson</p>
            <p className="text-sm text-gray-400">Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};