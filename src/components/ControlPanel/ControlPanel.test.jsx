import React from 'react';
import { render, screen } from '@testing-library/react';
import { ControlPanel } from '.';

describe('ControlPanel rendering', () => {
  test('renders ControlPanel component', () => {
    render(<ControlPanel fillingPercentage={0} width={2} height={2} />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Stop')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Slow')).toBeInTheDocument();
    expect(screen.getByText('Moderate')).toBeInTheDocument();
    expect(screen.getByText('Fast')).toBeInTheDocument();
    expect(screen.getByText('Filling percentage:')).toBeInTheDocument();
    expect(screen.getByText('Field width:')).toBeInTheDocument();
    expect(screen.getByText('Field height:')).toBeInTheDocument();
  });
});
