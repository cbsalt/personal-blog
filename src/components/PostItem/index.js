import React from 'react';

import * as S from './styled';

const PostItem = () => (
  <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      <S.PostItemTag background="#ffb6c1">Post</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>19 de Agosto de 2020 • 2 minutos de leitura</S.PostItemDate>
        <S.PostItemTitle>O fim das vendedoras</S.PostItemTitle>
        <S.PostItemDescription>
          Se a sua reação ao ler o tema desse post foi igual a da Rachel, calma!
          Vou te explicar direitinho.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

export default PostItem;
