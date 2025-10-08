import {Icons} from "@/components/icons";

export const DATA = {
    avatarUrl: "/amcoding.png",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Amcharts 5",
        "antd v3",
        "next-intl",

        "Python",

        "numpy",
        "scipy",
        "numba",
        "opencv",
        "torch",
        "torchvision",

        "Java",
        "Kotlin",
        "Groovy",

        "Spring v5, v6",
        "Spring Boot v2, v3",
        "Spring Native",
        "Spring Data",
        "Spring Cloud",
        "Spring MVC",
        "Spring WebFlux",

        "Maven",
        "Gradle",

        "GraalVM",

        "Postgres",
        "Redis",

        "Docker",
        "Triton Inference Server"
    ],
    navbar: [],
    contact: {
        email: "hello@example.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/arpesterev",
                icon: Icons.github,

                navbar: true,
            },
            Email: {
                name: "Email",
                url: "mailto:artempesterev8@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: "workCompany1",
            href: "https://elfin.tech/",
            location: "workLocation1",
            title: "workTitle1",
            logoUrl: "/elfin.png",
            start: "workStart1",
            end: "workEnd1",
            description: "workDescription1",
        },
        {
            company: "workCompany2",
            href: "https://council.ru/",
            location: "workLocation2",
            title: "workTitle2",
            logoUrl: "/council.png",
            start: "workStart2",
            end: "workEnd2",
            description: "workDescription2",
        }
    ],
    education: [
        {
            school: "educationSchool1",
            href: "https://mgsu.ru/",
            degree: "educationResult1",
            logoUrl: "/mgsulogo.png",
            start: "2020",
            end: "2025",
        },
        {
            school: "educationSchool2",
            href: "https://www.samsung.com/ru/inrussia/school/",
            degree: "educationResult2",
            logoUrl: "/samsungitschoollogo.png",
            start: "2019",
            end: "2020",
        }
    ],
} as const;
