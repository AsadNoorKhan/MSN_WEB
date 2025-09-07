import Profile from "./Profile";
import suleman from "@/assets/Team/Suleman.png";
import rija from "@/assets/Team/Rija.png";
import ashba from "@/assets/Team/Ashba.png";
import daniyal from "@/assets/Team/Daniyal.png";
import haadya from "@/assets/Team/Haadya.png";
import najm from "@/assets/Team/Najm.png";
import laraib from "@/assets/Team/Laraib.png";
const MTeam_Sec = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Management Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        <Profile 
          image={suleman} 
          name="Muhammad Suleman" 
          role="Founder & CEO"
          description="Passionate about mentoring in data science and freelancing."
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          website="https://example.com"
        />

        <Profile 
          image={rija} 
          name="Rija Khan" 
          role="HR Admin"
          description="Expert in employee relations and administrative HR processes."
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          website="https://example.com"
        />

        <Profile 
          image={ashba} 
          name="Ashba Azeem" 
          role="Content Manager"
          description="Specializes in managing and creating engaging digital content."
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          website="https://example.com"
        />
          <Profile 
          image={haadya}
          name="Haadya Khan" 
          role="Content Marketing Member"
          description="Creates and promotes engaging content to boost brand awareness and audience engagement."
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          website="https://example.com"
        />
          <Profile 
          image={daniyal}
          name="Daniyal Ahmed" 
          role="Development Lead"
          description="Proficient in software development and system architecture design."
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          website="https://example.com"
        />
          <Profile 
          image={laraib}
          name="Laraib Ali" 
          role="Strategic Finance Lead"
          description="Guiding students in building successful freelancing careers."
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          website="https://example.com"
        />
          <Profile 
          image={najm}
          name="Najm Ur Rehman" 
          role="Technical Mentor"
          description="Guides learners in mastering technical skills and real-world projects."
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          website="https://example.com"
        />
        
      </div>
    </section>
  );
};

export default MTeam_Sec;
