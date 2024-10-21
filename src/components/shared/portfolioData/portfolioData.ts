export interface Project{
    title: string;
    overviewText: string,     
    developmentKeyWords:string;
    technologyKeyWords:string;
    backgroundText:string;
    url:string;
}

export type ProjectList = Project []; 

const portfolioData:ProjectList = [
    {
        title:'Manage',
        overviewText: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        developmentKeyWords: 'Interaction Design / Front End Development',
        technologyKeyWords: 'HTML / CSS / JS',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        url: 'https://www.linkedin.com/in/danielmartinezduque/',       
    },
    {
        title:'Bookmark',
        overviewText: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        developmentKeyWords: 'Interaction Design / Front End Development',
        technologyKeyWords: 'HTML / CSS / JS',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        url: 'https://www.linkedin.com/in/danielmartinezduque/',       
    },
    {
        title:'Insure',
        overviewText: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        developmentKeyWords: 'Interaction Design / Front End Development',
        technologyKeyWords: 'HTML / CSS / JS',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        url: 'https://www.linkedin.com/in/danielmartinezduque/',       
    },
    {
        title:'Fylo',
        overviewText: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        developmentKeyWords: 'Interaction Design / Front End Development',
        technologyKeyWords: 'HTML / CSS / JS',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        url: 'https://www.linkedin.com/in/danielmartinezduque/',       
    },
]

export default portfolioData;