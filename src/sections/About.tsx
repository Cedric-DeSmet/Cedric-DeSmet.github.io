import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";
import bookCover from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CSS3Icon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";

const toolboxItems = [
  { title: "Python", emoji: "🐍" },
  { title: "Java", emoji: "☕" },
  { title: "CSS3", iconType: CSS3Icon },
  { title: "Tailwind", emoji: "🌊" },
  { title: "React", iconType: ReactIcon },
  { title: "C++", emoji: "⚡" },
  { title: "GitHub", iconType: GithubIcon },
];

const hobbies = [
  { title: "Fishing", emoji: "🎣" },
  { title: "Cybersecurity", emoji: "🔐" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Hiking", emoji: "🥾" },
  { title: "Music", emoji: "🎸" },
  { title: "Fitness", emoji: "🏋️" },
  { title: "Reading", emoji: "📚" },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* My Reads */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 flex flex-col">
              <CardHeader
                title="My Reads"
                description="Meditations by Marcus Aurelius — timeless wisdom on stoicism and resilience."
                className="px-6 pt-6"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0 flex-1 flex items-end">
                <Image src={bookCover} alt="Book cover" />
              </div>
            </Card>

            {/* My Toolbox */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 overflow-hidden">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="px-6 pt-6"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Beyond the Code */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 flex flex-col">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 pt-6"
              />
              <div className="flex flex-wrap gap-2 px-6 mt-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-3 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                  >
                    <span className="font-medium text-gray-950 text-sm">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 relative">
              <Image
                src={mapImage}
                alt="Map showing my location"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center shadow-lg shadow-emerald-300/30">
                  <Image
                    src={smileMemoji}
                    alt="Smiling memoji of Cedric"
                    className="size-16"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
