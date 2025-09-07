import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Profile = ({ image, name, role, description, linkedin, twitter, website }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 max-w-xs">
      {/* Avatar */}
      <img 
        src={image} 
        alt={name} 
        className="w-24 h-24 rounded-full object-cover mb-3 shadow-md" 
      />

      {/* Name + Role */}
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">{description}</p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-3 text-gray-700">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-blue-600 transition" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="hover:text-sky-500 transition" />
          </a>
        )}
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FaGlobe size={20} className="hover:text-green-600 transition" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Profile;
