const data = [
  {
    skill: "HTML",
    experience: "4+ Years Of Experience",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s",
  },
  {
    skill: "CSS",
    experience: "4+ Years Of Experience",
    src: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
  },
  {
    skill: "JAVASCRIPT",
    experience: "4+ Years Of Experience",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8OzAGFPshiupQPT_rUFnHGZseBTwtXSJXrBJ3CaxZg&s",
  },
  {
    skill: "BOOTSTRAP",
    experience: "4+ Years Of Experience",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
  },
  {
    skill: "TAILWIND CSS",
    experience: "4+ Years Of Experience",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMAgy_XeSr2CmOITAysaZtDxsVUSTSYtSM2EKE5ivhg&s",
  },
  {
    skill: "RESPONSIVE DESIGN",
    experience: "4+ Years Of Experience",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Bezx00PHAVx7SuoITYul4-sSM1Oa57BWeO-8_GQS1A&s",
  },
  {
    skill: "REACT",
    experience: "3+ Years Of Experience",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s",
  },
  {
    skill: "NEXT.JS",
    experience: "2+ Year Of Experience",
    src: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
  },
  {
    skill: "WEB DESIGN",
    experience: "4+ Years Of Experience",
    src: "https://designsvalley.com/wp-content/uploads/2023/10/what-is-web-design.png",
  },
];

const Skills = () => {
  return (
    <>
      <p className="font-bold text-4xl text-center text-gray-800 tracking-widest">
        SKILLS & EXPERIENCE
      </p>
      <div className="mx-auto grid max-w-2xl grid-cols-1 md:grid-cols-2 text-center md:text-start items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        {data.map((item) => {
          return (
            <>
              <div className="flex flex-col items-center hover:shadow-2xl rounded-xl duration-500">
                <img
                  src={item.src}
                  alt=""
                  className="w-72 h-52 rounded-lg my-2"
                />
                <p className="font-bold text-gray-800 text-xl">{item.skill}</p>
                <p className="text-gray-600 font-bold">{item.experience}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
