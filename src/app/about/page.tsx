import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import bkg from "../../../public/assets/about_banner.png";
import zad from "../../../public/assets/insideMedrasa.jpg";
import badr from "../../../public/assets/insideMesjid.jpg";
import badr2 from "../../../public/assets/insideMesjid2.jpg";
import Footer from "@/components/Footer";

function About() {
  return (
    <div className="w-full text-white ">
      <div className="w-full py-10 md:py-0 md:h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover align-middle md:align-top -z-10"
        />
        <div className="h-[82%] mt-12 md:mt-4 lg:mt-0 ml-3 md:ml-16 w-[96%] md:w-1/2 flex flex-col  gap-3 md:gap-2 items-start justify-end md:pb-10">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-4xl font-extralight"
          >
            About
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl md:text-3xl"
          >
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="font-montserrat text-[18px]"
          >
            Learn more about our background, mission, values, and the programs
            we provide.
          </p>
        </div>
      </div>
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black  flex flex-col gap-20 -z-14 py-16">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>
        <div className="relative z-10  flex flex-col gap-10">
          <div className="w-[90%] md:w-[70%] mx-auto mt-10">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="font-bold text-2xl mb-4"
            >
              Who We Are{" "}
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block font-montserrat text-justify"
            >
              Zadul Ma&apos;ad Knowledge and Training Center was founded in the
              year 1433 Hijri, a time marked by a growing awareness of the
              importance of accessible Islamic education in communities around
              the world. The center was established under the insightful
              leadership of Ustaz Ahmed Sheikh Adem, who recognized a
              significant gap in the availability of quality Islamic teachings,
              particularly in the digital age. His vision was to create a
              platform where individuals could easily access knowledge that
              would enhance their understanding of Islam and its teachings.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className=" font-montserrat text-justify"
            >
              <span className="font-bold">Early Initiatives</span> In its
              formative years, the center capitalized on the burgeoning
              popularity of social media and messaging applications. By
              utilizing platforms such as WhatsApp, Telegram, and Facebook,
              Zadul Ma&apos;ad began to share a wealth of educational content,
              including:
            </p>
            <Image
              src={badr}
              alt="history-background"
              priority
              placeholder="blur"
              quality={100}
              className=" w-1/2 md:w-1/3 h-[270px] md:h-1/3 float-right ml-4 mb-2 "
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            />
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className=" font-montserrat text-justify"
            >
              <span className="font-semibold">Audio Messages:</span> Short and
              long recordings covering various Islamic topics, allowing
              individuals to learn at their own pace and convenience.
              <br /> <span className="font-semibold">
                Written Content:
              </span>{" "}
              Articles and posts that addressed fundamental aspects of the
              Qur&apos;an, Hadith, Aqeedah, Menhaj, Fiqh and sira, providing
              clear explanations and insights into Islamic principles. This
              innovative approach enabled the center to reach a broader
              audience, breaking geographical barriers and making knowledge
              accessible to anyone with an internet connection. Over time, the
              center built a robust online community, where members could engage
              in discussions, ask questions, and share their learning
              experiences.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block font-montserrat text-justify mt-5"
            >
              <span className="font-bold">Growth and Expansion </span> As the
              center&apos;s online presence flourished, it became evident that
              there was a strong desire for in-person learning opportunities.
              After seven years of successful digital outreach, Zadul Ma&apos;ad
              expanded its offerings to include physical gatherings. These
              sessions were designed to cater to both men and women, reflecting
              a commitment to inclusivity and community engagement.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block font-montserrat text-justify mt-5"
            >
              <span className="font-bold"> In-Person Gatherings:</span> The new
              structure provided a platform for participants to engage in
              Qur&apos;an memorization, spiritual development, and deeper
              discussions on Islamic teachings. These gatherings fostered a
              sense of community and allowed for more personalized interactions
              between instructors and learners.
              <br />
              <span className="font-bold">
                Diverse Learning Opportunities:
              </span>{" "}
              The center began to offer a variety of programs aimed at different
              age groups and learning levels. This included classes for
              children, youth, and adults, ensuring that everyone had the
              opportunity to deepen their understanding of Islam in a supportive
              environment.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block font-montserrat text-justify mt-5"
            >
              Today, Zadul Ma&apos;ad Qur&apos;an Training Center operates from
              its Furi locations, conducting separate gatherings for men and
              women to honor the diverse needs of its community. The center
              continues to maintain an active presence across various social
              media platforms, ensuring that its educational resources are
              always within reach.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block font-montserrat text-justify mt-5"
            >
              The center&apos;s commitment to its foundational motto,
              &ldquo;Knowledge Comes First,&rdquo; remains steadfast. By
              blending traditional Islamic teachings with modern educational
              methods, Zadul Ma&apos;ad strives to empower individuals, foster
              spiritual growth, and build a knowledgeable community that is
              well-equipped to face the challenges of contemporary life.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block font-montserrat text-justify mt-5"
            >
              Zadul Ma&apos;ad Knowledge and Training Center stands as a
              testament to the power of knowledge and community, continuously
              evolving to meet the needs of its learners while remaining rooted
              in the timeless principles of Islam.
            </p>
          </div>
          <div className=" w-[90%] md:w-[70%] mx-auto ">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="font-bold text-2xl mb-4"
            >
              Vision{" "}
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block  font-montserrat text-justify"
            >
              Zadul Ma&apos;ad Knowledge and Training Center envisions a vibrant
              and enlightened community where knowledge is revered as a
              foundation for personal and collective growth. The center seeks to
              foster an environment where individuals are not only informed
              about Islamic teachings but also empowered to apply this knowledge
              in their daily lives. Key elements of this vision include:
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
              className=" font-montserrat text-justify"
            >
              <span className="font-bold">Holistic Development:</span> The
              center aspires to nurture the intellectual, spiritual, and moral
              dimensions of individuals, helping them to become well-rounded
              members of society who contribute positively to their communities.
            </p>
            <Image
              src={zad}
              alt="history-background"
              priority
              placeholder="blur"
              quality={100}
              className="w-1/2 md:w-1/3 h-[270px] md:h-1/3 float-left mr-4 mt-2 "
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            />
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="font-montserrat text-justify mt-2"
            >
              <span className="font-bold">Empowerment through Knowledge:</span>{" "}
              By prioritizing education, the center aims to empower individuals
              to make informed decisions that align with their faith, thereby
              enhancing their ability to navigate contemporary challenges with
              confidence and wisdom. Cultural Relevance: The vision includes
              bridging traditional Islamic teachings with modern societal needs,
              ensuring that the education provided is relevant and applicable to
              the lives of participants in today&apos;s world.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block  font-montserrat text-justify mt-5"
            >
              <span className="font-bold">Intergenerational Learning:</span> The
              center hopes to create a culture of learning that transcends age
              barriers, encouraging families to engage in educational activities
              together, thus strengthening community bonds and shared values.
            </p>
          </div>
          <div className=" w-[90%] md:w-[70%] mx-auto">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="font-bold text-2xl mb-4"
            >
              Mission{" "}
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block  font-montserrat text-justify"
            >
              The mission of Zadul Ma&apos;ad Knowledge and Training Center is a
              multifaceted commitment to providing high-quality Islamic
              education and fostering a supportive community. The mission can be
              broken down into several core components:
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
              className=" font-montserrat text-justify"
            >
              <span className="font-bold"> Educational Excellence: </span>
              Delivering comprehensive and structured educational programs in
              various Islamic disciplines, including Qur&apos;an memorization,
              Aqeedah, and Fiqh. Employing qualified instructors who are not
              only knowledgeable but also passionate about teaching, ensuring
              that students receive the best possible guidance.
            </p>
            <Image
              src={badr2}
              alt="history-background"
              priority
              placeholder="blur"
              quality={100}
              className="w-1/2 md:w-1/3 h-[270px] md:h-1/3 float-left mr-4 mt-2 "
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            />
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="font-montserrat text-justify mt-2"
            >
              <span className="font-bold">Community Engagement:</span>{" "}
              Organizing in-person gatherings and events that promote
              discussion, collaboration, and mutual support among participants,
              creating a strong sense of belonging. Encouraging community
              involvement through volunteer opportunities, allowing members to
              contribute to the center&apos;s initiatives and outreach efforts.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block  font-montserrat text-justify mt-5"
            >
              <span className="font-bold">Lifelong Learning:</span> Offering
              programs tailored to different age groups and learning levels,
              from children to adults, ensuring that everyone has the
              opportunity to grow in their understanding of Islam. Implementing
              study circles that focus on current issues, encouraging critical
              thinking and active participation in the community.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block  font-montserrat text-justify mt-5"
            >
              <span className="font-bold"> Digital Outreach:</span> Leveraging
              technology to expand access to educational materials through
              social media, online courses, and virtual events, making learning
              accessible to those unable to attend in person. Creating engaging
              and informative content that resonates with diverse audiences,
              fostering a broader interest in Islamic knowledge.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block  font-montserrat text-justify mt-5"
            >
              <span className="font-bold"> Supportive Environment:</span>
              Establishing a welcoming and inclusive atmosphere where
              individuals feel safe to ask questions, express their thoughts,
              and explore their faith without judgment. Providing resources and
              support for personal and spiritual development, helping
              individuals to navigate their unique journeys in faith.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true"
              className="  md:block  font-montserrat text-justify mt-5"
            >
              Through these initiatives, Zadul Ma&apos;ad Knowledge and Training
              Center aims to fulfill its mission of nurturing knowledgeable,
              spiritually aware, and engaged members of the community who are
              equipped to contribute positively to society.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
