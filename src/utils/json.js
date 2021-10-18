import blog1 from "assets/images/blog-1.jpg";
import blog2 from "assets/images/blog-2.jpg";
import blog3 from "assets/images/blog-3.jpg";
import service1 from 'assets/images/service-1.png'
import service2 from 'assets/images/service-2.png'
import service3 from 'assets/images/service-3.png'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  blogs: [
    {
      image: blog1,
      date: "Aug 21, 2021",
      creator: "Admin",
      title: "Mening maqolam",
      description:
        "Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green",
    },
    {
      image: blog2,
      date: "Sep 09, 2021",
      creator: "Moderator",
      title: "Veb saytlarni takomilashtirish",
      description:
        "Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green",
    },
    {
      image: blog3,
      date: "Dec 13, 2021",
      creator: "Admin",
      title: "Mobil ilovalarni ishlab chiqish",
      description:
        "Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green",
    },
  ],
  services: [
    {
      image: service1, title:'Web dasturlash',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      image: service2, title:'Mobil dasturlash',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      image: service3, title:"Sun'iy intellekt",
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ]
};
