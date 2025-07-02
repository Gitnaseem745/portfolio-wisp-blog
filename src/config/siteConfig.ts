export const siteConfig = {
  name: "Naseem's Portfolio",
  description:
    "A minimal and modern portfolio built with Next.js and TypeScript",
  url: "https://naseem-portfolio.vercel.app",
  ogImage: "https://naseem-portfolio.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  themes: ["light", "dark", "system"],
  currentTheme: "light",
  
  // Section Content
  sections: {
    hero: {
      name: "Naseem Ansari",
      title: "Full Stack Developer, Designer, Entrepreneur",
      description: "I am a full stack developer with a passion for creating beautiful and functional web applications. I have experience in both front-end and back-end development, and I love to design user interfaces that are both intuitive and visually appealing.",
      image: {
        src: "/images/hero-image.jpg",
        alt: "Naseem Ansari - Full Stack Developer",
        width: 330,
        height: 160
      },
      socialLinks: [
        { name: "Dribbble", icon: "Dribbble", href: "https://dribbble.com/" },
        { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/in/" },
        { name: "Twitch", icon: "Twitch", href: "https://www.twitch.tv/" },
        { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/" }
      ],
      cta: {
        text: "Contact Me",
        href: "#contact"
      }
    },
    
    skills: {
      title: "Skills & Technologies",
      description: "Technologies I work with to bring ideas to life",
      categories: [
        {
          name: "Frontend Development",
          skills: [
            "React", "Next.js", "TypeScript", "JavaScript", "HTML5", 
            "CSS3", "Tailwind CSS", "Framer Motion", "Redux", "Vue.js"
          ],
          sliderConfig: {
            width: "180px",
            duration: 40,
            toRight: false,
            pauseOnHover: true
          }
        },
        {
          name: "Backend & Database",
          skills: [
            "Node.js", "Express.js", "Python", "Django", "PostgreSQL",
            "MongoDB", "GraphQL", "REST APIs", "Docker", "AWS"
          ],
          sliderConfig: {
            width: "180px",
            duration: 50,
            toRight: true,
            pauseOnHover: true
          }
        },
        {
          name: "Tools & Software",
          skills: [
            "Git", "GitHub", "VS Code", "Figma", "Photoshop",
            "Webpack", "Vite", "ESLint", "Prettier", "Postman"
          ],
          sliderConfig: {
            width: "180px",
            duration: 45,
            toRight: false,
            pauseOnHover: true
          }
        }
      ]
    },
    
    projects: {
      title: "Featured Projects",
      description: "A collection of projects I've built and contributed to",
      projects: [
        {
          id: 1,
          title: "Web Arcs",
          description: "A modern web application for audio visualization and analysis. Built with React and Web Audio API to create interactive sound experiences.",
          category: "Web Application",
          year: "2025",
          status: "Live",
          technologies: ["React", "TypeScript", "Web Audio API", "Framer Motion", "Tailwind CSS"],
          liveUrl: "https://web-arcs-demo.vercel.app",
          githubUrl: "https://github.com/yourusername/web-arcs",
          image: {
            src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
            alt: "Web Arcs Project - Audio Visualization App",
            width: 500,
            height: 300
          }
        },
        {
          id: 2,
          title: "Spectic Cris",
          description: "A comprehensive project management dashboard with real-time collaboration features. Designed for teams to track progress and manage workflows efficiently.",
          category: "Dashboard",
          year: "2024",
          status: "Live",
          technologies: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Prisma"],
          liveUrl: "https://spectrum-flow.vercel.app",
          githubUrl: "https://github.com/yourusername/spectrum-flow",
          image: {
            src: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8",
            alt: "Spectrum Flow - Project Management Dashboard",
            width: 500,
            height: 300
          }
        },
        {
          id: 3,
          title: "Portfolio Website",
          description: "A minimal and modern portfolio website built with Next.js and TypeScript. Features dark mode, responsive design, and smooth animations. Showcases my work and skills effectively. Dark mode toggle and smooth animations enhance user experience.",
          category: "Portfolio",
          year: "2025",
          status: "Live",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
          liveUrl: "https://your-portfolio.vercel.app",
          githubUrl: "https://github.com/yourusername/portfolio",
          image: {
            src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
            alt: "Portfolio Website - Modern Design",
            width: 500,
            height: 300
          }
        },
        {
          id: 4,
          title: "E-Commerce Platform",
          description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
          category: "E-Commerce",
          year: "2024",
          status: "Live",
          technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Zustand", "Cloudinary"],
          liveUrl: "https://ecommerce-platform-demo.vercel.app",
          githubUrl: "https://github.com/yourusername/ecommerce-platform",
          image: {
            src: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e",
            alt: "E-Commerce Platform - Online Shopping",
            width: 500,
            height: 300
          }
        }
      ]
    },

    experience: {
      title: "Work Experience",
      description: "My professional journey and key accomplishments",
      experiences: [
        {
          id: 1,
          position: "Senior Full Stack Developer",
          company: "TechCorp Solutions",
          location: "San Francisco, CA",
          type: "Full-time",
          startDate: "Jan 2023",
          endDate: "Present",
          description: "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and deployment.",
          achievements: [
            "Improved application performance by 40% through optimization",
            "Led a team of 5 developers on multiple high-priority projects",
            "Implemented CI/CD pipeline reducing deployment time by 60%"
          ],
          technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
        },
        {
          id: 2,
          position: "Full Stack Developer",
          company: "StartupXYZ",
          location: "Remote",
          type: "Full-time",
          startDate: "Mar 2021",
          endDate: "Dec 2022",
          description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.",
          achievements: [
            "Built 3 client applications from scratch using Next.js",
            "Reduced bug reports by 30% through comprehensive testing",
            "Collaborated with designers to improve UI/UX consistency"
          ],
          technologies: ["Next.js", "React", "Python", "Django", "MongoDB"]
        },
        {
          id: 3,
          position: "Frontend Developer",
          company: "Digital Agency Pro",
          location: "New York, NY",
          type: "Full-time",
          startDate: "Jun 2019",
          endDate: "Feb 2021",
          description: "Specialized in creating responsive and interactive web interfaces. Worked closely with clients to understand requirements and deliver pixel-perfect designs.",
          achievements: [
            "Delivered 15+ client projects with 100% satisfaction rate",
            "Improved website loading speed by 50% through optimization",
            "Introduced modern development practices to the team"
          ],
          technologies: ["JavaScript", "HTML5", "CSS3", "Vue.js", "Sass"]
        }
      ]
    },
    
    contact: {
      title: "Get In Touch",
      description: "Have a project in mind? Let's work together to bring your ideas to life.",
      formFields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          icon: "User",
          placeholder: "Your full name",
          required: true,
          validation: {
            required: "Name is required"
          }
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          icon: "Mail",
          placeholder: "your.email@example.com",
          required: true,
          validation: {
            required: "Email is required",
            pattern: "Please enter a valid email"
          }
        },
        {
          name: "subject",
          label: "Subject",
          type: "text",
          icon: "MessageCircle",
          placeholder: "What's this about?",
          required: true,
          validation: {
            required: "Subject is required"
          }
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          icon: "MessageCircle",
          placeholder: "Tell me about your project or idea...",
          required: true,
          rows: 6,
          validation: {
            required: "Message is required",
            minLength: "Message must be at least 10 characters"
          }
        }
      ],
      submitButton: {
        text: "Send Message",
        loadingText: "Sending...",
        icon: "Send"
      },
      messages: {
        success: "Message sent successfully! I'll get back to you soon.",
        error: "Failed to send message. Please try again."
      }
    }
  }
};

export type siteConfig = typeof siteConfig;
