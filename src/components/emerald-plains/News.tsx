import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ee4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "3 Sep, 2023",
    author: "Kevin Martin",
    comments: 2,
    title: "Taking seamless key indicators offline to",
  },
  {
    img: "https://images.unsplash.com/photo-1518843875459-22572f252b17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "3 Sep, 2023",
    author: "Kevin Martin",
    comments: 5,
    title: "Override the digital divide with additional",
  },
  {
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "3 Sep, 2023",
    author: "Kevin Martin",
    comments: 1,
    title: "Agriculture Matters to the Future of next",
  },
];

export const News = () => {
  return (
    <section id="news" className="py-24 bg-secondary">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm uppercase tracking-widest text-gray-400">FROM THE BLOG</p>
        <h3 className="text-4xl font-bold my-4 text-white">News & Articles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article, index) => (
            <Card key={index} className="bg-background border-none text-left overflow-hidden">
              <div className="relative">
                <img src={article.img} alt={article.title} className="w-full h-56 object-cover" />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
                  {article.date}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <span>by {article.author}</span>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {article.comments} Comments
                  </div>
                </div>
                <h4 className="text-xl font-semibold mt-4 text-white hover:text-primary transition-colors">
                  <a href="#">{article.title}</a>
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};