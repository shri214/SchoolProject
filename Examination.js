let AdmissionProcessData = [
    {
      heading: 'Preparation and Study',
      data: 'As you progress through your university program, you will have access to comprehensive study materials, and resources. Engage in dedicated study and preparation to master the course content and build a strong foundation of knowledge.',
      image: true,
    },
    {
      heading: 'Course Assessments',
      data: 'Throughout your program, you will be evaluated through various course assessments, including quizzes, assignments, and projects. These assessments are designed to gauge your understanding of the material and contribute to your overall performance in the program.',
    },
    {
      heading: 'Midterm Examinations',
      data: 'In some university programs, there may be midterm examinations conducted during the course duration. These examinations provide a comprehensive review of the topics covered in the first half of the program and serve as a checkpoint to monitor your progress.',
    },
    {
      heading: 'Final Examinations',
      data: "At the end of your university program, you will undertake the final examinations, which assess your proficiency in the entire course curriculum. The final examinations may be conducted in different formats, such as online proctored exams, timed assessments or examination at the education consultant center, depending on the university's policies.",
    },
    {
      heading: 'Proctoring and Integrity',
      data: 'To maintain the integrity of the examination process, some university programs may implement online proctoring. This ensures that examinations are conducted under supervised conditions, verifying your identity and preventing academic dishonesty.',
    },
    {
      heading: 'Grading and Evaluation',
      data: "Following the examination period, your performance will be evaluated based on your course assessments and final examinations. The university's academic committee will review your results to determine your final grade for the program.",
    },
    {
      heading: 'Academic Support',
      data: 'Throughout the examination process, eVidya360 and our university partners are here to support you. If you have any questions or concerns about the examination process, academic support is available to address your inquiries and provide guidance.',
    },
    {
      heading: 'Certificate and Recognition',
      data: "Upon successful completion of your university program and meeting the program's requirements, you will receive a certificate of completion from the collaborating university. This certificate is a testament to your academic achievements and holds value in the job market and your professional journey.",
    },
    {
        heading:"Continuous Learning",
        data:"At eVidya360, we believe in the power of continuous learning. Your university program completion is just the beginning of a lifelong learning journey. We encourage you to explore other programs and certifications to enhance your knowledge and skills further."
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
  
  const footer2=document.querySelector(".f2");
  
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
  

  
  
  