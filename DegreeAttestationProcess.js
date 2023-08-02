let AdmissionProcessData = [
    {
      heading: 'What is Degree Attestation?',
      data: 'Degree attestation is a process in which educational documents, such as degrees, diplomas, and transcripts, are verified and authenticated by designated authorities. The attestation confirms that the documents are genuine and issued by a legitimate educational institution.',
      image: true,
    },
    {
      heading: 'Step-by-Step Degree Attestation Process:',
      data: `Verification by the Educational Institution:
      The first step in the attestation process is to have your original educational documents verified and attested by the educational institution from which the degree was awarded. This is to confirm that the documents are genuine and issued by the institution.`,
    },
    {
      heading: 'Attestation by the Local Authorities:',
      data: 'After verification by the educational institution, the documents are then submitted to the local authorities, usually the State Education Department or the Higher Education Commission. They will review the documents and provide their seal or stamp, attesting to the authenticity of the educational credentials.',
    },
    {
      heading: 'Attestation by the Ministry of Foreign Affairs:',
      data: "Once the local authorities have attested the documents, they are forwarded to the Ministry of Foreign Affairs (MOFA) or the equivalent department in the issuing country. MOFA will verify the authenticity of the local authority's attestation and provide its own stamp or seal.",
    },
    {
      heading: 'Attestation by the Embassy/Consulate:',
      data: 'If the documents are intended for use in a foreign country, they are then submitted to the embassy or consulate of that country in the issuing country. The embassy or consulate will further attest the documents, confirming their validity for use in the foreign country.',
    },
    {
      heading: 'Final Attestation by the Foreign Ministry:',
      data: "In the receiving country, the documents may be submitted to the Ministry of Foreign Affairs or its equivalent for final attestation. This step ensures that the documents are officially recognized and valid for use within the country's borders.",
    },
    {
      heading: 'Why is Degree Attestation Important?',
      data: `Degree attestation serves several critical purposes:`,
    },
    {
      heading: '',
      data: `Employment Abroad: Many countries require attested educational documents for work visa applications to ensure the authenticity of the applicant's qualifications.`,
    },
    {
      heading: '',
      data: `Higher Education: Universities and educational institutions may require attested documents for admission to academic programs.`,
    },
    {
      heading: '',
      data: `Migration and Permanent Residency: For immigration purposes, attested documents may be mandatory to validate educational credentials.`,
    },
    {
      heading: '',
      data: `Global Recognition: Attested degrees hold international recognition and credibility, enhancing opportunities for career growth on a global scale.`,
    },
    {
      heading: 'Why is Degree Attestation Important?',
      data: `Degree attestation serves several critical purposes:
      Employment Abroad: Many countries require attested educational documents for work visa applications to ensure the authenticity of the applicant's qualifications.
      Higher Education: Universities and educational institutions may require attested documents for admission to academic programs.
      Migration and Permanent Residency: For immigration purposes, attested documents may be mandatory to validate educational credentials.
      Global Recognition: Attested degrees hold international recognition and credibility, enhancing opportunities for career growth on a global scale.`,
    },
    {
      heading: 'Seeking Professional Assistance:',
      data: `The degree attestation process can be complex and time-consuming. Seeking the assistance of professional attestation services or following the guidelines provided by the respective embassies and consulates can help simplify the process and ensure compliance with all requirements.`,
    },
    {
      heading: 'Embark on a Verified Academic Journey',
      data: `Degree attestation is a vital step to ensure the validity of your educational credentials across borders. Whether you are pursuing higher education, career advancement, or migration, proper attestation will pave the way for a successful and authentic academic journey.`,
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
  
  
  
  
  