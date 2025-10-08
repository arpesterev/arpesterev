import {Locale, useTranslations} from "next-intl";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import {DATA} from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import {ResumeCard} from "@/components/resume-card";
import {Badge} from "@/components/ui/badge";
import {ProjectCard} from "@/components/project-card";
import {HackathonCard} from "@/components/hackathon-card";
import Link from "next/link";
import {routing} from "@/i18n/routing";
import {setRequestLocale} from "next-intl/server";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Navbar from "@/components/navbar";

const BLUR_FADE_DELAY = 0.06;

export async function generateStaticParams() {
    return routing
        .locales
        .map(
            (locale) => ({
                locale: locale,
                params: {
                    locale: locale
                }
            }));
}

type Props = {
    params: { locale: string };
};

export default function Page({params}: Props) {
    const {locale} = params;
    // Enable static rendering
    setRequestLocale(locale as Locale);

    const mainTranslationsSection = useTranslations("Main")

    return (
        <>
            <main className="flex flex-col min-h-[100dvh] space-y-10">
                <section id="hero">
                    <div className="mx-auto w-full max-w-2xl space-y-8">
                        <div className="gap-2 flex justify-between">
                            <div className="flex-col flex flex-1 space-y-1.5">
                                <BlurFadeText
                                    delay={BLUR_FADE_DELAY}
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                    yOffset={8}
                                    text={`${mainTranslationsSection("me")}`}
                                />
                                <BlurFadeText
                                    delay={BLUR_FADE_DELAY}
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                    text={`${mainTranslationsSection("name")} 👋`}
                                />
                                <BlurFadeText
                                    className="max-w-[600px] md:text-xl"
                                    delay={BLUR_FADE_DELAY}
                                    text={mainTranslationsSection("shortDescription")}
                                />
                            </div>
                            <BlurFade delay={BLUR_FADE_DELAY}>
                                <Avatar className="size-28 border">
                                    <AvatarImage alt={""} src={DATA.avatarUrl}/>
                                </Avatar>
                            </BlurFade>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h2 className="text-xl font-bold">{mainTranslationsSection("about")}</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <Markdown
                            className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                            {mainTranslationsSection("description")}
                        </Markdown>
                    </BlurFade>
                </section>
                <section id="work">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <h2 className="text-xl font-bold">{mainTranslationsSection("experience")} 🖥️</h2>
                        </BlurFade>
                        {DATA.work.map((work, id) => (
                            <BlurFade
                                key={work.company}
                                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                            >
                                <ResumeCard
                                    key={mainTranslationsSection(work.company)}
                                    logoUrl={work.logoUrl}
                                    altText={mainTranslationsSection(work.company)}
                                    title={mainTranslationsSection(work.company)}
                                    subtitle={mainTranslationsSection(work.title)}
                                    href={work.href}
                                    period={`${mainTranslationsSection(work.start)} - ${mainTranslationsSection(work.end)}`}
                                    description={mainTranslationsSection(work.description)}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </section>
                <section id="education">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 7}>
                            <h2 className="text-xl font-bold">{mainTranslationsSection("educationSection")} 🎓</h2>
                        </BlurFade>
                        {DATA.education.map((education, id) => (
                            <BlurFade
                                key={mainTranslationsSection(education.school)}
                                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                            >
                                <ResumeCard
                                    key={`school${id}`}
                                    href={education.href}
                                    logoUrl={education.logoUrl}
                                    altText={""}
                                    title={mainTranslationsSection(education.school)}
                                    subtitle={mainTranslationsSection(education.degree)}
                                    period={`${education.start} - ${education.end}`}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </section>
                <section id="skills">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <h2 className="text-xl font-bold">{mainTranslationsSection("skills")}</h2>
                        </BlurFade>
                        <div className="flex flex-wrap gap-1">
                            {DATA.skills.map((skill, id) => (
                                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05 - (id * id * 0.0008 + Math.random() * 0.00009)}>
                                    <Badge key={skill}>{skill}</Badge>
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                        <BlurFade delay={BLUR_FADE_DELAY * 16}>
                            <div className="space-y-3">
                                <div
                                    className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    {mainTranslationsSection("contact")}
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    {mainTranslationsSection("getInTouch")}
                                </h2>
                                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    {mainTranslationsSection("contactDescription")}
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </section>
            </main>
            <Navbar locale={locale}/>
        </>
    );
}