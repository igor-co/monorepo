import { render } from '@testing-library/react';

import WebpageCurriculum from './webpage-curriculum';

describe('WebpageCurriculum', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebpageCurriculum />);
    expect(baseElement).toBeTruthy();
  });
});
