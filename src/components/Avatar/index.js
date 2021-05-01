import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} alt="avatar" />;
};

export default Avatar;
