
//Team two
import teamImg1 from '../../assets/images/team/team-1-1.png';
import teamImg2 from '../../assets/images/team/team-1-2.png';
import teamImg3 from '../../assets/images/team/team-1-3.png';
import teamImg4 from '../../assets/images/team/team-1-4.png';
import type { TeamMember } from './teamType';
import teamPageImg1 from "../../assets/images/team/dilna.png";
import teamPageImg2 from "../../assets/images/team/abhinand.png";
import teamPageImg3 from "../../assets/images/team/asna.png";
import teamPageImg4 from "../../assets/images/team/farsha.jpg";
import teamPageImg5 from "../../assets/images/team/hanna.png";
import teamPageImg6 from "../../assets/images/team/nirmal.png";
import teamPageImg7 from "../../assets/images/team/raghi.png";
import teamPageImg8 from "../../assets/images/team/sharon.png";
import teamPageImg9 from "../../assets/images/team/deepthi.png"
import teamPageImg10 from "../../assets/images/team/rahuldev.png";
import teamPageImg11 from "../../assets/images/team/meenakshy.png";
import teamPageImg12 from "../../assets/images/team/hiba.png";
import teamPageImg13 from "../../assets/images/team/rohan.png";
import teamPageImg14 from "../../assets/images/team/rizvan.png";
import teamPageImg15 from "../../assets/images/team/ashvathi.png";
import teamPageImg16 from "../../assets/images/team/premjith.png";
import teamPageImg17 from "../../assets/images/team/vyshaq.png";
import teamPageImg18 from "../../assets/images/team/SHIBI.png";
export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Jessica Miller',
        position: 'Chief Marketing Officer',
        image: teamImg1,
        link: '/team-details',
    },
    {
        id: 2,
        name: 'David Thompson',
        position: 'Senior Software Engineer',
        image: teamImg2,
        link: '/team-details',
    },
    {
        id: 3,
        name: 'Emily Carter',
        position: 'Chief Marketing Officer',
        image: teamImg3,
        link: '/team-details',
    },
    {
        id: 4,
        name: 'Michael Johnson',
        position: 'Sr. Financial Analyst',
        image: teamImg4,
        link: '/team-details',
    },
    // Duplicate for looping display
    {
        id: 5,
        name: 'Jessica Miller',
        position: 'Chief Marketing Officer',
        image: teamImg1,
        link: '/team-details',
    },
    {
        id: 6,
        name: 'David Thompson',
        position: 'Senior Software Engineer',
        image: teamImg2,
        link: '/team-details',
    },
    {
        id: 7,
        name: 'Emily Carter',
        position: 'Chief Marketing Officer',
        image: teamImg3,
        link: '/team-details',
    },
    {
        id: 8,
        name: 'Michael Johnson',
        position: 'Sr. Financial Analyst',
        image: teamImg4,
        link: '/team-details',
    },
];

//Team Page



export const teamMembersTeamPage: TeamMember[] = [
    { id: 1, name: "Dilna V M", position: "Technical Lead", image: teamPageImg1, link: "" },
    { id: 2, name: "Abhinand N", position: "Assistant Manager", image: teamPageImg2, link: "" },
    { id: 3, name: "Aysha Hasna", position: "Assistant Manager", image: teamPageImg3, link: "" },
    { id: 4, name: "Farsha", position: "Office Administrator", image: teamPageImg4, link: "" },
    { id: 5, name: "Amina Hanna", position: "Full Stack Developer", image: teamPageImg5, link: "" },
    { id: 6, name: "Nirmal Deep K J", position: "Video Editor", image: teamPageImg6, link: "" },
    { id: 7, name: "Rakhi A K", position: "Content Writer", image: teamPageImg7, link: "" },
    { id: 8, name: "Sharoon A V", position: "Digital Marketing Executive", image: teamPageImg8, link: "" },
    { id: 9, name: "Deepthi K", position: "Bussiness Development Manager", image: teamPageImg9, link: "" },
    { id: 10, name: "Rahul K", position: "Senior Developer", image: teamPageImg10, link: "" },
    { id: 11, name: "Meenakshy V P", position: "Mobile App Developer", image: teamPageImg11, link: "" },
    { id: 12, name: "Fathima Hiba V", position: "React Developer", image: teamPageImg12, link: "" },
    { id: 13, name: "Rohan J Varghese", position: "Frontend Developer", image: teamPageImg13, link: "" },
    { id: 14, name: "Rizvan", position: "Video Editor", image: teamPageImg14, link: "" },
    { id: 15, name: "Aswathy ramesh", position: "Video Editor", image: teamPageImg15, link: "" },
    { id: 16, name: "Premjith A", position: "Video Editor", image: teamPageImg16, link: "" },
    { id: 17, name: "Vyshak", position: "Graphic Designer", image: teamPageImg17, link: "" },
    { id: 18, name: "Shibil E K", position: "Graphic Designer", image: teamPageImg18, link: "" },
];
