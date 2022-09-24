import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebpageCurriculumProps {}

const StyledWebpageCurriculum = styled.div`
  color: pink;
`;

export function WebpageCurriculum(props: WebpageCurriculumProps) {
  return (
    <StyledWebpageCurriculum>
      <h1>Welcome to WebpageCurriculum!</h1>
    </StyledWebpageCurriculum>
  );
}

export default WebpageCurriculum;
