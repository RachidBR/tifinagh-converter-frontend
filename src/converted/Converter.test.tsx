// Imports
import { describe, it, expect, } from 'vitest';
import Converter from './converted/converter';
import { render,screen } from '@testing-library/react'

// Tests
describe('Renders main page correctly', async () => {
    // it('Should render the page correctly', async () => {
    //     expect(true).toBeTruthy();
    // });


    it('should render an input field and a paragraph element', () => {
        // Arrange
        const wrapper = render(<Converter />)
        expect(wrapper).toBeTruthy()
  
    
        // Assert
        expect(screen.getByTestId('latin-to-tifinagh-input')).toBeInTheDocument();
    //   expect(screen.getByText('')).toBeInTheDocument();
      });
});