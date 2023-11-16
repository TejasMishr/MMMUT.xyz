function addNewItem(tabType, title, description, link, buttonText) {

  const listItem = document.createElement('li');
  listItem.classList.add('p-10');


  const titleElement = document.createElement('h6');
  titleElement.innerHTML = `<span>${title}</span>`;
  listItem.appendChild(titleElement);


  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  listItem.appendChild(descriptionElement);


  if (link) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = buttonText;
    buttonElement.classList.add('tab-more-button', 'price-dec', 'hvr-float-shadow', 'bg-info');
    buttonElement.addEventListener('click', () => {
      window.open(link, '_blank');
    });
    listItem.appendChild(buttonElement);
  }


  const tabBlock = document.querySelector(`#${tabType} .tab-block`);


  const previousItem = tabBlock.lastChild;
  if (previousItem) {
    tabBlock.insertBefore(document.createElement('hr'), previousItem.nextSibling);
  }
  document.querySelector('hr').classList.add('hr');


  tabBlock.appendChild(listItem);
}



//Events


let currentIndex = 0;
const eventItems = [

  {
    title: 'Orientation of Codechef MMMUT Chapter Society',
    description: 'Comming Soon..',
    link: 'https://chat.whatsapp.com/KE4dZGIit70HGAQk1c8k2d',
    buttonText: 'Join..'
  },
  
  {
    title: 'RESULT OF ALL SEMESTERS (Connect to Campus Wi-Fi)',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN'
  },
  {
    title:'Student LOGIN Portal: Your Gateway to Academic Resources and Campus Information. Access Your Educational Journey',
    description: 'Student LOGIN Portal',
    link: 'https://registration.mmmut.ac.in/StudentLogin',
    buttonText: 'LOGIN'
  },
  {
    title: 'Register Ragging Complaint',
    description: 'Anti-Ragging',
    link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=1i5z0J-ojUiyneXp583eXH--PWniG4JFlYuBA5ETzWdUN0VENjUzUzZSVkJSVkNQNDIyUUdUQVk4Ny4u',
    buttonText: 'Complaint'
  },
  {
    title: 'Website Access Login Portal ( Faculties )',
    description: 'Only For Faculties',
    link: 'http://www.mmmut.ac.in/admin_stsmmm/adminlogin_mmmec',
    buttonText: 'LOGIN.'
  },
  {
    title: 'RESULT OF ALL SEMESTERS ( Connect With University Wi-fi )',
    description: 'Username:student & Password:student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN.'
  },
  {
    title: 'Sponsored Research Projects ',
    description: 'Funded Projects',
    link: 'http://www.mmmut.ac.in/ViewSponsoredProjects',
    buttonText: 'View..'
  },
  {
    title: 'Training And Placement Website',
    description: 'Website',
    link: 'https://tnpmmmut.tech/',
    buttonText: 'View.'
  },
  {
    title: 'RESULT OF ALL SEMESTERS ( Connect With University Wi-fi )',
    description: 'Username:student & Password:student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'Login.'
  },
  {
    title: 'Stay Linked: Connect with Your Alumni Network for Insights, Opportunities, and Lifelong Connections!',
    description: 'Alumini Portal',
    link: 'https://www.malaviyans.in/',
    buttonText: 'Login.'
  },

  {
    title: 'Stay Linked: Connect with Your Alumni Network for Insights, Opportunities, and Lifelong Connections!',
    description: 'Alumini Portal',
    link: 'https://www.malaviyans.in/',
    buttonText: 'Login.'
  },
  {
    title: 'Training and Placement Cell - Your Bridge to Career Success Begins Here',
    description: 'Training And Placement Website',
    link: 'https://tnpmmmut.tech/',
    buttonText: 'View'
  },
  {
    title: 'Website Access Login Portal',
    description: 'Only For Faculties',
    link: 'http://www.mmmut.ac.in/admin_stsmmm/adminlogin_mmmec',
    buttonText: 'LOGIN.'
  }
];



//NEWS

const newsItems = [
  {
    title: 'Holidays and Academic Calander MMMUT Gorakhpur',
    description: 'Academic Calender',
    link: 'https://www.mmmut.xyz/holidays/holidays.html',
    buttonText: 'View.'
  },
  {
    title: 'Time Table section',
    description: 'Time Table',
    link: './timetable/timetable.html',
    buttonText: 'View.'
  },
  {
    title: 'Previous Year Cutoff (2021 , 2022 , 2023) ',
    description: 'MMMUT Cutoff',
    link: 'http://www.mmmut.xyz/cutoff/cutoff.html',
    buttonText: 'Explore'
  },
  {
    title: 'Fee Structure Of MMMUT (B.tech,BBA,MCA,B-Pharma,MBA,M.tech)',
    description: 'Fee Structure MMMUT',
    link: 'http://www.mmmut.xyz/Fee/feestructure.html',
    buttonText: 'VIEW.'
  },
  {
    title: 'Previous Year Placement Bronchure MMMUT (2021,2022)',
    description: 'Placement Bronchure',
    link: 'https://www.mmmut.xyz/Placement/placement.html',
    buttonText: 'View.'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'LOGIN'
  },
  {
    title: 'Holidays and Academic Calander MMMUT Gorakhpur',
    description: 'Academic Calender',
    link: 'https://www.mmmut.xyz/holidays/holidays.html',
    buttonText: 'View.'
  },
  {
    title: 'RESULT OF ALL SEMESTERS',
    description: 'Username: student & Password: student',
    link: 'http://172.16.1.250:8081/jasperserver/login.html',
    buttonText: 'More..'
  },
  {
    title: 'Previous Year Cutoff (2021 , 2022 , 2023) ',
    description: 'MMMUT Cutoff',
    link: 'http://www.mmmut.xyz/cutoff/cutoff.html',
    buttonText: 'Explore'
  },
  {
    title: 'Fee Structure Of MMMUT (B.tech,BBA,MCA,B-Pharma,MBA,M.tech)',
    description: 'Fee Structure MMMUT',
    link: 'http://www.mmmut.xyz/fee/fee.html',
    buttonText: 'VIEW.'
  },
  {
    title: 'Previous Year Placement Bronchure MMMUT (2021,2022)',
    description: 'Placement Bronchure',
    link: 'https://www.mmmut.xyz/placement/placement.html',
    buttonText: 'View.'
  },

  {
    title: 'Anti-Ragging Duty List',
    description: 'NOTICE',
    link: 'http://www.mmmut.ac.in/News_content/14040news_09182023.pdf',
    buttonText: 'More..'
  },
  {
    title: 'Final Result of written exam for Assistant Professor (Contractual)',
    description: 'on 16th September 2023',
    link: 'http://www.mmmut.ac.in/News_content/00003news_08022023.pdf',
    buttonText: 'More..'
  }
 
];


function displayAllEvents() {
  const tabBlock = document.querySelector('#events .tab-block');
  for (let i = 0; i < eventItems.length; i++) {
    const eventItem = eventItems[i];
    addNewItem('events', eventItem.title, eventItem.description, eventItem.link, eventItem.buttonText);
  }

  if (tabBlock.children.length > 2) {
    tabBlock.removeChild(tabBlock.firstChild);
  }
}

function scrollEventItems() {
  if (currentIndex >= eventItems.length) {
    currentIndex = 0;
  }

  const tabBlock = document.querySelector('#events .tab-block');
  const eventItem = eventItems[currentIndex];
  const newsItem = newsItems[currentIndex];

  addNewItem('events', eventItem.title, eventItem.description, eventItem.link, eventItem.buttonText);
  if (currentIndex < newsItems.length) {
    addNewItem('news', newsItem.title, newsItem.description, newsItem.link, newsItem.buttonText);
  }

  if (tabBlock.children.length > 2) {
    tabBlock.removeChild(tabBlock.firstChild);
  }

  currentIndex++;
}


displayAllEvents();

setTimeout(function() {

  setInterval(scrollEventItems, 2000);
}, 2000); // Adjust the delay and interval as needed


// FORMAT -> addNewItem('Events', 'Event Title', 'Event Description', 'https://example.com', 'Button text');













/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






 function switchCustomTab(tabName) {

  const tabPanels = document.querySelectorAll(".custom-tab-panel");

  tabPanels.forEach(panel => {
    panel.style.display = "none";
  });


  const selectedTab = document.querySelector(`#custom-${tabName}`);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
}

const customTabItems = document.querySelectorAll(".custom-tab-item");
customTabItems.forEach(item => {
  item.addEventListener("click", function() {
   
    const tabName = this.getAttribute("data-custom-tab");

    // Remove 'active' class from all tab items
    customTabItems.forEach(tabItem => {
      tabItem.classList.remove("active");
    });

   
    this.classList.add("active");

   
    switchCustomTab(tabName);
  });
});


switchCustomTab("notes");












// Function to create and add image elements with titles, anchor tags, and a parent div to a specific custom tab
function addImagesToCustomTab(tabName, imageInfo) {
  const customTabBlock = document.querySelector(`#custom-tab-block-${tabName}`);
  
  // Clear existing content
  customTabBlock.innerHTML = "";
  for (const info of imageInfo) {
    const imgParentDiv = document.createElement("div");
    const imgParentDiv2 = document.createElement("div");
    imgParentDiv.classList.add("image-container"); // Add a class for styling
    imgParentDiv2.classList.add("image-container2"); // Add a class for styling

   
    const anchor = document.createElement("a");
    anchor.href = info.link; 
    anchor.target = "_blank"; 
    const img = document.createElement("img");
    img.src = info.src;
    img.alt = "Image";

    
    anchor.appendChild(img);

   
    imgParentDiv.appendChild(anchor);

    const title = document.createElement("div");
    title.textContent = info.title;
    title.classList.add("image-title"); 

    
    imgParentDiv.appendChild(title);

    
    customTabBlock.appendChild(imgParentDiv2);
    imgParentDiv2.appendChild(imgParentDiv);
  }
}


// Adding dynamic images with titles to the "Notes" custom tab
const notesImages = [
  { src: "img/cse.jpg", title: "CSE",link: "notes/note.html?branch=0"},
  { src: "img/IT.jpg", title: "IT",link: "notes/note.html?branch=1" },
  { src: "img/ECE.jpg", title: "ECE" ,link: "notes/note.html?branch=2"},
  { src: "img/IOT.jpg", title: "IOT" ,link: "notes/note.html?branch=13"},
  { src: "img/EE.jpg", title: "EE",link: "notes/note.html?branch=3" },
  { src: "img/CIVIL.jpg", title: "CIVIL" ,link: "notes/note.html?branch=4"},
  { src: "img/mech.jpg", title: "MECH",link: "notes/note.html?branch=5" },
  { src: "img/CHEM.jpg", title: "CHEM" ,link: "notes/note.html?branch=6"},
 
  { src: "img/Bpharma.jpg", title: "BPHARMA",link: "notes/note.html?branch=7" },
  { src: "img/MCA.jpg", title: "MCA",link: "notes/note.html?branch=8" },
  { src: "img/BBA.jpg", title: "BBA",link: "notes/note.html?branch=9" },
  { src: "img/MBA.jpg", title: "MBA" ,link: "notes/note.html?branch=10"},
  { src: "img/MSC.jpg", title: "MSC" ,link: "notes/note.html?branch=11"},
  { src: "img/MTECH.jpg", title: "MTECH" ,link: "notes/note.html?branch=12"},
 
];

// Adding dynamic images with titles to the "PYQs" custom tab
const pyqsImages = [
  { src: "img/btech_pyq.jpg", title: "BTECH",link: "pyq/PYQ.html" },
  { src: "img/mca_pyq.jpg", title: "MCA",link: "MCA/mca.html?branch=0" },
  { src: "img/Bpharma_pyq.jpg", title: "BPHARMA" ,link: "Bpharm/bpharm.html?branch=0"},
  
  { src: "img/bba_pyq.jpg", title: "BBA",link: "BBMBA/BBMB.html" },
  { src: "img/mba_pyq.jpg", title: "MBA",link: "BBMBA/BBMB.html" },
  // { src: "img/mca_pyq.jpg", title: "MCA",link: "notes/note.html?branch=0" },
  { src: "img/mtech_pyq.jpg", title: "MTECH",link: "mtech/mtech.html" },
];

// Adding dynamic images with titles to the "Lectures" custom tab
const lecturesImages = [
  { src: "img/btech_pyq.jpg", title: "BTECH",link: "Lecture/lecture.html" },
  { src: "img/mtech_pyq.jpg", title: "MTECH",link: "Contribute.html" },
  { src: "img/Bpharma_pyq.jpg", title: "BPharm" ,link: "Bpharm/Lecture/lecture.html"},
  { src: "img/mca_pyq.jpg", title: "MCA",link: "MCA/Lecture/lecture.html" },
  { src: "img/bba_pyq.jpg", title: "BBA",link: "Contribute.html" },
  { src: "img/mba_pyq.jpg", title: "MBA",link: "Contribute.html" },
  // { src: "img/mca_pyq.jpg", title: "MCA",link: "Contribute.html" },
  
];

// Adding dynamic images with titles to the "Misc Materials" custom tab
const miscImages = [
  { src: "img/Registration.jpeg", title: "Register" ,link: "https://registration.mmmut.ac.in/"},
  { src: "img/syllabus.jpg", title: "SYLLABUS",link: "syllabus/syllabus.html" },
  { src: "img/Result.jpeg", title: "Result" ,link: "http://172.16.1.250:8081/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2FStudents&reportUnit=%2FStudents%2FResult_of_All_Semesters&standAlone=true"},
  { src: "img/Academic_calender.jpeg", title: "Calender",link: "holidays/holidays.html" },
  { src: "img/Cutoff.jpeg", title: "Cutoff" ,link: "cutoff/cutoff.html"},
  { src: "img/Fee.jpeg", title: "Fee" ,link: "Fee/feestructure.html"},
  { src: "img/Notice.jpeg", title: "Contribute" ,link: "Contribute.html"},
  { src: "img/placement.jpeg", title: "Placement" ,link: "Placement/placement.html"},
  { src: "img/Timetable.jpeg", title: "TimeTable" ,link: "timetable/timetable.html"},
  { src: "img/Alumini.jpeg", title: "Alumini" ,link: "https://www.malaviyans.in/"},
];

// Call the function to add dynamic images with titles and parent divs to the respective custom tabs


addImagesToCustomTab("notes", notesImages);
addImagesToCustomTab("pyqs", pyqsImages);
addImagesToCustomTab("lectures", lecturesImages);
addImagesToCustomTab("misc", miscImages);



 