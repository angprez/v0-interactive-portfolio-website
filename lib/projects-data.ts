// lib/projects-data.ts

export const projects = [
    {
        id: 1,
        title: "Women's Empowerment Initiative",
        category: ["Marketing", "Events"],
        image: "/images/project-1.jpg",
        video: undefined,
        tags: ["Leadership", "Project Coordination", "Corporate Culture"],
        liveUrl: null,
        githubUrl: null,
        description: "Led a corporate initiative at Grant Thornton to promote equity and enhance internal collaboration.",
        longDescription: "This initiative was designed from the ground up to foster a more inclusive environment for women within Grant Thornton. I was responsible for the complete project lifecycle, from conceptualization and planning with C-level executives to execution and internal communication campaigns. The program included mentorship circles, leadership workshops, and networking events, resulting in a measurable increase in employee engagement and positive feedback on corporate culture.",
        galleryImages: ["/images/project-1.jpg", "/images/project-2.jpg", "/images/project-3.jpg"],
    },
    {
        id: 2,
        title: "AI Telegram Chatbot",
        category: ["Automations", "Others"],
        image: "/images/project-5.jpg",
        video: "/videos/telegram-chatbot.mp4",
        tags: ["AI Chatbot", "Telegram", "n8n", "Gemini AI"],
        liveUrl: null,
        githubUrl: null,
        description: "A Telegram chatbot that can answer everything from 'What's for dinner?' to explaining complex concepts.",
        longDescription: "This is one of my first automations, built using n8n and integrating AI models like Gemini and ChatGPT. It's a Telegram chatbot designed to be a versatile assistant, capable of handling a wide range of queries, from simple daily questions like 'What's for dinner?' to explaining complex differences between concepts.",
        galleryImages: [],
    },
    {
        id: 3,
        title: "Client Database Automation",
        category: ["Automations", "Others"],
        image: "/images/project-3.jpg",
        video: "/videos/database-automation.mp4",
        tags: ["Database Automation", "CRM", "n8n", "Google Contacts"],
        liveUrl: null,
        githubUrl: null,
        description: "An automation that updates client info, sends emails, and syncs with Google Contacts.",
        longDescription: "This automation streamlines client management processes. It monitors a database for changes, automatically updates client information, sends templated follow-up emails, and saves new contact details directly into Google Contacts. The entire workflow was built with n8n to ensure reliable and efficient communication.",
        galleryImages: [],
    },
    {
        id: 4,
        title: "Grant Thornton Paraguay - Social Media Management",
        category: ["Social Media", "Content Creation"],
        image: "/images/portada-gt.webp", // Portada
        video: undefined,
        tags: ["Content Strategy", "Community Management", "B2B Marketing"],
        liveUrl: null,
        githubUrl: null,
        description: "Drove content strategy tailored to the Paraguayan market for a global consulting firm.",
        longDescription: "As the local marketing lead in Paraguay, I drove content strategy and generated ideas tailored to the Paraguayan market. Collaborating with a multinational team, my role was to create culturally relevant content to boost engagement and strengthen the brand's presence in the local B2B landscape.",
        galleryImages: [],
        isInstagramProject: true,
        instagram: {
            username: "grantthornton.py",
            profileImage: "/images/gt-logo.avif",
            description: "Global consulting firm - Paraguay branch",
            instagramUrl: "https://www.instagram.com/grantthornton.py",
            posts: ["/images/gt2.png", "/images/gt3.png", "/images/gt4.png", "/images/gt5.png", "/images/gt6.png", "/images/gt7.png"]
        }
    },
    {
        id: 5,
        title: "WSU Paraguay - Student Organization",
        category: ["Social Media", "Content Creation"],
        image: "/wsu-portada.jpg", // Portada
        video: undefined,
        tags: ["Content Creation", "Community Building", "Higher Education"],
        liveUrl: null,
        githubUrl: null,
        description: "Managed the official Instagram to build a community for Paraguayan Students at WSU.",
        longDescription: "I managed the official Instagram for the Paraguayan Student Association at Wichita State University. My work focused on fostering a strong, supportive community for students abroad through engaging content, event promotion, and consistent communication, effectively making it a central hub for members.",
        galleryImages: [],
        isInstagramProject: true,
        instagram: {
            username: "wsuparaguay",
            profileImage: "/images/PSA logo.png",
            description: "Paraguayan Student Organization at WSU",
            instagramUrl: "https://www.instagram.com/wsuparaguay",
            posts: ["/images/wsu-1.jpg.png", "/images/wsu-2.jpg.png", "/images/wsu-3.jpg.png", "/images/wsu-4.jpg.png", "/images/wsu-5.jpg.png", "/images/wsu-6.jpg.jpg"]
        }
    },
    {
        id: 6,
        title: "Cultivando Oportunidades - Social Project",
        category: ["Content Creation", "Social Media"],
        image: "/co-1.jpg", // Portada
        video: undefined,
        tags: ["Social Impact", "Educational Content", "Volunteering"],
        liveUrl: null,
        githubUrl: null,
        description: "Co-created and managed the social account for a 6-month youth education project.",
        longDescription: "This was a social project I co-created to teach children about environmental care, financial literacy, and leadership. I managed the Instagram account to document our journey, share educational content, and showcase the positive impact on the community, which included building a vegetable garden with the kids.",
        galleryImages: [],
        isInstagramProject: true,
        instagram: {
            username: "cultivando_oportunidades",
            profileImage: "/co-logo.png",
            description: "Youth Social & Educational Project",
            instagramUrl: "https://www.instagram.com/cultivando_oportunidades",
            posts: ["/co-1.jpg", "/co-2.jpg", "/co-3.jpg", "/co-4.jpg", "/co-5.jpg", "/co-6.jpg"]
        }
    },
    {
        id: 7,
        title: "Nambireta Podcast - Arts & Culture",
        category: ["Content Creation", "Social Media"],
        image: "/nam-1.jpg", // Portada
        video: undefined,
        tags: ["Podcast Marketing", "Cultural Promotion", "Youth Project"],
        liveUrl: null,
        githubUrl: null,
        description: "Handled social media for a youth-led podcast, helping it reach #1 in its category.",
        longDescription: "For one year, I volunteered to manage the social media for 'Nambireta,' a podcast about Paraguayan culture. Through strategic content and community engagement, our youth-led team successfully grew our audience, reaching the #1 spot in our category on several platforms and promoting our culture to a wider audience.",
        galleryImages: [],
        isInstagramProject: true,
        instagram: {
            username: "nambireta",
            profileImage: "/nam-logo.png",
            description: "Paraguayan Culture Youth Podcast",
            instagramUrl: "https://www.instagram.com/nambireta",
            posts: ["/nam-1.jpg", "/nam-2.jpg", "/nam-3.jpg", "/nam-4.jpg", "/nam-5.jpg", "/nam-6.jpg"]
        }
    },
    {
        id: 8,
        title: "Fons Agency - Substack Articles",
        category: ["Articles", "Others"],
        image: "/images/project-5.jpg",
        video: undefined,
        tags: ["Writing", "Content Creation", "Marketing Insights", "Others"],
        liveUrl: "https://substack.com/@fonsagency",
        githubUrl: null,
        description: "A collection of articles on marketing, innovation, and professional growth.",
        longDescription: "Fons Agency is my personal Substack publication where I explore topics ranging from data-driven marketing and business innovation to personal and professional development. This space allows me to share deeper insights and connect with a community of like-minded individuals. Below is a selection of my work.",
        galleryImages: [],
    },
    {
        id: 9,
        title: "Event & Community Coordination",
        category: ["Events"],
        image: "/images/project-1.jpg",
        video: undefined,
        tags: ["Event Management", "Community Engagement", "Logistics", "Volunteering"],
        liveUrl: null,
        githubUrl: null,
        description: "A showcase of key events and community initiatives I have planned, coordinated, and executed.",
        longDescription: "Throughout my career, I have been responsible for coordinating a diverse range of events and community-focused projects. From corporate events and educational workshops to volunteer-led initiatives, my role has involved logistics planning, vendor and sponsor liaison, participant communication, and ensuring a positive experience for all. Below are some of the key activities I've had the privilege to lead.",
        galleryImages: [],
    },
];

export const categories = ["All", "Marketing", "Social Media", "Content Creation", "Articles", "Events", "Automations", "Others"];