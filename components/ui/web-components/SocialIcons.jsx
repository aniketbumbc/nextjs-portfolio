import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/aniketbumbc' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/aniket-b-3750051a7/',
  },
  { icon: <FaTwitter />, path: 'https://twitter.com/andyjak78' },
];

const SocialIcons = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target='_blank'
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
