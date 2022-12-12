import { useState } from "react";
import "./works.scss";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./asset/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./asset/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./asset/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];


const handleClick = (way) => {
  way === "left"
  //it means ki curretslide 0 hai pahle to ye left click kar ke kuch nhi hoga hmko right click karna hoga jisse ek badh 
  //jaye or next slide show kare ager me left wale per click karta hu to last wale per chala jauga or last wala 2 hai jo mene likha hai :2  
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
    //if i will click right walla to ye pahle slide ki position check karega ager currentslide chote hai hamare old length se to 
    //-1 matlb ki 1 ko chod ke lekin ager ye chote hote hai to 1 ko add kar loo nhi to isko 0 rahne doo 
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
};



return (
  <div className="works" id="works"> 
    <div
      className="slider"
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
    >
      {data.map((d) => (
        <div className="container" key={d.id}> 
          <div className="item" >
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    <img
      src="asset/arrow.png"
      className="arrow left"
      alt=""
      onClick={() => handleClick("left")}
    />
    <img
      src="asset/arrow.png"
      className="arrow right"
      alt=""
      onClick={() => handleClick()}
    />
  </div>
);
}