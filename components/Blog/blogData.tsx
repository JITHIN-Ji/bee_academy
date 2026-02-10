import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Fashion Industry Trends 2026: What Every Designer Should Know",
    paragraph:
      "Discover the latest fashion trends dominating international runways and how sustainable design is reshaping the industry. Learn how to incorporate these trends into your portfolio.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Priya Sharma",
      image: "/images/blog/author-01.png",
      designation: "Fashion Design Expert",
    },
    tags: ["trends"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Master Pattern Making: Essential Skills for Professional Designers",
    paragraph:
      "Pattern making is the foundation of fashion design. Learn the techniques used in top design houses and how to create garments that fit perfectly and sell beautifully.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Rahul Singh",
      image: "/images/blog/author-02.png",
      designation: "Pattern Making Specialist",
    },
    tags: ["skills"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Building Your Fashion Portfolio: 10 Projects That Impress Employers",
    paragraph:
      "Your portfolio is your visual resume in the fashion industry. Explore what pieces employers look for and how to showcase your unique design perspective effectively.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ananya Gupta",
      image: "/images/blog/author-03.png",
      designation: "Career Coach",
    },
    tags: ["portfolio"],
    publishDate: "2025",
  },
];
export default blogData;
