"use client"

import TimelineComponent from "@/app/shared-components/TimelineComponent";
import MultiTimelineComponent from "@/app/shared-components/MultiTimelineComponent";
import TechStackComponent from "@/app/shared-components/TechStackComponent";
import { techStackData } from "@/data/techStackData";
import { useTranslations } from "next-intl";
import React from "react";
import LanguageComponent from "@/app/shared-components/LanguageComponent";

const ResumeDetails = () => {
    const t = useTranslations("Details")
    const l = useTranslations("Location");

    return (
        <div className="flex flex-col gap-y-5">
            {/* Intro Section */}
            <div className="intro flex flex-row justify-between">
                <div className="personal-info">
                    <h1 className="text-5xl font-bold mb-4 text-[#0173ef]">{t('name')}</h1>
                    <h3 className="text-2xl font-bold mb-4 text-[#FF6600]">{t('occupation')}</h3>

                    <div className="contact-info flex flex-row gap-4 mb-5">
                        <div className="phone flex flex-row items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.971 18.33C21.971 18.69 21.891 19.06 21.721 19.42C21.551 19.78 21.331 20.12 21.041 20.44C20.551 20.98 20.011 21.37 19.401 21.62C18.801 21.87 18.151 22 17.451 22C16.431 22 15.341 21.76 14.191 21.27C13.041 20.78 11.891 20.12 10.751 19.29C9.60098 18.45 8.51098 17.52 7.47098 16.49C6.44098 15.45 5.51098 14.36 4.68098 13.22C3.86098 12.08 3.20098 10.94 2.72098 9.81C2.24098 8.67 2.00098 7.58 2.00098 6.54C2.00098 5.86 2.12098 5.21 2.36098 4.61C2.60098 4 2.98098 3.44 3.51098 2.94C4.15098 2.31 4.85098 2 5.59098 2C5.87098 2 6.15098 2.06 6.40098 2.18C6.66098 2.3 6.89098 2.48 7.07098 2.74L9.39098 6.01C9.57098 6.26 9.70098 6.49 9.79098 6.71C9.88098 6.92 9.93098 7.13 9.93098 7.32C9.93098 7.56 9.86098 7.8 9.72098 8.03C9.59098 8.26 9.40098 8.5 9.16098 8.74L8.40098 9.53C8.29098 9.64 8.24098 9.77 8.24098 9.93C8.24098 10.01 8.25098 10.08 8.27098 10.16C8.30098 10.24 8.33098 10.3 8.35098 10.36C8.53098 10.69 8.84098 11.12 9.28098 11.64C9.73098 12.16 10.211 12.69 10.731 13.22C11.271 13.75 11.791 14.24 12.321 14.69C12.841 15.13 13.271 15.43 13.611 15.61C13.661 15.63 13.721 15.66 13.791 15.69C13.871 15.72 13.951 15.73 14.041 15.73C14.211 15.73 14.341 15.67 14.451 15.56L15.211 14.81C15.461 14.56 15.701 14.37 15.931 14.25C16.161 14.11 16.391 14.04 16.641 14.04C16.831 14.04 17.031 14.08 17.251 14.17C17.471 14.26 17.701 14.39 17.951 14.56L21.261 16.91C21.521 17.09 21.701 17.3 21.811 17.55C21.911 17.8 21.971 18.05 21.971 18.33Z"
                                        stroke="#008cf6" strokeWidth="1.5" />
                                </svg>
                            </span>
                            <h4 className="text-base font-normal">{process.env.NEXT_PUBLIC_PHONE_NUMBER}</h4>
                        </div>
                        <div className="email flex flex-row items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#008cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#008cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <h4 className="text-base font-normal">{process.env.NEXT_PUBLIC_EMAIL}</h4>
                        </div>
                        <div className="location flex flex-row items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="#008cf6" strokeWidth="1.5" />
                                    <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#008cf6" strokeWidth="1.5" />
                                </svg>
                            </span>
                            <h4 className="text-base font-normal">{process.env.NEXT_PUBLIC_LOCATION}</h4>
                        </div>
                    </div>
                    <div className="socials flex flex-row gap-7">
                        <div className="linked-in flex flex-row items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_17_32)">
                                        <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55781 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="#0A66C2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_32">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-base font-normal hover:text-blue-800">{process.env.NEXT_PUBLIC_LINKEDIN_URL}</a>
                        </div>
                        <div className="github flex flex-row items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                                    <g clipPath="url(#clip0_910_44)">
                                        <path d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z" fill="#008cf6" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_910_44">
                                            <rect width="48" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-base font-normal hover:text-blue-800">{process.env.NEXT_PUBLIC_GITHUB_URL}</a>
                        </div>
                    </div>
                </div>
                <div className="profile-img">
                    <img src="/profile-pic.jpg" alt="Profile" className="w-42 h-42 rounded-full object-cover object-top border-1 shadow-lg" />
                </div>
            </div>

            {/* Summary Section */}
            <div className="summary">
                <h3 className="text-2xl font-bold text-[#0173ef] mb-4">{t('summary')}</h3>
                <p className="text-base font-normal leading-relaxed tracking-wide">
                    A fresh graduate who is passionate about developing innovative web solutions. I have hands-on experience in front-end development using
                    technologies like Angular, NextJS, and Tailwind CSS. Enthusiastic about working in dynamic environments that prioritize creativity and efficient user
                    experience, I am eager to contribute to projects that leverage modern web frameworks, to enhance and optimize web applications.
                </p>
            </div>

            {/* Work Experience Section */}
            <MultiTimelineComponent
                title={t('experience')}
                items={[
                    {
                        timePeriod: "10/2024 - 05/2025",
                        location: l('ho-chi-minh'),
                        detailTitle: "Fresher Developer",
                        detailSubtitle: "WEALLNET",
                        detailDescription: "A platform for streaming trending videos, movies and managing campaigns. Enterprises can post campaigns, hire KOLs, and track progress. Celebrities use a virtual wallet to manage earnings and monitor campaigns they've joined. Secure authentication and role-based access are included.",
                        bulletPoints: [
                            "Constructed components & pages, implemented business logic of components using Next.js & TypeScript.",
                            "Styled and added responsive designs and animation using Tailwind CSS, CSS, Lottie.",
                            "Handled and made API calls (POST, GET) using axios.",
                            "Integrated OAuth authorization via next-auth, Elasticsearch & PSP in API.",
                            "Modified business logic or developed new API endpoints (MVC architecture) harnessing GO & GIN.",
                            "Maniplulated database using GORM.",
                            "Merged code changes using GitLab and deployed using Kubernetes for version control and collaboration.",
                            "Followed Scrum methodology with 2-week sprint of planning, weekly stand-ups and end-of-sprint product demos.",
                            "Documented daily agendas and code logic on Confluence."
                        ]
                    },
                    {
                        timePeriod: "05/2023 - 09/2023",
                        location: l('ho-chi-minh'),
                        detailTitle: "Full-stack Web Intern",
                        detailSubtitle: "ESEC",
                        detailDescription: "Provide solutions or services to enhance energy efficiency, manage environmental impact, and support sustainable practices, focusing on clean energy technologies or systems to reduce ecological footprints in industrial field.",
                        bulletPoints: [
                            "An internal data monitoring website displaying data in form of chart & table, taken from an external device.",
                            "Designed website UI & simple database scheme.",
                            "Constructed UI using Angular framework & Angular Material, pipes for data conversion.",
                            "Implemented RESTful architecture & HttpClient for data retrieval.",
                            "Constructed a simple server using MVC model using Express.js & JWT.",
                            "Applied Socket.io for a bi-directional, real-time data communication between client & server & external device.",
                            "Applied simple SQL queries for data retrieval & update."
                        ]
                    }
                ]}
            />

            {/* Education Section */}
            <TimelineComponent
                title={t('education')}
                timePeriod={"09/2018 - 11/2024"}
                location={l('binh-duong')}
                detailTitle={t('computer-science')}
                detailSubtitle={t('vietnamese-german-university')}
                detailDescription={"GPA: 7.5/10, Specialized in Software Engineering, focusing on web development and software design principles."}
            />

            {/*Projects Section*/}
            <MultiTimelineComponent
                title={t('projects')}
                items={[
                    {
                        timePeriod: "07/2025 - Present",
                        detailTitle: "CV Builder",
                        detailSubtitle: "Personal Project",
                        detailDescription: "A web application for creating and managing CVs, allowing users to input personal information, education, work experience, and skills.",
                        bulletPoints: [
                            "Developed a user-friendly interface using Next.js and TypeScript.",
                            "Implemented responsive design with Tailwind CSS.",
                            "Created a dynamic form for CV input, allowing users to add/edit sections, export CV.",
                            "Integrated a PDF generation feature to export CVs in PDF format.",
                            // "Utilized local storage for saving user data and state management."
                        ]
                    },
                    {
                        timePeriod: "04/2024 - 07/2024",
                        detailTitle: "Internship Management System (Front-end)",
                        detailSubtitle: "Thesis Project",
                        detailDescription: "An internal management web application for streamlining internship process: enrollment eligibility & requirements, document submission, document",
                        bulletPoints: [
                            "Enhance the appearance, aesthetic of the website.",
                            "Transformed design into code harnessing Angular framework and Angular Material, Tailwind CSS for styling (no responsive deisgn).",
                            "Re-route web application & dynamic header based on user role & name.",
                            "DOM manipulation based on Structural Directives (ngFor, ngIf, ngTemplate, ngContainer).",
                            "File upload using NgRx",
                            "Collapsible sidebar"
                        ]
                    },
                    {
                        timePeriod: "11/2021 - 02/2022",
                        detailTitle: "Movie Recommendation",
                        detailDescription: "A school project for learning data cleaning.",
                        bulletPoints: [
                            "Collected data (movie name, catagory, comment, rating, duration, genre, actors/actresses, country,...).",
                            "Preprocess data (removed empty fields, summarized, found means & medians,...).",
                            "Applied KNN & Decision Tree model to produce a Movie Recommendation feature based on movie duration."
                        ]
                    },
                    {
                        timePeriod: "09/2020 - 11/2020",
                        detailTitle: "Online Survey Web Application",
                        detailDescription: "A school project for learning web development, which is an online survey form",
                        bulletPoints: [
                            "Web styling & components layout.",
                        ]
                    }
                ]}
            />            {/*Techstack Section*/}
            <TechStackComponent
                title={t('techstack')}
                technologies={techStackData}
                layout="categorized"
            />

            <LanguageComponent
                title={t('lang')}
                items={[
                    {
                        name: t('vietnamese'),
                        proficiency: "Native",
                        languageColor: "text-violet-600",
                        firstColor: "from-violet-500",
                        secondColor: "to-violet-600",
                        width: "w-full"
                    },
                    {
                        name: t('english'),
                        proficiency: "C1",
                        languageColor: "text-green-600",
                        firstColor: "from-green-500",
                        secondColor: "to-green-600",
                        width: "w-5/6"
                    },
                    {
                        name: t('german'),
                        proficiency: "A2",
                        languageColor: "text-orange-600",
                        firstColor: "from-orange-500",
                        secondColor: "to-orange-600",
                        width: "w-2/7"
                    }
                ]}
            />
        </div>
    )
}

export default ResumeDetails;