let AdmissionProcessData = [
  {
    heading: 'Exploring University Programs from Undergrad to PhD',
    data: 'Browse through our comprehensive selection of university programs and certifications from renowned institutions worldwide. Our platform offers a wide array of disciplines, including arts, science, commerce, technology, business, healthcare, arts, and many more from undergrad level to Phd level. Each online program provides detailed information about the curriculum, faculty, duration, and eligibility requirements to help you make an informed decision.',
    image: true,
  },
  {
    heading: 'Eligibility and Prerequisites',
    data: 'Review the specific eligibility criteria and prerequisites for each university program carefully. Each program may have its own admission requirements, such as educational background, work experience, language proficiency, and other qualifications. Ensure that you meet the criteria before proceeding with the application process.',
  },
  {
    heading: 'Application Submission',
    data: 'Once you have identified the university program that aligns with your academic and career aspirations, proceed to submit your application through our user-friendly platform. You will be guided through the application process, which may include providing personal details, academic transcripts, letters of recommendation, and any other supporting documents required by the university.',
  },
  {
    heading: 'Application Review',
    data: "After submitting your application, the university's admission committee will review your credentials and qualifications. This process may take some time, as the universities carefully assess each applicant's suitability for the program.",
  },
  {
    heading: 'Admission Decision',
    data: 'Upon completion of the application review process, you will be notified of the admission decision. If accepted, congratulations! You are on your way to embarking on an enriching educational journey with a reputable university. If not accepted, do not be disheartened. We encourage you to explore other programs that align with your interests and qualifications.',
  },
  {
    heading: 'Financial Aid and Scholarships',
    data: 'Many universities offer financial aid and scholarship opportunities to deserving students. If you require financial assistance, we recommend checking the individual university programs for information on scholarships, grants, or other financial aid options.',
  },
  {
    heading: 'Confirming Enrolment',
    data: 'If you receive an offer of admission, you will be required to confirm your enrolment within the specified timeline and paying the registration fees. This step secures your place in the program, and you can proceed with any additional steps outlined by the university for newly admitted students. After you confirm your enrolment and pay the registration fees, you will be enrolled in the university program.',
  },
  {
    heading: 'Commence Your Academic Journey',
    data: 'Congratulations on securing your place in the university program of your choice! Commence your academic journey with confidence, knowing that eVidya360 and our university partners are here to support you every step of the way.',
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




