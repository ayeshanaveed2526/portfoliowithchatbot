
// Dark Mode Toggle with icon
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icon = toggleBtn.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(el => observer.observe(el));
});

// Chatbot Functions
function openChatbot() {
    const modal = document.getElementById('chatbotModal');
    modal.classList.add('active');
    document.getElementById('userInput').focus();
}

function closeChatbot() {
    const modal = document.getElementById('chatbotModal');
    modal.classList.remove('active');
}

// Close chatbot with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('chatbotModal');
        if (modal && modal.classList.contains('active')) {
            closeChatbot();
        }
    }
});

// Ayesha's Comprehensive Information
const MY_INFO = `
=== PROFILE ===
Name: Ayesha Naveed
Title: Computer Science Student & Frontend Developer
Location: Lahore, Pakistan
Email: ayeshanaveed2526@gmail.com
Portfolio: https://ayeshanaveed-portfolio.com
LinkedIn: https://www.linkedin.com/in/ayesha-naveed25
GitHub: https://github.com/ayeshanaveed2526

=== EDUCATION ===
• Bachelor of Computer Science – NCBA&E (National College of Business Administration & Economics)
  - Currently in 6th Semester
  - CGPA: 3.74/4.00
  - Focus: Web Development, Artificial Intelligence, Software Engineering
  
• Intermediate (FSc Pre-Medical) – Superior College
  - Score: 817/1100 marks
  - Successfully transitioned from Pre-Medical to Computer Science
  
• Matric (Science) – Ali Foundation Girls High School
  - Score: 1085/1100 marks
  - Outstanding academic performance
  
• Academy: KIPS Academy for both Matric and Intermediate preparation

=== WORK EXPERIENCE ===
• Web Development Intern at Codieze (Feb 2025 – May 2025)
  - Worked extensively on frontend development using HTML, CSS, JavaScript, and React.js
  - Built responsive UI components for an e-medical application
  - Collaborated with development team on real-world projects
  - Gained hands-on experience in modern web development practices
  - Developed skills in React.js, component-based architecture, and state management

=== PROJECTS ===

1. Upwork Jobs Discord Bot
   - Description: Automated Discord bot that fetches and posts Upwork job listings in real-time
   - Technologies: Python, Discord API, Upwork API, Web Scraping
   - Features: Automated job filtering, real-time notifications, customizable search parameters
   - GitHub: https://github.com/ayeshanaveed2526/Upwork-jobs-discord-bot.git
   - Demo Video: https://www.loom.com/share/3a37beb46c31464093a3f669bf89e118
   - Impact: Helps freelancers discover job opportunities instantly

2. Smart AI Chatbox
   - Description: Responsive AI-powered chatbot with Google AI Studio API integration
   - Technologies: HTML, CSS, JavaScript, Google AI Studio API, Open Router API
   - Features: Natural language processing, context-aware responses, modern UI/UX
   - Capabilities: Answers questions, provides information, interactive conversations
   - Currently integrated into personal portfolio

3. Reszo Restaurant App
   - Description: Full-featured restaurant web application
   - Technologies: React.js, Modern JavaScript, CSS3, Responsive Design
   - Features: Menu display, online ordering system, responsive layout
   - Live Demo: https://reszo-restaurant.vercel.app
   - Highlights: Clean UI, smooth animations, mobile-friendly design

4. TextUtils React App
   - Description: Text manipulation and analysis application built with React
   - Technologies: React.js, JavaScript, Bootstrap/CSS
   - Features: Text conversion, word counter, character counter, text formatting
   - Live Demo: https://my-react-app-two-sandy.vercel.app/
   - Use Cases: Text editing, formatting, analysis tools

5. Simulation of Interrupts (OS Course Project)
   - Description: Operating System project simulating interrupt handling mechanisms
   - Technologies: C++, Operating Systems concepts
   - GitHub: https://github.com/ayeshanaveed2526/simulationofinterrupts.git
   - Concepts: Process scheduling, interrupt handling, system calls
   - Academic Excellence: University-level Computer Science project

Additional University Projects:
- Web Engineering projects
- Human-Computer Interaction (HCI) applications
- Computer Graphics visualizations
- Database Management Systems

=== TECHNICAL SKILLS ===

Programming Languages:
- JavaScript (ES6+)
- Python
- C++
- HTML5
- CSS3

Frontend Development:
- React.js (Component lifecycle, Hooks, State management)
- Responsive Web Design
- Modern CSS (Flexbox, Grid, Animations)
- UI/UX Design principles
- Cross-browser compatibility

Tools & Technologies:
- Git & GitHub (Version control)
- Firebase (Backend services)
- Figma (UI/UX Design)
- API Integration (RESTful APIs)
- Discord Bot Development
- Vercel (Deployment)

Core Competencies:
- Problem Solving & Algorithm Design
- Web Development (Frontend)
- Bot Development & Automation
- Basic AI & Machine Learning concepts
- Responsive Design
- User Interface Design
- Project Management

=== HOBBIES & INTERESTS ===

Calligraphy & Art:
- 8 years of experience in calligraphy painting
- Creates customized art pieces and gift products
- Successfully sold artwork and received paid commissions
- Specialty: Islamic calligraphy, modern lettering, decorative pieces

Entrepreneurship:
- Running a small online gift and art business
- Creates and sells customized Eid baskets and gift items
- Manages social media presence for business
- Experience in product photography, marketing, and customer service

Technology & Learning:
- Passionate about Artificial Intelligence and Machine Learning
- Actively learning emerging technologies
- Follows tech trends and industry developments
- Participates in online coding communities

=== CAREER GOALS & ASPIRATIONS ===

Short-term Goals:
- Become financially independent before graduation
- Master React.js and modern frontend frameworks
- Expand knowledge in AI and Machine Learning
- Grow online art and gift business
- Contribute to open-source projects

Long-term Goals:
- Become a professional AI Engineer
- Work at top technology companies in Pakistan (e.g., Systems Limited, NetSol, Arbisoft)
- Potentially work internationally
- Build innovative AI-powered applications
- Mentor aspiring developers, especially women in tech

Personal Mission:
- Bridge the gap between creativity (art) and technology (coding)
- Demonstrate that career transitions are possible (Pre-Medical to CS)
- Inspire other women to pursue careers in technology
- Achieve work-life balance while excelling in both fields

=== ACHIEVEMENTS & HIGHLIGHTS ===

🎓 Academic:
- Maintained CGPA of 3.74 despite transitioning from Pre-Medical to Computer Science
- Excellent performance in Matric (1085/1100) and Intermediate (817/1100)
- Successfully completed multiple complex university projects
- Strong foundation in both sciences and computer science

💼 Professional:
- Completed 3-month web development internship at Codieze
- Built and deployed multiple live web applications
- Created functional Discord bot with API integrations
- Gained real-world development experience

🎨 Entrepreneurial:
- Sold calligraphy artwork and received paid orders
- Established small business for customized gifts and Eid baskets
- Managed end-to-end business operations
- Balanced entrepreneurship with academics

💡 Personal:
- Successfully transitioned career path from Medical to Computer Science
- Mastered multiple programming languages and frameworks
- Combined artistic creativity with technical skills
- Built strong online presence and personal brand

=== PERSONALITY & WORK STYLE ===

Strengths:
- Detail-oriented and meticulous (reflected in both coding and calligraphy)
- Quick learner (mastered new field after career transition)
- Creative problem solver (combines artistic and technical thinking)
- Self-motivated and entrepreneurial
- Strong time management (balances studies, work, and business)

Work Ethic:
- Motivated and dedicated to continuous learning
- Comfortable with both independent and team work
- Adaptable to new technologies and methodologies
- Results-driven with focus on quality
- Excellent at meeting deadlines and managing multiple projects

=== FUN FACTS & UNIQUE TRAITS ===

✨ Made a bold career switch from Pre-Medical to Computer Science and excelled
✨ Combines two seemingly different passions: coding and calligraphy
✨ Started earning through art while still in university
✨ Built a Discord bot that helps freelancers find jobs
✨ Designed and deployed multiple live web applications
✨ Maintains high academic performance (3.74 CGPA) while running a business
✨ Located in Lahore, the cultural heart of Pakistan
✨ Passionate about using technology to solve real-world problems
✨ Believes in continuous learning and skill development
✨ Aspires to be a role model for women in technology

=== CONTACT & SOCIAL MEDIA ===

Email: ayeshanaveed2526@gmail.com
GitHub: https://github.com/ayeshanaveed2526
LinkedIn: https://www.linkedin.com/in/ayesha-naveed25

Open to:
- Internship opportunities
- Freelance projects
- Collaboration on interesting projects
- Networking with professionals
- Learning opportunities
- Custom art commissions
`;

// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const typingIndicator = document.getElementById('typingIndicator');
    const apiKeyInput = document.getElementById('apiKey');
    const apiKeyStatus = document.getElementById('apiKeyStatus');

    // Enable input immediately since API key is pre-filled
    if (apiKeyInput && apiKeyInput.value.trim().length > 0) {
        userInput.disabled = false;
        sendButton.disabled = false;
        apiKeyStatus.style.display = 'block';
    }

    // Handle API key changes
    if (apiKeyInput) {
        apiKeyInput.addEventListener('input', function() {
            const hasApiKey = this.value.trim().length > 0;
            userInput.disabled = !hasApiKey;
            sendButton.disabled = !hasApiKey;
            
            if (hasApiKey) {
                userInput.focus();
                apiKeyStatus.style.display = 'block';
            } else {
                apiKeyStatus.style.display = 'none';
            }
        });

        // Save API key to localStorage when changed
        apiKeyInput.addEventListener('change', function() {
            if (this.value.trim()) {
                localStorage.setItem('openrouter_api_key', this.value.trim());
            }
        });
    }

    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (isUser) {
            contentDiv.textContent = text;
        } else {
            // Format bot messages for better readability
            contentDiv.innerHTML = formatBotMessage(text);
        }
        
        const timestampDiv = document.createElement('div');
        timestampDiv.className = 'timestamp';
        const now = new Date();
        timestampDiv.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timestampDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom smoothly
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
    }

    function formatBotMessage(text) {
        // Convert markdown-style formatting to HTML
        let formatted = text
            // Convert **bold** to <strong>
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Convert URLs to clickable links
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
            // Convert bullet points (various unicode bullets)
            .replace(/^[\u2022\u2023\u25E6\u2043\u2219\u2014\-]\s(.+)$/gm, '<li>$1</li>')
            // Convert numbered lists
            .replace(/^\d+\.\s(.+)$/gm, '<li>$1</li>')
            // Convert headers (## or ###)
            .replace(/^###\s(.+)$/gm, '<strong>$1</strong><br>')
            .replace(/^##\s(.+)$/gm, '<strong>$1</strong><br>')
            // Convert line breaks
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>');

        // Wrap consecutive <li> tags in <ul>
        formatted = formatted.replace(/(<li>.*?<\/li>(?:\s*<br>)?)+/gs, '<ul>$&</ul>');
        
        // Clean up extra <br> tags inside lists
        formatted = formatted.replace(/<ul>(.*?)<\/ul>/gs, (match) => {
            return match.replace(/<br>/g, '');
        });

        // Remove excessive line breaks (more than 2 consecutive)
        formatted = formatted.replace(/(<br>\s*){3,}/g, '<br><br>');

        return formatted;
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        const apiKey = apiKeyInput.value.trim();
        
        if (!message) return;
        
        if (!apiKey) {
            addMessage("⚠️ Please enter your Open Router API key first.", false);
            return;
        }
        
        // Add user message
        addMessage(message, true);
        userInput.value = '';
        
        // Show typing indicator
        typingIndicator.style.display = 'flex';
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
        
        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'HTTP-Referer': window.location.href,
                    'X-Title': 'Ayesha Chatbot'
                },
                body: JSON.stringify({
                    model: 'openai/gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `You are Ayesha Naveed's professional AI assistant embedded in her portfolio website. Your ONLY purpose is to provide detailed, accurate, and enthusiastic information about Ayesha.

RULES:
- ONLY answer questions about Ayesha Naveed
- If asked about anything unrelated to Ayesha, politely redirect: "I'm specifically designed to share information about Ayesha Naveed. Please ask me about her education, projects, skills, experience, or goals!"
- Be professional, friendly, and enthusiastic
- Provide comprehensive answers using the information below
- When mentioning projects, include relevant links when appropriate
- Highlight her achievements and unique qualities
- Be conversational but professional
- Format your responses with proper paragraphs and bullet points for readability
- Use **bold** for emphasis on key terms and achievements

DETAILED INFORMATION ABOUT AYESHA:
${MY_INFO}

When answering:
- Be specific and detailed
- Use examples from the information provided
- Show enthusiasm about her achievements
- If asked about projects, mention the technologies used and provide links
- If asked about skills, categorize them (programming, tools, soft skills)
- If asked about goals, explain both short-term and long-term aspirations
- Highlight her unique journey from Pre-Medical to Computer Science
- Format responses with clear structure: use bullet points for lists, bold for emphasis`
                        },
                        {
                            role: 'user',
                            content: message
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 800
                })
            });
            
            const data = await response.json();
            
            // Hide typing indicator
            typingIndicator.style.display = 'none';
            
            if (data.error) {
                addMessage(`Error: ${data.error.message}`, false);
            } else {
                const botResponse = data.choices[0].message.content;
                addMessage(botResponse, false);
            }
            
        } catch (error) {
            typingIndicator.style.display = 'none';
            addMessage(`Error: ${error.message}. Please check your API key and try again.`, false);
        }
    }

    // Event listeners
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Initial check for API key
    if (apiKeyInput && apiKeyInput.value.trim().length > 0) {
        userInput.disabled = false;
        sendButton.disabled = false;
        apiKeyStatus.style.display = 'block';
    }
});