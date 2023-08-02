

let AdmissionProcessData = [
    {
      heading: 'The Power of Personalized Guidance',
      data: 'We understand that choosing the right course or program can be a crucial decision with a significant impact on your future. Our video counseling sessions are designed to offer you personalized attention, tailored advice, and valuable insights to empower your educational choices.',
      image: true,
    },
    {
        heading: 'How Video Counseling Works',
        data: "",
      },
      {
        heading: '',
        data: `Seeking Educational Guidance: Whether you are a student exploring various career paths or a working professional considering upskilling, our video counseling feature is available to all learners seeking educational guidance.`,
      },
      {
        heading: '',
        data: `Requesting a Video Counseling Session: To schedule a video counseling session, simply navigate to the "Video Counseling" section on our platform. Choose a convenient date and time for your session and provide any specific topics or questions you'd like to discuss.`,
      },
      {
        heading: '',
        data: `Connecting with Education Counselors: Our team will promptly confirm your appointment and connect you with experienced education counselors who specialize in your field of interest.`,
      },
      {
        heading: '',
        data: `Personalized Discussion: During the video call, you will have the opportunity to discuss your educational goals, interests, and any challenges you may face. The education counselor will provide valuable advice and recommend suitable courses or programs that align with your aspirations.`,
      },
     
    {
      heading: 'Benefits of Video Counseling with Education Counselors',
      data: '',
    },
    {
        heading: '',
        data: `Expert Insights: Our education counselors have in-depth knowledge of various academic fields, career prospects, and emerging trends. Benefit from their expertise to make well-informed decisions.`,
      },
    {
        heading: '',
        data: `Clarity and Direction: Video counseling provides clarity on available learning options, enabling you to choose the right path that best matches your strengths and interests.`,
      },
    {
        heading: '',
        data: `Support at Your Convenience: Conducted through video calls, counseling sessions are flexible and can be scheduled at a time that suits your schedule.`,
      },
    {
        heading: '',
        data: `Empowering Your Journey: Whether you are a learner starting your educational journey or seeking career advancement, video counseling equips you with the tools to achieve your goals.`,
      },
    {
      heading: 'Take the Next Step in Your Educational Journey',
      data: "At eVidya360, we believe in empowering learners to make the most of their educational opportunities. Video counseling with education counselors is your gateway to personalized guidance and an enriching educational experience.",
    },
   
    {
      heading: 'Contact Us',
      data: 'If you have any questions or need assistance with the admission process, our support team is here to help. Contact us at info@evidya360.com, and we will be happy to guide you through the process.',
    },
  ];


const links=[
    {0:"About Us", 1:"Teach at ABEA"},
    {0:"Blog", 1:"Workshop"},
    {0:"Courses", 1:"Student Programs"},
    {0:"Contact Us", 1:"Self Paced Programs"},
    {0:"Changemaker Awards 2022", 1:"Shool Services"},
    {0:"", 1:"Privacy Policy"},
  ]
  
  
  
  const details = document.querySelector('.details');
  
  AdmissionProcessData.forEach((val) => {
    console.log(val.heading);
    details.innerHTML += `
     <div class="points">
          <h1 class="points-heading">
          ${val.heading}
          </h1>
          <p class="admission-p">
            ${val.data}
          </p>
          ${
            val.image
              ? `<div class="images">
         
             <div class="image-box"><img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/></div>
             <div class="image-box"><img src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"/></div>
             <div class="image-box"><img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/></div>
              
          </div>`
              :""
          }
     </div>  
  `
  });
  
  //footer quick link mapping
  const footer2=document.querySelector(".f2");
  links.forEach((val)=>{
     footer2.innerHTML+=`
     <div class="links-box">
     <a href="#">${val[0]}</a>
     <a href="#">${val[1]}</a>
   </div>
     `
  })
  
  //footer geo location
  
  
  var maps = document.querySelector(".maps");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
       let lat=position.coords.latitude
       let lon=position.coords.longitude;
  
        const mapUrl = `https://maps.google.com/maps?q=${lat},${lon}&output=embed`;
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", mapUrl);
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "100%");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("style", "border:0");
        maps.appendChild(iframe);
  
  
      });
    } else {
      maps.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  getLocation()
  
  
  
  
  